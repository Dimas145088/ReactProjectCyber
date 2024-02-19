import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";


class App extends React.Component {
  constructor(props) {
    super(props)


  }


  render() {
    return (
      <div className="wrapper">
      
          <Header />
          <Main />
          <Footer />
      </div>
    )
  }

}

export default App;