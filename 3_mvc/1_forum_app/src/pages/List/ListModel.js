import axios from 'axios';

// veri alakları her türlü yapıyı model'de tanımlarnır
// model oluştururken genelde class'ları tercih ederiz
export default class ListModel {
  // api'dan post verilerini alıp döndüren fonksiyon
  async getPosts() {
    try {
      const res = await axios.get('http://localhost:3000/posts');

      return res.data;
    } catch (err) {
      alert('Üzgünüz bir hata oluştu.');
      console.log(err);
    }
  }
}
