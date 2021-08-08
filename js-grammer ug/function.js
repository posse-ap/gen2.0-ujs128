let MyBirthTime=new Date(2001,8,25,11,36);
function updateParagraph(){
    let now=new Date();
    let seconds=(now.getTime()-MyBirthTime.getTime())/1000;
    document.getElementById('birth-time').innerText='生まれてから'+ seconds +'秒経過。';
}
setInterval(updateParagraph,50);
