import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";

export default function PropertyGrid(props) {
  const propertyData = (props.property || []).slice(0, 6 + props.add);

  const handleRouteId = (hid) => {
    props.routeId(hid);
  };

  return (
    <div className="grid grid-cols-3 gap-10">
      {propertyData.map((data) => (
        <Link
          key={data.id}
          onClick={() => handleRouteId(data.id)}
          to={`/property/${data.id}`}
        >
          <PropertyCard key={data.id} data={data} />
        </Link>
      ))}
    </div>
  );
}
