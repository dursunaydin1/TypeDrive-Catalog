import { ICarProps } from "../types";
import { colors } from "../constants";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6531794c49msh38dff0025c8d668p1c1dcdjsncfc3e0e62e8c",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};
interface fetchParams{
  make?:string;
  model?:string;
  limit?:string;
  year?:string;
  fuel?:string;
}

// `fetchCars` işlevi, belirtilen sınırlı sayıda araba verisini getiren bir HTTP isteği yapar.
// limit: İstenen araba verisi sayısı
// Dönen değer: Bir Promise nesnesi, istenen araba verilerini içerir.
export async function fetchCars(filters:fetchParams) {
  const {
    make="bmw",
    model="",
    limit="5",
    year="",
    fuel="",
  }= filters;

    const res = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?limit=${limit}&make=${make}&model=${model}&year=${year}&fuel_type=${fuel}`,
      options
    );

    if (!res.ok) {
      // Sunucu yanıtı başarısızsa hata fırlat
      throw new Error("Araba verileri alınamadı.");
    }

    // HTTP yanıtını JSON formatına çevir
    const data = await res.json();
    return data;
 
}

// Fonksiyon, belirli bir araba modeli için bir görüntü URL'si oluşturur.
// Parametreler:
// - car: Araba modeli bilgisini içeren bir nesne
// - angle (isteğe bağlı): Görüntü açısını belirten bir dize
// Dönüş Değeri: Oluşturulan görüntü URL'si (URL nesnesi olarak)
export const generateImage = (car: ICarProps, angle?: string) => {
  // Görüntü URL'sini oluştur
  const url = new URL("https://cdn.imagin.studio/getimage");

  // Sabit parametreler ekleniyor
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("zoomType", "fullscreen");

  // Araba modeli bilgileri ekleniyor
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model.split("")[0].split("/")[0]);
  //Renk tanımlamaların olduğu dizen rastgele araç renglerini seçme
  const i=Math.round(Math.random()*colors.length)
  url.searchParams.append("paintId", colors[i]);

  // İsteğe bağlı açı parametresi ekleniyor (varsa)
  if (angle) {
    url.searchParams.append("angle", angle);
  }

  // Oluşturulan URL nesnesi döndürülüyor
  return url.href;
};
