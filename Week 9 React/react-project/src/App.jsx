
import { PostComponent } from "./post";

function App() {
  function addPost() {
  }
    return(
      <div style={{height: "100vh", position: "relative"}}>
        <button onClick={addPost} style={{position: "absolute", left: "20px", top: "20px", padding: "10px 20px", fontSize: "16px"}}>Add post</button>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
          <PostComponent
            name={"alan"}
            subtitle={"100 followers"}
            time={"5m ago"}
            image={"https://pixabay.com/photos/bird-nature-wildlife-plumage-9811729/"}
            description={"Obsession beats talent"}
          />
        </div>
      </div>
    )
}

export default App;
