import React from "react";
import PropTypes from "prop-types";
import { FooterMainClass, FooterLinkClass } from "./Styles";




export default function Footer(props) {
 


  return (
    <FooterMainClass>
      {props.points} points by
      <FooterLinkClass href='#'>{props.author}</FooterLinkClass>
      
      <FooterLinkClass>{new Date(props.createdAt).toDateString()}</FooterLinkClass>
      |
      <FooterLinkClass href="#" onClick={()=>{props.hideData(props.Id)}}>hide</FooterLinkClass>
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
