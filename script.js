/*Pegando os values*/
var btn = document.querySelector("#send");
btn.addEventListener("click",function(event){

    event.preventDefault();

    /*Testando*/
    /*    checkbox.forEach(function(el){

        if(el.checked){
            selecionados++;
        }
    });
*/    

    /*Dados em tabela*/
    const name = document.querySelector("#nome").value
    const telefone = document.querySelector("#telefone").value
    const email= document.querySelector("#email").value
    
    console.table([name,telefone,email]);

});



const handleSubmit =(event) =>{
    event.preventDefault();

    alert("Cadastro realizado");
}

document.querySelector("form").addEventListener("submit",handleSubmit);







