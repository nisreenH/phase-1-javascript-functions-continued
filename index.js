// code your solution here

function saturdayFun(activity = "roller-skate"){
 return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(char){
    return function(message = "special"){
        return `You are ${char}${message}${char}!`
    }
}

// console.log(wrapAdjective("%")("a dedicated programmer"))