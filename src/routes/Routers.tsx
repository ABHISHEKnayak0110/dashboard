
import {
    Routes,
    Route,
  } from "react-router-dom";
import BaseScreen from "../screens/baseScreen/BaseScreen";

function Routers() {
  return (
    <Routes>
      <Route path="/" element = {<BaseScreen/>} >
    
      </Route>
   </Routes>
  )
}

export default Routers