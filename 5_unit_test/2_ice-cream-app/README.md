# Selectors

- https://testing-library.com/docs/ecosystem-testing-library-selector/

# Matchers

- https://github.com/testing-library/jest-dom

# Html Element Rolleri

- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles

# Kütüphaneler

- axios@^0.27.2
- @testing-library/user-event@14.0
- json-server
- bootstrap

# Test Geliştirme Süreçleri

## TDD (Test Driven Development)

- red to green test
- Önce özelliğin / bileşenin testi yazılır ardından özellik kodlanır
- Artısı, testler bir yük gibi gelmiyor. Geliştirme sürecinin bir paraçası oluyor. Testleri yazarken dinamik yapının algoritmasınıda oluşturduğumuz için işlevi daha hızlı kodlyabiliyoruz

## BDD (Behaviour Driven Development)

- Önce özellik / bileşen geliştirlir sonra testleri yazılır.

## FireEvent

- rtl içerisinde gelen olay tetikleme methodu
- gerçek kullanıcadan uzak tepkiler verdiği için yerini userEvente bıraktı
- teitklenen olaylar gerçek bir insanın verebilceği tepkiden çok daha hızlı bir şekilde aniden tetikleniyor

## UserEvent

- bu yolu kullanmak için userEvent paketi indirilmeli
- fireEvent'in modern daha gelişmiş verisyonu
- tetiklediğimiz olaylar gerçek kulalnıcının yağıcağı gibi belirli bir gecikmenin ardından gerçekleşiyo
- gecikme olduğunda async await ile kullanırız
