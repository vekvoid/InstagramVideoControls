// ==UserScript==
// @name         Instagram Video Controls
// @namespace    https://github.com/vekvoid/
// @version      0.3
// @description  try to take over the world!
// @author       Vekvoid
// @match        *://www.instagram.com/*
// @grant        none
// @require https://code.jquery.com/jquery-3.1.1.slim.min.js
// ==/UserScript==

(function() {
  'use strict';

  const elementToListen = document.querySelectorAll('main > section > div:first-child > div:first-child');
  
  elementToListen[0].addEventListener('DOMSubtreeModified', addVideoControls);

})();

function addVideoControls() {
  const foundVideos = document.querySelectorAll('video:not(.vekv-videoControls)');

  Array.prototype.forEach.call(foundVideos, (video) => {
    //const parent = video.parentNode;

    video.setAttribute('controls', '');
    video.setAttribute('style', 'z-index: 1;');

    if (video.classList)
      video.classList.add('vekv-videoControls');
    else
      video.className += ' vekv-videoControls';
  });
}