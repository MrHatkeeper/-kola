let points = 3;

let map = [[1,1,1,1,1,1,1,1],
           [1,1,1,0,1,1,1,1],
           [1,4,1,0,1,0,0,1],
           [1,0,0,0,0,0,1,1],
           [1,1,1,1,0,1,1,1],
           [1,1,0,0,0,0,0,1],
           [1,3,0,1,1,1,0,1],
           [1,1,1,1,1,1,1,1]];

let map1 = [[1,1,1,1,1,1,1,1],
            [1,1,1,0,1,1,0,1],
            [1,4,0,0,0,0,0,1],
            [1,1,1,0,1,0,1,1],
            [1,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,0,1],
            [1,0,3,1,1,1,1,1],
            [1,1,1,1,1,1,1,1]];

let map2 = [[1,1,1,1,1,1,1,1],
            [1,4,0,1,1,0,1,1],
            [1,1,0,1,0,0,0,1],
            [1,1,0,1,0,1,0,1],
            [1,1,0,0,0,1,0,1],
            [1,0,0,1,0,1,0,1],
            [1,1,1,0,0,1,3,1],
            [1,1,1,1,1,1,1,1]];
          
    let div = "<div id=huhu>";
    let table = "<table>";

    for(let i = 0; i < map.length; i++){
        let row = '<tr>';
        for(let x = 0; x < map[i].length; x++){
            if(map[i][x] == 0){
                row += '<td><img src="JsSprity/Filler.png"' + map[i][x] + '</td>';  
            }
            
            else if(map[i][x] == 1){
                row += '<td><img src="JsSprity/Kámen.png"' + map[i][x] + '</td>';
            }
            else if(map[i][x] == 3){
                row += '<td><img src="JsSprity/Kytka.png"' + map[i][x] + '</td>';  
            }
            else if(map[i][x] == 4){
                row += '<td><img src="JsSprity/Dinosajrus.png"' + map[i][x] + '</td>';  
            }
        }
        row += "</tr>";
        table += row;
    }
    table += "</table></div>";
    div += table
    document.write(div);

function restart(){
    location.reload(); 
}    

