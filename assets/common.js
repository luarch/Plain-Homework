$(document).ready(function(e) {
	$('a').tooltip({position: {
		my: "left+15 center", at: "right center"
	}});
	$('.arrow').tooltip();
	$('.popup').dialog({
		autoOpen: false,
		modal: true,
		resizable: false,
		draggable: false,
	});
	$('#datepicker').datepicker();
	
	var id=0;
	id=setInterval('hideAll()', 1000);
    $('#content').mousemove(function(){
		clearInterval(id);
		$('#sidebar, #remarks, .arrow').fadeIn();
		id=setInterval('hideAll()', 1000);
	});
	$('#sidebar, #remarks, #date, #picker').mouseover(function(){
		clearInterval(id);
	});
	$('#date').hover(function(){
		$('#picker').stop('', true, true).show();
	}, function(){
		$('#picker').stop('', true, true).hide();
	});
	$('#date .arrow a').hover(function(){
		$(this).css('color', '#000');
	}, function(){
		$(this).css('color', '#c1c1c1');
	});
});

function hideAll(){
	$('#sidebar, #remarks, .arrow').fadeOut();
}