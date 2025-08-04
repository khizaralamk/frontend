import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'product';
  productData?: {
    name: string;
    price: string;
    brand: string;
    category: string;
  };
}

export default function SEO({
  title = "Cronaldo Sports - Premium Football Jerseys & Sports Gear",
  description = "Shop official football jerseys from top clubs like FC Barcelona, Real Madrid, Arsenal, PSG, Manchester City, and Liverpool. Authentic sports gear with worldwide shipping.",
  keywords = "football jerseys, soccer shirts, sports gear, FC Barcelona, Real Madrid, Arsenal, PSG, Manchester City, Liverpool, official jerseys, football kits",
  image = "https://cronaldosports.com/og-image.jpg",
  url = "https://cronaldosports.com",
  type = "website",
  productData
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update primary meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:image', image);
    updatePropertyTag('og:url', url);
    updatePropertyTag('og:type', type);
    updatePropertyTag('twitter:title', title);
    updatePropertyTag('twitter:description', description);
    updatePropertyTag('twitter:image', image);
    updatePropertyTag('twitter:url', url);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Add structured data for products
    if (productData && type === 'product') {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": productData.name,
        "description": description,
        "image": image,
        "url": url,
        "brand": {
          "@type": "Brand",
          "name": productData.brand
        },
        "category": productData.category,
        "offers": {
          "@type": "Offer",
          "price": productData.price.replace(/[^\d]/g, ''),
          "priceCurrency": "PKR",
          "availability": "https://schema.org/InStock",
          "url": url
        }
      };

      // Remove existing product structured data
      const existingScript = document.querySelector('script[data-seo="product"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'product');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Clean up function
    return () => {
      // Reset to default meta tags when component unmounts
      document.title = "Cronaldo Sports - Premium Football Jerseys & Sports Gear";
      updateMetaTag('description', "Shop official football jerseys from top clubs like FC Barcelona, Real Madrid, Arsenal, PSG, Manchester City, and Liverpool. Authentic sports gear with worldwide shipping.");
      updateMetaTag('keywords', "football jerseys, soccer shirts, sports gear, FC Barcelona, Real Madrid, Arsenal, PSG, Manchester City, Liverpool, official jerseys, football kits");
    };
  }, [title, description, keywords, image, url, type, productData]);

  return null; // This component doesn't render anything
} 