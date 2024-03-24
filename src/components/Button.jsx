const bgClasses = {
  gray: "bg-gray-500",
  blue: "bg-blue-900",
  red: "bg-white",
  green: "bg-green-500",
  red2: "bg-red-600",
  bookBtn: "bg-[#577CFF]",
  PEDNING: "bg-yellow-500",
  CANCLED: "bg-red-600",
  CONFIRM: "bg-green-500",
};

const textClasses = {
  white: "text-white",
  red: "text-red-700",
};

const textSizeClasses = {
  sm: "text-sm",
  lg: "text-lg",
};

const Button = ({
  color,
  textColor,
  width,
  text,
  outline,
  children,
  onClick,
  textSize,
}) => {
  return (
    <>
      <button
        className={`${bgClasses[color]} ${textClasses[textColor]} ${outline} w-${width} ${textSizeClasses[textSize]} text-md font-semibold rounded-md py-2.5 px-4 text-${text} flex justify-center gap-1 flex-1 items-center`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
