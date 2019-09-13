const mobileWidth = 768;

function radioDeActivate(group) {
    $(`.radioButton[data-group= ${group}]`).each(function () {
        $(this).removeClass('activeRadio');
    });
}

function showTab(tabShow, tabContShow, tabMobShow, tabHide, tabContHide, tabMobHide) {
    tabShow.addClass('activeTab');
    tabContShow.addClass('active');
    tabMobShow.addClass('tab-mobile-active');
    tabHide.removeClass('activeTab');
    tabContHide.removeClass('active');
    tabMobHide.removeClass('tab-mobile-active');
}
function hideTab(tab, tabCont, tabMob) {
    tab.removeClass('activeTab');
    tabCont.removeClass('active');
    tabMob.removeClass('tab-mobile-active');
}

function clearErrors() {
    $('input, textarea').removeClass('errorState');
    $('.errorMessage').text('');
}
function validateForm1() {
    var nameElem = $('#name'),
        nameVal = nameElem.val(),
        errorName = '';
    if(nameVal.trim() == '') errorName = 'Поле “ФИО” обязательно к заполнению';
    else {
        let reg = new RegExp('[^а-яА-ЯёЁ -]+');
        if (reg.test(nameVal)) errorName = 'Поле “ФИО” заполнено некорректно';
    }
    if (errorName.trim() != ''){
        nameElem.addClass('errorState');
        nameElem.siblings('.errorMessage').text(errorName);
    }

    var phoneElem = $('#phone'),
        phoneVal = phoneElem.val();
    if (phoneVal.trim() == '+7 (___) ___-__-__' || phoneVal.trim() == '') {
        phoneElem.addClass('errorState');
        phoneElem.siblings('.errorMessage').text('Поле “Телефон” обязательно к заполнению');
    }

    var addressElem = $('#address'),
        addressVal = addressElem.val();
    if (addressVal.trim() == '') {
        addressElem.addClass('errorState');
        addressElem.siblings('.errorMessage').text('Поле “Адресс” обязательно к заполнению');
    }

    var commentElem = $('#comment'),
        commentVal = commentElem.val();
    if (commentVal.trim() == '') {
        commentElem.addClass('errorState');
        commentElem.siblings('.errorMessage').text('Поле “Комментарий” обязательно к заполнению');
    }
}

$(document).ready(() => {
    var tab1 = $('.tab1'),
        tab2 = $('.tab2'),
        tabCont1 = $('.tabContent1'),
        tabCont2 = $('.tabContent2'),
        tabMob1 = $('.tab-mobile-1'),
        tabMob2 = $('.tab-mobile-2');

    showTab(tab1, tabCont1, tabMob1, tab2, tabCont2, tabMob2);

    tab1.click(() => {
        showTab(tab1, tabCont1, tabMob1, tab2, tabCont2, tabMob2);
    });
    tab2.click(() => {
        showTab(tab2, tabCont2, tabMob2, tab1, tabCont1, tabMob1);
    });
    tabMob1.click(() => {
        if(tabMob1.hasClass('tab-mobile-active')){
            hideTab(tab1, tabCont1, tabMob1);
        } else {
            showTab(tab1, tabCont1, tabMob1, tab2, tabCont2, tabMob2);
        }
    });
    tabMob2.click(() => {
        if(tabMob2.hasClass('tab-mobile-active')){
            hideTab(tab2, tabCont2, tabMob2);
        } else {
            showTab(tab2, tabCont2, tabMob2, tab1, tabCont1, tabMob1);
        }
    });
    $(window).resize(() => {
        if(document.documentElement.clientWidth >= mobileWidth && !tabMob1.hasClass('tab-mobile-active') && !tabMob2.hasClass('tab-mobile-active')){
            showTab(tab1, tabCont1, tabMob1, tab2, tabCont2, tabMob2);
        }
    });


    $('.radioButton').click(function () {
        radioDeActivate($(this).attr('data-group'));
        $(this).addClass('activeRadio');
    });
    $('.radioLabel').click(function ()  {
        let elem = $(this).siblings('.radioButton');
        radioDeActivate(elem.attr('data-group'));
        elem.addClass('activeRadio');
    });


    $('#submitTab1').click(() => {
        clearErrors();
        validateForm1();
    });
    
    $('input, textarea').focus(function () {
        $(this).removeClass('errorState');
    });
    $("#phone").mask("+7 (999) 999-99-99");
});