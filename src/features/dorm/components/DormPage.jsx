import useAuth from "../../../hooks/use-auth";

export default function DormPage() {
  const { authUser } = useAuth();
  console.log(authUser.role);
  return <div>DormPage</div>;
}
