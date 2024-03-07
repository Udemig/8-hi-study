import { useFormik } from 'formik';
import { schema } from '../schema';

const LoginPage = () => {
  // formik'in bütün özelliklerini kullanmamızı sağlayan hoook
  const formik = useFormik({
    // formda tutulcak verilerin ilk değeri
    initialValues: {
      email: '',
      age: '',
      password: '',
      passwordConfirm: '',
    },

    // validasyon şeması
    // inputlardaki veriler tanımladığımız şemadaki koşullara uygun mu diye kontrol eder. Eğer geçerli değilse error state'ine hataları ekler
    validationSchema: schema,

    // form gönderilince çalışıcak olan fonksiyon
    // ototmatik olarak sayfa yenilemeyi engeller
    // 1.parametre olarak formdaki verileri alır
    // 2.parametre olarak formda çalışabilecek aksiyonları alır
    onSubmit: (values, actions) => {
      console.log(values);
      console.log(actions);
    },
  });

  console.log(formik.errors);

  return (
    <div className="login-page">
      <div className="container my-5">
        <h2 className="d-flex gap-3 justify-content-center align-items-center">
          <img height={60} src="/c-logo.png" />
          <span>Coinmania</span>
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-5 mt-5"
        >
          <div>
            <label>Emailiniz</label>
            <input
              name="email"
              onChange={formik.handleChange}
              className="form-control mt-2"
              type="email"
            />
          </div>

          <div>
            <label>Yaşınız</label>
            <input
              name="age"
              onChange={formik.handleChange}
              className="form-control mt-2"
              type="number"
            />
          </div>

          <div>
            <label>Şifre</label>
            <input
              name="password"
              onChange={formik.handleChange}
              className="form-control mt-2"
              type="text"
            />
          </div>

          <div>
            <label>Şifre Onay</label>
            <input
              name="passwordConfirm"
              onChange={formik.handleChange}
              className="form-control mt-2"
              type="text"
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
