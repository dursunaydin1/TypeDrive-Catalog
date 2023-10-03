import CustomButton from "./CustomButton"
import {motion} from "framer-motion"

const Hero = () => {
    const flyTo=()=>{
        alert("merhaba");
        
    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x max-h-[920px]">
            <h1 className="hero__title">Özgürlüğü Hisset, Yoculuğa Başla!</h1>
            <p className="hero__subtitle text-gray-200">
                Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç kiralama denyimini Altın Seçenekleri ile taçlandırarak her anını özel kılabilirsin.
            </p>
            <CustomButton 
            handleClick={flyTo}
            title="Arabaları Keşfet" designs="bg-primary-blue rounded-full mt-10"/>
        </div>
        <div className="w-full flex justify-center">
            <motion.img className="img-fluid object-contain" src="hero.png" alt="" 
            initial={ {translateX:200}}
            whileInView={ {translateX:0}}
            transition={{duration:1}}
            />
        </div>
    </div>
  )
}

export default Hero