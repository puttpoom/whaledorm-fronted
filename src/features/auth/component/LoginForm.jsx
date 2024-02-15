import Input from "../../../components/Input";
import Button from "../../../components/Button";

export default function LoginForm() {
  return (
    <div className="bg-white shadow-[0_0_15px_rgb(0,0,0,0.2)] rounded-md w-[560px] px-12 py-8 flex flex-col gap-4 content-center">
      <h2 className="text-2xl font-bold">Login</h2>
      <div>
        <span>Email</span>
        <Input placeholder="example@email.com" />
      </div>
      <div>
        <div className="flex justify-between">
          <span>Password</span>
          <span className="text-sm text-blue-500">For got?</span>
        </div>
        <Input placeholder="Enter your Password" />
      </div>
      <div>
        <Button color="blue" text="white" width="full">
          Login
        </Button>
      </div>
    </div>
  );
}
