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
      <div style={{ backgroundColor: "#040508" }}>
        <Navbar />
        <Home />
        <About />
        <Services />
      </div>
      <div style={{ backgroundColor: "#040508" }}>
        {" "}
        <ContactUs />
      </div>
    </ThemeProvider>
  );
}

export default App;
