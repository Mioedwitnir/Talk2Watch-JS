/*
	requires Talk2Watch Pro 30.0.3.4
*/

var tcpModule = new TcpModule();
var port = 9898;
var isListening = tcpModule.listen(port);

tcpModule.sendMessage("TeSt", "192.168.178.25", 9874);

if(isListening==true)
{
	Talk2Watch.showToast("Tcp: Listening on port " + String(port));
	tcpModule.onDataReceived = function(_data, _sender) 
	{
		Talk2Watch.sendEmail(_data, _sender, "[Tcp Message]");
	};
}
else
	Talk2Watch.showToast("Tcp: Listening on port " + String(port) + " failed");

