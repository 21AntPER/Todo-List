function addLi()
{

    var input = document.getElementById('texter').value,
        list = document.getElementById('listnode'),
        listeditem = document.createElement("LI"),
        textitem = document.createTextNode(input),
        delbutton = document.createElement('delete'),
        checkbutton = document.createElement('checkmark')

        delbutton.innerHTML = '<span class="option3"><button style="width: 3.5px; height: 15px;" class="boton1" id="delete" ><span class="no-incomplete" onclick="DelTask">🗑</span></button></span>'
        checkbutton.innerHTML = '<span class="option4"><button style="width: 3.5px; height: 15px;" class="boton2" id="checkmark" ><span class="yes-incomplete">✔️</span></button></span>'

     listeditem.appendChild(textitem);
     list.appendChild(listeditem);
     listeditem.appendChild(delbutton);
     listeditem.appendChild(checkbutton);
     delbutton.addEventListener('click', () => list.removeChild(listeditem));

     checkbutton.addEventListener('click', function(){
      var acceptedlistitems =document.getElementById('acceptednodes'),
      accepteditem = document.createElement('li'),
      textnodeforcompletion = document.createTextNode(input),
      movebackbutton = document.createElement('crossover'),
      completedelete = document.createElement('yes-delete');

      movebackbutton.innerHTML = '<span class="option1"><button style="width: 3.5px; height: 15px;" class="boton3" id="crossover"><span class="x-complete" data-crossover>✖</span></button></span>';
      completedelete.innerHTML = '<span class="option2"><button style="width: 3.5px; height: 15px;" class="boton4" id="yes-delete"><span class="no-complete">🗑</span></button></span>';

      
      accepteditem.appendChild(textnodeforcompletion);
      acceptedlistitems.appendChild(accepteditem);
      list.removeChild(listeditem);
      accepteditem.appendChild(movebackbutton);
      accepteditem.appendChild(completedelete);
      completedelete.addEventListener('click', () => acceptedlistitems.removeChild(accepteditem));

      movebackbutton.addEventListener('click', function(){
         listeditem.appendChild(textitem);
     list.appendChild(listeditem);
     listeditem.appendChild(delbutton);
     listeditem.appendChild(checkbutton);
     acceptedlistitems.removeChild(accepteditem);

     var limebutton = document.getElementById('greenboi'),
     yellowbutton = document.getElementById('yellowboi'),
     redbutton = document.getElementById('redboi');

     limebutton.innerHTML = '<button style="width: 3.5px; height: 30px;" class="less" onclick="makelime()" id="greenboi"><span class="green" id="greener">🟢</span></button>';
     yellowbutton.innerHTML = '<button style="width: 3.5px; height: 30px;" class="median" onclick="makeyellow()" id="yellowboi"><span class="orang" id="yellow">🟠</span></button>';
     redbutton.innerHTML = '<button style="width: 3.5px; height: 30px;" class="important" onclick="makered()" id="redboi"><span class="reder" id="red">🔴</span></button>';
      
     limebutton.addEventListener('click', function(){
       listeditem.style("color","lime");  
     })

     yellowbutton.addEventListener('click', function(){
        listedtem.style.setProperty("color","yellow");  
    
    })

    redbutton.addEventListener('click', function(){
        textitem.style.color = "red";  
    
    })

     })
    })
     }

     var newinput = document.getElementById('texter')

     function makelime(){
         if ('🟠' in newinput.value){
         newinput.value = string.replace('🟠','🟢');
     }
    }

     function makeyellow(){
        newinput.value = newinput.value + '🟠';
     }

     function makered(){
        newinput.value = newinput.value + '🔴';
     }
