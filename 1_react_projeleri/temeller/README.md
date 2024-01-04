`npx create-react-app` komutu ile react uygulaması oluşturabiliyoruz.

`npm start` ile react projesini ayağa kaldırabiliyoruz.
(terminalin proje klasöründe olduğundan emin ol)

`npm install / i paket_ismi` bir kütüphaneyi projeye kurmaya yarar
`npm uninstall paket_ismi` bir kütüphaneyi projeden kaldırmaya yarar

1. node_modules: Bu klasör projenin bağımlılıklarını (3.parti paketler) örneğin React ve diğer paketleri içerir.Yeni indirdiğimiz kütüphanlerin koldarı da buraya eklenir Bu klasörü elle düznlemiiyoruz.

2. public: Bu klasör, projenin genel olarak eişlebilir olmasını istedğimiz dosyları bulundurduğumuz klasör.

3. .gitignore: Bu dosya, git'e yüklenmesini istemdiğim klasörleri ve dosyları tanımlaıdğmız yer. Örneğin içerisine "node_modules" yazarsak projeyi githuba gönderirken belirlitilen dosya gitmez.

4. package.json: Bu dosya, bağımlılıkları (kütüphaneler) , bazı komutları ve diğer projeye ayarlarını içeren JSON dosyası. Projemizin Kimliği.

5. package.lock.json: Bağımlılaklarımızın spesifik sürümlerini ve bağımlılıklar arasındaki ilişkinin verisini tutar.

6. src: Bu klasör, uygulamamzın kaynak kodunu içerir. Projeyi bu dosya içerisnde geliştiriri.z

- - App.css / index.css: Stillendirme dosyları

- - App.js: Varsayılan olarak oluşturulan temel ugulama bileşeni. Bu dosya içererisne yazdıklarımız kerana ekrana basılır.

- - index.js: React uygulamasının başlanıç noktasıdır.
    Bu dosya ugulamada oluşturdğumuz sayf vee bileşnleri DOM'un içerisnde yerleştirilidği yerdir.

# Koşullu Renderlama

- Ekrana basılacak olan arayüzün bir koşula göre ekrana gelme durumuna denir.
- Koşullu renderlama için iki yöntem vardır

- - Terneray Operator (? :)
- eğer else durumu da varsa yani koşul gerçekleşmezse'de ekrana bir şey basılıcaksa bu yöntem kullanır

- - Ve Operatörü (&&)
- eğer else durumu yoksa yanı koşul gerçeklmezse ekrana bir şey basılmayacaksa bu yöntem kullanılır

# Çoklu Renderlama

- Birden fazla elemanı ekran basmak istedğimiz durumda kullanıdğımız yapı

- Bir dizisi içerisndeki eleman sayısı kadar ekrana basma işlemi yapmak istiyorsak map yöntemi kullanırız

# Prop (Veri Aktarım Yöntemi)

- Bir bileşnden diğerine veri aktarmak için kullandığımız yöntemdir

- Her zaman üstten aşşağıyaa doğru üstteki bileşenden alt bileşene doğru bir aktarım yönü vardır.
