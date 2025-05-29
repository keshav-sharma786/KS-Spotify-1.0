// let us start building our home page of our web app
import "./Home.css";
import logo2 from "./images/logo2.jpg";
import arijit02 from "./images/arijit02.jpg";
import atif03 from "./images/atif3.jpg";
// import jubin from "./images/jubin.jpg";
import ayushman from "./images/ayushman.jpg";
import agam from "./images/agam.jpg";
import swati from "./images/swati.jpg";
import vishal from "./images/vishal.jpg";
import jubins from "./images/jubins.jpg";
import karan2 from "./images/karan2.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <ul>
          <li className="brand">
            <img src={logo2} alt="spotify" />
            KS Spotify
          </li>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
      <div className="container"></div>
      <br /> <br /> <br />
      <h1 className="heading">Singers</h1>
      <br /> <br /> <br />
      <div className="main-container">
        <div>
        <img
          onClick={() => {
            navigate("/app");
          }}
          className="image"
          src={arijit02}
          alt="Arijit"
        />
        </div>
        {/* <br /> <br /> <br /> <br /> <br /> */}
        <img
          onClick={() => {
            navigate("/atif");
          }}
          className="image"
          src={atif03}
          alt="Atif"
        />
        {/* <br /> <br /> <br /> <br /> */}
        <img
          onClick={() => {
            navigate("/coming");
          }}
          className="image"
          src={agam}
          alt="agam"
        />
        <img
          onClick={() => {
            navigate("/coming");
          }}
          className="image"
          src={ayushman}
          alt="ayushman"
        />
        <img
          onClick={() => {
            navigate("/coming");
          }}
          className="image"
          src={vishal}
          alt="vishal"
        />
        <img
          onClick={() => {
            navigate("/swati");
          }}
          className="image"
          src={swati}
          alt="swati"
        />
        <img
          onClick={() => {
            navigate("/karan");
          }}
          className="image"
          src={karan2}
          alt="karan"
        />
        <img
          onClick={() => {
            navigate("/coming");
          }}
          className="image"
          src={jubins}
          alt="jubins"
        />
      </div>
      <br /> <br />
      <footer className="footer">
        <h3>🎵 Made with ❤️ by Keshav Sharma • 2025</h3>
      </footer>
    </>
  );
}

export default Home;
