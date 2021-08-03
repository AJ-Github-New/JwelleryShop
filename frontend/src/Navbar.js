import React from "react";
import {Link} from "react-router-dom";
function Navbar() {
    return (
    
<nav className="navbar navbar-expand-lg fixed-top navbar-light shadow-lg" style={{backgroundColor:"#f0c7e8",height:"100px"}}>
  <div className="container-fluid">
    <a className="navbar-brand" style={{fontFamily:"Style Script, cursive",color:"#ed8b64",fontSize:"28px"}} href="/"><img className="mr-4 rounded-circle img-fluid" src="/earringimages/logo.jpeg" alt="logo" height="55px" width="55px"/>Aboli</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" style={{backgroundColor:"#f0c7e8"}} id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <br></br>
        <li className="nav-item">
          <Link className="nav-link active order-1" style={{color:"#904178",fontSize:"20px",fontFamily:"fantasy",backgroundColor:"f0c7e8"}} aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item order-3" >
          <Link className="nav-link " style={{color:"#904178",fontSize:"20px",fontFamily:"fantasy",backgroundColor:"f0c7e8"}} aria-current="page" to="/cart">Cart</Link>
        </li>

        <li className="nav-item order-4">
          <Link className="nav-link " style={{color:"#904178",fontSize:"20px",fontFamily:"fantasy",backgroundColor:"f0c7e8"}} aria-current="page" to="/signin">Signin</Link>
        </li>

        
        <li className="nav-item dropdown order-2">
          <a className="nav-link dropdown-toggle" style={{color:"#904178",fontSize:"20px",fontFamily:"fantasy",backgroundColor:"f0c7e8"}} href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Jewellery
          </a>
          <ul className="dropdown-menu" style={{backgroundColor:"#f0c7e8"}} aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" style={{color:"#904178"}} to="/earring">Earrings</Link></li>
            <li><hr className="dropdown-divider"/></li>

            <li><Link className="dropdown-item" style={{color:"#904178"}}  to="/necklace">Necklace</Link></li>
            <li><hr className="dropdown-divider"/></li>

            <li><Link className="dropdown-item" style={{color:"#904178"}}  to="/bracelet">Bracelet</Link></li>
            <li><hr className="dropdown-divider"/></li>

            <li><Link className="dropdown-item" style={{color:"#904178"}}  to="/anklet">Anklet</Link></li>

          </ul>
        </li>
      
       
      </ul>
      
    </div>
  </div>
</nav>

    )
  }
  export default Navbar;