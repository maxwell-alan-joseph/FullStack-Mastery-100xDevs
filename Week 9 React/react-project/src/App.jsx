import { useState } from "react";

function App() {
  return (
    <div>
      <ToggleMessage />
    </div>
  );
}

const ToggleMessage = () => {
  let [notificationCount, setNotificationCount] = useState(0);

  function increment() {
    setNotificationCount(notificationCount + 2);
  }

  return (
    <div>
      <button onClick = {increment}>
        Increase count + 2
      </button>
      {notificationCount}
    </div>
  );
};

export default App;