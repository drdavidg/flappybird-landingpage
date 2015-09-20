
$(document).ready(function() {
	$("img.birdlogo")
	.velocity("transition.bounceDownIn", {duration: 600, easing: "swing", delay: 200, display: "block"})
	.velocity("callout.pulse", {duration: 500, loop: true });
	$("h1").velocity("transition.bounceLeftIn", { duration: 1000 });
	$(".birdlogo").mousedown(function(event) {
		$(this).velocity("callout.swing", {duration: 3500});
	});
	$("h1").mousedown(function(event) {
		$(this).velocity("callout.swing", {duration: 3500});
	});

	function runQuotes() {
		$(".quotes-container > span:nth-child(1)")
		.velocity("transition.slideLeftIn", {duration: 600, easing: "swing", delay: 200, display: "block"})
		.velocity("transition.slideLeftOut", {duration: 600, easing: "swing", delay: 200, display: "none"});
		$(".quotes-container > span:nth-child(2)")
		.velocity("transition.slideLeftIn", {duration: 600, easing: "swing", delay: 3000, display: "block"})
		.velocity("transition.slideLeftOut", {duration: 600, easing: "swing", delay: 500, display: "none"});
		$(".quotes-container > span:nth-child(3)")
		.velocity("transition.slideLeftIn", {duration: 600, easing: "swing", delay: 6000, display: "block"})
		.velocity("transition.slideLeftOut", {duration: 600, easing: "swing", delay: 500, display: "none"});

	}

	// $(".quotes-container > span")
	// .velocity("transition.slideLeftIn", {duration: 600, easing: "swing", delay: 200, display: "block"})
	// .delay(3000)
	// //.velocity({display: "none"})
	// .velocity("transition.slideLeftOut", {duration: 600, easing: "swing", delay: 200, display: "none"});
runQuotes();
setInterval(function() {
	runQuotes();
}, 8000);


});
