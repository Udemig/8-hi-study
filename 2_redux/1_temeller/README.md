# State Yönetimi

- State: Uygulamadaki bileşenlerimizin sahip olduğu bilgi ve özellikler.

- Prop Drilling: Bileşenlerin yukarıdan aşağıya veri taşıması.

- Context: Uygulamadaki state'i bütün bileşenler tarafından erişlebilen ve oluşturduğumuz merkzlerden yönettiğimiz state yönetim aracı.

- Redux: Bileşenlerin sahip olduğu ve merkezix olarak tutulaması gereken state'lerin yönetildiği merkezi state tönetim aracı.

# Neden Context yerine Redux

- Kod tekrarını önler
- Performansı arttırır
- Bileşen içerisndeki karşılığı azaltır
- Hata ayıklama kolaydır
- Orta ve büyük ölçekli projelerde state'i yönetimi daha kolay hale getirir.

# Redux ilgi ilgili bilinmesi gerekenler

1. Store: Uygulamanın bütün bileşnleri tarafından erişlebilen ve yönetilebilen state deposudur.

2. Reducer: Aksiyondan aldığı talimata göre store'da tutlan state'in nasıl değiceğine karar veren fonksiyon.

3. Action: Store'daki state'i güncellemek için reudcer'a gönderdiğimiz nesne. (emir | haber | eylem)

- - Action iki değer sahip bir objedir.
- - type: Action'ın görevini tanımlayan string
- - payload: Gönderilen eylemin verisi

4. Dispatch (Sevketmek): Action'un gerçekleştiği reucer'a haber veren method

5. Subscribe (Abone Olmak): Bileşenlerin store'da tutulan veriye erişmini sağlama.
   (useContext,useSelector)

6. Provider (Sağlayıcı): Store'da tutlan verileri uygulamaya sağlar.

# Gerçek Hayattan Örnek

1. Store: Okulun Binası.

2. Reducer: Okulun Yönetim Ekibi (Müdür,Müdür Yard.)

3. Action: "Öğrencinin Sınavı Geçmesi" | "Yeni Öğrenci Kayıt Yapması" | "Öğrencinin Okuldan Atılması"

4. Dispatch: Öğrenci İşleri | Öğretmen | Nöbetçi Öğrenci.

5. Subscribe: Rehberlik Servisi | E-Okul.

6. Provider: Okul Aile Birliği | MEB

# Redux Kurulum Aşamaları:

- `redux` ve `react-redux` paketlerini indir.

- reducer / reducer'ların kurlumunu yap.

- store'un kurulumunu yap.

- store'U projeye tanıt.
