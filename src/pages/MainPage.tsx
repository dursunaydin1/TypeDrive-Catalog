import Hero from "../components/Hero";
import SearchBar from "../components/Filtres/SearchBar";
import CustomFilter from "../components/Filtres/CustomFiltres";
import { useEffect, useState } from "react";
import { fetchCars } from "../utils";
import { years, fuels } from "../constants";
import { ICarProps } from "../types";
import Card from "../components/Card";
import ShowMore from "../components/ShowMore";
import { useSearchParams } from "react-router-dom";

const MainPage = () => {
  // URL sorgu parametrelerini kullanmak için react-router-dom'dan useSearchParams hook'unu kullanın.
  const [params, setParams] = useSearchParams();

  // Araba verilerini saklamak için bir state kullanın.
  const [cars, setCars] = useState<ICarProps[]>([]);

  // Sayfa başına görüntülenecek araba sayısını sorgu parametresinden alın veya varsayılan değeri kullanın.
  const limit = Number(params.get("limit")) || 5;

  // Araba verilerini çekmek için useEffect kullanın.
  useEffect(() => {
    // URLSearchParams nesnesini JavaScript nesnesine dönüştürme
    // Bu kod, URLSearchParams nesnesindeki sorgu parametrelerini bir JavaScript nesnesine çevirir.
    const paramsObj = Object.fromEntries(params.entries());

    // Araba verilerini çekin ve state'i güncelleyin.
    fetchCars(paramsObj)
      .then((data: ICarProps[]) => setCars(data))
      .catch(() => alert("Verileri çekerken bir hata oluştu"));
  }, [params]);

  // Verinin gelip gelmediğini kontrol etmek için bir boolean değeri kullanın.
  const isDataEmpty: boolean = !Array.isArray(cars) || cars.length < 1 || !cars;

  return (
    <div>
      {/* Üst kısım */}
      <Hero />

      {/* Katalog */}
      <div className="mt-12 padding-x padding-y max-width">
        {/* Başlık */}
        <section className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </section>

        {/* Filtreler  */}
        <section className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title={"Yakıt Tipi"} options={fuels}/>
            <CustomFilter title={"Üretim Yılı"} options={years} />
          </div>
        </section>

        {/* Araba listesi */}
        {isDataEmpty ? (
          <div className="home__error-container">
            <h2>Herhangi bir sonuç bulunamadı!</h2>
          </div>
        ) : (
          <>
            <section>
              <div className="home__cars-wrapper">
                {/* Araba kartlarını haritalayın */}
                {cars.map((car, i) => (
                  <Card key={i} car={car} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>

      {/* Daha fazla yükle butonu */}
      <ShowMore limit={limit} isNext={limit < 30} />
    </div>
  );
};

export default MainPage;
