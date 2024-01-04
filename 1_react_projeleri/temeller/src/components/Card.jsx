// Bir üst bbileşenden gönderiklen verilere erişmek istiyorsak
// Bileşenin fonksyonun parametre kısmından verilere erişebiliriz
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} />

      <div className="body">
        <h4 className="category">{props.category}</h4>

        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default Card;
