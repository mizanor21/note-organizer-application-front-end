import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return <div className="min-h-screen">this is home! {user.displayName}</div>;
};

export default Home;
