const RoomPage = ({ setRoom, setIsAuth }) => {
  // form gönderilince tetiklenicek
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki değeri al
    const room = e.target[0].value;

    // kullancın seçtiği odayı state'e aktar
    setRoom(room.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>

      <p>Hangi Odaya Giriceksiniz</p>

      <input type="text" placeholder="ör:haftaiçi" required />

      <button type="submit">Odaya Gir</button>
      <button
        onClick={() => {
          // yetki state'ini false'a çekerek oda logine yönlendir
          setIsAuth(false);
          // local'deki kaydı kaldır
          localStorage.removeItem('token');
        }}
        type="button"
      >
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;
