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
    //Criando contador
    let elementos = document.querySelectorAll('td');
    let contadorAzul = 0, contadorVerde = 0, contadorRosa = 0, contadorVermelho = 0;
    
    for(let i=0; i<elementos.length;i++){
        let estilo = window.getComputedStyle(elementos[i]);
        let corEstilo = estilo.backgroundColor;
        
        //condição
        if(corEstilo === "LightBlue"|| corEstilo === "rgb(173, 216, 230)")
        {
            contadorAzul++;
            console.log("Azul:"+contadorAzul);
        }
        else if (corEstilo === "PaleGreen" || corEstilo === "rgb(152, 251, 152)")
        {
            contadorVerde++;
            console.log("Verde:"+contadorVerde);
        }
        else if (corEstilo === "Pink"|| corEstilo === "rgb(255, 192, 203)")
        {
            contadorRosa++;
            console.log("Rosa:"+contadorRosa);
        }
        else if(corEstilo === "Red" || corEstilo === "rgb(255, 0, 0)")
        {
            contadorVermelho++;
            console.log("Vermelho:"+contadorVermelho);
        }
    }
}