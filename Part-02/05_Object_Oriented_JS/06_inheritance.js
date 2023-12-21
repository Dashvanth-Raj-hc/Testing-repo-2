// inheritance 

class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is: ${this.username}`);
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)//gets all details of another class(super keyword)
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const userChai = new teacher("priya","priya@gmai.com",23432);
userChai.addCourse();
userChai.logMe();
// is user class has access to addCourse ->no
const student1=new user("dash","dash@gmail.com",34);
// student1.addCourse() //doesn't have access
student1.logMe();

console.log(userChai === student1);

// is userchai instance of teacher   
console.log(userChai instanceof teacher);