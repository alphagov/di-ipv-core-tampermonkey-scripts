// ==UserScript==
// @name         IPV Core - Activity History (Stub)
// @namespace    http://gov.uk
// @version      0.1
// @description  Mocks our Activity History
// @author       Daniel Pomfret
// @match        https://staging-di-ipv-cri-activity-history-stub.london.cloudapps.digital/authorize*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cloudapps.digital
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('#jsonPayload').value = '{ "test" : "example" }';
    document.querySelector('#activity').value = '1';
})();