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
}) {
  return (
    <>
      <input
        {...register(name)}
        max={max}
        // name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        className={`border border-blue-300 rounded-lg px-4 h-10 w-full focus:outline-2 outline-blue-200 ${className}`}
        onChange={onChange}
        disabled={disabled}
      />
      {errors?.[name] ? (
        <p className="text-red-500 text-sm">{errors?.[name].message}</p>
      ) : null}
    </>
  );
}
