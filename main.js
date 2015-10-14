'use strict';

//get window from facebook
function getWindow(element) {
  var win = element.getBoundingClientRect();
  return {
    top: win.top + document.body.scrollTop + 'px',
    left: win.left + document.body.scrollLeft + 'px',
    right: win.right + 'px',
    height: win.height + 'px',
    width: win.width + 'px'
  };
}

function getRidOf() {
  var pepes = document.getElementsByClassName('pepe');
  while (pepes[0]) {
    pepes[0].parentNode.removeChild(pepes[0]);
  }
}

//get face
function getImage(element, url) {
  var meme = new Image();
  meme.src = url;
  meme.className = 'pepe';
  meme.style.position = 'absolute';
  var win = getWindow(element);
  meme.style.zIndex = '420420';

  for (var key in win) {
    meme.style[key] = win[key];
  }

  document.body.appendChild(meme);
}

//replace the image
function changeImage() {
  getRidOf();
  var PIC_ONE_URL = chrome.extension.getURL('images/1.png');
  var PIC_TWO_URL = chrome.extension.getURL('images/2.png');
  var PIC_THREE_URL = chrome.extension.getURL('images/siwon.png');
  [].forEach.call(document.getElementsByClassName('faceBox'), function (victim) {
    var rare = Math.random();
    if(rare<0.5) { 
      return getImage(victim, PIC_TWO_URL);
    } else if (rare < 0.5) { 
      return getImage(victim, PIC_THREE_URL);
    } else {
      return getImage(victim, PIC_ONE_URL);
    }
  });
  [].forEach.call(document.getElementsByClassName('tagBox'), function (victim) {
    var rare = Math.random();
    if(rare<0.5) { 
      return getImage(victim, PIC_TWO_URL);
    } else if (rare < 0.5) { 
      return getImage(victim, PIC_THREE_URL);
    } else {
      return getImage(victim, PIC_ONE_URL);
    }
  });
}

window.onclick = changeImage;

setInterval(changeImage, 10000)