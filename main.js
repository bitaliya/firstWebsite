$(function(){
	var speed = 1500;
	var pause = 2000;
	var width = 720;
	var currentSlide = 1;
	var $slider = $('#slider');
	var $slides = $slider.find('.slides');
	var $slide = $slides.find('.slide');
	var interval;
function startSlider(){
interval = setInterval(function(){
$slides.animate({'margin-left':'-='+width}, speed, function(){
	currentSlide++;
	if(currentSlide===$slide.length){
		currentSlide = 1;
		$slides.css('margin-left', 0);
}
});
}, pause);
}
function stopSlider(){
	clearInterval(interval);
}
$slider.on('mouseenter',stopSlider).on('mouseleave',startSlider);
startSlider();

$('.info li').on('mouseenter',bkgroundChange).on('mouseleave',bkgroundOriginal);

function bkgroundChange(){
	$(this).css({'background': 'yellow' ,
				      'color': 'black',
				     'height': '40px', 
				  'font-size': '30px',
				      'width': '100%',
				    'padding': '20px'
				})
}
function bkgroundOriginal(){
	$(this).css({'background': 'gray' ,
					  'color': 'white', 
					 'height': '32px',
				  'font-size': '20px',
				      'width': '75%' ,
				    'padding': '7px'
				  })
}
});

