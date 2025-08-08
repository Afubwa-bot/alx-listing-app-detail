import { HERO_BG, PROPERTYLISTINGSAMPLE } from '../constants';
import Pill from '@/components/Pill';
import { useState } from 'react';
import Image from 'next/image';


const filters = ['Top Villa', 'Self Checkin', 'Pet Friendly', 'Pool', 'WiFi'];

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  return (
    <>
      {/* Filter Section */}
      <div className="fixed top-16 left-0 w-full z-40 flex space-x-4 justify-center bg-white py-4 shadow">
        {filters.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            onClick={() => {setActiveFilter(filter)}}
            active={activeFilter === filter}
            />
        ))}
      </div>

      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">
          Find your favorite place here!
        </h1>
        <h1 className="text-lg sm:text-2xl font-semibold text-white ">
          The best prices for over 2 million properties worldwide.
        </h1>
      </div>
      {/* Listing Section */}
      <section className="pt-10 pb-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:min-h-screen w-full">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <Image
              src={property.image}
              alt={property.name}
              width={500}
              height={200}
              className="rounded-md object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{property.name}</h3>
            <p className="text-blue-600 font-bold mb-1">${property.price}</p>
            <p className="text-yellow-500">Rating: {property.rating} / 5</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default Home;