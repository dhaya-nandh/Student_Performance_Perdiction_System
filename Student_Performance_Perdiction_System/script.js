function predict(event){

event.preventDefault()

let name=document.getElementById("name").value
let marks=parseInt(document.getElementById("marks").value)
let attendance=parseInt(document.getElementById("attendance").value)
let hours=parseInt(document.getElementById("hours").value)

let result=document.getElementById("result")

if(!name || !marks || !attendance || !hours){
result.innerHTML="Please fill all fields"
return
}

let performance=""

if(marks>=80 && attendance>=75 && hours>=3){
performance="Excellent"
}
else if(marks>=60){
performance="Good"
}
else if(marks>=40){
performance="Average"
}
else{
performance="Poor"
}

result.innerHTML="Performance : "+performance

let student={
name:name,
marks:marks,
attendance:attendance,
hours:hours,
performance:performance
}

let students=JSON.parse(localStorage.getItem("students")) || []

students.push(student)

localStorage.setItem("students",JSON.stringify(students))

setTimeout(function(){
window.location="detailspage.html"
},1000)

}



if(window.location.pathname.includes("detailspage.html")){

let students=JSON.parse(localStorage.getItem("students")) || []

let table=document.getElementById("studentTable")

students.forEach(function(s,index){

let row=table.insertRow()

row.insertCell(0).innerHTML=s.name
row.insertCell(1).innerHTML=s.marks
row.insertCell(2).innerHTML=s.attendance
row.insertCell(3).innerHTML=s.hours
row.insertCell(4).innerHTML=s.performance

let action=row.insertCell(5)

let btn=document.createElement("button")

btn.innerHTML="Delete"

btn.onclick=function(){

students.splice(index,1)

localStorage.setItem("students",JSON.stringify(students))

location.reload()

}

action.appendChild(btn)

})

}