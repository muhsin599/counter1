const p1= document.querySelector('.pragraph-css');
const btn1= document.querySelector('.btn1-js');
const btn2= document.querySelector('.btn2-js');
const btn3= document.querySelector('.btn3-js');
console.log(p1);
console.log(btn1);
console.log(btn2);
console.log(btn3);
let counter=Number(localStorage.getItem('keydi'))|| 0;
p1.innerHTML=counter;
btn1.addEventListener('click',()=>{
p1.innerHTML=counter+=1;
localStorage.setItem('keydi',counter)
})
btn2.addEventListener('click',()=>{
if(counter>0){
  p1.innerHTML=counter-=1;
localStorage.setItem('keydi',counter)
}
})
btn3.addEventListener('click',()=>{
  p1.innerHTML=counter=0;
localStorage.removeItem('keydi',counter)

})