/*
    ! Bir type tanımlarken generic kullanmak
    * Özellikle union ve obje tanımlarken bazı elemanların türü dinamik(yani generic) olması gerekebilir.
    * Bu durumda generici type isminden sonra yazarız.
    * Kullanma esnasında mutlaka generic typeın gereken typenı belirlemeliyiz.Fonksiyonlardaki gibi otomatik type bulma özelliği burada aktif değildir.
*/

type ApiResponseType<DataType> = {
  status: "success" | "error";
  data: DataType;
};

const apiResult: ApiResponseType<object> = {
  status: "success",
  data: { id: 1, name: "test" },
};

type AuthResponseType = {
  id: number;
  firstname: string;
  lastname: string;
};
const authApiResult: ApiResponseType<AuthResponseType> = {
  status: "success",
  data: {
    id: 1,
    firstname: "test",
    lastname: "test",
  },
};

type ExampleType<Generic1> = string | number | Generic1;
let test2: ExampleType<boolean> = true;
test2 = 43;
test2 = "test";

enum DayEnum {
  pazartesi,
  sali,
  carsamba,
}
let test4: ExampleType<object | null | DayEnum> = DayEnum.pazartesi;
test4 = null;

type ReverseArray<T> = {
  original: T[];
  reversed: T[];
};

function reverseArray<T>(array: T[]): ReverseArray<T> {
  const reversedArray = [...array].reverse();
  return { original: array, reversed: reversedArray };
}

const numbers = [1, 2, 3, 4, 5];
const strings = ["apple", "banana", "cherry"];

const reversedNumbers: ReverseArray<number> = reverseArray(numbers);
const reversedStrings: ReverseArray<string> = reverseArray(strings);
console.log(reversedNumbers);

console.log(reversedStrings);
