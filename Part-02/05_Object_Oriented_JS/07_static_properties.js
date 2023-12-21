// static properties 

class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is:${this.username}`);
    }
    // imagine we had to add a id automatically when username is assigned 
    static createId(){
        return `123`;
    }
    // static ->stops the access 
}

const dash = new user("dash");
// console.log(dash.createId());//will have acces without static keyword only

// even extends to another class can't have access when static is declared 
class teacher extends user{
    constructor(username,email){
        super(username)//will not have access due to static keyword declared in user
        this.email = email;
    }
}
const info = new teacher("karunya",245);
console.log(info);
// console.log(info.createId());// will not have access due to static