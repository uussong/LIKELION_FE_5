import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiaryPage from "./components/Diary/DiaryPage";
import Header from "./components/Header";
import UserPage from "./components/User/UserPage";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/diary" element={<DiaryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
