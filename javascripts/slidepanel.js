$(document).ready(function(){

	$(".btn-slide").click(function(){
		// 通过使用滑动效果，在显示和隐藏状态之间切换
		$("#panel").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	});
	
	 
});