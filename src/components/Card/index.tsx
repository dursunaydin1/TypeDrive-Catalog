import { ICarProps } from "../../types";
import { generateImage } from "../../utils";
import CustomButton from "../CustomButton";
import CarInfo from "./CarInfo";
import DetailModal from "./DetailModal";
import { useState } from "react";
import { motion } from "framer-motion";

type CardProps = {
  car: ICarProps; // Gösterilen araba verisi
};

const Card = ({ car }: CardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <motion.div initial={{scale:0.5}} whileInView={{scale:1}} className="car-card group">
      {/* Araba Başlığı */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>

      {/* Fiyat */}
      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px] font-semibold">TL</span>
        {Math.round(Math.random() * 2000) + 500}
        <span className="self-end text-[14px] font-medium">/gün</span>
      </p>

      {/* Resim */}
      <div className="w-full h-40 my-3 object-contain">
        <img
          src={generateImage(car)}
          className="w-full h-full object-contain"
          alt={`Araba Resmi - ${car.make} ${car.model}`}
        />
      </div>

      {/* Bilgiler */}
      <div className="relative w-full mt-2">
        <div className="group-hover:invisible mt-2 flex justify-between text-gray w-full">
          <CarInfo
            title={car.transmission === "a" ? "Otomatik" : "Manuel"}
            icon="/steering-wheel.svg"
          />
          <CarInfo title={car.drive?.toUpperCase()} icon="/steering-wheel.svg" />
          <CarInfo title={`${car.city_mpg} MPG`} icon="/steering-wheel.svg" />
        </div>
        <div className="car-card__btn-container">
          {/* Daha Fazla Butonu */}
          <CustomButton
            handleClick={() => setIsOpen(true)}
            title="Daha Fazla"
            designs="w-full py-[16px] rounded-full bg-primary-blue text-white transition hover:bg-blue-800"
            rIcon="/right-arrow.svg"
          />
        </div>
      </div>

      {/* Detay Modal */}
      <DetailModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </motion.div>
  );
};

export default Card;
