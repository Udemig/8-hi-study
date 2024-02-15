const BasketItem = ({ product }) => {
  return (
    <div className="rounded-2 p-4 bg-white d-flex text-black mb-5">
      <div className="d-flex align-items-center gap-3">
        <img width={60} height={60} src={product.image} />

        <h4>
          <span>{product.make}</span>
          <span>{product.model}</span>
        </h4>

        <h4 className="text-success">{product.price} ₺</h4>
      </div>
    </div>
  );
};

export default BasketItem;
