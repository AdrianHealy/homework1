import Receipts from "./components/Receipts";
import FormEmail from "./components/FormEmail";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <div className="App">
      <MyRoutes>
        {/* <Counter /> */}
        {/* <Receipts /> */}
        <FormEmail />
      </MyRoutes>
    </div>
  );
}

export default App;
