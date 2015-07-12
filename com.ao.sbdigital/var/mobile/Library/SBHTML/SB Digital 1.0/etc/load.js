var Loaded = false;
function load() {
	document.getElementById('time').style.top = TimePosition + 'px';
	document.getElementById('battery').style.top = BatteryPosition + 'px';
	document.getElementById('batterybg').style.top = BatteryPosition + 'px';
	document.getElementById('time').style.color = '#' + TimeColour;
	document.getElementById('battery').style.backgroundColor = '#' + BatteryColour;
	document.getElementById('batterybg').style.borderColor = '#' + BatteryColour;
	$('#time').animate({opacity: '1'}, LoadTime)
	$('#battery').animate({opacity: '1'}, LoadTime)
	$('#batterybg').animate({opacity: '1'}, LoadTime)
	setTimeout(function(){
		Loaded = true;   
    },LoadTime)
}