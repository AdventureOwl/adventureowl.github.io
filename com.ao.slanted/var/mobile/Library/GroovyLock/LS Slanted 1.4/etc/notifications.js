function notifications(){
    if (groovyAPI.isShowingNotifications()){
        if (loaded){
    		$("#time").animate({top: 69 + yposn + 'px'}, 500);
    		$("#tang").animate({top: 40 + yposn + 'px'}, 500);
    		$("#battery").animate({opacity: '0'}, 500);
    		$("#charging").animate({opacity: '0'}, 500);
    		$("#date").animate({opacity: '0'}, 500);
    		$("#tap").animate({top: 470 + ypostapn + 'px'}, 500);
            document.getElementById('slide').style.top = 470 + ypostapn + 'px';
            setTimeout(function(){
                $("#slide").animate({opacity: '1'}, 250);
                $("#tap").animate({opacity: '0'}, 500);
            },500)
            note = true;
        }
    } else {
    	if (loaded){
            if (note){	
                $("#time").animate({top: 129 + ypos + 'px'}, 500);
                $("#tang").animate({top: 100 + ypos + 'px'}, 500);
                $("#slide").animate({top: 400 + ypostap + 'px'}, 500);
                document.getElementById('tap').style.top = 400 + ypostap + 'px';
                setTimeout(function(){
                    $("#slide").animate({opacity: '0'}, 1000);
                    $("#tap").animate({opacity: '1'}, 500);
                },500)
                note = false;
            }
    	}

	}
	setTimeout(notifications, notificationinterval);      
};
notifications();