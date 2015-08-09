function sidebarheight()
{
        if($('body').width() > 992)
             {
              var x = $(window).height();
              var y = $('.maincontent').height();
              if(x > y)
              { 
                 x = x + 50;
                $('.sidebar').height(x);
              }
              else
              {
                y = y+50;
                $('.sidebar').height(y);
              }
             }
             else{
              $('.sidebar').css('height',"auto");
             }}
function blue()
{
                  $('body').css('background-color',"#99ddcc");
                  $('body').css('background-image',"url('http://www.macwallhd.com/wp-content/Wallpapers/20121005/Nature%20Apple%20Mac%20Wallpapers%20Wild%20flowers%20and%20Plants1203.jpg')");
                  $('#activehome').css('background-color',"#ee8811");
                  $('.intouch').css('background-color',"#ee8811");
                  $('#pacman1').css('border-right', '60px solid transparent');
                  $('#pacman1').css('border-top', '60px solid #ee8811');
                  $('#pacman1').css('border-left', '60px solid #ee8811');
                  $('#pacman1').css('border-bottom', '60px solid #ee8811');
                  $('#pacman2').css('border-right', '60px solid transparent');
                  $('#pacman2').css('border-top', '60px solid #ee8811');
                  $('#pacman2').css('border-left', '60px solid #ee8811');
                  $('#pacman2').css('border-bottom', '60px solid #ee8811');}
function offical()
{
      $('body').css('background-color',"#FAF0E6");
      $('body').css('background-image',"url('')");
        $('#activehome').css('background-color',"#FAF0E6");
         $('.intouch').css('background-color',"#FAF0E6");
       $('#pacman1').css('border-right', '60px solid transparent');
        $('#pacman1').css('border-top', '60px solid #FAF0E6 ');
        $('#pacman1').css('border-left', '60px solid #FAF0E6');
        $('#pacman1').css('border-bottom', '60px solid #FAF0E6');
        $('#pacman2').css('border-right', '60px solid transparent');
        $('#pacman2').css('border-top', '60px solid #FAF0E6');
        $('#pacman2').css('border-left', '60px solid #FAF0E6');
        $('#pacman2').css('border-bottom', '60px solid #FAF0E6');
        $('.nav-justified > .active > a').css('color',"#666");
         $('.intouch').css('background-color',"#666");}
