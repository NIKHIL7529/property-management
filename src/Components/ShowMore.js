import HourglassTopIcon from "@mui/icons-material/HourglassTop";

export default function ShowMore(props) {
  const handleAddProperty = () => {
    props.addProperty(3);
  };

  return (
    <div className="flex justify-around mt-5">
      <button
        className="bg-blue-600 text-white rounded-3xl py-2 px-4 cursor-pointer"
        onClick={handleAddProperty}
      >
        <HourglassTopIcon />
        Show More
      </button>
    </div>
  );
}
