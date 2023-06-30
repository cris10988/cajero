/**console.log("Hola");*/
const accounts=[
    {nombre:"Mali", passwer:5025, saldo:200},
    {nombre:"Sofia", passwer:3026, saldo:290},
    {nombre:"Andres", passwer:6037, saldo:67},
];

function Usuario(){
	const biUser = document.getElementById('user').value;
    const passwer = document.getElementById('passwer').value;
    console.log(biUser,passwer);
    if(biUser == "Mali" || biUser == "Sofia" ||  biUser =="Andres")
	{
		if(biUser == "Mali" && passwer==5025)
		{
			while(isNaN(passwer))
			{
            alert(passwer + "No es un valor correcto, Porfavor no este jugando que hay cola");
			}
			console.log("ingresar")
    	}
        if(biUser == "Sofia"&& passwer==3026)
		{
			while(isNaN(passwer))
			{
            alert(passwer + "No es un valor correcto, Porfavor no este jugando que hay cola");
			}
			console.log("ingresar")
    	}
        if(biUser == "Andres"&& passwer==6037)
		{
			while(isNaN(passwer))
			{
            alert(passwer + "No es un valor correcto, Porfavor no este jugando que hay cola");
			}
			console.log("ingresar")

    	}
    }
	else
	{
		biUser.innerHTML = ("Por favor ingrese valores correctos o su tarjeta quedara retenida" + "<hr />");
	}

}
const buttonLogin=document.getElementById("loginbutton");
buttonLogin.addEventListener("click",Usuario);
let iniBalance=0;
function ver_saldo(){
    if(biUser == "Mali")
		{
			iniBalance=accounts[0].saldo
            console.log(`Su saldo es ${accounts[0].saldo}`)
        }
			
    if(biUser == "Sofia")
		{
			iniBalance=accounts[1].saldo
            console.log(`Su saldo es ${accounts[1].saldo}`)
        }
		
    if(biUser == "Andres")
		{
			iniBalance=accounts[2].saldo
            console.log(`Su saldo es ${accounts[2].saldo}`)
        }
}
const buttonSaldo=document.getElementById("ver_saldo");
buttonSaldo.addEventListener("click", saldo());
    function extraer(){
       const withdraw= parseFloat(document.getElementById("dinero"))
       if (isNaN(withdraw)||withdraw<=0){
            alert("Por favor ingrese un monto valido");
        }else if(withdraw>iniBalance){
            alert("No tiene saldo suficiente para realizar el retiro");
        }else if((iniBalance-withdraw)<=10 ||iniBalance==withdraw){
            alert("El retiro no cumple con la regla de negocio");
        }else if(withdraw<iniBalance&&(iniBalance-withdraw)>=10){
            iniBalance-withdraw;
            console.log(`Su saldo es ${iniBalance-withdraw}`)
        }
    }  
    
    function deposito(){
        const deposit= parseFloat(document.getElementById("dinero"))
        if (isNaN(deposit)||deposit<=0){
             alert("Por favor ingrese un monto valido");
         }else if((iniBalance+deposit)>=999){
             alert("El retiro no cumple con la regla de negocio");
         }else if(deposit<=0 && ((iniBalance+deposit)<=999)){
            console.log(`Su saldo es ${iniBalance+deposit}`)

         }
     }    

    
          
    

	