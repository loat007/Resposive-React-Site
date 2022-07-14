import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Home from "./componenets/home/Home"
import Contact from "./componenets/contact/Contact"
import About from "./componenets/about/About"
import Services from "./componenets/services/Services"
import Navbar from "./componenets/navbar/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css"
import  Footer  from "./componenets/footer/Footer"




const App = ()=> {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/service" component={Services}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to='/'/>
    </Switch>
    <Footer/>
    </>
      
      
  )
}

export default App;