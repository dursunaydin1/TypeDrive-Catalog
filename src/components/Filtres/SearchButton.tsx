type ButtonProps = {
  styling: string; // Butonun stilini belirlemek için kullanılan CSS sınıfı veya stil tanımı
};

// SearchButton bileşeni, bir arama butonunu temsil eder
const SearchButton = ({ styling }: ButtonProps) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
      {/* Arama ikonu görüntüsü */}
      <img src="/magnifying-glass.svg" width={40} height={40} alt="Arama" />
    </button>
  );
};

export default SearchButton;
