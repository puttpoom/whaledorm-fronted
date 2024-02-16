export default function FarFormLable({ children, text, type }) {
  return (
    <span
      className={`text-[14px] px-3 py-1 rounded-full border border-gray-600 text-gray-600 border-r`}
    >
      {children}
    </span>
  );
}
