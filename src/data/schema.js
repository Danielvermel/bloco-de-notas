import { services, site } from "./site.js";

/**
 * Structured data (JSON-LD) shared by every page.
 *
 * Each page publishes one @graph: the business, the website, the page itself
 * and whatever the page is about. The business carries a stable @id, so the
 * page, the services and the articles all point at the same entity instead of
 * restating it. Every fact here comes from `site.js` and is printed on the
 * page: no rating, review count or price is put in the markup.
 *
 * `AggregateRating` is left out on purpose even though the homepage prints
 * the Google rating: Google treats a business rating itself as
 * "self-serving" and ignores it, and the reviews live on Google, not here.
 */

export const ids = {
  business: `${site.url}/#business`,
  website: `${site.url}/#website`,
};

export const business = {
  // A study centre is both: an educational organisation and a local business
  // with an address, a phone number and opening hours.
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": ids.business,
  name: site.name,
  alternateName: site.shortName,
  url: `${site.url}/`,
  description:
    "Centro de estudos em Vila Nova de Gaia com apoio ao estudo e explicações para alunos do 1.º ao 9.º ano (Ensino Básico), em grupos pequenos, com transporte e refeições.",
  logo: { "@type": "ImageObject", url: `${site.url}/img/logo.png` },
  image: site.url + site.ogImage,
  telephone: site.phoneE164,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.locality,
    postalCode: site.postalCode,
    addressCountry: site.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.lat, longitude: site.lng },
  hasMap: site.mapsLink,
  areaServed: { "@type": "City", name: site.locality },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: site.opens,
    closes: site.closes,
  },
  sameAs: [site.instagram, site.facebook, site.reviewsLink],
};

export const website = {
  "@type": "WebSite",
  "@id": ids.website,
  url: `${site.url}/`,
  name: site.name,
  inLanguage: "pt-PT",
  publisher: { "@id": ids.business },
};

/** The page itself. `url` is the canonical URL. */
export const webPage = ({ url, name, description, type = "WebPage", breadcrumb = false, extra = {} }) => ({
  "@type": type,
  "@id": `${url}#webpage`,
  url,
  name,
  description,
  inLanguage: "pt-PT",
  isPartOf: { "@id": ids.website },
  about: { "@id": ids.business },
  ...(breadcrumb ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
  ...extra,
});

/** `trail` is [[name, url], ...], starting at the homepage. */
export const breadcrumbList = (url, trail) => ({
  "@type": "BreadcrumbList",
  "@id": `${url}#breadcrumb`,
  itemListElement: trail.map(([name, item], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item,
  })),
});

/** A service's own page, and the @id its Service node carries everywhere. */
export const serviceUrl = (slug) => `${site.url}/servicos/${slug}`;

/** One Service per card in the homepage's Serviços section, worded as printed. */
export const serviceNode = (s) => ({
  "@type": "Service",
  "@id": `${serviceUrl(s.slug)}#servico`,
  name: s.title,
  description: s.text,
  url: serviceUrl(s.slug),
  provider: { "@id": ids.business },
  areaServed: { "@type": "City", name: site.locality },
});

export const serviceNodes = () => services.map(serviceNode);

export const graph = (...nodes) => ({ "@context": "https://schema.org", "@graph": nodes });
