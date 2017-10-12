function getQuote() {
    $.ajax( {
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function(data) {
            var post = data.shift(); // The data is an array of posts. Grab the first one.
            console.log(post);
        },
        cache: false
      });
    // $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
    //     $("body").append(a[0].content + "<p>— " + a[0].title + "</p>")
    // });
}

$(document).ready(function() {
    getQuote();
});