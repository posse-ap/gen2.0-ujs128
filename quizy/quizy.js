'use strict'

const imagE0='https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png'
const imagE1='https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png' //亀戸
const imagE2='https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png' //麴町
const imagE3='https://d1khcm40x1j0f.cloudfront.net/quiz/ee645c9f43be1ab3992d121ee9e780fb.png' //御成門
const imagE4='https://d1khcm40x1j0f.cloudfront.net/quiz/6a235aaa10f0bd3ca57871f76907797b.png' //等々力
const imagE5='https://d1khcm40x1j0f.cloudfront.net/quiz/0b6789cf496fb75191edf1e3a6e05039.png' //石神井
const imagE6='https://d1khcm40x1j0f.cloudfront.net/quiz/23e698eec548ff20a4f7969ca8823c53.png' //雑色
const imagE7='https://d1khcm40x1j0f.cloudfront.net/quiz/50a753d151d35f8602d2c3e2790ea6e4.png' //御徒町
const imagE8='https://d1khcm40x1j0f.cloudfront.net/words/8cad76c39c43e2b651041c6d812ea26e.png' //鹿骨
const imagE9='https://d1khcm40x1j0f.cloudfront.net/words/34508ddb0789ee73471b9f17977e7c9c.png' //小榑

const imageIndex=[imagE0,imagE1,imagE2,imagE3,imagE4,imagE5,imagE6,imagE7,imagE8,imagE9]

const choose0=['たかなわ','たかわ','こうわ']
const choose1=['かめいど','かめど','かめと']
const choose2=['こうじまち','かゆまち','おかとまち']
const choose3=['おなりもん','おかどもん','ごせいもん']
const choose4=['とどろき','たたら','たたりき']
const choose5=['しゃくじい','せきこうい','いじい']
const choose6=['ぞうしき','ざっしょく','ざっしょく']
const choose7=['おかちまち','みとちょう','ごしろちょう']
const choose8=['ししぼね','ろっこつ','しこね']
const choose9=['こぐれ','こばく','こしゃく']

const Choose=[choose0,choose1,choose2,choose3,choose4,choose5,choose6,choose7,choose8,choose9]

for(let i=1; i<11; i++){

    const Quiz=document.getElementById('quizContents')

    const quizTitle=document.createElement('h3')
    quizTitle.innerText=`${i}.この地名はなんて読む?`
    Quiz.appendChild(quizTitle);
    quizTitle.classList.add('quiz-title')

    
    const Titleborder=document.createElement('div')
    Quiz.appendChild(Titleborder);
    Titleborder.classList.add("quizHead")

    const imgDiv=document.createElement('img')
    imgDiv.src=imageIndex[i-1];
    Quiz.appendChild(imgDiv)

    const btnDiv=document.createElement('button')
    const btnDiv2=document.createElement('button')
    const btnDiv3=document.createElement('button')
    
    btnDiv.innerText=Choose[i-1][0]
    btnDiv2.innerText=Choose[i-1][1]
    btnDiv3.innerText=Choose[i-1][2]
    
    Quiz.appendChild(btnDiv)
    Quiz.appendChild(btnDiv2)
    Quiz.appendChild(btnDiv3)

    btnDiv.classList.add('pushsh')
    btnDiv2.classList.add('pushsh')
    btnDiv3.classList.add('pushsh')


    btnDiv2.id=`1wrong${i}`
    btnDiv3.id=`2wrong${i}`
    btnDiv.id=`bingo${i}`

    
    const OKBox=document.createElement('div');
    OKBox.classList.add('answerBox');
    OKBox.classList.add('disappear');
    OKBox.id=`answerArea${i}`
    Quiz.appendChild(OKBox);
    
    const OKContents=document.createElement('p')
    OKContents.innerText='正解！'
    OKContents.classList.add('OKUnder')
    OKBox.appendChild(OKContents)
    
    const OKContents2=document.createElement('p')
    OKContents2.innerText=`正解は「${Choose[i-1][0]}」です！`
    OKBox.appendChild(OKContents2)
    
    
    const faultBox=document.createElement('div');
    faultBox.classList.add('wrongBox');
    faultBox.classList.add('disappear');
    faultBox.id=`wrongArea${i}`
    Quiz.appendChild(faultBox);
    
    const faultContents=document.createElement('p')
    faultContents.innerText='不正解！'
    faultBox.appendChild(faultContents)
    faultContents.classList.add('faultUnder')
    
    const faultContents2=document.createElement('p')
    faultContents2.innerText=`正解は「${Choose[i-1][0]}」です！`
    faultBox.appendChild(faultContents2)
    
    let Wrong =document.getElementById(`1wrong${i}`)
    let Wrong2 =document.getElementById(`2wrong${i}`)
    let Bingo = document.getElementById(`bingo${i}`)
    
    let correctBox= document.getElementById(`answerArea${i}`)
    let missBox =document.getElementById(`wrongArea${i}`)




    Wrong.addEventListener('click',process)
    Wrong2.addEventListener('click',process2)
    Bingo.addEventListener('click',process3)
    
    // 間違ったボタン押したときの関数
    function process(){

        Wrong.disabled=true;
        Wrong2.disabled=true;
        Bingo.disabled=true;

        Wrong.classList.add("becomeRed");
        Bingo.classList.add("becomeBlue");

        missBox.classList.remove('disappear');

    
    
        
    
    
    }
    function process2(){


        Wrong.disabled=true;
        Wrong2.disabled=true;
        Bingo.disabled=true;

        Wrong2.classList.add("becomeRed");
        Bingo.classList.add("becomeBlue");

        missBox.classList.remove('disappear');
    

    }
    function process3(){

        Wrong.disabled=true;
        Wrong2.disabled=true;
        Bingo.disabled=true;

        Bingo.classList.add("becomeBlue");


        correctBox.classList.remove('disappear');
    
     
    

    }

 
    

}
