import { ICarProps } from "../../types";
import { generateImage } from "../../utils";
import {motion} from "framer-motion"

interface IDetailModalProps {
  isOpen: boolean; // Modal penceresi açık mı?
  closeModal: () => void; // Modalı kapatma işlevi
  car: ICarProps; // Gösterilecek araba verisi
}

// DetailModal bileşeni, bir araba ayrıntılarını içeren bir modal penceresidir.
// isOpen: Modal penceresi açık mı?
// closeModal: Modalı kapatma işlevi
// car: Gösterilecek araba verisi
const DetailModal = ({ isOpen, closeModal, car }: IDetailModalProps) => {
  return (
    <>
      {isOpen && (
        <div
          
          className="fixed inset-0 bg-black bg-opacity-25 z-20 flex items-center justify-center p-4"
        >
          <div className="p-6 relative bg-white w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto">
            {/* Kapatma butonu */}
            <button
              onClick={closeModal}
              className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
            >
              <img src="/close.svg" alt="Kapat" />
            </button>
            {/* Resimler */}
            <div className="flex flex-1 flex-col gap-3">
              {/* Üst resim */}
              <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                <img
                  className="h-full mx-auto object-contain"
                  src={generateImage(car)}
                  alt="Araba Resmi"
                />
              </div>
              {/* Alt resimler */}
              <div className="flex gap-3">
                <div className="relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <img
                    className="h-full mx-auto object-contain"
                    src={generateImage(car, "29")}
                  />
                </div>
                <div className="relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <img
                    className="h-full mx-auto object-contain"
                    src={generateImage(car, "33")}
                  />
                </div>
                <div className="relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <img
                    className="h-full mx-auto object-contain"
                    src={generateImage(car, "13")}
                  />
                </div>
              </div>
            </div>
            {/* Bilgiler */}
            <div className="mt-3 flex flex-wrap gap-4">
              {Object.entries(car).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between w-full text-right"
                >
                  <h4 className="text-gray capitalize">
                    {key.split("_").join(" ")}
                  </h4>
                  <p className="font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailModal;
