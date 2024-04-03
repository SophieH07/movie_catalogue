import { useEffect, useState } from "react";
import "./App.css";
import Catalogue from "./pages/Catalogue";
import Header from "./pages/Header";
import CreateUser from "./components/CreateUser";
import A from "./assets/arcane.png";
import BES from "./assets/blue.eye.ramurai.png";
import PK from "./assets/peakyblinders.jpg";
import FF from "./assets/fastandfurious.png";
import GO from "./assets/goodomens.png";
import QG from "./assets/queensgambit.png";
import G from "./assets/theglory.png";
import W from "./assets/wednesday.png";

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
          <div className="box">
            <span style={{ "--i": 1 } as any}>
              <img src={PK} alt="peaky blinders" />
            </span>
            <span style={{ "--i": 2 } as any}>
              <img src={FF} alt="fast and furious" />
            </span>
            <span style={{ "--i": 3 } as any}>
              <img src={GO} alt="good omens" />
            </span>
            <span style={{ "--i": 4 } as any}>
              <img src={QG} alt="queen's gambit" />
            </span>
            <span style={{ "--i": 5 } as any}>
              <img src={G} alt="the glory" />
            </span>
            <span style={{ "--i": 6 } as any}>
              <img src={W} alt="wednesday" />
            </span>
            <span style={{ "--i": 7 } as any}>
              <img src={A} alt="arcane" />
            </span>
            <span style={{ "--i": 8 } as any}>
              <img src={BES} alt="blue eye samurai" />
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
