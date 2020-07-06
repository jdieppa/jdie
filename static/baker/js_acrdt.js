// ADOBE ACROBAT/READER DETECTION SCRIPT (NON-SSI)- for use on the Flood Hazard Mapping Mirror Web Site
// by Jarrod Dieppa

// Just include the script at the end of the page.
// This script must be included after all of the links on the page. Any links after this script will not be affected.

// This script scans the links array of a page searching for ".pdf" When it finds ".pdf" it replaces the href
// attribute with the detection script function call.
/*
	UPDATE LOG
	
	10/23/02 -- Added the test for Acrobat 5.10 (For other browsers only. The new Acrobat version didn't seem to affect IE's detection). (line 43)
	06/05/03 -- Added the test for Adobe Reader 6 and made the search process more reliable.
	04/12/05 -- Added IE and other browser test for Reader version 7.
	
*/

// Includes the acrobat detection depending on the browser type

var acrmode = false;
	browser='OTHER';
	
	if (navigator.appName=='Microsoft Internet Explorer'){
				browser='MSIE';
	}
	if (navigator.appVersion.indexOf('MSIE 3')>-1){
				browser='MSIE';
	}

	if (browser=='OTHER'){							// Acrobat Detection for Netscape, Opera, etc...
		//for other browsers with no acrobat plugin
		if (navigator.plugins['Adobe Acrobat'] == null){
			acrmode = false;
		}else{
			acrPlugin = navigator.plugins['Adobe Acrobat'];
			//alert(acrPlugin.description);
			if (acrPlugin.description.search("Adobe Acrobat") > -1  && (acrPlugin.description.search("Version 7") > -1 || acrPlugin.description.search("Version 6") > -1)){
				acrmode = true;
			}			
		}
	}
	
	if (browser=='MSIE'){									// Acrobat Detection for IE
		// netscape communicator (4.78) does not like "try" and does not execute the rest of the script
		
		try{acrmode = new ActiveXObject("PDF.PdfCtrl.5")}catch (e){}
		if (!(acrmode)){
			try{acrmode = new ActiveXObject("PDF.PdfCtrl.6")}catch (e){}
		}
		if (!(acrmode)){
			try{acrmode = new ActiveXObject("AcroPDF.PDF.1")}catch (e){}
		}
	}

// manually turn the acrobat warning on and off regardless of the acrobat test result
docurl = new String(window.location.search);
acron = new RegExp("acron");
acroff = new RegExp("acroff");

if (acroff.exec(docurl) == 'acroff'){
	acrmode = true;
}

if (acron.exec(docurl) == 'acron'){
	acrmode = false;
}

// change the pdf links to show the warning page
if (!acrmode){
	window.name = 'acrparent';
	var currenturl = window.location;
	var oldUrls = new Array(document.links.length);
	var i=0;
	for (i=0;i<document.links.length;i++){
		oldUrls[i] = document.links[i].href;

			if (oldUrls[i].search(".pdf")!=-1){
				var pdfpath = new String(document.links[i].pathname);
				var pdfname = pdfpath.slice(pdfpath.lastIndexOf('/')+1);

				window.name = "ParentPage";

				//change the properties of the link
				document.links[i].target = "";
				document.links[i].title="Your Version of Acrobat is Not Current (" + document.links[i].pathname + ")";
				document.links[i].href="javascript:window.open('/fhm/acrward.shtm?name=" + unescape(pdfname) + "','acrobat','hotkeys=no,resizable=yes,scrollbars=yes,height=350,width=405,titlebar=yes');window.location='" + currenturl + "';";
			}
	}
}
