// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",function(){
    console.log('window loaded');
    let flightStatus=document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let takeoff=document.getElementById("takeoff");
    let spaceShuttleHeight=document.getElementById("spaceShuttleHeight");
    let rocket = document.getElementById("rocket");
    rocket.style.position='absolute';
    rocket.style.left='0px';
    rocket.style.bottom='0px';

    let right = this.document.getElementById("right")
    right.addEventListener("click",function(){
        movement = parseInt(rocket.style.left)+10+'px'
        rocket.style.left=movement;
    })
    let left = this.document.getElementById("left");
    left.addEventListener("click",function(){
        movement=parseInt(rocket.style.left)-10+'px'
        rocket.style.left=movement;
    })

    let down  = this.document.getElementById("down");
    down.addEventListener("click",function(){
        movement = parseInt(rocket.style.bottom)-10+'px';
        rocket.style.bottom=movement;
        spaceShuttleHeight.innerHTML =parseInt(spaceShuttleHeight.innerHTML)-10000
    })

    let up = this.document.getElementById("up")
        up.addEventListener("click",function(){
            movement=parseInt(rocket.style.bottom)+10+'px';
            rocket.style.bottom =movement;
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML)+10000

        })
    

    takeoff.addEventListener("click",function(){
        let response=window.confirm("Shuttle is ready for takeoff");
        if(response){           
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.background="blue";
            spaceShuttleHeight.innerHTML="10000";
        }else{
            window.alert("Ok still have time")
        }
        let landing = document.getElementById("landing");
        landing.addEventListener("click",function(){
            window.alert( "The shuttle is landing. Landing gear engaged.")
            flightStatus.innerHTML =  "The shuttle is landing. Landing gear engaged.";   
            shuttleBackground.style.background="green";
            spaceShuttleHeight.innerHTML="0";
        
        })
        let missionAbort=document.getElementById("missionAbort");
        missionAbort.addEventListener("click",function(){
            let response1=window.confirm("Confirm that you want to abort the mission."); 
            if(response1){
                flightStatus.innerHTML = "Mission aborted.";
                shuttleBackground.style.background="green";
                spaceShuttleHeight.innerHTML="0";
            }else{
                window.alert("Ok still have time")
            }
        })
    })
    
})
