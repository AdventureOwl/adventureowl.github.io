
var RecentNote = false;
var Animated = false;
function notifications(){
    if (groovyAPI.isShowingNotifications()){
        if (Loaded){
            if (Animated == false){
            $('#time').animate({opacity: '0'}, 500)
            $('#battery').animate({opacity: '0'}, 500)
            $('#batterybg').animate({opacity: '0'}, 500)
            setTimeout(function(){
                document.getElementById('time').style.top = TimeNotificationPosition + 'px';
                document.getElementById('battery').style.top = BatteryNotificationPosition + 'px';
                document.getElementById('batterybg').style.top = BatteryNotificationPosition + 'px';
                $('#time').animate({opacity: '1'}, 500)
                $('#battery').animate({opacity: '1'}, 500)
                $('#batterybg').animate({opacity: '1'}, 500)
                Animated = true;
            },500)
            RecentNote = true;
            }
        }
    } else {
    	if (Loaded){
            if (RecentNote){	
                $('#time').animate({opacity: '0'}, 500)
                $('#battery').animate({opacity: '0'}, 500)
                $('#batterybg').animate({opacity: '0'}, 500)
                setTimeout(function(){
                    document.getElementById('time').style.top = TimePosition + 'px';
                    document.getElementById('battery').style.top = BatteryPosition + 'px';
                    document.getElementById('batterybg').style.top = BatteryPosition + 'px';
                    $('#time').animate({opacity: '1'}, 500)
                    $('#battery').animate({opacity: '1'}, 500)
                    $('#batterybg').animate({opacity: '1'}, 500)
                },500)
                RecentNote = false;
                Animated = false;
            }
    	}

	}
	setTimeout(notifications, NotificationInterval);      
};
notifications();




