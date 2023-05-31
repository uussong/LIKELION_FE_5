import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiaryPage from "./components/Diary/DiaryPage";
import Header from "./components/Header";
import UserPage from "./components/User/UserPage";
import UserStore from "./store/user";


function App() {
  return (
    <>
      <BrowserRouter>
        <UserStore>
          <Header />
          <Routes>
            <Route path="/" element={<UserPage />} />
            <Route path="/diary" element={<DiaryPage />} />
          </Routes>  
        </UserStore>
      </BrowserRouter>
    </>
  );
}
export default App;
