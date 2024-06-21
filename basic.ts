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
