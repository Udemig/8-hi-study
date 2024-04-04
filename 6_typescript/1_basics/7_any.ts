/*
 * Any Type:
 * Bir değişkene any type atandığı zman değişken herhangi bir tür kısıtlamasına maruz kalmaz
 
 * Ts, any type ile tanımlanmış olan bir değişkene js 
 gibi davranır. Yani değişkene herhangi bir türde veri ataması yapabilir.

 * Otomatik atmamlama any kullanılan değişkenlerde devre dışı kalır.

 * Normal şartlarda any kullanımı ts mantığına aykırıdır. Çünkü ts'deki amaç her değişkenin türünün belli olması.

 * Any genelde "geçici" olarak acil durumlarda kullanılır. Örn api'dan gelen bir veri var ama verinin tipini tanımlaayacak kadar zamanımıs yok hemen githuba pushlamalıyız, bu seneryodfa geçici bir süreliğine api dan gelen verinin tipini any olarka bırakabilir.

 * Mutlaka any tipleri bir noktadan sonra kaldırılıp yeirne doğru tipler tanmlanmalıdır.
 */

let foo: any;
foo = 'string';
foo = 45;
foo = undefined;
foo = [];
foo = null;
foo = () => {};
