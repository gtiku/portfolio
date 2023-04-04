import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./pages/HomeView/HomeView";
import SingleProjectView from "./pages/SingleProjectView/SingleProjectView";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App__content">
          <Header />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/" element={<HomeView />} exact />
            <Route path="/projects/:id" element={<SingleProjectView />} exact />
            <Route path="/projects/:id" element={<SingleProjectView />} exact />
          </Routes>
        </div>
        <section className="App__footer">
          <Footer />
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
