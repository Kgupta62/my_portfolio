// locomotive js
function show() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

}

show(); //function calling for locomotive js.


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

gsap.from("#line",{
  opacity:0,
  duration:1,
  onStart:function(){
    $('#line').textillate({ in: { effect: 'fadeInUp' } });
  }
})

gsap.from("#name",{
  opacity:0,
  duration:1,
  onStart:function(){
    $('#name').textillate({ in: { effect: 'fadeInUp' } });
  }
})

gsap.from("#name2",{
  opacity:0,
  duration:1,
  onStart:function(){
    $('#name2').textillate({ in: { effect: 'fadeInUp' } });
  }
})


document.addEventListener('DOMContentLoaded', function () {
  gsap.from("#nav", { y: -100, opacity: 0, duration: 1, ease: "power2.out" });
});




