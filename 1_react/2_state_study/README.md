# State'in ortaya çıkma noktası

React uygulamlarında bileşen içersinde kullanıcı etkileşimi sonucu arayüzde değişim olmasını isteyebiliriz. Ör: butona tıklandığında tema değişimi.

# State

State: Bileşen içersinde verileri saklamaya ve yönetmeye yarayan yapıya verilem isimdir.

State'in değeri her değiştiğinde bileşen otomatik olarak tekrardan render olur (return satıtı tekrar çalışır) bu sayede state'e bağlı olarak görünümü değişicekcek arayüz yapıları güncellenmiş olur.

Eğerki tuttuğumuzu değişkenin değerinde bir değişim olduğunda arayüzde bir deiğim olması gerekiyorsa state'i tercih ederiz

State doğrudan değiştirilemez. Değiştirmek için setMethod'u kullanılır.

useState(x): useState'i kullanırken x yazılan yere "initial state" denir yani "başlangıç state'i". state'in bileşen ekrana basılınca sahip olucağı ilk değer.
