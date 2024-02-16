import { MoreHorizontal } from "lucide-react";

export default function Spinner() {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-20 z-40"></div>
      <div className="fixed inset-0 z-50">
        <div className="flex items-center justify-center min-h-full">
          <MoreHorizontal className="fill-slate-500 animate-bounce" />
        </div>
      </div>
    </>
  );
}
