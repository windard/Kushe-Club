$(function(){
	var c_showSort = function(spec,my){
		var topInit = spec, maxHeight = 0;

		var that = {};
		that.topCalculate = function(){
			$('.show').each(function(){
				var col = $(this).prop('class').split(" ")[1];
				var $prevEl = $(this).prevAll('.' + col).filter(':first');
				var prevHeight = $prevEl.height() || 0;
				var prevOffset = $prevEl.offset();
				var prevTop;
				if(!prevOffset){
					prevTop = topInit;
				}else{
					prevTop = prevOffset.top;
				}
				$(this).css("top",prevTop + prevHeight - topInit + 15);
				maxHeight = Math.max(maxHeight,parseInt($(this).css('top')) + $(this).height() + 15);
			});
			$('.wrap-show').height(maxHeight);
		};
		return that;
	};

	var showSort = c_showSort($('.col_01:first').offset().top);
	showSort.topCalculate();

	var ajaxNum = 1;
	$(document).scroll(function(){
		if($('body').scrollTop() >= $(document).height() - $(window).height()){
			if(ajaxNum++ >= 4){
				return false;
			}else {
				$.get('scrollHandle.php', function(data) {
				$('.wrap-show').append(data);
				showSort.topCalculate();
				});
			}
		}
	});
	$('.loading').ajaxStart(function() {
		$(this).show();
	}).ajaxStop(function() {
		$(this).hide();
	});
	
});
