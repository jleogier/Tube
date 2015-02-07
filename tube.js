$(document).ready(function(){
	
	$(function(){
		$('#search-form').submit(function(event){
			event.preventDefault();
			var searchTerm = $('#query').val();
			getRequest(searchTerm);
			});			
		});	

	function getRequest(searchTerm){
		var params = {
			'part': 'snippet',
			'key': 'AIzaSyC8LdKgTlsI9K1GIP50MVUwovqHdf42iws',
			'q': searchTerm
		};
		url = 'https://www.googleapis.com/youtube/v3/search';
		$.getJSON(url, params, function(data){
			showResults(data.items);
		});
	}
			

	function showResults(results){
		var html = "";
		$.each(results,function(index,video){
			console.log(video.snippet.thumbnails.medium.url);
			html += "<p>" + video.snippet.title + "</p>" + "<p><img src='" + video.snippet.thumbnails.medium.url + "'/></p>";
//			console.log(value.Title);
		});
		$('#search-results').html(html);
	}

});

