import "./App.css";
import Profile from "./profile/Profile";

function App() {
  const style = { border: "solid 1px black", maxWidth: "100vw" };
  let bio
  let alrt = () => {
    alert(" welcome in my page");
  }
  return (
    < div className="App">
        <Profile alrt={alrt} name="Ben Ameur Amal "
        bio={ bio}
        profession="économiste "
         children ={<img src="https://i.pinimg.com/originals/89/e1/bc/89e1bc206d631c448cc37ea9cd12f79d.jpg" /> }/>
        </div>
  );
}

export default App;
