import './Home.css'; 
import PokeFlex from "./PokeFlex";
import PokeGrid from "./PokeGrid";
import Menu from '.Menu';

const Home = () => {
  return (
      <div className="Home">
          <h1>Home</h1>
          <PokeFlex />
          <PokeGrid />
      </div>
  );
};

export default Home;