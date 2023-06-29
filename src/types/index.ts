import { AmenityTerm, PropertyStatusTermSlug } from '@/types/taxonomy';

export type Property = {
	id: number;
	slug: string;
	cover: string | null;
	title: string;
	description: string;
	location: string;
	price: string;
	property_status: PropertyStatusTermSlug;
	amenities: AmenityTerm[];
};

export type NextSearchParams = {
	[key: string]: string | string[] | undefined;
};
