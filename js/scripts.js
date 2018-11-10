'use strict';

var carouselWidth = function() {
  // < 768px carousel full window
  var carousel = document.getElementsByClassName('slider')[0];
  var width = window.innerWidth;

  if (width < 768) {
    carousel.classList.remove('container');
  }
};

carouselWidth();

var changeSlidePortfolio = function (e) {
  e.preventDefault();

  var {action} = e.target.dataset;
  var slides = document.querySelectorAll('.portfolio__col');
  var activeSlide = document.querySelector('.portfolio__col-active');
  var slidesLength = slides.length;

  for (var i = 0; i < slidesLength; i++) {
    if (slides[i] === activeSlide) {
      var index = i;
    }
  }

  var last = action === 'right' ? slidesLength - 1 : 0;

  if (index !== last) {
    var newIndex = action === 'right' ? index + 1 : index - 1;

    slides[index].classList.remove('portfolio__col-active');
    slides[newIndex].classList.add('portfolio__col-active');
  }
};

var getPopupPortfolio = function(){
  // TODO: объединить функции
  var popup = document.querySelector('.portfolio__popup');
  var img = document.querySelector('.portfolio__col-active')
  .querySelector('.portfolio__carousel-img');
  var imgPopup = popup.querySelector('.portfolio__popup-img');
  var spanClose = document.querySelector('.portfolio__popup-close');

  popup.style.display = 'block';
  imgPopup.src = img.src;
};

var portfolioClosePopup = function() {
  var popup = document.querySelector('.portfolio__popup');
  popup.style.display = 'none';
};

var changeOurServiceContentClick = function() {
  // TODO: нужен рефакторинг
  var pseudoLinks = document.querySelectorAll('.our-service_link');

  pseudoLinks.forEach(function (itemLink) {
    itemLink.onclick = function changeOurServiceContent (e) {
      var arrayLinks = [];
      var activeLink = document.querySelector('.our-service_items-active');
      var activeLinkValue = activeLink.innerHTML;
      var content = document.querySelectorAll('.our-service__content');
      var contentActive = document.querySelector('.our-service__content-active');

      e.preventDefault();

      //для поиска индекса активной ссылки
      if (this.parentNode !== activeLink) {
        var itemsValue = itemLink.innerHTML;
        arrayLinks.push(itemsValue);
      }

      activeLink.classList.remove('our-service_items-active');
      activeLink = this.parentNode.classList.add('our-service_items-active');
      activeLinkValue = this.innerHTML;

      var indexNew = arrayLinks.indexOf(activeLinkValue);

      content.forEach(function(itemContent, index) {
        contentActive.classList.remove('our-service__content-active');

        if (index === indexNew) {
          itemContent.classList.add('our-service__content-active');
        }
      });
    }
  });
};

changeOurServiceContentClick(event);

//Инициализация плеера
var tag = document.createElement('script');
var firstScriptTag = document.getElementsByTagName('script')[0];

tag.src = 'https://www.youtube.com/iframe_api';
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// создаем <iframe> с YouTube видео
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '600',
    playerVars: { 'autoplay' : 0, 'controls' : 0, 'showinfo' : 0, 'rel' : 0,
    'enablejsapi' : 1, 'iv_load_policy' : 3, 'modestbranding' : 1, 'start' : 3},
    width: '100%',
    videoId: '3KtJ2yZWErQ'
  });
};

var hidePlayButton = function() {
  // TODO: toggle кнопки
  var playButton = document.getElementById('play');
  var video = document.getElementById('player');

  playButton.style.display = 'none';
}
