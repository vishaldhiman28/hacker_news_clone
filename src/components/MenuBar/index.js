import React, { Component} from "react";
import styled from "styled-components";


export const MenuUrlStyle = styled.a`
  display: inline-block;
  color: #f2f2f2;
  text-align: center;
  padding: 10px 1px;
  text-decoration: none;
  font-size: 14px;

`;
const Logo = styled(MenuUrlStyle)`
  float:left;
  font-size: 16px;
  font-weight: bold;
  color: #030303;
  margin-left: 10px;
  margin-right: 10px;
  &:hover {
    color: #ffffff;
  }
`;
const MainNavClass = styled.div`
  background-color: #ff1717;
  overflow: hidden;
`;
const MOptions = styled(MenuUrlStyle)`
  float: left;
  color: #030303;

`;

class MenuBar extends Component {
  state = {
    isMenuHidden: true
  };

  onToggleMenu = () => {
    this.setState((prevState, props) => {
      return { isMenuHidden: !prevState.isMenuHidden };
    });
  };

  render() {
    return (
      <MainNavClass>
        <Logo href="/">Hacker News</Logo>
        
          <MOptions href="#">news|</MOptions>
          <MOptions href="#">past|</MOptions>
          <MOptions href="#">comments|</MOptions>
          <MOptions href="#">ask|</MOptions>
          <MOptions href="#">show|</MOptions>
          <MOptions href="#">job|</MOptions>
          <MOptions href="#">submit</MOptions>
      </MainNavClass>
    );
  }
}

export default MenuBar;
