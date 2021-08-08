'use strict'
const askbutton = document.getElementById('askwhy');
const resultDivided = document.getElementById('resultarea');
const inputDivided = document.getElementById('inputer')
const summerizeButton = document.getElementById('summerize')
const endButton = document.getElementById('end')

// ISSUEボタンを押したら下に結果を出す関数
askbutton.onclick=()=>{
    const userName = inputDivided.value
    // resultDivided.innerText = "";
    const header = document.createElement('h3');
    header.innerText = `why ${userName} ?`;
    resultDivided.appendChild(header);

    clearText();
}

summerizeButton.onclick=()=>{
    const header2 = document.createElement('h3');
    header2.innerText = 'まとめると？(結論)';
    resultDivided.appendChild(header2);

}

endButton.onclick=()=>{
    const userName = inputDivided.value
    // resultDivided.innerText = "";
    const header3 = document.createElement('h1');
    header3.innerText = `【結果】 ${userName} !`;
    resultDivided.appendChild(header3);
}

// ISSUEボタンを押すとインプットのとこがクリアになるやつ
function clearText(){
    let cleaR=document.getElementById("inputer");
    cleaR.value='';
};

document.getElementById('ug2').addEventListener('click',changeColor);

function changeColor(){
    document.getElementById('ug2').classList.toggle('ug3')
}

