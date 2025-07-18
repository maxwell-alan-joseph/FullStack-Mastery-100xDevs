import './App.css'
import miguel from './assets/miguel.jpg'

const style = { 
  backgroundColor: "#000",
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
    <div id="posts" style={{
      display: "flex",
      flexDirection: "column",
      gap: 20
    }}>
      
      {/* Post 1 */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        border: "1px solid #2f3336",
        borderRadius: 13,
        padding: 19,
        backgroundColor: "#1e1e1e",
        maxWidth: 700
      }}>
        
        <div style={{
          display: "flex", 
          alignItems: "center", 
          gap: 12
        }}>
          <div>
            <img src={miguel} style={{
              width: 40,
              height: 40,
              borderRadius: 25
            }} />
          </div>

          <div style={{ 
            color: "#e7e9ea",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}>
            <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>Toji_</h3>
            <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "normal", opacity: 0.7 }}>@binaryChamp_</h4>
            <h5 style={{ margin: 0, fontSize: "12px", fontWeight: "normal", opacity: 0.5 }}>15 hrs ago</h5>
          </div>
        </div>

        <div style={{
          color: "#d9d9d9",
          marginLeft: 40,
          lineHeight: "1.2",
          marginTop: -4
        }}>
          - Day 18 - Until I land on a job<br/>
          - completed react basics<br/>
          - working on a new small time react application
        </div>
      </div>

      {/* Post 2 */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        border: "1px solid #333333",
        borderRadius: 13,
        padding: 19,
        backgroundColor: "#1a1a1a",
        maxWidth: 700
      }}>
        
        <div style={{
          display: "flex", 
          alignItems: "center", 
          gap: 12
        }}>
          <div>
            <img src={miguel} style={{
              width: 40,
              height: 40,
              borderRadius: 25
            }} />
          </div>

          <div style={{ 
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}>
            <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>Toji_</h3>
            <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "normal", opacity: 0.7 }}>@binaryChamp_</h4>
            <h5 style={{ margin: 0, fontSize: "12px", fontWeight: "normal", opacity: 0.5 }}>15 hrs ago</h5>
          </div>
        </div>

        <div style={{
          color: "#cccccc",
          marginLeft: 40, 
          lineHeight: "1.2",
          marginTop: -22
        }}>
          - Created a replicated posts column<br/>
          - Similar to X from Elon
        </div>
      </div>

      {/* Post 3*/}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        border: "1px solid #333333",
        borderRadius: 13,
        padding: 19,
        backgroundColor: "#1a1a1a",
        maxWidth: 700
      }}>
        
        <div style={{
          display: "flex", 
          alignItems: "center", 
          gap: 12
        }}>
          <div>
            <img src={miguel} style={{
              width: 40,
              height: 40,
              borderRadius: 25
            }} />
          </div>

          <div style={{ 
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}>
            <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>Toji_</h3>
            <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "normal", opacity: 0.7 }}>@binaryChamp_</h4>
            <h5 style={{ margin: 0, fontSize: "12px", fontWeight: "normal", opacity: 0.5 }}>15 hrs ago</h5>
          </div>
        </div>

        <div style={{
          color: "#cccccc",
          marginLeft: 40, 
          lineHeight: "1.2",
          marginTop: -22
        }}>
          - Created a replicated posts column<br/>
          - Similar to X from Elon
        </div>
      </div>
      {/* Post 4*/}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        border: "1px solid #333333",
        borderRadius: 13,
        padding: 19,
        backgroundColor: "#1a1a1a",
        maxWidth: 700
      }}>
        
        <div style={{
          display: "flex", 
          alignItems: "center", 
          gap: 12
        }}>
          <div>
            <img src={miguel} style={{
              width: 40,
              height: 40,
              borderRadius: 25
            }} />
          </div>

          <div style={{ 
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}>
            <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>Toji_</h3>
            <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "normal", opacity: 0.7 }}>@binaryChamp_</h4>
            <h5 style={{ margin: 0, fontSize: "12px", fontWeight: "normal", opacity: 0.5 }}>15 hrs ago</h5>
          </div>
        </div>

        <div style={{
          color: "#cccccc",
          marginLeft: 40, 
          lineHeight: "1.2",
          marginTop: -22
        }}>
          - Post 4<br/>
          - content to add
        </div>
      </div>

      
    </div>
  )
}

export default App