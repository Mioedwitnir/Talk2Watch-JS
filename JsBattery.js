/*
	requires Talk2Watch Pro 30.0.3.4
*/

var plaform = new PlatformInterface();
var batteryLevel = plaform.getBatteryLevel();

Talk2Watch.sendSms(String(batteryLevel) + " %", "[Battery]");