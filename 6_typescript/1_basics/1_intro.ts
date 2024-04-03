/*
 * Typescript, js'in bazı önemli açıklarını düzeltmek için microsoft tarafından geliştrilen bir programlama dilidir.

 * Açıklar:
 * * JS'de tanımladığımız bir değişkeni daha sonra tanımlarken farklı tip te bir veri atayabiliyoruz. ts bunun önünne geçer.
 * * Otomatik tamamla desteği yok örn: api'dan gele nverileri konsoldan bakmadan kullanmaıyoruz.
 * * istediğimiz sürüme derleme özelliği yok.
 * * değişkenlerde veya fonksiyonalarda tip atması özelliği yok.
 
 * typescript dosyları doğrudan çalıştırlamazlar. Eğer dosyayı çalıştırmak istiyorsak önce js'e derlememiz gerekiyor.

 * TSC: Typescript Compiler
 * yazılan typescript kodunu js'in istediğimiz sürümünr deler
 * kullanabilmek için typescript paketini bilgisayara indirmiş olmamız gerekli

*/

let surname: string = 'yıldız';

console.log('kullanıcının soyadı', surname);
