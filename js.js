$(document).ready(function(){

	function change(a)
	{
		$(".nav-small-block-" + a).css("width","155px");
		$(".nav-small-block-" + a).css("height","57px");
		$(".nav-small-block-" + a).css("margin-top","-10px");
		$(".nav-small-block-" + a).css("z-index","10");
		$(".nav-small-block-" + a).css("line-height","57px");
		$(".nav-small-block-" + a).css("border-bottom","none");

		$(".nav-small-block-" + ((a+1)%2)).css("width","145px");
		$(".nav-small-block-" + ((a+1)%2)).css("height","45px");
		$(".nav-small-block-" + ((a+1)%2)).css("z-index","0");
		$(".nav-small-block-" + ((a+1)%2)).css("line-height","45px");
		$(".nav-small-block-" + ((a+1)%2)).css("margin-top","0px");
		$(".nav-small-block-" + ((a+1)%2)).css("border-bottom","solid 2px #dcd9d9");
	}

	$("#1_nav-small").click(function (){
		change(0)});
	$("#2_nav-small").click(function (){
		change(1)});
	$(".logo").click(function (){
		 window.location = 'index.html';});
});