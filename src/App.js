import "./App.css";
import { Middle } from "./container";
import { HeaderBar } from "./header";
import { Sidebar } from "./sidebar";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <div class="row">
        <div class="column side">
          <Sidebar />
        </div>
        <div class="column middle" style={{ backgroundColor: "#F1F3F6" }}>
          <Middle />
        </div>
      </div>
    </div>
  );
}

export default App;
