// required Talk2Watch Pro 30.0.3.4


var level = Talk2Watch.getBatteryLevel();
Talk2Watch.sendSms(String(level) + " %", "[Battery]");