
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CharactersPage } from "./pages/CharactersPage/CharactersPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { HomePage } from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} exact path="/" />
        <Route element={<CharactersPage />} path="/characters" />
        <Route element={<ErrorPage />} path="/*" />
      </Routes>
    </Router>
  );
};

export default App;
