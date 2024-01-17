import Questions from "./Components/Questions"
import Quoto from "./Components/Quoto";
import Search from "./Components/Search"
import Nav from "./Components/Nav"
function App() {
  return (
    <div className="App">
      <div className="bImg"></div>
      <Nav></Nav>
      <Search></Search>
      <Questions title={"About Me"} info={"E"}></Questions>
      <Quoto></Quoto>

      <iframe title="spotify" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/11OrbC9K1OQTBGmFOI9ACl?utm_source=generator&theme=0" width="30%" height="152" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  );
}

export default App;
