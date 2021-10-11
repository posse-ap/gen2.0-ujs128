const optionList=new Array();
optionList.push(['たかなわ','たかわ','こうわ']);
optionList.push(['かめいど','かめど','かめと']);
optionList.push(['こうじまち','おかとまち','かゆまち']);




function createhtml(){


    optionList.forEach(function (question,index){
        // 正解をanswerの中に保存
        answer=question[0];

        // フィッシャーイェーツのシャッフル
        for(let i=question.length-1 ; i>0 ; i--){
            let r=Math.floor(Math.random()*(i+1));
            let tmp=question[i];
            question[i]=question[r];
            question[r]=tmp;
        }

        createquestion(index+1,question,question.indexOf(answer)+1);
    })
}

// questionNum：問題番号、1~
// selectionList：回答の選択肢配列
// validId：正解番号


function createquestion(questionNum,selectionList,validId){
    var content=`<div class='quiz'>`
        + `     <h1>${questionNum}.この地名はなんて読む？</h1> `
        + `     <img src="imgs/img_${questionNum}.png" > `
        + `     <ul>`

    selectionList.forEach(function(select,index){                                             
        content +=`         <li id='answerList_${questionNum}_${(index+1)}' class='answerList' name='answerList_${questionNum}' onclick="check(${questionNum},${(index+1)},${validId})">${select}</li>`

    })
    content +=`     </ul>`
        +`</div>`
        +`<div id=answerArea_${questionNum} class=answerBox >`
        +`  <h2 id=answerText_${questionNum}></h2>`
        +`  <p>正解は「${selectionList[validId-1]}」です！</p>`
        +`</div>`;
        document.getElementById('main').insertAdjacentHTML('beforeend',content);



}

// questionNum：問題番号 1~
// selectionId：選択肢配列
// validId：正解番号 1~
function check(questionNum,selectionId,validId){
    let answerList = document.getElementsByName('answerList_'+questionNum);
    answerList.forEach(answerlist=>{
        answerlist.style.pointerEvents='none'
    })



    let selecter=document.getElementById('answerList_'+questionNum+'_'+selectionId)
    let valider=document.getElementById('answerList_'+questionNum+'_'+validId)

    selecter.className='answerWrong';
    valider.className='answerCorrect';

    let checkBox=document.getElementById('answerArea_'+questionNum);
    let checkText=document.getElementById('answerText_'+questionNum);

    if(selectionId==validId){
        checkText.className='textValid'
        checkText.innerText='正解！'
    }else{
        checkText.className='textWrong'
        checkText.innerText='不正解！'
    }
    checkBox.style.display='block'
    



}


window.onload=createhtml();
