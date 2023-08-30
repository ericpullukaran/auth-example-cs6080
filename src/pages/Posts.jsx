import React, { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";

const Posts = (props) => {
  const { token } = useContext(AuthContext);
  return (
    <>
      {token ? (
        <div>This is the Posts page!</div>
      ) : (
        <div>Unluggy you cannot see this</div>
      )}
    </>
  );
};

export default Posts;
