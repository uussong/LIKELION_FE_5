import InputInfo from "./components/InputInfo_props";
import Header from "./components/Header_props";
import { useState } from "react";


function App() {
  const [name, setName] = useState('')

  return (
    <>
      <Header name={name} />
      <InputInfo setName={setName} name={name} />
    </>
  );
}
export default App;