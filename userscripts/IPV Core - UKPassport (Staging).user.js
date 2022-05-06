// ==UserScript==
// @name         IPV Core - UKPassport (Staging)
// @namespace    http://gov.uk
// @version      0.1
// @description  Populates the form for CRI Passport (Staging)
// @author       Daniel Pomfret
// @match        https://staging-di-ipv-cri-uk-passport-front.london.cloudapps.digital/passport/details
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cloudapps.digital
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('#passportNumber').value = "824159121";
    document.querySelector('#surname').value = "Watson";
    document.querySelector('#firstName').value = "Mary";
    document.querySelector('#middleNames').value = "Ann";
    document.querySelector('#dateOfBirth-day').value = "25";
    document.querySelector('#dateOfBirth-month').value = "02";
    document.querySelector('#dateOfBirth-year').value = "1932";
    document.querySelector('#expiryDate-day').value = "01";
    document.querySelector('#expiryDate-month').value = "03";
    document.querySelector('#expiryDate-year').value = "2021";
})();