import Select from "react-select"
import { makes } from "../../constants";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {IOption} from "../../types"
import SearchButton from "./SearchButton"

const SearchBar = () => {
  
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [params,setParams]=useSearchParams();


const handleSubmit = (e: React.FormEvent) => {
  // Formun varsayılan yeniden yükleme davranışını engelle
  e.preventDefault();

  // Eğer 'make' seçildi ve 'model' boşsa
  if (make && model === "") {
    // Sorgu parametrelerini sadece 'make' ile güncelle
    setParams({ make: make.toLowerCase() });
  } else if (make && model) {
    // Eğer hem 'make' hem de 'model' seçildi ise
    // Sorgu parametrelerini 'make' ve 'model' ile güncelle
    setParams({
      make: make.toLowerCase(),
      model: model.toLowerCase(),
    });
  } else {
    // Eğer 'make' seçilmediyse, kullanıcıya bir uyarı göster
    alert("Lütfen bir marka seçiniz.");
  }
};

  // string dizisini options dizine çevirme
  // useMemo kullanılarak bu işlem optimize edilir ve sadece makes dizisi değiştiğinde yeniden hesaplanır
  const newMakes = useMemo(
    () =>
      makes.map((item) => ({
        value: item,
        label: item,
      })),
    [makes]
  );
  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      {/* marka seçme alanı */}
      <div className="searchbar__item text-black">
        <Select
          className="w-full"
          options={newMakes}
          onChange={(e: IOption | null) => e && setMake(e.value)}
        />
        <SearchButton styling="sm:hidden" />
      </div>
      {/* model seçme alanı */}
      <div className="searchbar__item">
        <img
          className="absolute ml-4"
          width={25}
          src="/model-icon.png"
          alt="Model Icon"
        />
        <input
          className="searchbar__input text-black rounded"
          placeholder="Model"
          type="text"
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton styling="sm:hidden" />
      </div>
      <SearchButton styling="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
