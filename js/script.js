var result = document.getElementById('inputText')

let calculate=(number)=>{
    result.value+=number
}
let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
       window.alert('Erro de Digitação')
    }
}

function clr(){
    result.value=" "
}
function del(){
    result.value=result.value.slice(0, -1)
}