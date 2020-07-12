var box = $(".box");

$(document).on("mousemove", function (e) {
      var ax = -($(window).innerWidth()/2-e.pageX)/12;
      var ay = ($(window).innerHeight()/2-e.pageY)/12;

      box.attr("style", "transform: rotateY("+ ax + "deg) rotateX("+ ay +"deg)");
});