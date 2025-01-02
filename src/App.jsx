import TodoContainer from "./components/TodoContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecentPage from "./pages/RecentPage";
import HomePage from "./pages/HomePage";
import CompletedPage from "./pages/CompletedPage";
import { TodoProvider } from "./context/TodoProvider";
const App = () => {
  return (
    <TodoProvider>
      <Router>
        <TodoContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recent" element={<RecentPage />} />
          <Route path="/completed" element={<CompletedPage />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
};

export default App;
