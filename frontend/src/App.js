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
import EarringScreen from './EarringScreen';
import AnkletScreen from "./AnkletScreen";
import NecklaceScreen from './NecklaceScreen.js';
import BraceletScreen from './BraceletScreen';
import CartScreen from "./CartScreen";
import cartScreenNecklace from './cartScreenNecklace';
import cartScreenBracelet from './cartScreenBracelet';
import cartScreenAnklet from './cartScreenAnklet';
//import AnkletS from './AnkletS'
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

        <Route exact path="/cart/:id?" component={CartScreen}></Route>
        <Route exact path="/cartnecklace/:id?" component={cartScreenNecklace}></Route>
        <Route exact path="/cartanklet/:id?" component={cartScreenAnklet}></Route>
        <Route exact path="/cartbracelet/:id?" component={cartScreenBracelet}></Route>

        <Route path='/earring/:id' component={EarringScreen}></Route>
        <Route path='/necklace/:id' component={NecklaceScreen}></Route>
        <Route path='/anklet/:id' component={AnkletScreen}></Route>
        <Route path='/bracelet/:id' component={BraceletScreen}></Route>



      </Switch>
    </Router>
      </div>
      
    </div>
  );
}

export default App;
