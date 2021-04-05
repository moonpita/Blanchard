ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            center: [55.758542, 37.600993],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            controls: ['geolocationControl'], // Убирает все элементы управления, кроме указанных
            zoom: 14
        });
        var zoomControl = new ymaps.control.ZoomControl({ // Добавляем зум
            options: {
                size: "small"
            }
        });
        var myPlacemark1 = new ymaps.Placemark([55.758542, 37.600993], {}, {
            iconLayout: 'default#image', 
            iconImageHref: 'img/contactsFooter/mapPoint.svg',
            iconImageSize: [20, 20],
            iconImageOffset: [0, 0]
        });
        
             myMap.controls.add(zoomControl);
                // Размещение геообъекта на карте.
             myMap.geoObjects.add(myPlacemark1);
        
    }
    
