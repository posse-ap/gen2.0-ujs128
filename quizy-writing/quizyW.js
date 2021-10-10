const optionList=new Array();
optionList.push=(['たかなわ','たかわ','こうわ']);
optionList.push=(['かめいど','かめど','かめと']);
optionList.push=(['こうじまち','おかとまち','かゆまち']);


// questionNum：問題番号 1~
// selectionList：選択肢配列
// validId：正解番号 1~

function createhtml(){
    optionList.forEach(function (question,index){
        answer=question[0];

        for(let i=question.length-1,i>0,i--){
            let r=Math.floor(Math.random()*(i+1));
            let tmp=question[i];
            question[i]=question[r]
            question[r]=tmp
        }

        createquestion(index+1,question,question.indexOf(answer)+1);
    })
}

function createquestion(questionNum,selectionList,validId){
    let content=`<div>`
        + `     <h1>${questionNum}.この地名はなんて読む？</h1> `
        + `     <img src="img/${questionNum}.png" > `
        + `     <ul>`

    selectionList.forEach(function(select,index){                                             
        content +=`         <li id=answerList_${questionNum}_${(index+1)} class=answerList name=answerList_${questionNum} onclick="check(${questionNum},${(index+1)},${validId})>${select}</li>"`

    })
    content +=`     </ul>`
        +`</div>`
        +`<div>`
        +`  <h2></h2>`
        +`  <p>正解は「${selectionList[validId-1]}」です！</p>`
        +`</div>`
    document.getElementById('main').insertAdjacentHTML("beforeend",content)



}
function check(questionNum,selectionId,validId){
    let answerList = document.getElementsByName('answerList_'+questionNum)
    answerList.forEach(answerList=>{
        answerList.style.pointerEvents='none'
    })
    let selecter=document.getElementById('answerList'+questionNum+'_'+selectionId)
    let valider=document.getElementById('answerList'+questionNum+'_'+validId)

    selecter.className=
    



}













window.onload=createhtml()
