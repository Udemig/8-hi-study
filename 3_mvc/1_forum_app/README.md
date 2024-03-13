# Kütüphaneler

- axios
- json-server
- react-router-dom
- tailwind

# MVC (Model - View - Controller)

- Model:

* Uygulamanın veri matnığını ve yapısını temsil eder.
  Örn:
* Bilşende tutulcak state'in başlangıç değeri
* Veriyi formatlamaya yarayan fonksiyon
* Api istekleri tutlabilir
* Genellikle Class yapısı ile tanımlanır.

- View:

* Son kullanıcnın gördüğü tasarımdır.
* Bilşenin return satırına yazdığımız jsx elementleri burada tanımlanır.

- Controller:

* View ile model arasındaki bağlantıyı sağlar
* Kullanıcı etkileşimiyle tetiklenicek bütün fonksiyonlar burada tanımlanır

# MVC Klasör Yapısı

# # 1.yol

- public
- src
- - pages
- - - MainPage
- - - - MainPageController
- - - - MainPageView
- - - - MainPageModel

- - - AuthPage
- - - - AuthPageController
- - - - AuthPageView
- - - - AuthPageModel

# # 2.yol

- public
- src
- - controllers
- - - MainPageController
- - - AuthPageController

- - models
- - - MainPageModel
- - - AuthPageModel

- - views
- - - MainPageView
- - - AuthPageView
