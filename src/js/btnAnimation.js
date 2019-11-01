var animateButton = function(e) {
  e.preventDefault;
  e.target.classList.remove('animate');
  e.target.classList.add('animate');
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },3000);
};
var classname = document.getElementsByClassName("button");
for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', animateButton, false);
}