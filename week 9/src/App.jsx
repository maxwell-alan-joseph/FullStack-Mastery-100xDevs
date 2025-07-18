import './App.css'
import miguel from './assets/miguel.jpg'

const style = { 
  backgroundColor: "black",
  display: "flex",
  alignItems: "center",
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
      alignContent: "center",
      flexDirection: "column",
      gap: 0,
      border: "1px solid gray",
      borderRadius: 13,
      padding: 23,
      backgroundColor: "GrayText"
    }}>

      <div style = {{
        display: "flex", 
        alignItems: "center", 
        gap: 15
      }}>

        <div id = "img">
          <img src={miguel} style= {{
          width: 50,
          height: 50,
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
          <h3 style = {{ margin: 0}}>Toji_</h3>
          <h4 style = {{ margin: 0}}>@binaryChamp_</h4>
          <h5 style = {{ margin: 0}}>15 hrs ago</h5>
         </div>

      </div>

      <span style = {{
        color: "white",
        marginLeft: 50,
        marginTop: -20,
        whiteSpace: "pre-line"
      }}>
        {` 
        - Day 18 - Until I land on a job
    - completed react basics 
        - working on a new small time react application `}
      </span>

    </div>
  )
}

export default App