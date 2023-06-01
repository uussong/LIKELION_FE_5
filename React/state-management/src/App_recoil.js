import InputInfo from "./components/InputInfo_recoil";
import Header from "./components/Header_recoil";
import { RecoilRoot } from "recoil";


function App() {

  return (
    <>
      <RecoilRoot>
        <Header/>
        <InputInfo />
      </RecoilRoot>
    </>
  );
}
export default App;