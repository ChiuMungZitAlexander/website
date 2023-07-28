import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

type SEOProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

const SEO = ({ title, description, children }: SEOProps) => {
  const { title: defaultTitle, description: defaultDescription } =
    useSiteMetadata();

  return (
    <>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {children}
    </>
  );
};

export default SEO;
