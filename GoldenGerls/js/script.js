$(function(){
  
	var maxH = 0;
	$(".block").each(function () {
		var h_block = parseInt($(this).height());
		if(h_block > maxH) {
			maxH = h_block;
		};
	});
	$(".block").height(maxH);
  
});