function addAsFavorite(title,url){
	try{
		if (window.sidebar) { 
			window.sidebar.addPanel(title, url,"");
		} else if( document.all ) {
			window.external.AddFavorite( url, title);
		} else if( window.opera && window.print ) {
			alert("对不起，不支持此浏览器,清同时按住CTRL+D键加入收藏！");
			return true;
		}
	}
	catch(e){
			alert("对不起，不支持此浏览器,请同时按住CTRL+D键加入收藏！");
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
			alert("对不起，不支持此浏览器!");
			}
		}
		var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components. interfaces.nsIPrefBranch);
		prefs.setCharPref('browser.startup.homepage',url);
	}
}