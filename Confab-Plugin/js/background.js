let contextMenus = {} ;

contextMenus.sendData = 
	chrome.contextMenus.create(
		{"title": " SEND TO CONFAB",
		 "contexts": ["page" , "selection"]},
		()=>{
			if(chrome.runtime.lastError){
				console.error(chrome.runtime.lastError.message);
			}
		}
	);
	// chrome.contextMenus.create(
	// 	{"title": " HIGHLIGHT",
	// 	 "contexts": ["page" , "selection"]},
	// 	()=>{
	// 		if(chrome.runtime.lastError){
	// 			console.error(chrome.runtime.lastError.message);
	// 		}
	// 	}
	// );
	// chrome.contextMenus.create(
	// 	{"title": " SAVE TO FOLDER",
	// 	 "contexts": ["page" , "selection"]},
	// 	()=>{
	// 		if(chrome.runtime.lastError){
	// 			console.error(chrome.runtime.lastError.message);
	// 		}
	// 	}
	// );




chrome.contextMenus.onClicked.addListener(sendData);


function sendData (info , tab) {
  	
  	if(info.menuItemId === contextMenus.sendData){
  		chrome.tabs.executeScript({
			file:'js/controller.js'
  		});
  	}
  	
}