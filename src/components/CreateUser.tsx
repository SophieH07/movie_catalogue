import { useState } from "react";
import "./CreateUser.css";

const CreateUser = ({ setUser }: { setUser: Function }) => {
  const [username, setUserName] = useState("");

  function createUser(username: string) {
    localStorage.setItem("user", username);
    setUser(username);
  }

  return (
    <div className="add_user">
      <input
        id="username"
        type="text"
        placeholder="Write a name..."
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={() => createUser(username)}>Create User</button>
    </div>
  );
};

export default CreateUser;
