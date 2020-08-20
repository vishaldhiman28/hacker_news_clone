import React, { Component} from "react";
import styled from "styled-components";


export const FootUrlStyle = styled.a`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 10px;

`;  
const MainFootClass = styled.div`
display: table;
text-align: center;
margin-left: auto;
margin-right: auto;
padding: 20px;
font-size: 10px;
`;
const MOptions = styled(FootUrlStyle)`
  float: left;
  color: #030303;

`;

class FootBar extends Component {
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
      <MainFootClass>
          <MOptions href="#"> Guidelines |</MOptions>
          <MOptions href="#"> FAQ |</MOptions>
          <MOptions href="#"> Support |</MOptions>
          <MOptions href="#"> API</MOptions>
          <MOptions href="#"> Security |</MOptions>
          <MOptions href="#"> Lists |</MOptions>
          <MOptions href="#"> Bookmarklet |</MOptions>
          <MOptions href="#"> Legal |</MOptions>
          <MOptions href="#"> Apply to YC |</MOptions>
          <MOptions href="#"> Contact </MOptions>
          
      </MainFootClass>
    );
  }
}

export default FootBar;
