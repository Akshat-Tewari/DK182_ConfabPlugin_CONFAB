var link = window.document.URL ;

// window.alert(title);
var temp = {
	"title" : link
};


async function getData(){
 	
  const response = await fetch(`http://3.6.85.173:3001/api/v1/projects/get/data`,{
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json',
      'url': `${link}`      
    },
  });
  var res = await response.json();

   function replacetext(element){
			
		if(element.hasChildNodes()){
			element.childNodes.forEach(replacetext)
		}else if(element.nodeType === Text.TEXT_NODE){

			var re =  new RegExp(`${res[0].text}` , 'gi');

			if(element.textContent.match(re)){
				element.parentElement.style.backgroundColor='yellow'
			}
		}

  };

  var fun = await replacetext(document.body);
	

 	 // var match = await document.documentElement.innerText.match(re);
	
	
  console.log(res[0].text);
  // console.log(match);

}

getData();



 