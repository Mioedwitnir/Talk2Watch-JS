var plaform = new PlatformInterface();
var batteryLevel = plaform.getBatteryLevel();
var isCharging = false;

plaform.onBatteryLevelChanged = function(_level) 
{
	if(_level>batteryLevel)
		isCharging = true;

	if(isCharging==false && (_level==10 || _level==20))
		Talk2Watch.sendSms(String(_level) + " %", "[Battery Warning]");
	else if(isCharging==true && _level==100 && batteryLevel==99)
		Talk2Watch.sendSms("Your device is now completely charged", "[Battery]");

	batteryLevel = _level;
};
