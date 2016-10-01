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
        console.log(data);
        var videos = data.items;
        var results = callback(videos);
      },
      error: function() {
        console.log('error');
      }
    });
  });
  
};

window.searchYouTube = searchYouTube;

   // cache: false,
   // data: $.extend({
   //   key: 'API_KEY',
   //   q: $('#hyv-search').val(),
   //   part: 'snippet'
   // }, {maxResults:20,pageToken:$("#pageToken").val()}),
   // dataType: 'json',
   // type: 'GET',
   // timeout: 5000,
   // url: 'https://www.googleapis.com/youtube/v3/search'