$(document).ready(function(){
  $('.sidebar').hide();
  $('.resume').hide();
  $('.projects').hide();
  $('.About').hide();
  $(".contacttext").hide();
  $('.pannels').hide();
  $('#about_me').show();

  offical();
  if($(window).width() > 992)
    $('fieldset').css("width", 0.9*($(window).width() - $('.sidebar').width()));
  $( window ).resize(function() {
     // if($(window).width() > 992)
     //  $('fieldset').css("width", 0.9*($(window).width() - $('.sidebar').width()));
    sidebarheight();
    // if($(window).width() > 992)
    //   $('fieldset').css("width", 0.9*($(window).width() - $('.sidebar').width()));
  });
  $('#resume_link').click(function(){
    $('.masthead').animate({
      marginTop:'-460px'},"slow");
    $('#navigationbar').animate({
        marginTop:'-60px'},"slow");
    $('.resume').animate({
      marginTop:'40px'},"slow");
    $('.sidebar').show();
    $('.linkname').hide();
    $('#navigationbar').hide();
    $('.resume').show();
    $('.home').hide();
    $('.About').hide();
    $(".intouch").hide();
       sidebarheight();
  });
  $(".sidebar").hover(function(){
         $('.linkname').show();
          },function(){
         $('.linkname').hide();
        });
  $("#home").hover(function(){
         $('.address').show();
          },function(){
         $('.address').hide();
        });
  $("#email").hover(function(){
         $('.emailid').show();
          },function(){
         $('.emailid').hide();
        });
  $("#home_s").click(function(){
       $('.masthead').animate({
        marginTop:'0px'
      },"slow");
        $('#navigationbar').show();
      $('#navigationbar').animate({
        marginTop:'470px'
      },"slow");
      $('#home').animate({
        marginTop:'0px'
      },"slow");
      $('.sidebar').hide();
      $('.resume').hide();
      $('.About').hide();
      $('.projects').hide();  
      $('.linkname').hide();
       $('.home').show(); 
       $(".intouch").show();
        sidebarheight();
   });
  $("#projects_link").click(function(){
       $('.masthead').animate({
        marginTop:'-460px'
      },"slow");
      $('#navigationbar').animate({
        marginTop:'-60px'
      },"slow");
      $('.projects').animate({
        marginTop:'40px'
      },"slow");
      $('.sidebar').show();
      $('.linkname').hide();
      $('#navigationbar').hide();
      $('.resume').hide();
       $('.home').hide();
       $('.projects').show();
       $(".intouch").show();
        sidebarheight();
   });
  $("#contact_link").click(function(){
       $('.masthead').animate({
        marginTop:'-460px'
      },"slow");
      $('#navigationbar').animate({
        marginTop:'-60px'
      },"slow");
      $('.About').animate({
        marginTop:'40px'
      },"slow");
      $('.sidebar').show();
      $('.linkname').hide();
      $('#navigationbar').hide();
      $('.resume').hide();
       $('.home').hide();
       $('.projects').hide();
       $('.About').show();
       $(".intouch").show();
        sidebarheight();
  });
  $("#contact_s").click(function(){
      $('.home').hide();
      $('.resume').hide();
      $('.projects').hide();
      $('.About').show();
      $(".intouch").show();
       sidebarheight();
  });
  $("#project_s").click(function(){
    $('.home').hide();
    $('.resume').hide();
    $('.projects').show();
    $('.About').hide();
    $(".intouch").show();
     sidebarheight();
  });
  $("#resume_s").click(function(){
    $('.home').hide();
    $('.resume').show();
    $('.projects').hide();
    $('.About').hide();
     $(".intouch").hide();
      sidebarheight();
  });
  $('#blue').click(function(){
   blue();
  });
  $('#pink').click(function(){
    $('body').css('background-image',"url('test.jpg')");
    $('body').css('background-color',"#D6E3B5");
    $('#activehome').css('background-color',"#daacac");
     $('.intouch').css('background-color',"#daacac");
   $('#pacman1').css('border-right', '60px solid transparent');
    $('#pacman1').css('border-top', '60px solid #daacac ');
    $('#pacman1').css('border-left', '60px solid #daacac');
    $('#pacman1').css('border-bottom', '60px solid #daacac');
    $('#pacman2').css('border-right', '60px solid transparent');
    $('#pacman2').css('border-top', '60px solid #daacac');
    $('#pacman2').css('border-left', '60px solid #daacac');
    $('#pacman2').css('border-bottom', '60px solid #daacac');
  });
  $('#offical').click(function(){
    offical();
  });
  $(".getintouch").click(function(){
    $(".contacttext").toggle();
    if($('.contacttext').css('display') == "none")
    {
      $('#icon').removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
      if($('.home').css('display') != "none")
	   	{
        $('#navigationbar').show();
        $('#navigationbar').animate({
          marginTop:'470px'
        },"slow");
      }
		}
    else
    {
      $('#icon').removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
        if($('.home').css('display') != "none")
        {
	        $('#navigationbar').show();
          $('#navigationbar').animate({
            marginTop:'-20px'
          },"slow");
        }
    }       
  });
  $('#about_me_button').click(function(){
    $('.pannels').hide();
    $('#about_me').show();
  });
  $('#education_button').click(function(){
    $('.pannels').hide();
    $('#education').show();
  });
  $('#experience_button').click(function(){
    $('.pannels').hide();
    $('#experience').show();
  });
  $('#other_activites_button').click(function(){
    $('.pannels').hide();
    $('#other_activites').show();
  });
  $('#resume_cv_button').click(function(){
    $('.pannels').hide();
    $('#resume_and_cv').show();
  });
  $('#skills_button').click(function(){
    $('.pannels').hide();
    $('#skills').show();
  });
});