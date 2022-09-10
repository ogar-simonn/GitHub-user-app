import React from "react";
import {useAuth0} from "@auth0/auth0-react"
const Navbar = () => {
  const {loginWithRedirect} = useAuth0()
  return <div className="navbar">
    <button className="btn" onClick={() => loginWithRedirect()}>Login</button>
</div>

}
export default Navbar