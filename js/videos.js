var captionText = document.getElementById("modalLabel");
var imagenCap = document.querySelectorAll('.imgVideo');

autoPlayYouTubeModal();

function autoPlayYouTubeModal() {

  var triggerOpen = $("body").find('[data-tagVideo]');

  triggerOpen.click(function() {
    
    var theModal = $(this).data("bs-target"),
      videoSRC = $(this).attr("data-tagVideo"),
      videoSRCauto = videoSRC + "?autoplay=1";

      var alt = $(this).attr('alt');

      $(theModal + ' iframe').attr('src', videoSRCauto);

      $(theModal + ' button.btn-close').click(function() {
      $(theModal + ' iframe').attr('src', videoSRC);     
    });

    captionText.innerHTML = alt;
  });
}