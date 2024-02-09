# Component

- React ta 2 çeşit bileşen türü vardır

1. Function Component

- Modern porjelerde class'lar fazla kod alanı kapladığından class'ına sahip olduğu state , lifecycle olayına ssahip olmamıasna rağmen react hookları sayesinde class'ların bütün özelleeklerini edindiler. Ve daha az kod alanı kapladığı ve daha okunabili olduğu için daha çok tercih edilir.

2. Class Component

- Function component'lar ortay çıkmadan önce kullanılırlardı

- Modern projelerde yerini function component'lara bıraktılar.

- Hooks kullanımı mevcut değil

# Lifecycle (Yaşam Döngüsü)

- React bileşneleride normal bir canlı gibi bir yaşam döngüsnüe sahiptir

- Bu döngü üç ana aşamadan oluşur.

1. Doğma - Mount (Ekrana Basılma)

2. Gelişme - Updating (Güncellenme)

3. Ölme - Unmount (Ekranda Gitme)

- Bizim bu yaşam döngüsü hakim olmamız gerekir (izlemek).

- Bileşenin içerisnde yaşam bieleşen ekran basıldığında güncellendiğide veeya ekrandan gittiğinde bir fonksiyon çalıştırmak isteyebiliriz.
  Örneğin bileşen ekran baıslıdğında yani yükklendiğinde api isteği atmak isteyebilir.

  - Bu yüzden bu yaşam döngüsünün adımlarının izleyebilmemiz gerekir.
  - Class component'larda bu adımları izlemek için bazı methodlar bulunur.

# !!!

- Class sahip olduğu ama function'ların sahip olmadığı özellikler için function'larında bu özelleklieri kullanbilmesi için react hopoks ortaya çıkıyor.

- Class 'ların sahip olduğu özellikleri function componetlarda kullanmamız sağlayan fonksiyonlar.

- class'larda ki state statei func. componentlarda "useState" hooku kullanmamızı sğlar

- class'larda ki yaşam döngüsünü func. componentlarda "useEffect" hooku kullanmamızı sağlar.

# useEffect

- Amacı: class'lardaki componentDidMount | componentDidUpdate | componentWillUnmount yerine function'larda kullanılır.

- Fonksiyonel bileşenlerde yaşam döngüsünü izlemmizi sağlar.

# # Kullanımlar

1. ComponentDidMount: Bileşenin ekrana gelme olayını izlemeye yarayan kullanım

- - 1.parametre > çalışıcak fonksiyon
- - 2.parametre > boş bağmlılık dizisi
- - `useEffect(()=>{ },[])`

2. ComponentWillUnmount: Bileşenin ekrandan gitmeisini izler.

- - 1.parametre > çalışıcak fonksiyon
- - 2.parametre > boş bağmlılık dizisi
- - çalışıcak fonskiyonun return satırına bir fonksiyon daha yazarız
- - bu yazdığımız fonksiyon bileşen ekranan gidince çalışır
- - `useEffect(()=>{ return () => {} },[])`

3. ComponentDidUpdate : Bİleşene gelen prop veya state her değişitiğinde yani bleşen her render olduğunda çalışan yöntem

- - 1.parametre > çalışıcak fonksiyon
- - "2. parametre yok
- - `useEffect(()=>{})`

4. ComponentDidUpdate2: Bileşende belirli bir state'in/lerin değişimi izlemek istediğimizde kullanılan yöntem

- - 1.parametre > çalışıcak fonksiyon
- - 2.parametre > dolu bağımlılık dizisi
- - `useEffect(()=>{},[page])`

# Optional Chaining (Koşullu Zincirleme)

- Eğerki objenin bir değerinin olmamam ihtimali varsa bunu ekrna basarken şu yolu izleyebilirizi

- dog && dog.name > köpek varsa ismini ekrena bas
- dog?.name > köpek varsa ismini ekrana bas

- veri olamma durrumunda ekrna bir şey gelicekse terneray tercih edilir

- - dog ? dog.name : "karpuz"

# Key

- Anahtarlar; hangi öğelerin değiştiğini, eklendiğini ya da silindiğini belirleme noktasında
  React’e yardımcı olur.

- Map işlemi sonucu oluşturudğumuz jsx kodlarının kapsıycı elemanına key propu olarak benzersiz bir derğer göndermeliyiziz

- Bu sayede eleman değişmesi gerektiğinde react daha performanslı bir şekilde çalışır.

# useRef()

- Bir react hook'udur
- Jsx elemanın referansını alamay yarar
- Javascript'ten bildiğimiz seçici methodların(getElemntById QuerySelector) react'taki karşılığı