function win(){
    var bodikHolder = 0;
    for(let i = 0; i < map.length; i++){
        for(let x = 0; x < map[i].length; x++){
            if(map[x][i] == 3){
                bodikHolder++

            }
        }

    }

    if(bodikHolder == 0){
        points++;
    }

    if(points == 1){
        map = map1;
    }
    else if(points == 2){
        map = map2;
    }
    
    else if(points == 3){
        let winDiv = "<div id=winDiv><h1>Vyhrál si</h1>";
        winDiv += "<button id=restart onclick=restart()><img src= JsSprity/kindpng_791506.png style=width:500px;</button></div>";
        document.body.innerHTML = winDiv;
        
    }
}
    function down(){
        let delet = document.getElementById("huhu");
        delet.innerHTML ="";
        let count = 0
        for(let i = 0; i < map.length; i++){
            for(let x = 0; x < map.length; x++){
                let wall = i + 1;
                if(map[i][x] == 4 && count != 1 && map[wall][x] != 1){
                    map[i][x] = 0;
                    let move = i + 1;
                    map[move][x] = 4;
                    count++;
                }
            }
        }
        win();
        
        table = "<table>";
        
        for(let i = 0; i < map.length; i++){
            row = "<tr>";
            for(let x = 0; x < map[i].length; x++){
                if(map[i][x] == 0){
                    row += '<td><img src="JsSprity/Filler.png"' + map[i][x] + '</td>';  
                }
                
                else if(map[i][x] == 1){
                    row += '<td><img src="JsSprity/Kámen.png"' + map[i][x] + '</td>';
                }
                else if(map[i][x] == 3){
                    row += '<td><img src="JsSprity/Kytka.png"' + map[i][x] + '</td>';  
                }
                else if(map[i][x] == 4){
                    row += '<td><img src="JsSprity/Dinosajrus.png"' + map[i][x] + '</td>';  
                }
            }
            row += "</tr>";
            table += row;
        }
        table += "</table>";
        if(points < 3){
            let nahrada = document.getElementById("huhu");
            nahrada.innerHTML = table;
        }

    };
    function up(){
        let delet = document.getElementById("huhu");
        delet.innerHTML ="";
        let count = 0
        for(let i = 0; i < map.length; i++){
            for(let x = 0; x < map.length; x++){
                let wall = i - 1;
                if(map[i][x] == 4 && count != 1 && map[wall][x] != 1){
                    map[i][x] = 0;
                    let move = i - 1;
                    map[move][x] = 4;
                    count++;
                }
            }
        }

        win();
        
        table = "<table>";
        
        for(let i = 0; i < map.length; i++){
            row = "<tr>";
            for(let x = 0; x < map[i].length; x++){
                if(map[i][x] == 0){
                    row += '<td><img src="JsSprity/Filler.png"' + map[i][x] + '</td>';  
                }
                
                else if(map[i][x] == 1){
                    row += '<td><img src="JsSprity/Kámen.png"' + map[i][x] + '</td>';
                }
                else if(map[i][x] == 3){
                    row += '<td><img src="JsSprity/Kytka.png"' + map[i][x] + '</td>';  
                }
                else if(map[i][x] == 4){
                    row += '<td><img src="JsSprity/Dinosajrus.png"' + map[i][x] + '</td>';  
                }
            }
            row += "</tr>";
            table += row;
        }
        table += "</table>";
        if(points < 3){
            let nahrada = document.getElementById("huhu");
            nahrada.innerHTML = table;
        }


    };
    function left(){
        let delet = document.getElementById("huhu");
        delet.innerHTML ="";
        let count = 0
        for(let i = 0; i < map.length; i++){
            for(let x = 0; x < map.length; x++){
                let wall = x - 1;
                if(map[i][x] == 4 && count != 1 && map[i][wall] != 1){
                    map[i][x] = 0;
                    let move = x - 1;
                    map[i][move] = 4;
                    count++;
                }
            }
        }

        win();
        
        table = "<table>";

        
        for(let i = 0; i < map.length; i++){
            row = "<tr>";
            for(let x = 0; x < map[i].length; x++){
                if(map[i][x] == 0){
                    row += '<td><img src="JsSprity/Filler.png"' + map[i][x] + '</td>';  
                }
                
                else if(map[i][x] == 1){
                    row += '<td><img src="JsSprity/Kámen.png"' + map[i][x] + '</td>';
                }
                else if(map[i][x] == 3){
                    row += '<td><img src="JsSprity/Kytka.png"' + map[i][x] + '</td>';  
                }
                else if(map[i][x] == 4){
                    row += '<td><img src="JsSprity/Dinosajrus.png"' + map[i][x] + '</td>';  
                }
            }
            row += "</tr>";
            table += row;
        }
        table += "</table>";
        if(points < 3){
            let nahrada = document.getElementById("huhu");
            nahrada.innerHTML = table;
        }


    };
    function right() {
        let delet = document.getElementById("huhu");
        delet.innerHTML ="";
        let count = 0
        for(let i = 0; i < map.length; i++){
            for(let x = 0; x < map.length; x++){
                let wall = x + 1;
                if(map[i][x] == 4 && count != 1 && map[i][wall] != 1){
                    map[i][x] = 0;
                    let move = x + 1;
                    map[i][move] = 4;
                    count++;
                }
            }
        }

        win();

        table = "<table>";
        
        for(let i = 0; i < map.length; i++){
            row = "<tr>";
            for(let x = 0; x < map[i].length; x++){
                if(map[i][x] == 0){
                    row += '<td><img src="JsSprity/Filler.png"' + map[i][x] + '</td>';  
                }
                
                else if(map[i][x] == 1){
                    row += '<td><img src="JsSprity/Kámen.png"' + map[i][x] + '</td>';
                }
                else if(map[i][x] == 3){
                    row += '<td><img src="JsSprity/Kytka.png"' + map[i][x] + '</td>';  
                }
                else if(map[i][x] == 4){
                    row += '<td><img src="JsSprity/Dinosajrus.png"' + map[i][x] + '</td>';  
                }
            }
            row += "</tr>";
            table += row;
        }
        table += "</table>";
        if(points < 3){
            let nahrada = document.getElementById("huhu");
            nahrada.innerHTML = table;
        }


    };


