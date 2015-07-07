
var RecentNote = false;
function notifications(){
    if (groovyAPI.isShowingNotifications()){
        if (Loaded){
            document.getElementById('slide').style.top = TapNotificationYPos + "px";
            $("#time").animate({top: TimeNotificationYPos + "px"}, 500);
            $("#tap").animate({top: TapNotificationYPos + "px"}, 500);
            $("#r1").animate({top: '-20px'}, 500);
            $("#r2").animate({top: '-20px'}, 500);
            $("#date").animate({opacity: '0'}, 130);
            setTimeout(function(){
                $("#tap").animate({opacity: '0'}, 500);
                $("#slide").animate({opacity: '1'}, 250);
            },500)
            RecentNote = true;
        }
    } else {
    	if (Loaded){
            if (RecentNote){	
                document.getElementById('tap').style.top = TapYPos + 'px';
                $("#time").animate({top: TimeYPos + 'px'}, 500);
                $("#slide").animate({top: TapYPos + 'px'}, 500);
                $("#r1").animate({top: '0px'}, 500);
                $("#r2").animate({top: '0px'}, 500);
                setTimeout(function(){
                    $("#tap").animate({opacity: '1'}, 250);
                    $("#slide").animate({opacity: '0'}, 500);
                },500)
                RecentNote = false;
            }
    	}

	}
	setTimeout(notifications, NotificationInterval);      
};
notifications();




