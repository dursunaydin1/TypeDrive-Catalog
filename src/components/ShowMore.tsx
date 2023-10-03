import { useSearchParams } from "react-router-dom";
import CustomButton from "./CustomButton";

interface IShowMore {
  limit: number;
  isNext: boolean;
}
// IShowMore bileşeni, veri sayfasında daha fazla veriyi yüklemek için kullanılır.
// limit: Mevcut veri limiti
// isNext: Daha fazla veri olup olmadığını gösteren bir bayrak
const ShowMore = ({ limit, isNext }: IShowMore) => {
  const [params, setParams] = useSearchParams();

  // Yeni veri limitini ayarlayan işlev
  const handleNavigate = () => {
    const newLimit = Number(limit) + 5;

    // Yeni sorgu parametrelerini oluştur
    
    params.set("limit", String(newLimit));

    // Sorgu parametrelerini güncelle
    setParams(params);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {isNext && (
        <CustomButton
          title="Daha Fazla"
          designs="bg-primary-blue rounded-full transition hover:bg-blue-800"
          handleClick={handleNavigate}
        />
      )}
    </div>
  );
};

export default ShowMore;
