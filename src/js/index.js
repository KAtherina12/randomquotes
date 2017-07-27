
$(document).ready(function() {

	var quote;
	var author;
	
	// Add some body color
	var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857', '#CDDC39', '#673AB7', '#795548', '#FFC107', '#3F51B5'];

	function colorChange() {
		var x = Math.floor((Math.random() * colors.length));

		document.body.style.backgroundColor = colors[x];
		$('.button').css("background-color", colors[x]);
		$('.author, .quote, .fa-quote-left, .fa-quote-right').css("color", colors[x]);

	}

	// Api Section

	function getQuote(){
    
    var quoteUrl = 'http://quotes.stormconsultancy.co.uk/random.json';
    
    $.getJSON(quoteUrl, function(data){
        randQuote = data.quote;
        randAuthor = data.author;
        $('#quoteText').text(randQuote);
        if (randAuthor) {
        	$('#quoteAuthor').text(randAuthor);
        } else {
        	$('#quoteAuthor').text("Unknown");
        }
    })
     
}
	getQuote();
	colorChange();

	$('#newQuote').on('click', function(){
		getQuote();
		colorChange();
	});
});