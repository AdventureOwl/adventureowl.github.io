var scale = window.innerWidth / 320;
function size() {
    if (Device == 'Detect') {
        document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=0');
    }
    else if (Device == '6') {
        document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.18, maximum-scale=1.18, user-scalable=0');
    }
    else if (Device == '6+') {
        document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.3, maximum-scale=1.3, user-scalable=0');
    }
}
size();