export const SITE_URL = 'https://skylineexcavating.ca';

export const SITE_NAME = 'Skyline Excavating';

export const SITE_DESCRIPTION =
	'Owner-operated excavation, grading, demolition, augering, site & slab prep, and pilings for homeowners, builders, and property managers across Central Alberta from Edmonton to Calgary.';

export const PHONE = '+1-403-704-5776';

export const SOCIAL_PROFILES = [
	'https://www.facebook.com/profile.php?id=61556821959284',
	'https://www.instagram.com/skyline.excavating/',
] as const;

export const SERVICE_TYPES = [
	'Excavation',
	'Backfilling',
	'Grading',
	'Driveways',
	'Demolition',
	'Driveway Removal',
	'Augering & Piles',
	'Site & Slab Prep',
	'Pilings',
] as const;

const CENTRAL_ALBERTA_CITIES = [
	'Edmonton',
	'Calgary',
	'Red Deer',
	'Lacombe',
	'Ponoka',
	'Wetaskiwin',
	'Leduc',
	'St. Albert',
	'Sherwood Park',
	'Airdrie',
	'Okotoks',
] as const;

/** Red Deer approximates the midpoint of the Edmonton–Calgary corridor. */
const CENTRAL_ALBERTA_GEO = {
	latitude: 52.2681,
	longitude: -113.8112,
	/** ~175 km radius covers the main Edmonton–Calgary corridor and surrounding communities. */
	radiusMeters: 175_000,
} as const;

export function buildStructuredData() {
	const businessId = `${SITE_URL}/#business`;
	const websiteId = `${SITE_URL}/#website`;

	return [
		{
			'@context': 'https://schema.org',
			'@type': 'LocalBusiness',
			'@id': businessId,
			name: SITE_NAME,
			url: SITE_URL,
			image: `${SITE_URL}/images/excavation.jpg`,
			description:
				'Owner-operated excavation company serving homeowners, builders, and property managers with excavation, grading, demolition, augering, foundations, driveway removal, and haul-off services across Central Alberta from Edmonton to Calgary.',
			telephone: PHONE,
			areaServed: [
				{
					'@type': 'AdministrativeArea',
					name: 'Central Alberta',
					containedInPlace: {
						'@type': 'AdministrativeArea',
						name: 'Alberta',
						containedInPlace: {
							'@type': 'Country',
							name: 'Canada',
						},
					},
				},
				{
					'@type': 'GeoCircle',
					geoMidpoint: {
						'@type': 'GeoCoordinates',
						latitude: CENTRAL_ALBERTA_GEO.latitude,
						longitude: CENTRAL_ALBERTA_GEO.longitude,
					},
					geoRadius: CENTRAL_ALBERTA_GEO.radiusMeters,
				},
				...CENTRAL_ALBERTA_CITIES.map((city) => ({
					'@type': 'City' as const,
					name: city,
					containedInPlace: {
						'@type': 'AdministrativeArea' as const,
						name: 'Alberta',
					},
				})),
			],
			serviceType: [...SERVICE_TYPES],
			sameAs: [...SOCIAL_PROFILES],
		},
		{
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			'@id': websiteId,
			name: SITE_NAME,
			url: SITE_URL,
			description: 'Excavation and grading services across Central Alberta from Edmonton to Calgary.',
			publisher: {
				'@id': businessId,
			},
		},
	];
}
