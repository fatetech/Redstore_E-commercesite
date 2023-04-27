// var teacher = "fate";
// function otherclass(){
//     // var teacher = "uche";
    
//     function ask(question){
//         console.log(teacher, question);
//     }

//     ask("why?");
// }

// otherclass();
// ask("????");

var teacher = "kyle";

var myTeacher = function(){
    console.log(teacher);
}

teacher = 'fATE';

myTeacher();

for (var i = 1; i <= 3; i++){
    setTimeout(() => {
        console.log(`i: ${i}`)
    },i * 1000);
}