# Redux Thunk

Redux thunk , redux kullanılan projelerde asenkron işlemleri kolayşlaştırmak bileşen içerisndeki karışılıklığı azaltmak ve aynı zamanda bileşen içseindeki kompleks yapıyı ayrı bir noktda tanımlamamızı sağlar.

Redux temel yapısı eylemlerin senkron olması üzerine kuruldur. Yani bir eyelem tetiklendiğinde bu eylem bekleme süresi olmadan hemen işlenir state güncellenir.

Asenkron işlemlerle uğraşmak istendiğinde, Redux thunk devreye girer.
Redux thunk, action oluşturan fonksiyonların basit bir nesne döndürmesi yerine bir fonksiyon döndürmesine izin verir. Bu ssayede asenkron işlemler gerçekleştirelbilir.
