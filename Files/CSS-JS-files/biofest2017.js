$(document).ready(function(){ //Activate script only when entire document is ready

         $("#menubtn").click(function(){ //Shows main menu

         $(".menubtn").fadeOut();
         $("#welcome_screen_div").fadeOut();
         $(".menu").fadeIn();
         $(".backtohomepage").fadeIn();

      });

         $(".backtohomepage").click(function(){
            $(".menu").hide(1000);
            $("#welcome_screen_div").show(1000);
            $(".backtohomepage").fadeOut();
         });

         //When symposium is clicked, shows symposium and hides everything else  
         $("#sym").click(function(){
            $(".backtohomepage").fadeOut();
            $("#eve").hide(1000);
            $("#spons").hide(1000);
            $("#cont").hide(1000);
            $("#team").hide(1000, function(){
               $("#sym").animate({
                  "left": "0",
                  "width": "100%"
               }, 1000, function(){
                  $(".backtomainmenufromsym").show(500);
               });
               });
            });

         //When events is clicked, shows events and hides everything else
         $("#eve").click(function(){
            $(".backtohomepage").fadeOut();
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
                     $(".backtomainmenufromeve").show(500);
                  });
               });
            });
      });           

         $("#spons").click(function(){
            $(".backtohomepage").fadeOut();
            $("#sym").hide(1000);
            $("#reg").hide(1000);
            $("#cont").hide(1000);
            $("#eve").hide(1000);
            $("#team").hide(1000, function(){
               $("#spons").animate({
                  "left": "0",
                  "width": "100%"
               }, 1000, function(){
                  $(".backtomainmenufromspons").show(500);
               });
            });
      });


         $("#cont").click(function(){
            $(".backtohomepage").fadeOut();
            $("#sym").hide(1000);
            $("#eve").hide(1000);
            $("#spons").hide(1000);
            $("#team").hide(1000, function(){
                  $(".firstletterinmenu").animate({
                     "font-size": "3.2vw"
                  });

                  $(".menu").animate({
                     "width": "100%",
                     "font-size": "2.5vw",
                     "left": "0",
                     "padding-top": "4%",
                     "padding-right": "80%"
                  }, 500, function(){
                        $(".backtomainmenufromcont").fadeIn(200);
                        $("#contdescription").fadeIn(200);
                        $("#contcontact1").fadeIn(200);
                        $("#callcont1").fadeIn(200);
                        $("#contcontact2").fadeIn(200);
                        $("#callcont2").fadeIn(200);
                        $("#contcontact3").fadeIn(200);
                        $("#callcont3").fadeIn(200);
                        $("#contphn1").fadeIn(200);
                        $("#contphn2").fadeIn(200);
                        $("#contphn3").fadeIn(200);
                        $("#contemail").fadeIn(200);
                        $("#contemailicon").fadeIn(200);
                        $("#contemailid").fadeIn(200);
                     });
                  });
               });

         $("#team").click(function(){
            $(".backtohomepage").fadeOut();
            $("#sym").hide(1000);
            $("#reg").hide(1000);
            $("#spons").hide(1000);
            $("#eve").hide(1000);
            $("#cont").hide(1000, function(){


               $("#team").animate({
                  "left": "0",
                  "width": "100%"
               }, 1000, function(){
                  $(".backtomainmenufromteam").show(500);
               });
            });
      });

         $(".backtomainmenufromsym").click(function(){
            $(".evemenu").hide(1000);
            $(".menu").show(1000);
            $(".backtomainmenufromsym").hide();

            $("#sym").animate({
               "width": "20%",
               "left": "0%",
               "top": "0",
               "text-align": "center"
            }, 500, function(){
               $(".backtohomepage").fadeIn();
            });
         });

         //Redirect back to main menu from events menu
         $(".backtomainmenufromeve").click(function(){
            $(".evemenu").hide(1000);
            $(".menu").show(1000);
            $(".backtomainmenufromeve").hide();

            $("#eve").animate({
               "width": "20%",
               "left": "20%",
               "top": "0",
               "text-align": "center"
            }, 500, function(){
               $(".backtohomepage").fadeIn();
            });
         });

         //Redirect back to main menu from spons
         $(".backtomainmenufromspons").click(function(){
            $(".evemenu").hide(1000);
            $(".menu").show(1000);
            $(".backtomainmenufromspons").hide();

            $("#spons").animate({
               "width": "20%",
               "left": "40%",
               "top": "0",
               "text-align": "center"
            }, 500, function(){
               $(".backtohomepage").fadeIn();
            });
         });

         $(".backtomainmenufromcont").click(function(){
            $("#contdescription").fadeOut(200);
            $("#contcontact1").fadeOut(200);
            $("#callcont1").fadeOut(200);
            $("#contcontact2").fadeOut(200);
            $("#callcont2").fadeOut(200);
            $("#contcontact3").fadeOut(200);
            $("#callcont3").fadeOut(200);
            $("#contphn1").fadeOut(200);
            $("#contphn2").fadeOut(200);
            $("#contphn3").fadeOut(200);
            $("#contemail").fadeOut(200);
            $("#contemailicon").fadeOut(200);
            $("#contemailid").fadeOut(200);
            $(".backtomainmenufromcont").hide(200);

            $(".menu").animate({
               "width": "100%"
            });


            $("#cont").animate({
               "width": "20%",
               "left": "60%",
               "top": "0",
               "text-align": "center"
            }, 500, function(){
               $(".backtohomepage").fadeIn();
            });
         });

         $(".backtomainmenufromteam").click(function(){
            $(".evemenu").hide(1000);
            $(".menu").show(1000);
            $(".backtomainmenufromteam").hide();

            $("#team").animate({
               "width": "20%",
               "left": "80%",
               "top": "0",
               "text-align": "center"
            }, 500, function(){
               $(".backtohomepage").fadeIn();
            });
         });


         //Redirect back to events menu from forensics page

         $(".backtoevemenu").click(function(){

            $("#gbcdescription").fadeOut(200);
            $("#gbcregistration").fadeOut(200);
            $("#gbcrules").fadeOut(200);
            $("#gbccontact").fadeOut(200);
            $("#gbccall").fadeOut(200);
            $("#gbcemail").fadeOut(200);
            $("#gbcphn").fadeOut(200);
            $("#gbcarchive").fadeOut(200);
            $("#gbcemailid").fadeOut(200);

            $("#biobizdescription").fadeOut(200);
            $("#biobizregistration").fadeOut(200);
            $("#biobizrules").fadeOut(200);
            $("#biobizcontact").fadeOut(200);
            $("#biobizcall").fadeOut(200);
            $("#biobizemail").fadeOut(200);
            $("#biobizphn").fadeOut(200);
            $("#biobizarchive").fadeOut(200);
            $("#biobizemailid").fadeOut(200);

            $("#quizdescription").fadeOut(200);
            $("#quizregistration").fadeOut(200);
            $("#quizrules").fadeOut(200);
            $("#quizcontact").fadeOut(200);
            $("#quizcall").fadeOut(200);
            $("#quizemail").fadeOut(200);
            $("#quizphn").fadeOut(200);
            $("#quizarchive").fadeOut(200);
            $("#quizemailid").fadeOut(200);

            $("#idpdescription").fadeOut(200);
            $("#idpregistration").fadeOut(200);
            $("#idprules").fadeOut(200);
            $("#idpcontact").fadeOut(200);
            $("#idpcall").fadeOut(200);
            $("#idpemail").fadeOut(200);
            $("#idpphn").fadeOut(200);
            $("#idparchive").fadeOut(200);
            $("#idpemailid").fadeOut(200);

            $("#workshopsdescription").fadeOut(200);
            $("#workshopsregistration").fadeOut(200);
            $("#workshopsrules").fadeOut(200);
            $("#workshopscontact").fadeOut(200);
            $("#workshopscall").fadeOut(200);
            $("#workshopsemail").fadeOut(200);
            $("#workshopsphn").fadeOut(200);
            $("#workshopsarchive").fadeOut(200);
            $("#workshopsemailid").fadeOut(200);

            $("#lecturesdescription").fadeOut(200);
            $("#lecturesregistration").fadeOut(200);
            $("#lecturesrules").fadeOut(200);
            $("#lecturescontact").fadeOut(200);
            $("#lecturescall").fadeOut(200);
            $("#lecturesemail").fadeOut(200);
            $("#lecturesphn").fadeOut(200);
            $("#lecturesarchive").fadeOut(200);
            $("#lecturesemailid").fadeOut(200);

            $("#paperandposterdescription").fadeOut(200);
            $("#paperandposterregistration").fadeOut(200);
            $("#paperandposterrules").fadeOut(200);
            $("#paperandpostercontact").fadeOut(200);
            $("#paperandpostercall").fadeOut(200);
            $("#paperandposteremail").fadeOut(200);
            $("#paperandposterphn").fadeOut(200);
            $("#paperandposterarchive").fadeOut(200);
            $("#paperandposteremailid").fadeOut(200);

            $("#streaxdescription").fadeOut(200);
            $("#streaxregistration").fadeOut(200);
            $("#streaxrules").fadeOut(200);
            $("#streaxcontact").fadeOut(200);
            $("#streaxcall").fadeOut(200);
            $("#streaxemail").fadeOut(200);
            $("#streaxphn").fadeOut(200);
            $("#streaxarchive").fadeOut(200);
            $("#streaxemailid").fadeOut(200);

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
               });

               $(".evemenu").show(1000);

               $("#forensics").animate({
                  "left": "0",
                  "top": "0",
                  "width": "11.11%",
                  "padding-left": "1%",
                  "text-align": "center"
               });

               $("#streax").animate({
                  "left": "11.11%",
                  "top": "0",
                  "width": "11.11%",
                  "padding-left": "2%",
                  "text-align": "center"
               });

               $("#paperandposter").animate({
                  "left": "22.22%",
                  "top": "0",
                  "width": "11.11%",
                  "padding-left": "2.4%",
                  "text-align": "center"
               });

               $("#lectures").animate({
                  "left": "33.33%",
                  "top": "0",
                  "width": "11.11%",
                  "padding-left": "1.3%",
                  "text-align": "center"
               });

               $("#workshops").animate({
                  "left": "44.44%",
                  "top": "0",
                  "width": "11.11%",
                  "padding-left": "0.1%",
                  "text-align": "center"
               });

               $("#idp").animate({
                  "left": "55.55%",
                  "top": "0",
                  "width": "11.11%",
                  "padding-left": "0.8%",
                  "text-align": "center"
               });

               $("#quiz").animate({
                  "left": "66.66%",
                  "top": "0",
                  "width": "11.11%",
                  "padding-left": "3%",
                  "text-align": "center"
               });

               $("#biobiz").animate({
                  "left": "77.77%",
                  "top": "0",
                  "width": "11.11%",
                  "padding-left": "2.3%",
                  "text-align": "center"
               });

               $("#gbc").animate({
                  "left": "88.88%",
                  "top": "0",
                  "width": "11.11%",
                  "padding-left": "0.5%",
                  "text-align": "center"
               });

               $(".backtoevemenu").fadeOut();
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
                        $(".backtoevemenu").fadeIn(200);
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
                     $(".backtoevemenu").fadeIn(200);
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
                     $(".backtoevemenu").fadeIn(200);
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
                     $(".backtoevemenu").fadeIn(200);
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
                     $(".backtoevemenu").fadeIn(200);
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
                     $(".backtoevemenu").fadeIn(200);
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
                     $(".backtoevemenu").fadeIn(200);
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
                     $(".backtoevemenu").fadeIn(200);
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
                     $(".backtoevemenu").fadeIn(200);
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