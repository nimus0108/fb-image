'use strict';

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

// Kills existing pepes with fire.
function getRidOf() {
  var pepes = document.getElementsByClassName('pepe');
  while (pepes[0]) {
    pepes[0].parentNode.removeChild(pepes[0]);
  }
}

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

function changeImage() {
  getRidOf();
  var PIC_ONE_URL = chrome.extension.getURL('images/gd.png');
  var PIC_TWO_URL = chrome.extension.getURL('images/smiling.png');
  var PIC_THREE_URL = chrome.extension.getURL('images/siwon.png');
  [].forEach.call(document.getElementsByClassName('faceBox'), function (victim) {
    var rare = Math.random();
    if(rare<0.2) { //one in ten pepes has the feels
      return getImage(victim, PIC_TWO_URL);
    } else if (rare < 0.3) { //one in twenty pepes is secretly an evil minion
      return getImage(victim, PIC_THREE_URL);
    } else {
      return getImage(victim, PIC_ONE_URL);
    }
  });
  [].forEach.call(document.getElementsByClassName('tagBox'), function (victim) {
    var rare = Math.random();
    if(rare<0.2) { //one in ten pepes has the feels
      return getImage(victim, PIC_TWO_URL);
    } else if (rare < 0.5) { //one in twenty pepes is secretly an evil minion
      return getImage(victim, PIC_THREE_URL);
    } else {
      return getImage(victim, PIC_ONE_URL);
    }
  });
}

window.onclick = changeImage;

setInterval(changeImage, 10000)
