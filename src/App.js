import "./App.css";
import FullName from "../src/Component/Profile/FullName";
import Address from "../src/Component/Profile/Address";
import HandleName from "./Component/Profile/HandleName";
const App = () => {
  const followMe = (x) => alert(`Thank You for the follow <3`);

  return (
    <div className="App">
      <header className="App-header">
        <div class="card-container">
          <span class="pro">PRO +</span>
          <h3>
            {" "}
            <FullName name="Khaled Bahia">
              <img class="round" src="/pp.png" alt="profil" />
            </FullName>
          </h3>
          <h6>
            <Address address="Gafsa Tunisia " />
          </h6>
          <p>Front-End Developer</p>
          <div class="buttons">
            <button class="primary">
              <td
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/khaled-bahia-1096a4139/",
                    "_blank"
                  )
                }
              >
                Message
              </td>
            </button>
            <HandleName followMe={followMe} name="Khaled Bahia" />
          </div>
          <div class="skills">
            <h6>Skills</h6>
            <ul>
              <li>Front End Development</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
