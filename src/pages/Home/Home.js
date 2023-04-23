import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-main">
      <section className="header-section">
        <h1>
          Farmtrade
          <span className="span-home">Support your local farmers</span>
        </h1>
        <h2 className="h2-home">Eat local, seasonal & sustainable</h2>
      </section>
    </main>
  );
};

export default Home;
