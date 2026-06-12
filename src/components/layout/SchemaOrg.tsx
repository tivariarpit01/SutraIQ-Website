// components/SchemaOrg.tsx
export function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness'],
        '@id': 'https://www.sutraiq.com/#organization',
        name: 'SutraIQ',
        url: 'https://www.sutraiq.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.sutraiq.com/images/logo.png',
          width: 200,
          height: 60,
        },
        description:
          'SutraIQ is a Delhi-based software development company specialising in web development, mobile app development, AI/ML solutions, and business automation.',
        foundingDate: '2023',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Delhi',
          addressRegion: 'Delhi',
          addressCountry: 'IN',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-8750709717',
          contactType: 'customer service',
          availableLanguage: ['English', 'Hindi'],
        },
        areaServed: [
          { '@type': 'Country', name: 'India' },
          { '@type': 'City', name: 'Bengaluru' },
          { '@type': 'City', name: 'Delhi' },
          { '@type': 'City', name: 'Mumbai' },
        ],
        sameAs: [
          'https://www.instagram.com/sutra_iq/',
          'https://wa.me/918487945654',
          // Add LinkedIn, Twitter, Crunchbase URLs here
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software Development Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI & Machine Learning Solutions' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Automation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Solutions' } },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.sutraiq.com/#website',
        url: 'https://www.sutraiq.com',
        name: 'SutraIQ',
        description: 'Web, Mobile, AI & Automation Solutions Company in India',
        publisher: { '@id': 'https://www.sutraiq.com/#organization' },
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: 'https://www.sutraiq.com/search?q={search_term_string}' },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}