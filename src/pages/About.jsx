import React, { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";

const About = (props) => {
  const { token } = useContext(AuthContext);
  return (
    <>
      {token ? (
        <div>This is the About page!</div>
      ) : (
        <div>Unluggy you cannot see this</div>
      )}
    </>
  );
};

export default About;
