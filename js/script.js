$(document).ready(function(){
    $('.menu__btn').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
        $(this).next('.menu').slideUp(500);
        } else {
        $(this).next('.menu').slideDown(500);
        }
        $(this).toggleClass('active');
        $('body').toggleClass('body-active');
    });
    $('.overlay').click(function(e) {
		e.preventDefault();
		$('body').removeClass('body-active');
		$('.menu__btn').removeClass('active');
        $(this).closest('body').find('.menu').slideUp(300);
	});
    $('.menu__link').click(function(e) {
		e.preventDefault();
		$('body').removeClass('body-active');
		$('.menu__btn').removeClass('active');
        $(this).closest('body').find('.menu').slideUp(300);
	});

    $('.proces-step__list__item').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
        $(this).find('.proces-step__list__item__hide-text').slideUp(500);
        } else {
        $(this).find('.proces-step__list__item__hide-text').slideDown(500);
        }
        $(this).toggleClass('active');
    });
});