$(document).ready(function(){
	// var height = $(window).height();
	// $('#text').css('margin-top',height/2 + "px !important");
    // $('.main-container').css('height',height);
    $('body').css('background-image','url(images/home.jpg)')
    heightChange();
    keepChanging();
    $('.more-info').click(function(){
        // $('#moreinfos').toggle();
        if ($(window).width() < 991)
            $('#smaller-moreinfos').fadeToggle();
        else
             $('#larger-moreinfos').fadeToggle();
    });

    $( window ).resize(function() {
      heightChange();
    });

    $('.beg').html('<i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
    $('.inter').html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i>');
    $('.best').html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
});

function heightChange()
{
    var height = $(window).height();
    var width = $(window).width();
    $('.main-container').css('height',height);
    $('.main-container').css('width',width);
}

// function keepChanging()
// {
//     $('#tagline').css('color','rgba(0,0,44,0.3)');
//     var taglines = ["You can't have everything. Where would you put it?"]
//     var i = 0;
//     var length = taglines.length;
//     setInterval(function(){ 
//         i = i%length;
//         $('#tagline').html(taglines[i]);
//         i++;
//     }, 5000);   
// }

function aboutMe()
{
    back = "images/starrynight.jpg";
    if(back)
    {
        $('.inverse-text-holder').css('background-image', 'url('+back+')');
        $('.inverse-i').css('background-image', 'url('+back+')');
    }
}

function resume()
{
    back = "images/one.jpg";
    if(back)
    {
        $('.inverse-text-holder').css('background-image', 'url('+back+')');
        $('.inverse-i').css('background-image', 'url('+back+')');
    }
}

function projects()
{
    back = "images/two.jpg";
    if(back)
    {
        $('.inverse-text-holder').css('background-image', 'url('+back+')');
        $('.inverse-i').css('background-image', 'url('+back+')');
    }
}


function moveRight()
{
    $('body').css('background-image','url(images/one.jpg)')
    $('#home').hide('slide',{direction:'left'},1000);
    $('#resume').show('slide',{direction:'right'},1000);
    resume();
}
function moveLeft()
{   
    $('body').css('background-image','url(images/two.jpg)')
    $('#home').hide('slide',{direction:'right'},1000);
    $('#project').show('slide',{direction:'left'},1000);
    projects();
}
function moveUp()
{   
    $('body').css('background-image','url(images/starrynight.jpg)')
    $('#home').hide('slide',{direction:'down'},1000);
    $('#about').show('slide',{direction:'up'},1000);
    aboutMe();
}
function moveBackRight()
{
    $('#home').show('slide',{direction:'left'},1000);
    $('#resume').hide('slide',{direction:'right'},1000);
    $('body').css('background-image','url(images/home.jpg)')
}
function moveBackLeft()
{   
    $('#home').show('slide',{direction:'right'},1000);
     $('#project').hide('slide',{direction:'left'},1000);
     $('body').css('background-image','url(images/home.jpg)')
}
function moveBackUp()
{   
    $('#home').show('slide',{direction:'down'},1000);
     $('#about').hide('slide',{direction:'up'},1000);
     $('body').css('background-image','url(images/home.jpg)')
}
