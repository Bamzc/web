function addAsFavorite(title,url){
	try{
		if (window.sidebar) { 
			window.sidebar.addPanel(title, url,"");
		} else if( document.all ) {
			window.external.AddFavorite( url, title);
		} else if( window.opera && window.print ) {
			alert("�Բ��𣬲�֧�ִ������,��ͬʱ��סCTRL+D�������ղأ�");
			return true;
		}
	}
	catch(e){
			alert("�Բ��𣬲�֧�ִ������,��ͬʱ��סCTRL+D�������ղأ�");
	}
}
function setHomepage(url)
{
	if (document.all)
	{
		try{
			document.body.style.behavior='url(#default#homepage)';
			document.body.setHomePage(url);
		}catch(e){
		}
	}
	else if (window.sidebar)
	{
		if(window.netscape)
		{
			try
			{ 
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
			} 
			catch (e) 
			{ 
			alert("�Բ��𣬲�֧�ִ������!");
			}
		}
		var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components. interfaces.nsIPrefBranch);
		prefs.setCharPref('browser.startup.homepage',url);
	}
}