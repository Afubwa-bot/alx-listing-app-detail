// pages/property/[id].tsx

import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name.replace(/\s+/g, '-').toLowerCase() === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div className="container mx-auto p-6">
      <PropertyDetail property={property} />
      <div className="lg:flex lg:space-x-8 mt-8">
        <div className="lg:w-2/3">
          <p className="text-gray-700">{property.description}</p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
            <ul className="flex flex-wrap gap-4">
              {property.category.map((amenity, index) => (
                <li key={index} className="bg-gray-200 p-2 rounded-md">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          <ReviewSection reviews={property.reviews} />
        </div>
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
}