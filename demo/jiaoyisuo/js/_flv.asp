
linkarr = new Array();
picarr = new Array();
textarr = new Array();
var swf_width=314;
var swf_height=224;
var files = "";
var links = "";
var texts = "";

linkarr[1] = "http://jrs.china-zszy.com/article-47.html";
picarr[1]  = "/uploads/20140114/20140114132153165316.jpg";
textarr[1]="";


linkarr[2] = "http://jrs.china-zszy.com/article-47.html";
picarr[2]  = "/uploads/20140114/20140114132150195019.jpg";
textarr[2]="";


linkarr[3] = "http://jrs.china-zszy.com/article-47.html";
picarr[3]  = "/uploads/20140114/20140114132126432643.jpg";
textarr[3]="";


linkarr[4] = "http://jrs.china-zszy.com/article-46.html";
picarr[4]  = "/uploads/20131011/20131011135027152715.jpg";
textarr[4]="";


linkarr[5] = "http://jrs.china-zszy.com/article-47.html";
picarr[5]  = "/uploads/20131011/20131011134677277727.jpg";
textarr[5]="";


 
for(i=1;i<picarr.length;i++){
  if(files=="") files = picarr[i];
  else files += "|"+picarr[i];
}
for(i=1;i<linkarr.length;i++){
  if(links=="") links = linkarr[i];
  else links += "|"+linkarr[i];
}
for(i=1;i<textarr.length;i++){
  if(texts=="") texts = textarr[i];
  else texts += "|"+textarr[i];
}
document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+ swf_width +'" height="'+ swf_height +'">');
document.write('<param name="movie" value="/tpl/images/bcastr3.swf"><param name="quality" value="high">');
document.write('<param name="menu" value="false"><param name=wmode value="opaque">');
document.write('<param name="FlashVars" value="bcastr_file='+files+'&bcastr_link='+links+'&bcastr_config=0xffffff|2|0x8CA2AD|60|0xffffff|0xff9900|0x000033|5|3|1|_blank">');  
document.write('<embed src="/tpl/images/bcastr3.swf" wmode="opaque" FlashVars="bcastr_file='+files+'&bcastr_link='+links+'&bcastr_title='+texts+'& menu="false" quality="high" width="'+ swf_width +'" height="'+ swf_height +'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />'); document.write('</object>'); 