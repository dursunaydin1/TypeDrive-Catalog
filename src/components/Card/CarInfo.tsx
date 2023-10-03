type InfoProps = {
  icon: string; // Bilgi simgesinin (ikonun) dosya yolu veya kaynak
  title: string; // Bilginin başlığı veya adı
};

// CarInfo bileşeni, bir bilgi simgesi ve başlık içeren bir bileşendir.
// icon: Bilgi simgesinin (ikonun) dosya yolu veya kaynak
// title: Bilginin başlığı veya adı
const CarInfo = ({ icon, title }: InfoProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {/* Bilgi simgesi */}
      <img src={icon} width={20} alt={`${title} icon`} />

      {/* Bilgi başlığı */}
      <p className="text-[14px]">{title}</p>
    </div>
  );
};

export default CarInfo;
