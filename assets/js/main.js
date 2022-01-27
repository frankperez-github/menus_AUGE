
                           // Sunday  Monday Tuesday Wednesd  Thurs  Friday  Saturday
            const Horario = [[12,18],[10,20],[10,20],[10,20],[10,20],[10,20],[10,20]]
            const abierto = document.getElementById('abierto') 
            const today = new Date() 
            const day = today.getDay()
            const hora = today.getHours()

            const products = document.getElementsByClassName("PartialFood");

            
            if(hora >= Horario[day][0] && hora < Horario[day][1]){
                abierto.innerHTML = `Abierto hasta las ${Horario[day][1]}:00`
            }
            if(hora < Horario[day][0]){
                abierto.innerHTML = `Cerrado hasta las ${Horario[day][0]}:00`
            }
            if(hora >= Horario[day][1]){
                abierto.innerHTML = `Cerrado hasta mañana a las ${Horario[day + 1][0]}:00`
            }

            const elements = document.getElementsByClassName("ProductRow");
            const h2 = document.getElementsByClassName("PartialsTitle");
            const FiltersDiv = document.getElementsByClassName("FiltersDiv");
            const icons = document.getElementsByClassName("FilterIcon");
        
            for(let i = 0; i < FiltersDiv.length; i++)
            {
                FiltersDiv[i].addEventListener("click", hide); 
            }
        
            function hide(){
        
                Array.prototype.forEach.call(elements,
                element => {
                    Array.prototype.forEach.call(FiltersDiv, 
                            FilterDiv =>{

                        if(element.id != this.id){
                            element.style.display = "none";
                        }
                        else {

                            element.style.display = "block"
                            
                                if(this.id == element.id){
                                    FilterDiv.classList.remove("SelectedFilter")
                                    this.classList.add("SelectedFilter")
                                }
                                
                                document.getElementById('Todo').classList.remove("SelectedFilter")

                        }
                        
                        document.getElementById('Todo').classList.remove("SelectedFilter")
                    });
                });
                

            }

            const Todo = document.getElementById('Todo').addEventListener("click",showAll);

            function showAll(){
               
                Array.prototype.forEach.call(products, product =>{

                    product.style.display="block"
                    
                });

                Array.prototype.forEach.call(elements,
                element => {
                    element.style.display = "block";
                    Array.prototype.forEach.call(h2,
                        h2element => {
                            Array.prototype.forEach.call(FiltersDiv, FilterDiv =>{
                                FilterDiv.classList.remove("SelectedFilter")
                                document.getElementById('Todo').classList.add("SelectedFilter")
                            });
                    });
                });
                
            }

            const ShareButtons = document.getElementsByClassName("ShareButton");

          
            for(let i = 0; i < ShareButtons.length; i++)
            {
                ShareButtons[i].addEventListener('click', event =>{

                    var copyText = document.getElementById("LinkInput");
                    copyText.value = document.location.href +"#"+ShareButtons[i].id

                    if(navigator.share){
                        navigator.share({
                            title: document.title,
                            url: copyText.value
                        })
                    }
                    else{
                        document.getElementById('Blur').style.display="block";
                        document.getElementById('FallBackShare').style.display="block";
                        
                        document.getElementById('CloseShare').addEventListener('click', hideShare)
                        document.getElementById('Blur').addEventListener('click', hideShare)
                        var copyText = document.getElementById("LinkInput");
                        copyText.value = copyText.value

                        function hideShare(){
                            document.getElementById('Blur').style.display="none";
                            document.getElementById('FallBackShare').style.display="none";
                        }
                        
                        document.getElementById("copyButton").addEventListener("click", event =>{
                            
                            copyText.select();
                            copyText.setSelectionRange(0, 99999);
                            navigator.clipboard.writeText(copyText.value +"#"+ShareButtons[i].id);
                        })
                        
                    }
                });
            }
            

           
            function Search (){
                
                const keyword = document.getElementById("inputSearch").value.toLowerCase();
                
                Array.prototype.forEach.call(products, product =>{
                    
                    if( !product.id.toLowerCase().includes(keyword)){

                        product.style.display="none"

                    }
                    
                });

            }
            document.getElementById("Lupa").addEventListener('click', Search)
        