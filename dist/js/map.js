'use strict';

function setDrag(Map) {
    if (document.documentElement.clientWidth < mobileWidth) {
        Map.behaviors.disable('drag');
    } else {
        Map.behaviors.enable('drag');
    }
}

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.78216938676201, 37.579061178891344],
        zoom: 10,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
        myPlacemark1 = new ymaps.Placemark([55.75901364198006, 37.65241215518684], {
        hintContent: '',
        balloonContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mark.png',
        iconImageSize: [32, 44]
    }),
        myPlacemark2 = new ymaps.Placemark([55.802492759206544, 37.51287240881994], {
        hintContent: '',
        balloonContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mark.png',
        iconImageSize: [32, 44]
    });

    myMap.geoObjects.add(myPlacemark1).add(myPlacemark2);

    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            size: "small",
            position: {
                left: 'auto',
                top: 'auto',
                right: 14,
                bottom: 30
            }
        }
    });
    myMap.controls.add(zoomControl);

    setDrag(myMap);

    $(window).resize(function () {
        setDrag(myMap);
    });
});