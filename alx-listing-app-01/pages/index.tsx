import Image from "next/image";
import { HERO_BACKGROUND_IMAGE, PROPERTYLISTINGSAMPLE, FILTER_LABELS } from "@/constants";
import { PropertyProps } from "@/interfaces/Index";
import Pill from "@/components/Pill"; // Import the Pill component
import { useState } from "react";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { name, address, rating, price, image, discount } = property;
  const originalPrice = price;
  const discountedPrice = discount ? price * (1 - parseInt(discount) / 100) : price;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        {discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-500">{address.city}, {address.country}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-sm mr-1">⭐</span>
          <span className="text-gray-700 text-sm">{rating.toFixed(2)}</span>
        </div>
        <div className="mt-3 flex items-baseline">
          {discount ? (
            <>
              <span className="text-lg font-bold text-gray-900">${discountedPrice.toFixed(0)}</span>
              <span className="ml-2 text-sm text-gray-500 line-through">${originalPrice.toFixed(0)}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-gray-900">${price.toFixed(0)}</span>
          )}
          <span className="text-sm text-gray-600 ml-1">/night</span>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilterClick = (label: string) => {
    setActiveFilters((prevFilters) =>
      prevFilters.includes(label)
        ? prevFilters.filter((filter) => filter !== label)
        : [...prevFilters, label]
    );
  };

  // Basic filtering logic (can be expanded)
  const filteredProperties = PROPERTYLISTINGSAMPLE.filter((property) => {
    if (activeFilters.length === 0) {
      return true;
    }
    return activeFilters.some((filter) => {
      // Example filtering, you would expand this based on your filter labels and property categories
      if (filter === "Top Villa") return property.category.includes("Luxury Villa") && property.rating >= 4.8;
      if (filter === "Self Checkin") return property.category.includes("Self Checkin");
      if (filter === "Discounted") return property.discount !== "";
      // Add more specific filter logic here
      return property.category.some(cat => cat.toLowerCase().includes(filter.toLowerCase()));
    });
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-center p-4"
        style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl font-medium">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filter Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore by Category</h2>
          <div className="flex flex-wrap gap-3">
            {FILTER_LABELS.map((label) => (
              <Pill
                key={label}
                label={label}
                onClick={() => handleFilterClick(label)}
                isActive={activeFilters.includes(label)}
              />
            ))}
          </div>
        </section>

        {/* Listing Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Properties</h2>
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.name} property={property} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg">No properties found matching your filters.</p>
          )}
        </section>
      </div>
    </div>
  );
}