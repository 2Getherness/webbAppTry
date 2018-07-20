var arrLang = {
    'sw' : {
        'nav-home': "Hem",
        'nav-latestProducts': "Våra nya produkter",
        'nav-aboutUs': "Om oss",
        'nav-contactInfo': "Kontakta oss",
        'nav-contact': "Kontakt",
        'nav-phone': "Telefon #: 23423423",
        'title' : "Tamanna",
        'title-welcome' : 'Välkommen till Tamanna',
        'title-des' : "Här kan du hitta många vackra saker från världens alla hörn!"
    },
    'en' : {
        'nav-home': "Home",
        'nav-latestProducts': "Our new products",
        'nav-aboutUs': "About us",
        'nav-contactInfo': "Contact us",
        'nav-contact': "Contact",
        'nav-phone': "Phone #: 234234234",
        'title' : "Tamanna",
        'title-welcome' : 'Welcome to Tamanna',
        'title-des' : "Here you will find beautiful things from around the world!"
    }

};
$(document).ready(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.lang').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});