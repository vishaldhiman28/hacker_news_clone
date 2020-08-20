import React, { Component } from "react";
import Feed from "./containers/Feed";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";
import axios from 'axios';
import styled from "styled-components";

export const ButtonWrapper = styled.div`
  padding: 0px 30px 10px;
`;


export function hideData(id){
  let data_here = this.state.curStories;
  for(let k=0;k<data_here.length;k++)
  {
    if(data_here[k].id===id){
      data_here.splice(k,1);
      break;
    }
  }
  this.setState(prevState=>({
   curStories: data_here,
  }))
}

export function getSinglePage(page_number,m) {
  return new Promise(resolve => {
    axios.get(`https://hn.algolia.com/api/v1/search?page=${page_number}`)
      .then(res => {
        let all_data = res.data;
        let final_data = [];
        let i=m+1;
        for(let row of all_data.hits)
        {

          final_data.push({
            id:i, 
            created_at: row.created_at,
            title: row.title,
            url: row.url,
            author: row.author,
            points: row.points,
            story_text:  row.story_text,
            num_comments: row.num_comments,
            objectID: row.objectID
          })
          i++;
        }
        resolve(final_data);
      });
  });
}


class App extends Component {
  state = {
    curStories: [],
    pageNumber: 1,
    m: 0
  };

  async getStories(page_number) {
    let results = await getSinglePage(page_number,this.state.m);
 
      this.setState(prevState=>({
        curStories: results,
        m: (prevState.m+results.length)
      }));
      
  }
  handleClick(){
    this.setState(prevState=>({
      pageNumber: (1+prevState.pageNumber)
    })
    );
    this.getStories(this.state.pageNumber+1)

 }
  componentDidMount() {
        this.getStories(this.state.pageNumber);
  }
 


  render() {
    return (
      <div>
        <MenuBar />
        <Feed items={this.state.curStories} />
        <ButtonWrapper>
        <button onClick={this.handleClick.bind(this)} >More</button>
        </ButtonWrapper>
        <Footer/>
      </div>
    );
  }
}

export default App;
