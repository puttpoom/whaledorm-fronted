import Spinner from "./components/Spinner";
import RoomContextProvider, {
  RoomContext,
} from "./features/room/contexts/RoomContext";
import useAuth from "./hooks/use-auth";
import Router from "./route";

const App = () => {
  const { initialLoading } = useAuth();
  if (initialLoading) return <Spinner />;
  return (
    <>
      <Router />
    </>
  );
};
export default App;
