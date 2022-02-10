import "./App.css";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import { createTheme, ThemeProvider } from "@material-ui/core";
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Navbar />
        <Home />
        <About />
        <Services />
        <ContactUs />
      </div>
    </ThemeProvider>
  );
}

export default App;
