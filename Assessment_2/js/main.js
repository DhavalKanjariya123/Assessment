// Use of if, else if with key concept of Date() and innerHTML concept to get output with days name.
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let name0="Sunday", name1="Monday", name2="Tuesday", name3="Wednesday", name4="Thursday",name5="Friday", name6="Saturday";

if(new Date().getDay()==days.indexOf("Sunday")) {
    document.getElementById("today-date-day").innerHTML=name0;
}
else if(new Date().getDay()==days.indexOf("Monday")) {
    document.getElementById("today-date-day").innerHTML=name1;
}
else if(new Date().getDay()==days.indexOf("Tuesday")) {
    document.getElementById("today-date-day").innerHTML=name2;
}
else if(new Date().getDay()==days.indexOf("Wednesday")) {
    document.getElementById("today-date-day").innerHTML=name3;
}
else if(new Date().getDay()==days.indexOf("Thursday")) {
    document.getElementById("today-date-day").innerHTML=name4;
}
else if(new Date().getDay()==days.indexOf("Friday")) {
    document.getElementById("today-date-day").innerHTML=name5;
}
else if(new Date().getDay()==days.indexOf("Saturday")) {
    document.getElementById("today-date-day").innerHTML=name6;
}
else{
    document.write("no data");
}

//Use of Arrays with key concept of Date() and innerHTML concept to get output with month name.
function Month(getdate){
    let monthname=["January","February","March","April","May","Jun","July","August","September","Octomber","November","December"];
    return monthname[getdate];
}

let month1=Month(new Date().getMonth());
document.getElementById("today-date-month").innerHTML=month1;

let date=new Date().getDate();
document.getElementById("today-date-date").innerHTML=date;

let year=new Date().getFullYear();
document.getElementById("today-date-year").innerHTML=year;

// use of function with key concept of setInterval(), Date() and innerHTML key concept.
function currenttime() {
    let date1=new Date().toLocaleTimeString();
document.getElementById("today-date").innerHTML=date1;
}
setInterval(currenttime, 1000);



