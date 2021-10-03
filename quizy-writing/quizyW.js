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

        createquestion(questionNum,selectionList,validId);
    })
}

function createquestion(questionNum,selectionList,validId){
    let content=`<div>`
        + `     <h1>${questionNum}.この地名はなんて読む？</h1> `
        + `     <img src="img/${questionNum}.png" > `
        + `     <ul>`

    selectionList.forEach(function(select,index){
        content +=`         <li>`

    })
    content +=`     </ul>`
        +`</div>`
        +`<div>`
        +`  <h2></h2>`
        +`  <p>正解は「${selectionList[validId]}」です！</p>`
        +`</div>`
    document.getElementById('main').insertAdjacentHTML("beforeend",content)



}













window.onload=createhtml()
