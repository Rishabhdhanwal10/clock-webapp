function clock(){

    var hours = document.getElementById("hour");
    var minutes = document.getElementById("minute");
    var seconds = document.getElementById("seconds");

    var time = new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();

    if(a<12){
        hours.innerHTML = a;
        minutes.innerHTML = b;
        seconds.innerHTML = c;
    }
    

    else if(a>12){
        hours.innerHTML = a-12;
        minutes.innerHTML = b;
        seconds.innerHTML = c;
        var am = document.getElementById("am")
        am.innerText="PM";
    }

    else{
        hours.innerHTML = a;
        minutes.innerHTML = b;
        seconds.innerHTML = c;
        var am = document.getElementById("am")
        am.innerText="PM";
    }

}

setInterval(clock, 1000);


function matchSchedule(){
    // var time = new Date();
    var check = new Date().getHours();

    console.log(check);
    
    var time1= document.getElementById("wakeUpTime").value;
    var time2= document.getElementById("lunchTime").value;
    var time3= document.getElementById("napTime").value;

    // console.log(time1);
    // console.log(time2);
    // console.log(time3);

    if(check==time1){
        document.getElementById("image").style.backgroundImage = "url(./images/Wakeup-image.png)";
        document.getElementById("text").innerText= " LET'S HAVE SOME BREAKFAST !!"
    }

    if(check==time2){
        document.getElementById("image").style.backgroundImage = "url(./images/lunch-image.png)";
        document.getElementById("text").innerText= " LET'S HAVE SOME LUNCH !!"
    }

     if(check==time3){
        document.getElementById("image").style.backgroundImage = "url(./images/good-night-image.png)";
        document.getElementById("text").innerText= " LET'S HAVE SOME DINNER !!"
    }
}


function makeDiv(){
    var container1= document.createElement("p");
    var container2= document.createElement("p");
    var container3= document.createElement("p");

    container1.setAttribute("id", "dynamic-div1");
    container2.setAttribute("id", "dynamic-div2");
    container3.setAttribute("id", "dynamic-div3");

    
    document.getElementById("create-div").appendChild(container1);
    document.getElementById("create-div").appendChild(container2);
    document.getElementById("create-div").appendChild(container3);
    

    var value1= document.getElementById("wakeUpTime");
    var value2= document.getElementById("lunchTime");
    var value3= document.getElementById("napTime");


    var invalue1= value1.options[value1.selectedIndex].text;
    var invalue2= value2.options[value2.selectedIndex].text;
    var invalue3= value3.options[value3.selectedIndex].text;

    document.getElementById("dynamic-div1").innerHTML="Wake Up Time :" + invalue1; 
    document.getElementById("dynamic-div2").innerHTML="Lunch Time :" + invalue2; 
    document.getElementById("dynamic-div3").innerHTML="Nap Time :" + invalue3; 

    setInterval(matchSchedule, 1000)
     
}


function setTime(){
    var i= document.getElementById("wakeUpTime").value;
    var j= document.getElementById("lunchTime").value;
    var k= document.getElementById("napTime").value;

    var hourr = new Date().getHours();
    // console.log(i);
    // console.log(hourr);


    if(i==hourr){
        document.getElementById("image").style.backgroundImage = "url(./images/Wakeup-image.png)";
        document.getElementById("text").innerText= " LET'S HAVE SOME BREAKFAST !!"
    }

    if(j==hourr){
        document.getElementById("image").style.backgroundImage = "url(./images/lunch-image.png)";
        document.getElementById("text").innerText= " LET'S HAVE SOME LUNCH !!"
    }

    if(k==hourr){
        document.getElementById("image").style.backgroundImage = "url(./images/good-night-image.png)";
        document.getElementById("text").innerText= " LET'S HAVE SOME DINNER !!"
    }

    makeDiv();
}