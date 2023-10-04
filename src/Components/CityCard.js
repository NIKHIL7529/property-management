import { useEffect, useState } from "react";

export default function CityCard(props) {
  const cities = ["New York", "Mumbai", "Paris", "London"];
  const [citySelect, setCitySelect] = useState("New York");
  const [cityProperty, setCityProperty] = useState(
    props.property.filter((property) => property.city === "New York")
  );

  const handleCitySelect = (hcity) => {
    setCitySelect(hcity);
    setCityProperty(
      props.property.filter((property) => property.city === hcity)
    );
  };

  useEffect(() => {
    props.count(0);
  }, [citySelect]);

  props.cityRoute(cityProperty);

  return (
    <div className="flex justify-between mb-5  items-center">
      <div className="flex">
        {cities.map((city) => (
          <p
            key={city}
            className={`px-6 py-2 rounded-3xl mx-2 bg-gray-300 text-gray-600 focus:text-white focus:bg-blue-600 border-none cursor-pointer ${
              city === citySelect ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => handleCitySelect(city)}
          >
            {city}
          </p>
        ))}
      </div>
      <p className="text-blue-600 border-2 border-blue-600 bg-white px-6 py-2 rounded-3xl cursor-pointer mr-2">
        View All →
      </p>
    </div>
  );
}
