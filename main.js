//Criando função
function colorirDia(){
    //armazenando as infomações dos campos nas variáveis
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
     
    //Conferindo se o dia foi inserido
    if(!days){
        alert('Favor informar o campo dia');
    }
    else if((days > 0)&&(days < 31)){
        //Se o numero de dia está no intervalo será aplicado a cor no calendário
        let td = calendar.getElementsByTagName('td')[parseInt(days)+1];
        td.style.backgroundColor = color;
    }
    else{
        alert('Favor informar um dia do calendario');
    }
}