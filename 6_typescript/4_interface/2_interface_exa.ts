interface IMusicPlayer {
  api: string;

  play(song: string): void;
  pause(): void;
}
// Nesne üzerinde interface tanımlama
const Spotify: IMusicPlayer = {
  api: "www.spotify.com",
  play(song) {
    console.log("Spotify açılıyor...");
    console.log("Spotify veritabanına istek atıldı.");
    console.log(song + " " + "çalıyor...");
  },
  pause() {
    console.log("Oynatılan müzik durduruldu.");
  },
};
Spotify.play("Müslüm");
Spotify.pause();
//* Classlarda interface ile tip tanımlayacaksak implements kullanılır.
class AppleMusic implements IMusicPlayer {
  api: string;
  constructor() {
    this.api = "www.apple.music";
  }
  play(song: string): void {
    console.log("Apple music açılıyor...");
    console.log("Apple music veritabanına istek atıldı.");
    console.log(song + " " + "çalıyor...");
  }
  pause(): void {
    console.log("Oynatılan müzik durduruldu.");
  }
}

const music = new AppleMusic();
music.play("Buray");

interface IUser {
  id: number;
  username: string;
  email: string;
  age?: number;
}

class User implements IUser {
  id: number;
  email: string;
  age?: number;
  username: string;
  // constructor kullanarak özellikleri ayarlıyoruz
  constructor(id: number, username: string, email: string, age?: number) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.age = age;
  }
  printUserInfo() {
    console.log(
      `ID:${this.id}, Username:${this.username}, Email:${this.email}`
    );
    if (this.age) {
      console.log(`Age:${this.age}`);
    }
  }
}

const user1 = new User(1, "Didem", "example@gmail.com");
const user2 = new User(1, "Didem", "example@gmail.com", 22);
user1.printUserInfo();
user2.printUserInfo();
