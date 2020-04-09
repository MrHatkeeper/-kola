onload

let map = [[1,1,1,1,1,1,1,1],
           [1,1,1,0,1,1,1,1],
           [1,4,1,0,1,0,0,1],
           [1,0,0,0,0,0,1,1],
           [1,1,1,1,0,1,1,1],
           [1,1,0,0,0,0,0,1],
           [1,3,0,1,1,1,0,1],
           [1,1,1,1,1,1,1,1]];

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


table += "</table>";
document.write(table);