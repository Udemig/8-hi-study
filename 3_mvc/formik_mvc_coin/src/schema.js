// yuptaki bütün fonksiyonları import et
import * as yup from 'yup';

// validasyon şeması
// formdaki inputların geçerli olması için gerekli koşulları tanımladığımız alan

// bir alan için koşullları yazarken ilk olarak o alanın tipini tanımlayan yup fonksiyonunu çağırız
export const schema = yup.object().shape({
  // email'in geçerli olması için koşullar
  email: yup.string().email().required(),

  // yaşın geçerli olması için koşullar
  age: yup.number().min(18).max(100).integer().required(),
});
