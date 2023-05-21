import PageHeader from "./Components/Header/PageHeader";
import PageDesc from './Components/Main/PageDesc'
import InputGoal from "./Components/Main/InputGoal";
import DisplayGoal from "./Components/Main/DisplayGoal";
import PageFooter from "./Components/Footer/PageFooter";
import './style/reset.css'
import './style/10000hours.css'
import { useState } from "react";
import Modal from "./Components/Modal/Modal";

function App() {
  const [data, setData] = useState(null)
  console.log('data', data)
  return (
    <>
      <PageHeader />
      <main>
        <PageDesc />
        <InputGoal setData={setData} />
        {data && <DisplayGoal data={data} />}
      </main>
      <PageFooter />
      <Modal />
    </>
  );
}
export default App;
