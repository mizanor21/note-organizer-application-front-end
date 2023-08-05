import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";
import Notes from "../Notes/Notes";
import Login from "../Authentication/Login/Login";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="min-h-screen container mx-auto my-10">
      {user ? <Notes></Notes> : <Login></Login>}
    </div>
  );
};

export default Home;
