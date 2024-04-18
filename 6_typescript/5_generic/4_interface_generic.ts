/*
    Interface içerisinde kullanılmak üzere generic typelar tanımlanabilir.Bunu 
    yaparken classlardaki yöntemi kullanırız.
*/
interface IPair<K, V> {
  key: K;
  value: V;
}

interface IDatabase<T> {
  connect(): void;
  disconnect(): void;
  fetchData(query: string): T;
  saveData(data: T): void;
}

class MySQLDataBase implements IDatabase<string> {
  connect(): void {
    console.log("MySQL database connected");
  }
  disconnect(): void {
    console.log("MySQL database disconnected.");
  }
  fetchData(query: string): string {
    console.log(query);
    return "MySQL data";
  }
  saveData(data: string): void {
    console.log(data);
  }
}
const dataBase = new MySQLDataBase();
dataBase.connect();
dataBase.saveData("New data");
