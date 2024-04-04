//* Union Types (Birleşmiş Tipler)
//* Bir değişkennin tipinin alabilecği birden fazla farklı türde veri varsa kullanılır.

let user: string | number;

user = 'Ahmet';
user = 35;

// Keni oluşturğumuz tipler içinde kullanabilriz

type iosType = {
  ios_version: number;
  device: string;
};

type androidType = {
  android_version: string;
  device: string;
};

let phone: iosType | androidType;

phone = {
  ios_version: 16,
  device: 'iphone 15',
};
