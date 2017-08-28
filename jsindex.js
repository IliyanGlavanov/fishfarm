$(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

	$('.dropdown-menu .link').click(function () {
		$('.dropdown-menu .link').parent().removeClass('active');
		$(this).parent().addClass('active');

		var idString = $(this).attr('id');
		var id = parseInt(idString.substr(6));
		console.log(id);
		if (!isNaN(id)) {
			$('#myCarousel').carousel(id);
		}
	});
  $("#whycarp").click(function(){
        $(".togglecarp").toggle();
    });
    $(window).scroll(function(){
    var x = $(document).scrollTop();
    console.log(x);

    if ($(document).scrollTop() > 350) {

        $('#videobackground').get(0).pause();

        }

        else if ($(document).scrollTop() < 150 ) {

            $('#videobackground').get(0).play();

        }
    });
});
