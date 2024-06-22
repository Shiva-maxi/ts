let a="shiva";

// a=1;onlt can assign a number


let b:string;

b="shiva";

// b=5;//cant assign as b can only be a string 

//union operator

let c:string|number;

c=4;
c="s";//can assign both number or a string 

//array

let d:string[];//can contain only strings

d=["shiva","subbu"]


let e:(string|number)[];

e=["shiva",3,"scn",443];//can contain number and a string 

//object

let user={
    username:"shiva",
    age:20,
    pass:true
}


user.username="subbu";

// user.username=3; can assign onlt a string not a number cannot assign any other type

user.age=29;


// user.play=false; cannot even add new properties can only alter present properties

let user1:{
    usernam:string;
    age:number;
    pass:boolean;
    phone?:string;//may or maynot include this field
}

user1={
    usernam:"shiva.",
    age:12,
    pass:true,
    phone:"123"//may or may nor include -->no error
}


//any type

let k;//can assign any type-->k=any

k="a";
k=5;


let anyarray:any [];


anyarray=["fdlid",4,false];//can contain any type 



//......................................................

//functions




let sayhi=()=>{//normal arrow function //return type void
    console.log('say hi');
}

//function returning strind type


let returnstring=():string=>{//return type string
    return "ldn";
}

let multiply=(num:number):number=>{
    return num*2;
}

let sum=(x:number,y:number):number=>{
    return x+y;
}


//type alias

type usertype={
    username:string;
    age:number;
    phone?:string;
}


let userfunc=(user:usertype)=>{//accepts type of usertype
    console.log(user.age);
}


type myfunc=(a:number,b:string)=>void;//type function that returns void 


let eg:myfunc=(num,st)=>{//a function of type myfunc
    console.log("Dv");
}


///................................


//INTERFACES ADVANCED VERSION OF TYPE ALIASES

interface Iuser{
    username:string;
    age:number;
    pass:boolean;
}
//we can also extend this interface to another interface


interface Iemployee extends Iuser{
    employeeid:number;
}

//creating objects of type Iuser and Iemployee
const newuser:Iuser={
    username:"shiva",
    age:23,
    pass:true,
}

const newuser1:Iemployee={
    username:"shiva",
    age:23,
    pass:true,
    employeeid:23
}


//generics 

interface Iauthor{
    name:string;
    id:number;
}
interface Ipost{
    name:string;
    id:number;
    extra:Iauthor[];
}


//using generics


interface Ipost1<T>{
    name:string;
    id:number;
    extra:T[];
}



let post1:Ipost1<string>={
        name:"shiva",
        id:32,
        extra:["sabdl"]
}


let post2:Ipost1<Iauthor>={
    name:"subbu",
    id:23,
    extra:[{name:"dcdsc",id:23}]
}