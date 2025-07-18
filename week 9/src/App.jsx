import './App.css'
import miguel from './assets/miguel.jpg'

function App() {
  return (
    <div style = {{
      background: "#1e272e",
      height: "100vh",
      }}>
      <PostComponent />
    </div>
    
  )
}

function PostComponent() {
  return (
    <div>
      <div id="post1">
        <img 
        src={miguel} 
        alt="miguel"
        style={{
          width: 30,
          height: 30, 
          borderRadius: 20
        }}
        />
        <h1>Toji_</h1>
        <h2>@binaryChamp</h2>
    </div>
    </div>
    
  )
}

export default App