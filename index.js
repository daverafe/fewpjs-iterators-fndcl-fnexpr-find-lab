
function superbowlWin(array) { 
    let win = array.find(function(obj) { 
        if(obj.result === "W") {
            return obj.year 
        } else {
            return undefined 
        }
    })
    return !!win ? win.year : undefined  
}

superbowlWin()
