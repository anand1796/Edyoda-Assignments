import "./App.css";
import React from "react";
import Cards from "./components/cards";
import Footer from "./components/footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="body">
          <Cards />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
