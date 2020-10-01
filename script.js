const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
var t = 0;
var timerVar = null;
var totalSeconds = 0;



testArea.addEventListener('keydown' , function(event){
    if (t == 0){
        timerVar = setInterval(function(){
            countTimer();
        }, 10);
        
        function countTimer() {
           ++totalSeconds;
           var hour = Math.floor(totalSeconds /6000);
           var minute = Math.floor((totalSeconds - hour*6000)/100);
           var seconds = totalSeconds - (hour*6000 + minute*100);
           if(hour < 10)
             hour = "0"+hour;
           if(minute < 10)
             minute = "0"+minute;
           if(seconds < 10)
             seconds = "0"+seconds;
           document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
            t++;
        }
    }
    var size = testArea.value.length;
    console.log(size);
    var str = testArea.value;
    if (str.localeCompare(originText.substring(0,size+1)) == 0){
        console.log("done");
    } else{
        console.log("sdfsdf")
    }
});


testArea.addEventListener('keyup',function(event){
    var size = testArea.value.length;
    var str = testArea.value;
    if (str.localeCompare(originText.substring(0,size)) == 0 && size == originText.length){
        testWrapper.style.borderColor = "green";
        clearInterval(timerVar);
        return;
    } else if(str.localeCompare(originText.substring(0,size)) == 0){
        testWrapper.style.borderColor = "orange";
        return;
    }else{
        testWrapper.style.borderColor = "red";
        return;
    }
});


resetButton.addEventListener('click' , function(event){
   clearInterval(timerVar);
    totalSeconds = 0;
    t = 0;
    document.getElementById("timer").innerHTML = "00" + ":" + "00" + ":" + "00";
    testArea.value = "";
});



