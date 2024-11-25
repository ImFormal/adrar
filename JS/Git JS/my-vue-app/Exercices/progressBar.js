const laBar = document.querySelector(".bar");

document.addEventListener("scroll", function(){
  const scrollMax = document.body.scrollHeight - window.innerHeight;
  const onEstOu = (window.scrollY / scrollMax) * 100;
  laBar.style.width = onEstOu + "%";
});