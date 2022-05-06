// ==UserScript==
// @name         IPV Core - Fraud Check (Stub)
// @namespace    http://gov.uk
// @version      0.1
// @description  Mocks our Fraud Check (Stub)
// @author       You
// @match        https://staging-di-ipv-cri-fraud-stub.london.cloudapps.digital/authorize*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cloudapps.digital
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('#jsonPayload').value = '{ "test" : "example" }';
    document.querySelector('#fraud').value = '1';
})();