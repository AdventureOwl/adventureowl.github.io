var Loaded = false;
function load() {
	if (ShowDate == false){
		$('#date').hide();
	}
	if (ShowBatteryBar == false){
		$('#r2').hide();
		$('#r1').hide();
	}
	if (ShowTime == false){
		$('#time').hide();
	}
	if (ShowTapToUnlock == false){
		$('#tap').hide();
		$('#slide').hide();
	}
	
	
	document.getElementById('time').style.color = TimeColour;
	document.getElementById('date').style.color = DateColour;
	document.getElementById('r1').style.backgroundColor = BackgroundRectangleColour;
	document.getElementById('r2').style.backgroundColor = BatteryRectangleColour;
	document.getElementById('time').style.top = TimeYPos + "px";
	document.getElementById('tap').style.top = TapYPos + "px";
	document.getElementById('slide').style.top = TapNotificationYPos + "px";
	document.getElementById('date').style.top = TimeYPos + RelativeDateYPos + "px";
	document.getElementById('tap').style.width = TapToUnlockWidth + "px";
	document.getElementById('tap').style.left = 160 - TapToUnlockWidth / 2 + "px";
	document.getElementById('slide').style.width = SlideToUnlockWidth + "px";
	document.getElementById('slide').style.left = 160 - SlideToUnlockWidth / 2 + "px";
	$("#time").animate({opacity: '1'}, FadeIn);
	$("#tap").animate({opacity: '1'}, FadeIn);
	$("#r2").animate({opacity: BatteryRectangleOpacity}, FadeIn);
	$("#r1").animate({opacity: BackgroundRectangleOpacity}, FadeIn);
	if (AlwaysDate == true){
		$("#date").animate({opacity: '1'}, FadeIn);
	}

	Loaded = true;
}