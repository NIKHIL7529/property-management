import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import heart from "../images/heart.png";
import directions from "../images/area.png";

export default function PropertyCard(props) {
  if (!props.data) {
    return null;
  }

  const {
    imageSrc,
    streetName,
    propertyType,
    address,
    rooms,
    beds,
    baths,
    area,
    price,
    reach,
  } = props.data;

  return (
    <div className="relative bg-white text-gray-600 rounded-2xl p-3 cursor-pointer max-w-md">
      <div className="relative">
        <img
          src={imageSrc}
          alt={streetName}
          className="rounded-2xl w-full h-72 mb-10"
        />
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-3">
          <p className="rounded-2xl  text-blue-600 w-24 px-4 py-1 bg-white">
            {propertyType}
          </p>
          <div className="rounded-full p-2 bg-white">
            <img src={heart} alt="Like" className="h-4" />
          </div>
        </div>
      </div>
      <div className="mx-5 my-3">
        <p>
          <LocationOnOutlinedIcon />
          {streetName}
        </p>
        <p className=" text-2xl font-bold my-3">{address}</p>
        <div className="divide-y divide-dashed">
          <div className="flex justify-center divide-x divide-dashed py-4">
            <div className="px-6">
              <BusinessOutlinedIcon />
              <p>{rooms} Room</p>
            </div>
            <div className="px-6">
              <BedOutlinedIcon />
              <p>{beds} Bed</p>
            </div>
            <div className="px-6">
              <BathtubOutlinedIcon />
              <p>{baths} Bath</p>
            </div>
            <div className="px-5">
              <img src={directions} alt="directions" className="h-6" />
              <p>{area} sft</p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center">
              <p className=" text-xl font-semibold text-blue-600 py-3">
                ${price}
              </p>
              /month
            </div>
            <p className="border-2 font-bold text-blue-600 border-blue-600 rounded-3xl px-4 py-2">
              Read More
            </p>
          </div>
        </div>
      </div>
      {reach === "Popular" && (
        <div className="absolute top-72 -left-2">
          <p className="bg-blue-600 text-white rounded-r rounded-t px-9 py-2">
            Popular
          </p>
          <p className="bg-blue-900 h-2 w-2 rounded-bl-full"></p>
        </div>
      )}
    </div>
  );
}
