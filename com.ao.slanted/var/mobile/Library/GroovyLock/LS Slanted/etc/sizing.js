if (device == 'detect') {
    (function () {
    'use strict';
    if (window.innerWidth === 375) {
        document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.18, maximum-scale=1.18, user-scalable=0');
    } else if (window.innerWidth === 414) {
        document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.3, maximum-scale=1.3, user-scalable=0');
    }
}());
} else {
    (function () {
    'use strict';
    if (device == '6') {
        document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.18, maximum-scale=1.18, user-scalable=0');
    } else if (device == '6+') {
        document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.3, maximum-scale=1.3, user-scalable=0');
    }
}());
}