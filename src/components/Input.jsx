export default function Input({
  placeholder = "",
  onChange,
  type,
  name,
  value,
  disabled,
  max,
  className,
  errors,
  register,
  textTitle,
}) {
  // function customClassNameWhenError(errors) {
  //   if (errors) {
  //     return "border-red-500";
  //   }
  //   return "";
  // }

  return (
    <>
      <div className="flex items-center gap-4">
        <input
          {...register(name)}
          maxLength={max}
          value={value}
          type={type}
          placeholder={placeholder}
          className={`border border-blue-300 rounded-lg px-4 h-10 focus:outline-2 outline-blue-200 ${className}`}
          onChange={onChange}
          disabled={disabled}
        />
        {textTitle}
      </div>
      {errors && (
        <p className=" text-sm text-red-500">{errors?.[name]?.message}</p>
      )}
    </>
  );
}
