// ==UserScript==
// @name         IPV Core - Address Stub (Stub)
// @namespace    http://gov.uk
// @version      0.1
// @description  Enters mock data on the address stub (Stub)
// @author       Daniel J. Pomfret
// @match        https://staging-di-ipv-cri-address-stub.london.cloudapps.digital/authorize*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cloudapps.digital
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('#jsonPayload').value = '{ "test" : "example" }';
})();