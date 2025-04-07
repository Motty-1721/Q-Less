// Header functionalities

window.addEventListener("scroll", () => {
  const bg = document.querySelector(".bg-img");
  const offset = window.scrollY;
  bg.style.transform = `translateY(${offset * 0.5}px)`; // adjust 0.5 for more/less parallax
});


//This ensures that when the page is reloaded or navigated to again, it scrolls to the very top.
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

  document.querySelectorAll('.video-item').forEach(item => {
    item.addEventListener('click', function () {
      const videoId = this.getAttribute('data-video-id');

      if (videoId) {
        const mainIframe = document.querySelector('.video-main iframe');
        mainIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      }
    });
  });


 