let contextMenus = {} ;

var temp = {
	title:"",
	text : "" 
}

contextMenus.sendData = 
	chrome.contextMenus.create(
		{"title": " Web Page",
		 "contexts": ["page" , "selection", "image"]},
		()=>{
			if(chrome.runtime.lastError){
				console.error(chrome.runtime.lastError.message);
			}
		}
	)

async function postData(data = {}){
  // console.log( JSON.stringify(data));
  data = await JSON.stringify(data) ;
  console.log(data);
  const response = await fetch('http://3.6.85.173:3001/api/v1/projects/new',{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json',      
    },
    
    body: data
    
  });
  var res = await response.text();
  console.log(res);
  return  res ? JSON.parse(res) : {} ;
}




chrome.contextMenus.onClicked.addListener((clicked) => {
		
		if(clicked.menuItemId === contextMenus.sendData && clicked.srcUrl){
				const pageUrl = clicked.pageUrl ;
				const srcUrl = clicked.srcUrl ;

				postData({title : pageUrl , image : srcUrl});

  		}else if(clicked.menuItemId === contextMenus.sendData ){

			
  			var plink = clicked.pageUrl ;
			var stext = clicked.selectionText;

			postData({title:plink , text:stext  });
  	}

});



let contextMenuItem = {
    "id": "collect",
    "title": "PDF",
    "contexts": ["selection"]
};




chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((clickData) => {
    var value = clickData.selectionText;
	if (clickData.menuItemId === "collect" && value) {

        chrome.tabs.getSelected(null, function(tab) {
            var tablink = tab.url;
				
				postData({text:value, title:tablink});

           

        });
    }
});




