window.onload = () => {
    let gradeCount = 2;

    let addNewGradeButton = document.getElementById('add-grade');
    let countGradeButton = document.getElementById('count-grades');
    let container = document.getElementById('container');
    let result = document.getElementById('result');

    addNewGradeButton.addEventListener('click',() => {
        let x = 2;

        let div = document.createElement('div');
        let label = document.createElement('label');
        label.innerText = 'Známka #' + gradeCount;
        let input = document.createElement('input');
        input.className = 'grade' + x;

        div.appendChild(label);
        div.appendChild(input);

        container.appendChild(div);

        gradeCount++;
        x++;
    });

    countGradeButton.addEventListener('click', () => {
        let divs = container.children;
        let sum = 0;
        for(let i = 0; i < divs.length; i++) {
            let input = divs[i].querySelector('input');
            sum += parseFloat(input.value);
        }

        let prumer = sum / divs.length;

        result.innerText = "Průměr je: " + prumer;
        if(prumer > 50){
            let idk = document.getElementById("failing").innerHTML = "Nejsi selhání";
        };
    
        if(prumer <= 50){
            let idk = document.getElementById("failing").innerHTML = "Jsi selhání";
        };

    });


};
