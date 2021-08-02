import Navbar from "./Navbar";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from "./Home";
import Earring from "./Earring";
import Necklace from "./Necklace";
import Bracelet from "./Bracelet";
import Anklet from "./Anklet";
import React from "react";
import Corousel from "./Courousel";
import garland from "./garland.png"



function App() {
  return (
    <div className="container" style={{height:"100%"}} >
      <div className="row">
      <Router>
    <Navbar/>
    <img src={garland} className="mt-5 img-fluid 	d-sm-none d-md-none d-lg-none d-xl-block" alt="garland"></img>
    <div className="row mt-lg-5 mt-md-5 mt-sm-5 coutop" >
      <Corousel/>
      </div>

    
  
      <Switch>
        <Route exact path="/" >
          <Home/>
        </Route>

        <Route exact path="/earring" >
          <Earring/>
        </Route>

        <Route exact path="/necklace" >
          <Necklace/>
        </Route>

        <Route exact path="/bracelet" >
          <Bracelet/>
        </Route>

        <Route exact path="/Anklet" >
          <Anklet/>
        </Route>

      </Switch>
    </Router>
      </div>
      
    </div>
  );
}

export default App;
