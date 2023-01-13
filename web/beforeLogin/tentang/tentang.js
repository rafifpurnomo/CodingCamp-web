window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 90) {
    document.getElementById("navbar").style.backgroundColor = "#04293A";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}
