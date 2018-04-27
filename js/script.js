$(document).ready(function() {
  $("#getQuote").on("click", function() {
    $.getJSON("https://talaikis.com/api/quotes/random/", function(data){
      quote = data['quote'];
      author = data['author'];
      $("#quote").html(quote);
      $("#author").html(author);
    });
});
});
