class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
  }

  OnVideoListClick(event) {

    var title = $(event.currentTarget).text();
    //could fail for 2 videos with same name
    var video = this.state.videos.filter(video => video.snippet.title === title)[0];
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} videoListClick={this.OnVideoListClick.bind(this)}/>
        </div>
      </div>
    );  
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
