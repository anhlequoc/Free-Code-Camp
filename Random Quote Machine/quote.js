function getQuote() {
    $.ajax( {
        // beforeSend: function(request) {
        //     request.setRequestHeader("Access-Control-Allow-Origin", "http://null");
        // }, 
        headers: {
            "Access-Control-Allow-Origin": "http://null"
        },
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function(data) {
            var post = data.shift(); // The data is an array of posts. Grab the first one.
            console.log(post);
        }
      });
}

$(document).ready(function() {
    getQuote();
});