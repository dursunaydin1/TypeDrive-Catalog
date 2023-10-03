import { useEffect, useState } from "react";
import { IOption } from "../../types";
import Select from "react-select";
import { useSearchParams } from "react-router-dom";

interface IFilterProps {
  title: string; // Filtre başlığı
  options: IOption[]; // Filtre seçenekleri
}

const CustomFilter = ({ title, options }: IFilterProps) => {
  // Seçilen seçenek durumunu tutacak bir state tanımlanır
  const [selected, setSelected] = useState<IOption>(options[0]);

  // URL'deki sorgu parametrelerini işlemek için react-router-dom'dan useSearchParams kullanılır
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    // Seçilen seçeneğin tipine bağlı olarak ilgili sorgu parametresinin adı belirlenir
    const key = title === "Yakıt Tipi" ? "fuel" : "year";

    if (selected.value) {
      // Seçilen seçenek değeri varsa, bu değeri küçük harfe çevirip ilgili sorgu parametresine ekler
      params.set(key, selected.value.toLowerCase());
    } else {
      // Seçilen bir seçenek yoksa, ilgili sorgu parametresini kaldırır
      params.delete(key);
    }

    // Sorgu parametrelerini güncellemek için setParams kullanılır
    setParams(params);
  }, [selected]);

  return (
    <div>
      {/* Filtre için seçenekleri içeren Select bileşeni */}
      <Select
        className="text-black min-w-[100px]"
        placeholder={title}
        options={options}
        onChange={(e: IOption | null) => e && setSelected(e)}
      />
    </div>
  );
};

export default CustomFilter;
