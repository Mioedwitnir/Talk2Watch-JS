/*
#ENABLE_RUN_IN_BACKGROUND
requires Talk2Watch Pro 30.0.3.4
*/

var udpModule = new UdpModule();
var port = 9898;
var isListening = udpModule.listen(port);

if(isListening==true)
{
	Talk2Watch.showToast("Udp: Listening on port " + String(port));
	udpModule.onDataReceived = function(_data, _sender) 
	{
		Talk2Watch.sendEmail(_data, _sender, "[Udp Message]");
	};
}
else
	Talk2Watch.showToast("Udp: Listening on port " + String(port) + " failed");

