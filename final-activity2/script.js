const msg = document.getElementById("message")
const loadbtn = document.getElementById("change-btn")
const newbtn = document.getElementById("new-color-btn")
const profiles = document.getElementById("profile")
const grades = document.getElementById("grade")
const schedules = document.getElementById("schedule")

// FIRST BUTTON
function showmessage(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Loading Assets.....")
        }, 2000)
    })
}

loadbtn.addEventListener("click", function(){
    msg.style.color = "coral"
    msg.innerHTML = "Loading......"

    showmessage()

    .then(function(result){
        msg.innerHTML = result
        
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Loading Image.......")
            }, 3000)
        })
    })

    .then(function(result){
        msg.innerHTML = result
        
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Welcome!")
            }, 3000)
        })
    })

    .then(function(result){
        msg.innerHTML = result 
    })

})

//SECOND BUTTON
newbtn.addEventListener("click", function(){

    loadbtn.style.backgroundColor = "coral"
    newbtn.style.backgroundColor = "coral"


    msg.innerHTML = "Loading Dashboard"
    
    profile.innerHTML = "Profile Waiting..."
    grade.innerHTML = "Grades Waiting..."
    schedule.innerHTML = "Schedule Waiting..."

    const profilePromise = new Promise(function(resolve){
        setTimeout(function(){
            profile.innerHTML = "Profile Loaded!"
            resolve()
        }, 3000)
    })

    const gradePromise = new Promise(function(resolve){
        setTimeout(function(){
            grade.innerHTML = "Grades Loaded!"
            resolve()
        }, 4000)
    })

    const schedulePromise = new Promise(function(resolve){
        setTimeout(function(){
            schedule.innerHTML = "Schedules Loaded!"
            resolve()
        }, 5000)
    })

    Promise.all([profilePromise, gradePromise, schedulePromise])
        
    .then(function(){
        msg.innerHTML = "Dashboard Ready!"
    })

})
