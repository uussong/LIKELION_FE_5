import PageHeader from "./Components/Header/PageHeader";
import PageDesc from './Components/Main/PageDesc'
import InputGoal from "./Components/Main/InputGoal";
import DisplayGoal from "./Components/Main/DisplayGoal";
import PageFooter from "./Components/Footer/PageFooter";
import './style/reset.css'
import './style/10000hours.css'

function App() {
  return (
    <>
      <PageHeader />
      <main>
        <PageDesc />
        <InputGoal />
        <DisplayGoal />
      </main>
      <PageFooter />
    </>
  );
}
export default App;
