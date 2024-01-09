// Bir üst bileşenden gönderiklen verilere erişmek istiyorsak
// Bileşenin fonksyonun parametre kısmından verilere erişebiliriz
const Card = (props) => {
  // ? : > koşulun olmadığı durumdada bir şey yapıcaksak
  // &&  > tek koşul varsa

  // koşulu burtayada yazabiliriz
  // const style = props.theme === 'dark' ? 'card dark' : 'card light'
  return (
    <div
      className={props.theme === 'dark' ? 'card dark' : 'card light'}
    >
      <img src={props.image} />

      <div className="body">
        <h4 className="category">{props.category}</h4>

        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default Card;
