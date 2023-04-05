import { HashRouter, Routes, Route } from "react-router-dom";
import HomeView from "./pages/HomeView/HomeView";
import SingleProjectView from "./pages/SingleProjectView/SingleProjectView";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import Resume from "./components/Resume/Resume";
import "./styles/App.scss";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <div className="App__content">
          <Header />
          <Routes>
            <Route path="/" element={<HomeView />} exact />
            <Route path="/projects/:id" element={<SingleProjectView />} exact />
            <Route path="/resume" element={<Resume />} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </div>
        <section className="App__footer">
          <Footer />
        </section>
      </div>
    </HashRouter>
  );
}

export default App;
