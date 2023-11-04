import { Client } from "@notionhq/client";
import type {
  PartialPageObjectResponse,
  TitlePropertyItemObjectResponse,
  MultiSelectPropertyItemObjectResponse,
  SelectPropertyItemObjectResponse,
  DatePropertyItemObjectResponse,
  FilesPropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { env } from "env.mjs";

type Property =
  | TitlePropertyItemObjectResponse
  | MultiSelectPropertyItemObjectResponse
  | SelectPropertyItemObjectResponse
  | DatePropertyItemObjectResponse
  | FilesPropertyItemObjectResponse;

type Properties = {
  [key: string]: Property;
};

const Blogs = async ({ params }: { params: { locale: string } }) => {
  const notion = new Client({
    auth: env.NOTION_TOKEN,
    notionVersion: "2022-06-28",
  });

  try {
    const db = await notion.databases.query({
      database_id: env.BLOG_INDEX_ID,
      filter: {
        and: [
          {
            property: "Lang",
            select: {
              equals: params.locale,
            },
          },
        ],
      },
      sorts: [
        {
          direction: "descending",
          property: "Date",
        },
      ],
    });

    console.log(db.results)

    const getPropertyValueByType = (property: Property) => {
      switch (property.type) {
        case "title": {
          return property.title.plain_text;
        }
        case "multi_select": {
          return property.multi_select.map((_select) => _select.name).join(",");
        }
        case "date": {
          return property.date?.start;
        }
        case "files": {
          return (
            property.files?.[0] as {
              file: {
                url: string;
                expiry_time: string;
              };
            }
          ).file.url;
        }
        default:
          "";
      }
    };

    return (
      <div>
        {db.results.map((_result) => (
          <div key={_result.id}>
            {Object.entries(
              (
                _result as PartialPageObjectResponse & {
                  properties: Properties;
                }
              ).properties
            )?.map(([key, property]) => (
              <div key={key}>
                <span>{key}</span>
                <span>{getPropertyValueByType(property)}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return <h1>error</h1>;
  }
};

export default Blogs;
