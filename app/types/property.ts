export interface Property {
	bedrooms: number;
	bathrooms: number;
	squareFootage: number; // In square feet
	lotSize?: string; // Optional, e.g., "0.25 Acres" or "10,890 SqFt"
	yearBuilt: number;
	propertyType: string; // e.g., "Single Family Home", "Condo"
	amenities: string[]; // List of key amenities
	description: string; // A more detailed description than the hero's
	// Add other relevant details as needed
	// e.g., garageSpaces: number; heatingCooling: string; flooring: string;
}
