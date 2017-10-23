// create a new component. this componenet should produce dome html
import React, { Component } from "react";
import ReactDom from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyA07dh4FOuvZ5_h0Xag1G4n0EbbbSaw_QU";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideos => this.setState({ selectedVideo })}
          videos={this.state.videos}
          m
        />
      </div>
    );
  }
}

// take this component generated HTML and put it on the page

ReactDom.render(<App />, document.querySelector(".container"));
