function predict() {
    const name = document.getElementById("name").value;
    const marks = parseInt(document.getElementById("marks").value);
    const attendance = parseInt(document.getElementById("attendance").value);
    const hours = parseInt(document.getElementById("hours").value);

    const result = document.getElementById("result");

    if (!name || isNaN(marks) || isNaN(attendance) || isNaN(hours)) {
        result.innerHTML = "Please fill all fields!";
        return;
    }

    let performance = "";

    if (marks >= 80 && attendance >= 75 && hours >= 3) {
        performance = "Excellent";
        result.style.color = "green";
    } else if (marks >= 60 && attendance >= 60) {
        performance = "Good";
        result.style.color = "blue"; 
    } else if (marks >= 40) {
        performance = "Average";
        result.style.color="yellow"
    } else {
        performance = "Poor";
        result.style.color="red"
    }

    result.innerHTML = name + "'s Performance: " + performance;

    const table=document.querySelector("table")
    const newrow=table.insertRow()
    const cname=newrow.insertCell(0)
    const cmarks=newrow.insertCell(1)
    const cattendance=newrow.insertCell(2)
    const chours=newrow.insertCell(3)
    const cperformance=newrow.insertCell(4)
    const action=newrow.insertCell(5)

    const deletebtn=document.createElement("button")
    deletebtn.textContent="Delete"
    deletebtn.onclick=function(){
        newrow.remove()
    }
    action.appendChild(deletebtn)
    cname.textContent=name;
    cname.style.backgroundColor="white"
    cattendance.textContent=attendance;
    cattendance.style.backgroundColor="white"
    cmarks.textContent=marks;
    cmarks.style.backgroundColor="white"
    chours.textContent=hours;
    chours.style.backgroundColor="white"
    cperformance.textContent=performance;
    cperformance.style.backgroundColor="white"
    action.style.backgroundColor="white"
    const content=document.querySelector(".content")
    content.reset();
}