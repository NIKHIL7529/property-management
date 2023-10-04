import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import data from "./data.json";
import CityCard from "./Components/CityCard";
import PropertyGrid from "./Components/PropertyGrid";
import ShowMore from "./Components/ShowMore";
import PropertyCard from "./Components/PropertyCard";

function App() {
  const [count, setCount] = useState(0);

  const [filteredData, setFilteredData] = useState(null);
  const [cityData, setCityData] = useState(null);

  const path = window.location.pathname;
  const pathSegment = path.split("/");
  const id = parseInt(pathSegment[pathSegment.length - 1]);

  const cityRoute = (cityProperty) => {
    setCityData(cityProperty);
  };

  const counts = (value) => {
    setCount(value);
  };

  const routeId = (id) => {
    setFilteredData(data.property[id - 1]);
  };

  const addProperty = (value) => {
    setCount(value + count);
  };

  return (
    <div className="bg-gray-100 m-0 px-10 py-5">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CityCard
                cityRoute={cityRoute}
                count={counts}
                property={data.property}
              />
              <PropertyGrid routeId={routeId} add={count} property={cityData} />
              <ShowMore addProperty={addProperty} />
            </>
          }
        />
        <Route
          path="/property/:id"
          element={
            <>
              <PropertyCard data={filteredData || data.property[id - 1]} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
