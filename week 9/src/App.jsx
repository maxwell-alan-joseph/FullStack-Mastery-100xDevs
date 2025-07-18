import './App.css'
import miguel from './assets/miguel.jpg'

const style = { 
  backgroundColor: "black",
  borderRadius: 10,
  borderColor: "gray",
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  width: "100vw"
  
}

function App() {
  return ( 
  <div style={style}>
    <PostComponent />
  </div>

  )
}

function PostComponent() {
  return (
    <div style = {{
      display: "flex",
      alignItems: "column",
      gap: 15
    }}>

      <div style = {{
        
      }}>

        <div id = "img">
          <img src={miguel} style= {{
          width: 60,
          height: 60,
          borderRadius:30
          }}>
          </img>
        </div>

        <div id = "content"
          style= {{ 
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: 7,
        }}>
          <h3>Toji_</h3>
          <h4>@binaryChamp_</h4>
          <h5>15 hrs ago</h5>
         </div>

      </div>

      <span style = {{
        color: "white",
        marginLeft: 75,
        whiteSpace: "pre-line"
      }}>
        - Day 18 - Until I land on a job
        - completed react basics 
        - working on a new small time react application 
      </span>

    </div>
  )
}

export default App