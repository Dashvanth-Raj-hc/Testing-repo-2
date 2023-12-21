// XMLHttpRequest 
let requestURL = "https://api.github.com/users/dashvanth";
const xhr = new XMLHttpRequest();
xhr.open("GET",requestURL);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState ===4){
        const data = JSON.parse(this.responseText);//need to convert string to json so we use(JSON.parse). it will become object (and we cause access property using . )
        //the response will be in string so we need to convert
        console.log(data);
        console.log(data.location);
    }
}
xhr.send();

// discussion about console 