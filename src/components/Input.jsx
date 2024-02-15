export default function Input({
  placeholder = "",
  onChange,
  type = "text",
  name,
  value,
}) {
  return (
    <>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        className="border border-blue-300 rounded-lg px-4 h-10 w-full focus:outline-2 outline-blue-200"
        onChange={onChange}
      />
    </>
  );
}
