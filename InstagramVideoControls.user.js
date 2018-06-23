// ==UserScript==
// @name         Instagram Video Controls
// @namespace    https://github.com/vekvoid/
// @version      0.3.2
// @description  try to take over the world!
// @author       Vekvoid
// @match        *://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const elementToListen = document.getElementsByTagName('body')[0];
  
  elementToListen.addEventListener('DOMSubtreeModified', addVideoControls);
})();

function addVideoControls() {
  const foundVideos = document.querySelectorAll('main > section > div:first-child video:not(.vekv-videoControls)');

  Array.prototype.forEach.call(foundVideos, (video) => {
    video.setAttribute('controls', '');
    video.setAttribute('style', 'z-index: 1;');

    if (video.classList)
      video.classList.add('vekv-videoControls');
    else
      video.className += ' vekv-videoControls';
  });
}