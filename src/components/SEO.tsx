import { Helmet } from "react-helmet-async";

const SITE_URL = "https://dinoinitiative.com";
const DEFAULT_IMAGE = `${SITE_URL}/__l5e/assets-v1/9ca5686b-fae7-4805-b408-1640dfd2f938/social-card.jpg`;

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const SEO = ({ title, description, path = "/", image = DEFAULT_IMAGE, type = "website", jsonLd }: SEOProps) => {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes("Dino Initiative") ? title : `${title} — Dino Initiative`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
export { SITE_URL };
