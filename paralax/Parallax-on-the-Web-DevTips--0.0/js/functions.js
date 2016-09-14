$(document).ready(function () {

	$(window).scroll(function () {
		var $this = $(this),
			wScroll = $this.scrollTop();
		$('.logo').css({
			'transform': 'translate(0px, ' + wScroll / 2 + '%)'
		});

		$('.back-bird').css({
			'transform': 'translate(0px, ' + wScroll / 4 + '%)'
		});
		$('.fore-bird').css({
			'transform': 'translate(0px, -' + wScroll / 40 + '%)'
		});

		if (wScroll > $('.clothes-pics').offset().top-($(window).height()/1.2)) {
			
			$('.clothes-pics figure').each(function (i) {
				setTimeout(function () {
					$('.clothes-pics figure').eq(i).addClass('is-showing');
				}, 150 * (i+1));

			});
			
		}else if(wScroll < $('.clothes-pics').offset().top-($(window).height()/1.2)){
			$('.clothes-pics figure').removeClass('is-showing');
		}
		
		if(wScroll > $('.large-window').offset().top - $(window).height()){
			$('.large-window').css({
				'background-position':'center '+(wScroll-$('.large-window').offset().top)+'px'
			});
			var opacity = (wScroll - $('.large-window').offset().top+400) / (wScroll/5);
			$('.window-tint').css({
				'opacity':opacity
			});
			console.log(opacity);
		}
		
	});

});