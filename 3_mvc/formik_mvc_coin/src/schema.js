// yuptaki bütün fonksiyonları import et
import * as yup from 'yup';

// validasyon şeması
// formdaki inputların geçerli olması için gerekli koşulları tanımladığımız alan

// 1 büyük harf
// 1 küçük harf
// 1 sayı
// 1 özel karakter
// min 5 karakter
const regex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';

// bir alan için koşullları yazarken ilk olarak o alanın tipini tanımlayan yup fonksiyonunu çağırız
export const schema = yup.object().shape({
  // email'in geçerli olması için koşullar
  email: yup
    .string()
    .email('Email geçerli bir formatta olmalı')
    .required('Email zorunlu bir alan'),

  // yaşın geçerli olması için koşullar
  age: yup
    .number()
    .min(18, "Yaş 18'den küçük olamaz")
    .max(100, "Yaş 100'den büyük olmaz")
    .integer('Lütfen tam sayı değeri giriniz')
    .required('Yaş zorunlu bir alan'),

  // şifrrenin geçerli olması için koşullar
  password: yup
    .string()
    .min(5, 'Şifreniz en az 5 karakter olmalı')
    // şifre regex kurallarına uygun mı kontrol eder
    .matches(regex, 'Şifreniz yeterince güçlü değil')
    .required('Şifre zorunlu bir alan'),

  // şifre onay alanın geçerli olması için koşullar
  passwordConfirm: yup
    .string()
    // oneOf() kontrol ettiğimiz inputtaki verinin verdiğimiz değerlere eşit olup olmadığını kontrol eder
    // ref() farklı bir inputtaki veriye erişmemizi sağlar
    .oneOf([yup.ref('password')], 'Onay şifreniz eşleşmiyor')
    .required('Lütfen şifrenizi onaylayın'),
});
