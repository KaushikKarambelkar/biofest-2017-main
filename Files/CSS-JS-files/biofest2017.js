$(document).ready(function(){	//Activate script only when entire document is ready

   	 	$("#showmenu").click(function(){ //Shows main menu

   	 	$("#showmenu").fadeOut(1000,function(){
        $(".menu").fadeIn(1000);
        });

    	});

   	 	//When symposium is clicked, shows symposium and hides everything else	
   	 	$("#sym").click(function(){
   	 		$("sym").fadeOut(1000);
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
   	 		$("#eve").fadeOut(1000);
   	 		$("#sym").fadeOut(1000);
   	 		$("#reg").fadeOut(1000);
   	 		$("#spons").fadeOut(1000);
   	 		$("#cont").fadeOut(1000);
   	 		$("#team").fadeOut(1000);
   	 		$(".evemenu").fadeIn(2000);


   	 		/*$("#eve").css({
   	 			"left": "0",
   	 			"display": "block",
   	 			"width": "100%"
   	 		}, 1000);*/

   	 	});
	});