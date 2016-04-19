//data
var users = [
    {
        id: 1,
        firstName: "Denis",
        secondName: "Sleptsov",
        education: "Donetsk National Technical University (2003 - 2009)",
        reasonsForGoIT: {
            1: "First reason...",
            2: "Second reason...",
            3: "Third reason..."
        },
        phone: "380 050 984 76 77",
        profileFB: "https://www.facebook.com/denis.sleptsov",
        feedback: "GoIT student",
        image: "img/profiles/boy.png"
    },
    {
        id: 2,
        firstName: "Foma",
        secondName: "Pershov",
        education: "Kharkiv Polytechnic Institute (2001 - 2006)",
        reasonsForGoIT: {
            1: "Lorem reason...",
            2: "Ipsum reason...",
            3: "Phasellus reason..."
        },
        phone: "380 99 930 5176",
        profileFB: "https://www.facebook.com/foma.pershov",
        feedback: "facebook bot",
        image: "img/profiles/foma.jpg"
    },
    {
        id: 3,
        firstName: "John",
        secondName: "Resig",
        education: " Rochester Institute of Technology (2000 - 2005)",
        reasonsForGoIT: {
            1: "No any reasons..."
        },
        phone: "",
        profileFB: "",
        feedback: "John Resig is a staff engineer at Khan Academy and the creator of the jQuery JavaScript library.",
        image: "img/profiles/resing.jpg"
    }
];

$(function(){

    var html = $('#simple-tmpl').html();
    var tmplBox = $('.simple-tmpl-box');
    var tmplBoxLd = $('.simple-tmplLd-box');
    // Render with JR plugin
    var content = tmpl(html, {
        data: users
    });
    tmplBox.append(content).hide();

    $('#render-tmpl').one('click', function(){
        tmplBox.slideDown(500);
        $(this).addClass('disabled');
    });

    //render with LoDash plugin
    var contentLd = _.template(html);

    tmplBoxLd.append(contentLd({
        data: users
    })).hide();

    $('#render-LoDash').one('click', function(){
        tmplBoxLd.slideDown(500);
        $(this).addClass('disabled');
    });

    //hide and remove user-box from DOM
    $('.hide-user').on('click', function(){
        $(this).parents('.user-box').slideUp(300, function(){
            $(this).remove();
        });
    })

});
