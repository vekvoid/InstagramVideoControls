// ==UserScript==
// @name         Instagram Video Controls
// @namespace    https://github.com/vekvoid/
// @version      1.0
// @description  try to take over the world!
// @author       Vekvoid
// @match        *://www.instagram.com/*
// @grant        none
// @require https://code.jquery.com/jquery-3.1.1.slim.min.js
// ==/UserScript==

(function() {
  'use strict';
  $('body').on('DOMSubtreeModified', 'main > section > div > div:first-child', function() {
    // Need to be optimized
    $('video').attr({ controls: '', style: 'z-index: 3;' });
  });
})();