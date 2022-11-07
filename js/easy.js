const dice = document.getElementById('button');
const result = document.getElementById('result');
const play = document.getElementById('button');

let hod;
let hody = [];
let timer = false;

function animace() {
    hod = Math.ceil(Math.random() * 6);
    dice.src = `../img/dice${hod}.png`;
}

play.addEventListener('click', function() {
    if (!timer) {
        timer = setInterval(animace, 350);
        play.innerText = 'STOP'
    } else {
        clearInterval(timer);
        timer = false;
        hody.push(hod);
        result.innerHTML = statistika();
        play.innerText = 'HREJ';
    }
})

function sum() {
    let suma = 0;
    hody.forEach((value) => {
        suma += value;
    })
    return suma;
}

function max() {
    let maximum = 1;    
    hody.forEach((value) => {
        if (value > maximum) {
            maximum = value;
        }
    })
    return maximum;
}

function min() {
    let minimum = 6;
    hody.forEach((value) => {
        if (value < minimum) {
            minimum = value;
        }
    })
    return minimum;
}

function statistika() {
    let vypis = `<h3>Current throw: ${hod}</h3>`;
    vypis += `<p>Number of throws: ${hody.length}</p>`;
    vypis += `<p>Sum of throws: ${sum()}</p>`;
    vypis += `<p>Average of throws: ${(sum() / hody.length).toFixed(2)}</p>`;
    vypis += `<p>MAXIMUM: ${max()}</p>`;
    vypis += `<p>MINIMUM: ${min()}</p>`;
    return vypis;
}