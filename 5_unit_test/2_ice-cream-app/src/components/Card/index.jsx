const Card = ({ amount, item, addToBasket, clearFromBasket }) => {
  return (
    <div
      style={{ width: '200px' }}
      className="d-flex flex-column align-items-center gap-1 border rounded p-3"
    >
      <img height={100} src={item.imagePath} alt="çeşit-resim" />

      <span>{item.name}</span>

      <div className="d-flex gap-2 mt-4 align-items-center">
        <button
          onClick={() => clearFromBasket(item.name)}
          className="btn btn-sm btn-outline-danger"
        >
          Sıfırla
        </button>
        <span data-testid="amount" className="fs-2">
          {amount}
        </span>
        <button
          onClick={() => addToBasket(item)}
          className="btn btn-sm btn-outline-success"
        >
          Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
