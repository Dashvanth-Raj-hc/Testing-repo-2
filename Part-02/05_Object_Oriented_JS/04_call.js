// call 

function setUserName(username){
    // complex DB calls
    this.username = username
}
function createUser(username,email,password){
    setUserName.call(this,username) //use call property and give this as first parameter so you will give refernce and hold username
    // you will get the output in object 

    this.email = email;
    this.password = password;
}

const userOne = new createUser("dashvanth","dash@gmail.com",9234);
console.log(userOne);
// problem->the username is not getting because we need to explicitly use .call property