let boxes=document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
const checkFx=(aToin,bTov,aPos)=>{
    let check=false;
    for(let i =0;i<8;i++){
        let fav=0;
        for(let j=0;j<3;j++){
            if(aPos.includes(winArr[i][j])){
                fav+=1;
            };
        };
        if(fav==3){
            check=true;
        };
    };
    if(check){
        aToin.innerText='GAME OVER';
    }else{
        aToin.classList.add("invis");
        bTov.classList.remove("invis");   
        };
};

const winArr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let xPos=[];
let oPos=[];
let x=document.querySelector('#x');
let o=document.querySelector('#o');
const h2=document.createElement('h2');
let turnO = true;//playerX,playerO
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText='O';
            box.disabled=true;
            turnO=false;
            oPos.push(parseInt(box.id));
            checkFx(o,x,oPos);
        }
        else{
            box.innerText='X';
            box.disabled=true;
            turnO=true;
            xPos.push(parseInt(box.id));
            checkFx(x,o,xPos);
        };
    })
});

resetBtn.addEventListener('click',()=>{
    location.reload();
})
