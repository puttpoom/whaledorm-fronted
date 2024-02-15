import LoginForm from "../features/auth/component/LoginForm";
import RegisterForm from "../features/auth/component/RegisterForm";

const HomePage = () => {
  return (
    <div>
      <div>Map</div>
      <div>Dorm List</div>
      <RegisterForm />
      {/* <LoginForm /> */}
    </div>
  );
};

export default HomePage;
