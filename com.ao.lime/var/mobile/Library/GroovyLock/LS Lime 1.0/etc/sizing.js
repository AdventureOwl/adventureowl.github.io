function size() {
    if (Device == 'Detect') {
        if (window.innerWidth === 375) {
            document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.18, maximum-scale=1.18, user-scalable=0');
        } else if (window.innerWidth === 414) {
            document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.3, maximum-scale=1.3, user-scalable=0');
        }
        else if (window.innerWidth === 425) {
            document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.33, maximum-scale=1.33, user-scalable=0');
        }
    }
    else if (Device == '6') {
        document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.18, maximum-scale=1.18, user-scalable=0');
    }
    else if (Device == '6+') {
        document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.3, maximum-scale=1.3, user-scalable=0');
    }
}
size();