$(document).ready(function(){
        $('.list__item--checkbox').change(function() {
            $(this).parent().toggleClass('label-active');
        });
    });