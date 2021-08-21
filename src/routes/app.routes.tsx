import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";

export default function Routes(){

  return(
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component = {HomePage} />
      </Switch>
    </BrowserRouter>
  )

}