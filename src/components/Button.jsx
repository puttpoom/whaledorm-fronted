const bgClasses = {
  blue: "bg-blue-900",
  red: "bg-white",
  green: "bg-green-500",
  red2: "bg-red-600",
};

const textClasses = {
  white: "text-white",
  red: "text-red-700",
};

const Button = ({
  color,
  textColor,
  width,
  text,
  outline,
  children,
  onClick,
}) => {
  return (
    <>
      <button
        className={`${bgClasses[color]} ${textClasses[textColor]} ${outline} w-${width} font-bold rounded-md py-2.5 px-4 text-${text} flex justify-center gap-1 flex-none`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
