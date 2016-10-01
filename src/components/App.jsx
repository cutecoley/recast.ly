class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
  }

  OnVideoListClick(event) {
    var title = event.currentTarget.textContent;
    //could fail for 2 videos with same name
    var video = this.state.videos.filter(video => video.snippet.title === title)[0];
    this.setState({
      currentVideo: video
    });
  }

  onSearchInput(event) {
    this.defaultSearch({query: event.currentTarget.value}); 
  }
  
  onSearchClick(event) {
    this.defaultSearch({query: event.currentTarget.previousSibling.value}); 
  }

  componentDidMount() {
    this.defaultSearch = _.debounce(this.defaultSearch, 500);
    this.defaultSearch();
  }

  render() {
    return (
      <div>
        <Nav onSearchInput={this.onSearchInput.bind(this)} onSearchClick={this.onSearchClick.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} videoListClick={this.OnVideoListClick.bind(this)}/>
        </div>
      </div>
    );  
  }

  defaultSearch(options, cb) {
    options = options || {};
    options.query = options.query || 'React';
    options.max = options.max || 10;
    options.key = options.key || window.YOUTUBE_API_KEY;
    cb = cb || (videos => this.setState({videos: videos}));
    this.props.searchYouTube(options, cb);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
