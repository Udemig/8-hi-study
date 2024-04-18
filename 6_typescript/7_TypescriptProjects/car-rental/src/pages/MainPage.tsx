import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

const MainPage = () => {
  return (
    <div>
      <Hero />

      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container ">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>
        {/* Filtreleme Alanı */}
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
