/* Arrays in javascript can contain elemenst of any data type*/
const words= ["Apple",
    "Bananas",10,
    true,
    {
        name :'Prerana' //objects
    },
    function f1() 
    { 
        console.log('huliiiiiii');
    }
];
function getCheese(){
    setTimeout(()=> {
        const cheese="🧀";
        console.log("cheese ",cheese);
        return cheese;
    },2000);
    return 2;
}
console.log(getCheese());
