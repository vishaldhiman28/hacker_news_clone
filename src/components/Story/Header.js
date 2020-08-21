import React from "react";
import PropTypes from "prop-types";
import {HeaderClass,RankClass,TitleClass,UrlClass,HrefClass} from "./Styles";


export default function Header(props) {


  return (
    <HeaderClass>
      <RankClass>
        {props.curRank}.
        {' '}
        <UrlClass>
        <HrefClass href='#' onClick={()=>{props.upVote(props.Id)}}>&#8679;</HrefClass>
      </UrlClass>
      </RankClass>
      <TitleClass href={props.url}>
        {props.title}  
        {' '}
      <UrlClass>
        <HrefClass href={props.url}>({props.url})</HrefClass>
      </UrlClass>
      </TitleClass>
    </HeaderClass>
  );
}

Header.propTypes = {
  Id: PropTypes.number.isRequired,
  curRank: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};
