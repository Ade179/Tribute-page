
/*
function add7(number) {
    return number + 7
  
}
console.log(add7(8))

const day = new Date().getDay()


switch (day) {

    case 0:
        alert('it is Sunday yaiy!!')
        break;
    case 1:  
    alert ('holla Monday!!')
        break;
    case 2:
        alert ('Tuesday')
        break;
    case 3:
        alert('Wednesday')
    case 4:
        alert('One more day till weeeked')
        break;
    case 5:
        alert('FriYaiY')
        break;
    case 6:
        alert('Saturday OMDS')
    default:
        ('Something went horribly wrong!')
        break;
}

let i = 0;
while(i < 10)
  {
  console.log(i);
  i++
}
*/



function capitalise(str) {
 str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase('')
 
   console.log(str);
    
}

capitalise('frolllvn')


function lastLetter(str) {
    str = str.slice(-1)
    console.log(str)
}

lastLetter('a, b, c, d')


function gradingStudents(grades) {
    // Write your code here
       
for(let i = 0; i<grades.length; i++){
    if((grades[i]>= 38) && ((((grades[i] % 5) == 3)|| (grades[i] % 5 ) == 4))){
        grades[i] = grades[i] + (5 -(grades[i] % 5))
    }
    return grades
}
}







console.log(gradingStudents(53))