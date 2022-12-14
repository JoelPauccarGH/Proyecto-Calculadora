let result=document.getElementById('inputext');

let calculate=(number)=>{
    result.value+=number;

}

let resultado=()=>{
    try{

        result.value=eval(result.value)
    }
    catch(err){
        alert('Ingresar Números Validos Por favor...');
    }
}

function clr(){
    result.value="";
}

function del(){
    result.value=result.value.slice(0,-1);
}