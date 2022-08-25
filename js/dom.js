document.getElementById('apply-bg').addEventListener('click',function()
{
const friends = document.getElementsByClassName('frined');
for(const frined of friends){
  frined.style.backgroundColor = 'lightblue';
}
} )

document.getElementById('center-third').addEventListener('click',function(){
    const third  = document.getElementById('third-frined');
    third.style.textAlign = 'center';
})