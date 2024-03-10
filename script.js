  //about section
  var flag=1;
  document.querySelector("#kb1").addEventListener("click",function(){
    document.querySelector(".kub2").style.display="none";
    document.querySelector(".kub3").style.display="none";
    document.querySelector(".kub1").style.display="initial";
    if(flag===1){
      document.querySelector(".kub1").style.display="initial";
  flag=0;
  }
  else{
    flag=1;
  }
  });
  document.querySelector("#kb2").addEventListener("click",function(){
    document.querySelector(".kub1").style.display="none";
    document.querySelector(".kub3").style.display="none";
    document.querySelector(".kub2").style.display="initial";
    if(flag===1){
      document.querySelector(".kub2").style.display="initial";
  flag=0;
  }
  else{
    flag=1;
  }
  });
  document.querySelector("#kb3").addEventListener("click",function(){
    document.querySelector(".kub1").style.display="none";
    document.querySelector(".kub2").style.display="none";
    document.querySelector(".kub3").style.display="initial";
    if(flag===1){
      document.querySelector(".kub3").style.display="initial";
  flag=0;
  }
  else{
    flag=1;
  }
  });


  //swiperjs
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      grabcursor:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  //cursor poition
    const cursor = document.querySelector('#cursor')
            document.addEventListener('mousemove', (e) => {
              cursor.style.left = e.pageX + 'px';
              cursor.style.top = e.pageY + 'px';
    })


    //mail
function composeEmail() {
  window.location.href = 'mailto:kuber8821@gmail.com';
}