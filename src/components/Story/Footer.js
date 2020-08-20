import React from "react";
import PropTypes from "prop-types";
import hideData from "../../App";
import App from "../../App";
import { FooterMainClass, FooterLinkClass } from "./Styles";




export default function Footer(props) {
 
  return (
    <FooterMainClass>
      {props.points} points by
      <FooterLinkClass href='#'>{props.author}</FooterLinkClass>
      |
      <FooterLinkClass>{new Date(props.createdAt).toDateString()}</FooterLinkClass>
      |
      <FooterLinkClass href='' onclick={hideData.bind(App,props.Id)}>hide</FooterLinkClass>
      |
     <FooterLinkClass>{props.numOfComments  }</FooterLinkClass>
     comments
    </FooterMainClass>
  );
}

Footer.propTypes = {
  author: PropTypes.string.isRequired,
  Id: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired
};
