// ==UserScript==
// @name         IPV Core - Knowlegde Based Verification (Stub)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Mocks out Knowlegde Based Verification (Stub)
// @author       You
// @match        https://staging-di-ipv-cri-kbv-stub.london.cloudapps.digital/authorize*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cloudapps.digital
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('#jsonPayload').value = '{ "test" : "example" }';
    document.querySelector('#verification').value = '1';
})();