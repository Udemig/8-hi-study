import Card from './Card';

/*
 ! JSX (Javascript XML):
 * react tarafında kullanılan söz dziimi
 * Ksx javascript içerisnde HTML benzeri bir yapıyla
 * arayüzü tanımlamaya yarar.
 
 * HTML'den farkları:
 * {}: doğrudan jsx içerisne js kodu yazabiliyoruz
 * className: sınıf tanımlarken class yerine kullanılır
 * inline css: {{}} çift paranetz içerisne stilleri yazarız. / camelCase
 * <div/> : bütün etiketler self closing olabilir
 * input / img / br : gibi etiiketlerde kapnış mutlaka olmalı
 * olay izleme: izleme istediğimiz olayları direkt etikete tanımlıyoruz.
 * <>: fragment
*/

function Main() {
  const text = 'Sayfamıza Hoşgeldin.';
  const url =
    'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740113-00-A_1_2000.jpg';

  const formatText = (uzunYazi) => {
    return uzunYazi.slice(0, 20) + '...';
  };

  const selamla = () => {
    alert('merhaba');
  };

  const status = 'success'; // error - success

  return (
    <main>
      <h3>{text}</h3>

      <p className="text-area">
        {formatText('Merhaba gününüz nasıl geçti?')}
      </p>

      <div
        style={{
          backgroundColor: 'red',
          height: '100px',
          margin: '30px',
        }}
      />

      {/* Karttlar */}
      <div className="wrapper">
        <Card
          image="https://picsum.photos/200"
          category="giyim"
          title="Hoodie"
        />
        <Card
          image="https://picsum.photos/201"
          category="elektronik"
          title="Klavye"
        />
        <Card
          image="https://picsum.photos/202"
          category="bilgissayar"
          title="Monitor"
        />
      </div>

      {/* <img src={url} width={400} />
      <br />

      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <button
        onClick={() => {
          alert('selam naber?');
        }}
      >
        Gönder
      </button>

      <button onClick={selamla}>Selamla</button> */}

      {/* Birden fazla koşul olduğu seneryoda örnek */}
      {status === 'loading' ? (
        <p>Yükleniyor...</p>
      ) : status === 'error' ? (
        <p>Üzhünüz bir hata oluştu :(</p>
      ) : (
        <p>Veri Başarayla Alındı</p>
      )}
    </main>
  );
}

export default Main;
