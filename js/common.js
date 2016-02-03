$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));
	new WOW().init();
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	//$('#app').on('click',function() {
    //
	//});
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#application").submit(function(event) {
		event.preventDefault();
		var data = {
			name : document.querySelector('#application input[name="name"]').value,
			email : document.querySelector('#application input[name="email"]').value,
			telephone : document.querySelector('#application input[name="telephone"]').value,
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: data,
		}).done(function( value ) {
			$('#mail')[0].innerHTML = value;
			$('#mail').removeClass('not_visible_mail');
			$('#mail')[0].setAttribute('style', 'opacity: 1;');
			setTimeout(function() {
				$("#application").trigger("reset");
			}, 1000);
			setTimeout(function() {
				$('#mail')[0].setAttribute('style', 'opacity: 0;');
				setTimeout(function() {
					$('#mail').addClass('not_visible_mail');
				}, 500);
			}, 5000);

		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	document.querySelector('#get_form').onclick = function(event) {
		event.preventDefault();
		document.querySelector('#form').classList.remove('not_active_form');
		document.querySelector('#form').classList.add('active_form');
	};
	document.querySelector('.close__form').onmousemove = function() {
		document.querySelector('#form').setAttribute('style', '-webkit-filter:opacity(0.5)');
	};
	document.querySelector('.close__form').onmouseout = function() {
		document.querySelector('#form').removeAttribute('style');
	}
	document.querySelector('.close__form').onclick = function() {
		document.querySelector('#form').setAttribute('class', 'not_active_form');
	}
});
