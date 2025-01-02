import TodoContainer from "./components/TodoContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecentPage from "./pages/RecentPage";
import HomePage from "./pages/HomePage";
import CompletedPage from "./pages/CompletedPage";
const App = () => {
  return (
    <Router>
      <TodoContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recent" element={<RecentPage />} />
        <Route path="/completed" element={<CompletedPage />} />
      </Routes>
    </Router>
  );
};

export default App;
