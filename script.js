function BMI (weight, height) {
 let result = weight / (height*height)
 return result
}

console.log(BMI())

function status (bmi) {
    if (bmi < 18.5) {
    return `لديك نقص في الوزن` 
} else if ( bmi >= 18.5 && bmi < 25) {
    return `وزنك صحي`
} else if ( bmi >= 25) {
    return `لديك زيادة في الوزن`
}
}
function calculate () {
    let weight = document.getElementById(`Weight`)
    let height = document.getElementById(`Height`)
    let bmi = BMI()
    let desc = status(bmi)
    let div = document.getElementById(`div`)
    div.innerTEXT = bmi + " == " + desc
}