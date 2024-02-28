const DelButton = ({ handleDelete }) => {
  return (
    <button onClick={handleDelete} className="bin-button">
      <img src="/icon1.svg" className="bin-top" />
      <img src="/icon2.svg" className="bin-bottom" />
      <img src="/icon3.svg" className="garbage" />
    </button>
  );
};

export default DelButton;
