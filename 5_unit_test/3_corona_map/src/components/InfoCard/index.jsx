const InfoCard = ({ item }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md text-gray-600">
      <p className="text-sm font-semibold capitalize text-gray-600 mb-2">
        {item[0].split('_').join(' ')}
      </p>
      <h2 className="text-lg font-bold text-gray-800">{item[1]}</h2>
    </div>
  );
};

export default InfoCard;
