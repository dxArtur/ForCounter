var button = window.document.getElementById('buttoncalculate');
        button.addEventListener('click', calculate);

        
        function calculate(){
            var begin = window.document.getElementById('inputbegin').value;
            begin = parseInt(begin);
            var finish = window.document.getElementById('inputfinish').value;
            finish = parseInt(finish);
            var jump = window.document.getElementById('jump').value;
            jump = parseInt(jump);

            var a = window.document.getElementById('result');
            
            
            

            console.log(`begin ${begin}`);
            console.log(`finish ${finish}`);
            console.log(`jump ${jump}`);

            
            
            var arearesult = document.createElement("div");
            arearesult.setAttribute("id", "arearesult");
            var limit = (finish * 50)/100;
            limit = Math.floor(limit);
            
            console.log(`limit is = ${limit}`);
            var cont = 0;
            console.log(`cont is = ${cont}`);

            var result = document.getElementById('result');
            var manychilds = result.childElementCount;
            for(var j = 2; j <= manychilds; j+=1){
                console.log(`removendo ${result.childElementCount} cont ${j}`);
                result.removeChild(result.lastChild);
            }


            for(var i = begin; i <= finish; i+=jump){
                var div = document.createElement("div");
                div.setAttribute("id", "boxresult");
                div.style.background = "blueviolet";
                div.style.textAlign = "center";
                div.style.display = "inline-grid";
                div.style.width ="4%";
                div.style.margin="2%";
                div.style.alignItems="left";
                div.style.color="white";
                div.innerHTML = `${i}`;
                document.getElementById('result').appendChild(div);
                var cont = cont +1;
                if (cont < 10){
                    
                }else if (cont = 10){
                    cont = 0;
                    console.log('break');
                    var br = document.createElement("br");
                    document.getElementById('result').appendChild(br);
                    if(limit % 10 !=0){
                        var soma = 10 - limit;

                    }
                }
            }
        }

        
        
        