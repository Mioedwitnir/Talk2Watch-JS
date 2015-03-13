/*
	requires Talk2Watch Pro 30.0.3.4
*/

var plaform = new PlatformInterface();
var data = plaform.getClipboardData();

Talk2Watch.sendSms(data, "[Clipboard]");