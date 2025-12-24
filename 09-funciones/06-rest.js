//rest lo puse como nombre de argumento, no como palabra reservada o algo
function suma(a,b,...rest){
    console.log(arguments);
}

suma(1,2,3,4);