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
  lang: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

const SEO = ({ lang, title, description, children }: SEOProps) => {
  const { title: defaultTitle, description: defaultDescription } =
    useSiteMetadata();

  return (
    <>
      <html lang={lang} />
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {children}
    </>
  );
};

export default SEO;
