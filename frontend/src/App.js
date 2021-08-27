import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import LandingPage from "./screens/LandingPage/LandingPage";

const App = () => (
  <>
    <Header />
    <main>
      <LandingPage />
    </main>
    <Footer />
  </>
);

export default App;
