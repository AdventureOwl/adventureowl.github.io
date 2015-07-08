var Device = 'Detect';
//leave as 'detect' to have the widget automatically scaled
//enter your iphone model (or the model of your upscaled resolution) to overrride this
//supported - '6', '6+'
var TwentyFour = false;
//set to false to use the 12 hour clock
//set to true to use the 24 hour clock
var TapNotificationYPos = 490;
//sets the y-position of the slide to unlock icon when notifications are present
//default value is 490
var TapYPos = 240;
//sets the y-position of the tap to unlock icon
//default value is 240
var TimeYPos = 200;
//sets the y-position of the time
//default value is 200
var TimeNotificationYPos = 70;
//sets the y-position of the time when notifications are present
//default value is 70
var RelativeDateYPos = -18;
//sets the y-position of the date relative to the time
//default value is -18
var BatteryPercentageColour = '#ffffff';
//sets the colour of the battery percentage the shows when you tap on the battery bar
//default value is '#ffffff'
var TimeColour = '#ffffff';
//sets the colour of the time
//default value is '#ffffff'
var DateColour = '#ffffff';
//sets the colour of the date
//default value is '#ffffff'
var BatteryRectangleColour = '#000000';
//sets the colour of the battery indication bar (left side)
//default value is '#000000'
var BackgroundRectangleColour = '#000000';
//sets the colour of the battery background bar (right side)
//default value is '#000000'
var BatteryRectangleOpacity = 0.6;
//sets the opacity of the battery indication bar (left side)
//default value is 0.6
var BackgroundRectangleOpacity = 0.2;
//sets the opacity of the battery background bar (right side)
//default value is 0.2
var BatteryBarLeftCornerRoundness = 0;
//sets the curvature of the left corner of the battery bar
//20 is completely round
//0 is rectangular
var BatteryBarRightCornerRoundness = 0;
//sets the curvature of the right corner of the battery bar
//20 is completely round
//0 is rectangular
var FadeIn = 1500;
//sets the length of the initial, on load fade in, in milliseconds
//default value is 1500 (1.5 seconds)
var ClockInterval = 3000;
//sets the update interval for the clock
//default value is 3000 (3 seconds)
var BatteryInterval = 8000;
//sets the update interval for the battery bar
//default value is 8000 (8 seconds)
var NotificationInterval = 1000;
//sets the update interval for the notification check
//default value is 1000 (1 second)
var InfoFade = 3000;
//sets the length of time before the date fades
//default value is 3000
var ShowDate = true;
//set to false to hide the date
var ShowBatteryBar = true;
//set to false to hide the battery bar
var ShowBatteryPercentage = true;
//set to false to hide the battery % which appears on tap
var ShowTime = true;
//set to false to hide the time
var ShowTapToUnlock = true;
//set to false to hide the tap to unlock and slide to unlock
var AlwaysDate = false;
//set to true to always show the date
var AlwaysSlideToUnlock = false;
//set to true to always show the slide to unlock image (if you have a passcode)
var TapToUnlockWidth = 50;
//sets the width (and size) of the tap to unlock image
//default value is 50
var SlideToUnlockWidth = 50;
//sets the width (and size) of the slide to unlock image
//default value is 50

//want to replace the inbuilt tap to unlock image?
//simply replace tap.png in the img folder
//want to replace the inbuilt slide to unlock image (notification view)?
//simply replace slide.png in the img folder
//play around with the width value (above) to make it the right size