function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}



let karty = ["1","1","2","2","3","3","4","4","5","5","6","6","7","7","8","8","9","9","10","10"];
let hodnoty = [];
let jmena = [];
let otoceni = 0;

function hra(){
    otoceni = 0;
    let output = " ";
    shuffle(karty);
    for(let i = 0; i < karty.length; i++){
        output += '<div id = "title'+i+'" onclick="otoceniKarty(this,\''+karty[i]+'\')"></div>';

    }
    document.getElementById("pole").innerHTML = output; 
}

function otoceniKarty(tile, val){
    console.log( hodnoty);
    console.log(val);
    console.log(tile.id);
    if(tile.innerHTML == "" && hodnoty.length < 2){
        tile.style.background = '#FFF';
        tile.innerHTML = val;
        if(hodnoty.length == 0){
            hodnoty.push(val);
            jmena.push(tile.id);
        }
        else if(hodnoty.length == 1){
            hodnoty.push(val);
            jmena.push(tile.id);
            if(hodnoty[0] == hodnoty [1]){
                otoceni += 2;
                hodnoty = [];
                jmena = [];
                if(otoceni == karty.length){
                    alert("U VON ZULUL");
                    document.getElementById('karty').innerHTML = "";
                    hra();
                }
            }
        }
    }
        else{
            function zpatky(){
                let tile_1 = document.getElementById(jmena[0]);
                let tile_2 = document.getElementById(jmena[1]);
                tile_1.style.background = "#000000";
                tile_1.innerHTML = "";
                tile_2.style.background = "#000000";
                tile_2.innerHTML = "";
                hodnoty = [];
                jmena = [];
            }
            setTimeout(zpatky, 5);
        }
}
