var link = window.document.URL ;
var text = window.getSelection().toString();

// window.alert(title);
var temp = {
	"title" : link,
	text
};


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

postData(temp);