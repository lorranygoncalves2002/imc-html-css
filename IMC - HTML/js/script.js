 
            function calcular(){
                peso= document.getElementById("P").value;
                altura= document.getElementById("a").value;
                
                imcc=document.getElementById("imc").value= peso/(altura*altura);
                
                if(imcc<18.5){
                    alert("Seu IMC está abaixo do ideal.")
                }
                else{
                    if(imcc>18.4){
                        if(imcc<25){
                            alert("Seu IMC está no patamar ideal.")
                        }
                    }
                    if(imcc>24.9){
                        if(imcc<30){
                            alert("Seu IMC apresenta um sobrepeso.")
                        }
                    }
                        if(imcc>29.9){
                            if(imcc<35){
                            alert("Seu IMC apresenta obesidade de grau 1.")
                             }
                        }
                    if(imcc>34.9){
                        if(imcc<40){
                            alert("Seu IMC apresenta obesidade de grau 2.")
                        }
                    }
                    if(imcc>39.9){
                        alert("Seu IMC apresenta obesidade de grau 3.")
                    }
                    
                }
                
            }
            