$(document).ready(function(){ //Activate script only when entire document is ready

         $("#showmenu").click(function(){ //Shows main menu

         $("#showmenu").hide(1000);
         $(".menu").fadeIn(1000);
         $("#closebtn-mainmenu").fadeIn(1000);


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
            $("#spons").hide(1000);
            $("#cont").hide(1000);
            $("#team").hide(1000, function(){
               $("#eve").animate({
                  "left": "0",
                  "width": "100%"
               }, 1000, function(){
                  $("#eve").fadeOut(1000);
                  $(".evemenu").fadeIn(1000, function(){
                     $("closebtn-evemenu").fadeIn();
                  });
               });
            });
      });            


         $("#cont").click(function(){
            $("#sym").hide(1000);
            $("#reg").hide(1000);
            $("#spons").hide(1000);
            $("#eve").hide(1000);
            $("#team").hide(1000, function(){
               $("#cont").animate({
                  "left": "0",
                  "width": "100%"
               });
            });
      });

         $("#team").click(function(){
            $("#sym").hide(1000);
            $("#reg").hide(1000);
            $("#spons").hide(1000);
            $("#eve").hide(1000);
            $("#cont").hide(1000, function(){
               $("#team").animate({
                  "left": "0",
                  "width": "100%"
               });
            });
      });


         //Redirect back to events menu from events pages
         $(".backtoevemenufromforensicsfromforensics").click(function(){
            $("#forensicsdescription").fadeOut(200);
            $("#forensicsregistration").fadeOut(200);
            $("#forensicsrules").fadeOut(200);
            $("#forensicscontact").fadeOut(200);
            $("#forensicscall").fadeOut(200);
            $("#forensicsemail").fadeOut(200);
            $("#forensicsphn").fadeOut(200);
            $("#forensicsarchive").fadeOut(200);
            $("#forensicsemailid").fadeOut(200, function(){

               $(".evemenu").animate({
                  "position": "fixed",
                  "height": "100%",
                  "font-size": "1.6vw",
                  "padding-top": "300px"
               });

               $(".firstletterinevents").animate({
                     "font-size": "2.5vw"
               }, 500, function(){
                  $(".evemenu").show(1000);

                  $("#forensics").animate({
                     "left": "0",
                     "top": "0",
                     "width": "11.11%",
                     "padding-left": "1%",
                     "text-align": "center"
                  });

                  $("#streax").animate({
                     "left": "0",
                     "top": "0",
                     "width": "11.11%",
                     "padding-left": "12.11%",
                     "text-align": "center"
                  });
               });
            }); 
         });

         //Shows Forensics page when clicked   

         $("#forensics").click(function(){
            $("#streax").hide(1000);
            $("#paperandposter").hide(1000);
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
                        $(".backtoevemenufromforensics").fadeIn(200);
                        $("#forensicsdescription").fadeIn(200);
                        $("#forensicsregistration").fadeIn(200);
                        $("#forensicsrules").fadeIn(200);
                        $("#forensicscontact").fadeIn(200);
                        $("#forensicscall").fadeIn(200);
                        $("#forensicsemail").fadeIn(200);
                        $("#forensicsphn").fadeIn(200);
                        $("#forensicsarchive").fadeIn(200);
                        $("#forensicsemailid").fadeIn(200);
                     });
                  });
               });

         //Shows streax page when clicked

         $("#streax").click(function(){

            $("#forensics").hide(1000);
            $("#paperandposter").hide(1000);
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
                  }, 500, function(){
                     $("#streaxdescription").fadeIn(200);
                     $("#streaxregistration").fadeIn(200);
                     $("#streaxrules").fadeIn(200);
                     $("#streaxcontact").fadeIn(200);
                     $("#streaxcall").fadeIn(200);
                     $("#streaxemail").fadeIn(200);
                     $("#streaxphn").fadeIn(200);
                     $("#streaxarchive").fadeIn(200);
                     $("#streaxemailid").fadeIn(200);
                  });
            });
         });

         //Shows paper and poster page when clicked

         $("#paperandposter").click(function(){

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
                  }, 500, function(){
                     $("#paperandposterdescription").fadeIn(200);
                     $("#paperandposterregistration").fadeIn(200);
                     $("#paperandposterrules").fadeIn(200);
                     $("#paperandpostercontact").fadeIn(200);
                     $("#paperandpostercall").fadeIn(200);
                     $("#paperandposteremail").fadeIn(200);
                     $("#paperandposterphn").fadeIn(200);
                     $("#paperandposterarchive").fadeIn(200);
                     $("#paperandposteremailid").fadeIn(200);
                  });
            });
         });

         //Shows Forensics page when clicked

         $("#lectures").click(function(){

            $("#forensics").hide(1000);
            $("#paperandposter").hide(1000);
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
                  }, 500, function(){
                     $("#lecturesdescription").fadeIn(200);
                     $("#lecturesregistration").fadeIn(200);
                     $("#lecturesrules").fadeIn(200);
                     $("#lecturescontact").fadeIn(200);
                     $("#lecturescall").fadeIn(200);
                     $("#lecturesemail").fadeIn(200);
                     $("#lecturesphn").fadeIn(200);
                     $("#lecturesarchive").fadeIn(200);
                     $("#lecturesemailid").fadeIn(200);
                  });
            });
         });

         //Shows workshops page when clicked

         $("#workshops").click(function(){

            $("#forensics").hide(1000);
            $("#paperandposter").hide(1000);
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
                  }, 500, function(){
                     $("#workshopsdescription").fadeIn(200);
                     $("#workshopsregistration").fadeIn(200);
                     $("#workshopsrules").fadeIn(200);
                     $("#workshopscontact").fadeIn(200);
                     $("#workshopscall").fadeIn(200);
                     $("#workshopsemail").fadeIn(200);
                     $("#workshopsphn").fadeIn(200);
                     $("#workshopsarchive").fadeIn(200);
                     $("#workshopsemailid").fadeIn(200);
                  });
            });
         });

         //Shows IDP page when clicked

         $("#idp").click(function(){

            $("#forensics").hide(1000);
            $("#paperandposter").hide(1000);
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
                  }, 500, function(){
                     $("#idpdescription").fadeIn(200);
                     $("#idpregistration").fadeIn(200);
                     $("#idprules").fadeIn(200);
                     $("#idpcontact").fadeIn(200);
                     $("#idpcall").fadeIn(200);
                     $("#idpemail").fadeIn(200);
                     $("#idpphn").fadeIn(200);
                     $("#idparchive").fadeIn(200);
                     $("#idpemailid").fadeIn(200);
                  });
            });
         });

         //Shows Quiz page when clicked

         $("#quiz").click(function(){

            $("#forensics").hide(1000);
            $("#paperandposter").hide(1000);
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
                  }, 500, function(){
                     $("#quizdescription").fadeIn(200);
                     $("#quizregistration").fadeIn(200);
                     $("#quizrules").fadeIn(200);
                     $("#quizcontact").fadeIn(200);
                     $("#quizcall").fadeIn(200);
                     $("#quizemail").fadeIn(200);
                     $("#quizphn").fadeIn(200);
                     $("#quizarchive").fadeIn(200);
                     $("#quizemailid").fadeIn(200);
                  });
            });
         });

         //Shows BioBiz page when clicked

         $("#biobiz").click(function(){

            $("#forensics").hide(1000);
            $("#paperandposter").hide(1000);
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
                  }, 500, function(){
                     $("#biobizdescription").fadeIn(200);
                     $("#biobizregistration").fadeIn(200);
                     $("#biobizrules").fadeIn(200);
                     $("#biobizcontact").fadeIn(200);
                     $("#biobizcall").fadeIn(200);
                     $("#biobizemail").fadeIn(200);
                     $("#biobizphn").fadeIn(200);
                     $("#biobizarchive").fadeIn(200);
                     $("#biobizemailid").fadeIn(200);
                  });
            });
         });

         //Shows Global Biotech Conference page when clicked

         $("#gbc").click(function(){

            $("#forensics").hide(1000);
            $("#paperandposter").hide(1000);
            $("#lectures").hide(1000);
            $("#workshops").hide(1000);
            $("#idp").hide(1000);
            $("#quiz").hide(1000);
            $("#biobiz").hide(1000);
            $("#streax").hide(1000, function(){
               $(".firstletterinevents").animate({
                     "font-size": "3.2vw"
                  });

               $("#gbc").animate({
                  "text-align": "left"
               });

                  $(".evemenu").animate({
                     "left":"0",
                     "width": "100%",
                     "font-size": "2.5vw",
                     "padding-top": "4%",
                     "padding-right": "80%"
                  }, 500, function(){
                     $("#gbcdescription").fadeIn(200);
                     $("#gbcregistration").fadeIn(200);
                     $("#gbcrules").fadeIn(200);
                     $("#gbccontact").fadeIn(200);
                     $("#gbccall").fadeIn(200);
                     $("#gbcemail").fadeIn(200);
                     $("#gbcphn").fadeIn(200);
                     $("#gbcarchive").fadeIn(200);
                     $("#gbcemailid").fadeIn(200);
                  });
            });
         });

});