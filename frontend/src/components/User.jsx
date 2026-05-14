import { useLocation } from "react-router";

function User() {
  let { state } = useLocation();
  if (!state?.user) {
  return <p>No user data found</p>;
}

  console.log(state.user);
  return (
    <div>
      <p>{state?.user?.name}</p>
      <p>{state?.user?.email}</p>
      <p>
  {state?.user?.dateOfBirth
    ? new Date(state.user.dateOfBirth).toLocaleDateString()
    : "No DOB"}
</p>
      <p>{state?.user?.mobileNumber}</p>
    </div>
  );
}

export default User;