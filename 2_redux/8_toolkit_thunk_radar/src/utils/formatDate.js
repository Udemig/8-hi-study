import moment from 'moment/moment';
import 'moment/locale/tr';

// unix formatındaki veriyi normal fomata çeviren fonksiyon
const formatDate = (unix_time) => {
  // unix fomatındaki saniye verisini date ile kullaniblmek için 1000 ile çarpıp milisaniyeyee çevirdik
  const date = new Date(unix_time * 1000);

  // tarihi moment ile formatlıyoruz
  return moment(date).calendar();
};

export default formatDate;
