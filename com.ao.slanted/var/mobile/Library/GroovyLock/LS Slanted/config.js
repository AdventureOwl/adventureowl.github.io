var showdate = true;
//set to true to show the date
//set to false to show the battery state (charging or unplugged)
var ypos = 0;
//this value moves the time and battery/date info up/down
//negative numbers move the time up
//positive numbers move the time down
//default value is 0
var yposn = 0;
//this value moves the time and battery/date info up/down when notifcations are visible
//negative numbers move the time up
//positive numbers move the time down
//default value is 0
var taptounlock = true;
//set to true to use the inbuilt groovylock tap to unlock
//set to false if you want to use your own slider/tap to unlock
var ypostap = 0;
//this value moves the inbuilt tap to unlock up/down
//negative numbers move the time up
//positive numbers move the time down
//default value is 0
var ypostapn = 0;
//this value moves the inbuilt tap to unlock up/down when notifications come in
//negative numbers move the time up
//positive numbers move the time down
//default value is 0
var topcolor = '000000';
//this changes the color of the battery % text (on top of the time)
//default value is '000000'
var bottomcolor = '000000';
//this changes the color of the battery state or date text (below the time)
//default value is '000000'
var clockinterval = 1000;
//this represents the update interval of the clock/date in milliseconds
//default value is 1000 (1 second)
var batteryinterval = 5000;
//this represents the update interval of the battery state/percent in milliseconds
//default value is 5000 (5 seconds)
var notificationinterval = 1000;
//this represents the update interval of the notification check in milliseconds
//default value is 1000 (1 second)
var infofade = 3000;
//this represents the timeout of the date/battery info (how long it lasts before fading out) in milliseconds
//default value is 3000 (3 seconds)

//want to replace the inbuilt tap to unlock image?
//simply replace tap.png in the img folder
//want to replace the inbuilt slide to unlock image (notification view)?
//simply replace slide.png in the img folder
//you may also have to change the width value for .container img#tap and .container img#slide in etc/style.css

//AHHHHH!! DON'T TOUCH THESE BAD BOYS!
var loaded = false;
var note = false;
//setting these to true will probably mess up notifications
//don't do it man