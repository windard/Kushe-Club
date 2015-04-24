$(function slideShow(){
	var cur = 0;
	console.log("a");
	
	var slide = function(){
		cur++;
		if(cur !== 5) {
			var $curEl = $('#slide-num .current');
			$('#slide li:eq(' + cur + ')').siblings().hide()
				.end().show('slow', function() {
					$curEl.removeClass('current').removeClass('btn-danger')
						.addClass('btn-default');
					$('#slide-num span:eq(' + cur + ')').removeClass('btn-default')
						.addClass('current').addClass('btn-danger');
				});
		}else {
			$('#slide li').show();
			cur = 0;
			$('#slide-num .current').removeClass('current').removeClass('btn-danger')
				.addClass('btn-default');
			$('#slide-num span:eq(0)').removeClass('btn-default')
				.addClass('current').addClass('btn-danger');
		}
	};
	var time = setInterval(slide,7000);

	var $slideNum = $('#slide-num span');
	$slideNum.click(function(){
		clearInterval(time);
		var curNum = parseInt($(this).text());
		cur = curNum - 1;
		console.log(cur);
		$('#slide li:eq(' + cur + ')').siblings().hide()
			.end().show("slow",function(){
				var curEl = $('#slide-num .current');
				curEl.removeClass('current').siblings().hide()
					.end().removeClass('btn-danger')
					.addClass('btn-default');
				$('#slide-num span:eq(' + cur + ')').removeClass('btn-default')
					.addClass('current').addClass('btn-danger');
			});
		time = setInterval(slide,7000);
	});
});

$(function fade_top(){
	$('.new-content').mouseover(function(){
		$(this).children('.top').show();
	}).mouseout(function(){
		$(this).children('.top').hide();
	});
});

$(function vote(){
	$('button.vote').click(function(){
		$(this).children('span.vot').toggleClass('vote-active');
	});
});

$(function link_btn(){
	$('button.nav-reg').click(function(){
		window.location.assign("register.html");
	});
});

$(function pop(){
	var documentHeight = $('body').height();
	$('.nav-login').click(function(){
		$('#zhezhao').height(documentHeight)
			.show();
		$('.login-pop').show();
		return false;
	});

	$('#pop-close').click(function(){
		$('#zhezhao').hide();
		$('.login-pop').hide();
	});
});

$(function dropdown(){
	$('.nav-list').mouseover(function(){
		$('.dropdown-menu').show();
	}).mouseout(function(){
		$('.dropdown-menu').hide();
	});
});