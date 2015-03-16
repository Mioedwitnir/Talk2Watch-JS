var notification = new Notification();
notification.init("Title", "Subtitle", "Body");
notification.addDismissAction("Dismiss");
notification.addResponseAction("Reply", ["Text1", "Text2", "Text3"]);
notification.addGenericAction("Action");

notification.onDismiss = function() 
{
};

notification.onGeneric = function(_id, _text) 
{
	notification.sendAcknowledgment(_id, "Generic success");
};

notification.onResponse = function(_id, _text) 
{
	notification.sendAcknowledgment(_id, "Response success");
};

notification.send();