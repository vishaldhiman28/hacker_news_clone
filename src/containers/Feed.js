import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Spinner from "react-spinkit";
import Story from "../components/Story";

const ListWrap = styled.div`margin: 25px;`;
const LoadWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 55px;
`;

export default class Feed extends Component { 
  render() {
    this.items = this.props.items;

    if (this.items===undefined || this.items.length===0) {
      return (
        <LoadWrap>
          <Spinner name="ball-scale-ripple-multiple" color="olive" />
        </LoadWrap>
      );
     
    } 
    else
    {
      return this.renderList(this.items);
    }
  }

  renderList(items) {
    return (
      <ListWrap>
        {items.map((item, i) => <Story key={item.id} item={item} hideData={this.props.hideData} upVote={this.props.upVote}/>)}
      </ListWrap>

    );
  }
}

Feed.propTypes = {
  items: PropTypes.array.isRequired
};
