import { Component } from 'react';
import { InnerDiv, OuterDiv } from './styles';
import logoMBH from "../../assets/images/logo.png"
class NavBar extends Component {

  render() {
    return (
      <OuterDiv>

        <InnerDiv>
          <img alt="logoBrand" src={logoMBH} />
           <input type="search"></input>
           <a href="#">Cadastre-se</a>
        </InnerDiv>

      </OuterDiv>
    )
  }
}

export default NavBar;