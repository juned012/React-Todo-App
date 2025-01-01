import Card from "./Card";

const CardListing = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <Card />
    </div>
  );
};

export default CardListing;
