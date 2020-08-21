import React, { Component } from "react";
import PropTypes from "prop-types";
import { MainClass} from "./Styles";
import Header from "./Header";
import Footer from "./Footer";


export default class Story extends Component {
  render() {
    const item = this.props.item;

    return (
      <MainClass  id={item.id}>
        <Header
          Id={item.id}
          url={item.url}
          title={item.title}
          curRank={item.id}
          upVote={this.props.upVote}
        />
        <Footer
          author={item.author}
          points={item.points}
          createdAt={item.created_at}
          Id={item.id}
          numOfComments={item.num_comments}
          hideData={this.props.hideData}
        />
      </MainClass>
    );
  }
}

Story.propTypes = {
  item: PropTypes.object.isRequired
};
