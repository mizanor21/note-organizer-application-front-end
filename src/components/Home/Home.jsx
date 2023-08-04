import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";
import Notes from "../Notes/Notes";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="min-h-screen container mx-auto my-10">
      <Notes></Notes>
    </div>
  );
};

export default Home;
