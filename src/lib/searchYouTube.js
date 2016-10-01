var searchYouTube = (options, callback) => {
  // TODO
  $( document ).ready(function() {
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        maxResults: options.max === undefined ? 5 : options.max,
        key: options.key,
        q: options.query,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true
      },
      success: function(data) {
        console.log('success');
        var videos = data.items;
        callback(videos);
      },
      error: function() {
        console.log('error');
      }
    });
  });
  
};

window.searchYouTube = searchYouTube;