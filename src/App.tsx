import { useEffect, useState } from "react";
import "./App.css";
import Catalogue from "./pages/Catalogue";
import Header from "./pages/Header";
import CreateUser from "./components/CreateUser";
import Peaky from "./assets/peaky.jpg";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const username = localStorage.getItem("user");
    if (username !== null) {
      setUser(username);
    }
  }, [user]);

  return (
    <>
      <Header user={user} />
      {user ? (
        <div>
          <button>Add new movie</button>
          <Catalogue />
        </div>
      ) : (
        <div>
          <CreateUser setUser={setUser} />
          <div>
            <img src={Peaky} alt="peaky blinders" />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
