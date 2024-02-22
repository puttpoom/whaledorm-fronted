import Spinner from "./components/Spinner";
import useAuth from "./hooks/use-auth";
import Router from "./route";

export default function App() {
  const { initialLoading } = useAuth();
  if (initialLoading) return <Spinner />;
  return (
    <>
      <Router />
    </>
  );
}
