// code your solution here

//using function declaration
//function declaration is useful because one it's been declared, you can call the function above or below the line of code.
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(workType = 'go to the office') {
    return `This Monday, I will ${workType}.`
}

function wrapAdjective(flareSymbol) {
    return function(phrase) {
        const intro = "You are "
        return intro + flareSymbol + phrase + flareSymbol + "!";
    }
}