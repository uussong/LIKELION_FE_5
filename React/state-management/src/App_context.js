import InputInfo from "./components/InputInfo_context";
import Header from "./components/Header_context";
import UserContext from "./context/nameContext";


function App() {

  return (
    <>
      <UserContext>
        <Header/>
        <InputInfo />
      </UserContext>
    </>
  );
}
export default App;