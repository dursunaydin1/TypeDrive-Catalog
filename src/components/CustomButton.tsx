import { IButtonProps } from "../types";

// CustomButton bileşeni, özelleştirilebilir bir düğme oluşturur.
// title: Düğme metni
// designs: Düğmenin tasarım sınıfları
// btnType: Düğme türü (button veya submit)
// handleClick: Düğme tıklama işlevi
// rIcon: İkincil bir simge (isteğe bağlı)
const CustomButton = ({
  title,
  designs,
  btnType,
  handleClick,
  rIcon,
}: IButtonProps) => {
  return (
    <button
      onClick={handleClick}
      disabled={false}
      type={btnType}
      className={`custom-btn ${designs}`}
    >
      <span className="flex-1">{title}</span>
      {rIcon && (
        <div className="relative w-6 h-6">
          <img src={rIcon} alt="İkincil Simge" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
