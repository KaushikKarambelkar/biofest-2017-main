$(document).ready(function(){ //Activate script only when entire document is ready

         $("#showmenu").click(function(){ //Shows main menu

         $("#showmenu").fadeOut(1000,function(){
         $(".menu").fadeIn(1000);
        });

      });

         //When symposium is clicked, shows symposium and hides everything else  
         $("#sym").click(function(){
            $("#sym").fadeOut(1000);
            $("#eve").fadeOut(1000);
            $("#reg").fadeOut(1000);
            $("#spons").fadeOut(1000);
            $("#cont").fadeOut(1000);
            $("#team").fadeOut(1000);
            $(".symmenu").fadeIn(1000);

            /* $("#sym").css({
               "display": "block",
               "width": "100%"
            }, 1000); */

         });

         //When events is clicked, shows events and hides everything else
         $("#eve").click(function(){
            $("#sym").hide(1000);
            $("#reg").hide(1000);
            $("#spons").hide(1000);
            $("#cont").hide(1000);
            $("#team").hide(1000, function(){
               $("#eve").animate({
                  "left": "0",
                  "width": "100%"
               }, 1000, function(){
                  $("#eve").fadeOut(1000);
                  $(".evemenu").fadeIn(1000);
               });
            });


            /*$("#eve").css({
               "left": "0",
               "display": "block",
               "width": "100%"
            }, 1000);*/

         });

         //Shows Forensics page when clicked   

         $("#forensics").click(function(){

            $("#streax").hide(1000);
            $("#paperposter").hide(1000);
            $("#lectures").hide(1000);
            $("#workshops").hide(1000);
            $("#idp").hide(1000);
            $("#quiz").hide(1000);
            $("#biobiz").hide(1000);
            $("#gbc").hide(1000, function(){
                  $(".firstletterinevents").animate({
                     "font-size": "3.2vw"
                  });

                  $(".evemenu").animate({
                     "width": "100%",
                     "font-size": "2.5vw",
                     "padding-top": "4%",
                     "padding-right": "80%"
                  }, 500, function(){
                     $("#forensicsdescription").fadeIn(500, function(){
                        $("#registrationforensics").fadeIn(500);
                        $("#rulesforensics").fadeIn(500, function(){
                           $("#forensicscontact").fadeIn();
                           $("#forensicscoord").fadeIn();
                           $("#callforensics").fadeIn();
                           $("#whatsappforensics").fadeIn();
                           $("#emailforensics").fadeIn(500, function(){
                              $("#archiveforensics").fadeIn();
                           });
                        });
                     });
               });
            });
         });

         //Shows streax page when clicked

         $("#streax").click(function(){

            $("#forensics").hide(1000);
            $("#paperposter").hide(1000);
            $("#lectures").hide(1000);
            $("#workshops").hide(1000);
            $("#idp").hide(1000);
            $("#quiz").hide(1000);
            $("#biobiz").hide(1000);
            $("#gbc").hide(1000, function(){
                  $(".firstletterinevents").animate({
                     "font-size": "3.2vw"
                  });

                  $(".evemenu").animate({
                     "left":"0",
                     "width": "100%",
                     "font-size": "2.5vw",
                     "padding-top": "4%",
                     "padding-right": "80%"
                  });
            });
         });

         //Shows paper and poster page when clicked

         $("#paperposter").click(function(){

            $("#forensics").hide(1000);
            $("#streax").hide(1000);
            $("#lectures").hide(1000);
            $("#workshops").hide(1000);
            $("#idp").hide(1000);
            $("#quiz").hide(1000);
            $("#biobiz").hide(1000);
            $("#gbc").hide(1000, function(){
                  $(".firstletterinevents").animate({
                     "font-size": "3.2vw"
                  });

                  $(".evemenu").animate({
                     "left":"0",
                     "width": "100%",
                     "font-size": "2.5vw",
                     "padding-top": "4%",
                     "padding-right": "80%"
                  });
            });
         });

         //Shows Forensics page when clicked

         $("#lectures").click(function(){

            $("#forensics").hide(1000);
            $("#paperposter").hide(1000);
            $("#streax").hide(1000);
            $("#workshops").hide(1000);
            $("#idp").hide(1000);
            $("#quiz").hide(1000);
            $("#biobiz").hide(1000);
            $("#gbc").hide(1000, function(){
                  $(".firstletterinevents").animate({
                     "font-size": "3.2vw"
                  });

                  $(".evemenu").animate({
                     "left":"0",
                     "width": "100%",
                     "font-size": "2.5vw",
                     "padding-top": "4%",
                     "padding-right": "80%"
                  });
            });
         });

         //Shows workshops page when clicked

         $("#workshops").click(function(){

            $("#forensics").hide(1000);
            $("#paperposter").hide(1000);
            $("#lectures").hide(1000);
            $("#streax").hide(1000);
            $("#idp").hide(1000);
            $("#quiz").hide(1000);
            $("#biobiz").hide(1000);
            $("#gbc").hide(1000, function(){
                  $(".firstletterinevents").animate({
                     "font-size": "3.2vw"
                  });

                  $(".evemenu").animate({
                     "left":"0",
                     "width": "100%",
                     "font-size": "2.5vw",
                     "padding-top": "4%",
                     "padding-right": "80%"
                  });
            });
         });

         //Shows IDP page when clicked

         $("#idp").click(function(){

            $("#forensics").hide(1000);
            $("#paperposter").hide(1000);
            $("#lectures").hide(1000);
            $("#workshops").hide(1000);
            $("#streax").hide(1000);
            $("#quiz").hide(1000);
            $("#biobiz").hide(1000);
            $("#gbc").hide(1000, function(){
               $(".firstletterinevents").animate({
                     "font-size": "3.2vw"
                  });

                  $(".evemenu").animate({
                     "left":"0",
                     "width": "100%",
                     "font-size": "2.5vw",
                     "padding-top": "4%",
                     "padding-right": "80%"
                  });
            });
         });

         //Shows Quiz page when clicked

         $("#quiz").click(function(){

            $("#forensics").hide(1000);
            $("#paperposter").hide(1000);
            $("#lectures").hide(1000);
            $("#workshops").hide(1000);
            $("#idp").hide(1000);
            $("#streax").hide(1000);
            $("#biobiz").hide(1000);
            $("#gbc").hide(1000, function(){
               $(".firstletterinevents").animate({
                     "font-size": "3.2vw"
                  });

                  $(".evemenu").animate({
                     "left":"0",
                     "width": "100%",
                     "font-size": "2.5vw",
                     "padding-top": "4%",
                     "padding-right": "80%"
                  });
            });
         });

         //Shows BioBiz page when clicked

         $("#biobiz").click(function(){

            $("#forensics").hide(1000);
            $("#paperposter").hide(1000);
            $("#lectures").hide(1000);
            $("#workshops").hide(1000);
            $("#idp").hide(1000);
            $("#quiz").hide(1000);
            $("#streax").hide(1000);
            $("#gbc").hide(1000, function(){
               $(".firstletterinevents").animate({
                     "font-size": "3.2vw"
                  });

                  $(".evemenu").animate({
                     "left":"0",
                     "width": "100%",
                     "font-size": "2.5vw",
                     "padding-top": "4%",
                     "padding-right": "80%"
                  });
            });
         });

         //Shows Global Biotech Conference page when clicked

         $("#gbc").click(function(){

            $("#forensics").hide(1000);
            $("#paperposter").hide(1000);
            $("#lectures").hide(1000);
            $("#workshops").hide(1000);
            $("#idp").hide(1000);
            $("#quiz").hide(1000);
            $("#biobiz").hide(1000);
            $("#streax").hide(1000, function(){
               $(".firstletterinevents").animate({
                     "font-size": "3.2vw"
                  });

                  $(".evemenu").animate({
                     "left":"0",
                     "width": "100%",
                     "font-size": "2.5vw",
                     "padding-top": "4%",
                     "padding-right": "80%"
                  });
            });
         });

});