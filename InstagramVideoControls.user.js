// ==UserScript==
// @name         Instagram Video Controls
// @namespace    https://github.com/vekvoid/
// @version      0.5
// @description  try to take over the world!
// @author       Vekvoid
// @match        *://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const elementToListen = document.getElementsByTagName('body')[0];
  
  elementToListen.addEventListener('DOMSubtreeModified', addControlsToAllVideos);
})();

function addControlsToAllVideos() {
  const foundVideos = getAllVideos();

  Array.prototype.forEach.call(foundVideos, (video) => {
    addVideoControls(video);
    addClassVideoControls(video);
  });
}

function getAllVideos() {
  const homePageVideosQuery = 'main > section > div:first-child video:not(.vekv-videoControls)',
        postPageVideoQuery = 'main > div > div > article video:not(.vekv-videoControls)';

  let videos = document.querySelectorAll(homePageVideosQuery);

  if (noVideosFound(videos))
    videos = document.querySelectorAll(postPageVideoQuery);

  return videos;
}

function noVideosFound(videos) {
  if (videos.length)
    return false;
  else
    return true;
}

function addVideoControls(video) {
  video.setAttribute('controls', '');
  video.setAttribute('style', 'z-index: 1;');
}

function addClassVideoControls(video) {
  if (video.classList)
    video.classList.add('vekv-videoControls');
  else
    video.className += ' vekv-videoControls';
}