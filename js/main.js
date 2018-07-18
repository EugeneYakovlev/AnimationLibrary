$(document).ready(function () {
    $(document).on('click', '.tabSelectors .icon', function (e) {
        e.preventDefault();
        $('.mainButton').removeClass('show');
        if(!$(this).hasClass('active'))
            $('.animationSettings').removeClass('show');
        $(this).siblings('.icon').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.tabSelectors').siblings('.confirmButton').removeClass('unactive');
        if ($(this).parents('.tab').hasClass('transform')) {
            var activeIndex = $(this).index();
            console.log(activeIndex);
            if($(this).parent('ul').hasClass('text')) {
                activeIndex = activeIndex + 16;
            }
            $(".listContent div").removeClass('active');
            $(".listContent div").eq(activeIndex).addClass('active');
            $('.listContent .list select').val([]);
        }
    });
    $(document).on('click', '.confirmButton', function (e) {
        e.preventDefault();
        if ($(this).parents('.tab').hasClass('object')) {
            $(this).parents('.tab').removeClass('open').addClass('hide');
            $(this).parents('.tab').next('.tab').addClass('open');
            var acValue = $(this).siblings('.tabSelectors').find('.active').text();
            $(this).parents('.tab').find('h2').append(' (' + acValue + ')');
            var activeIcon = $('.tab.object').find('.icon.active');
            if (activeIcon.hasClass('rectangle')) {
                $('ul.figure').addClass('show');
                $('.content').append("<div class='exBlock rectangle_kr'></div>" +
                    "<div class='switch roundSwitch'>КРУГ</div>");
            }
            else if(activeIcon.hasClass('text')) {
                $('ul.text').addClass('show');
                $('.content').append("<div class='exBlock text_kr'>Пример текста</div>");
            }
            $('.content').append("<div class='switch colorSwitch'>ЦВЕТ</div>" +
                "<div class='replay'></div>");
            console.log('Animation presets loaded!')
        }
    });
    $(document).on('click', '.colorSwitch', function (e) {
       e.preventDefault();
       $(this).toggleClass('change');
       $('.exBlock').toggleClass('white');
       console.log('Color changed!')
    });
    $(document).on('click', '.roundSwitch', function (e) {
        e.preventDefault();
        $(this).toggleClass('change');
        $('.exBlock').toggleClass('round');
        console.log('Figure changed!');
    });
    var animation;
    var currentdate;
    $('#mainForm').on('keyup change', 'input, select, textarea', function () {
        var anObject = $('.content > .exBlock');
        anObject.css({
            'animation': 'none'
        });
        var selectedVal = $("#mainForm select option:selected"),
            animationName = selectedVal.attr("data-animation_name"),
            animationTime = $('#duration').val(),
            animationFunction = $('#function').val(),
            animationDelay = $('#delay').val(),
            animationIteration,
            animationDirection = $('#direction').val(),
            animationFilling = $('#filling').val();
        if($('#durationInf').is(":checked")) {
            console.log(3);
            animationIteration = 'infinite';
        }
        else {
            console.log(5);
            animationIteration = $('#iteration').val();
        }
        animation = animationName + ' ' + animationTime + 's ' + animationFunction + ' ' + animationDelay + 's ' + animationIteration + ' ' + animationDirection + ' ' + animationFilling;
        anObject.css({
            'animation': animation
        });
        currentdate = new Date();
        var time = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        $('.popup .cssStyle code').empty();
        $('.popup .cssStyle code').append("/*  AnimationLibrary. Eugene Yakovlev<br>" +
            "Generated: " + time + "  */<br><br>" +
            ".animationClass {<br>" +
            "&emsp;&emsp;animation:" + animation +";" +
            "<br>}");
        console.log('Animation function changed!');
    });
    $(document).on('click', '.replay', function (e) {
        e.preventDefault();
        $('.exBlock').css({
            'animation': 'none'
        });
        setTimeout(function () {
            $('.exBlock').css({
                'animation': animation
            })
        }, 300);
    });
    $(document).on('change', 'select', function (e) {
        e.preventDefault();
        var selectedVal = $("#mainForm select option:selected").val();
        if (selectedVal == "nothing") {
            $('.animationSettings').removeClass('show');
            $('.mainButton').removeClass('show');
        }
        else {
            $('.animationSettings').addClass('show');
            $('.mainButton').addClass('show');
        }
        console.log('Direction changed!')
    });
    $(document).on('click', '.mainButton', function (e) {
       e.preventDefault();
       $('.wrapper').addClass('result');
       console.log('Final result created!');
    });
    $(document).on('click', '.closePopup', function (e) {
       e.preventDefault();
       $('.wrapper').removeClass('result');
    });
});