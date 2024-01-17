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
      
      <div className="stuff">
        <div className="stuff2">
        <Questions title={"About Me"} info={"My name is John Doe."}></Questions>
        <Questions title={"About BETTER Than BOO-GLE"} info={"This is definitely a project."}></Questions>
        <iframe title="spotify" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/11OrbC9K1OQTBGmFOI9ACl?utm_source=generator&theme=0" width="100%" height="152" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <Quoto></Quoto>
      </div>
      
    </div>
  );
}

export default App;
