document.getElementById('apply-bg').addEventListener('click',function()
{
const friends = document.getElementsByClassName('frined');
for(const frined of friends){
  frined.style.backgroundColor = 'lightblue';
}
} );

document.getElementById('center-third').addEventListener('click',function(){
    const third  = document.getElementById('third-frined');
    third.style.textAlign = 'center';
});

document.getElementById('add-frined').addEventListener('click', function(){
    const friendContainer = document.getElementById('frineds');
    const friend = document.createElement('div');
    friend.classList.add('frined');
    friend.innerHTML = `
    <h3 class="friend-name ">New Frined</h3>
    <p> Something new added</p>
    `

    friendContainer.appendChild(friend);
    
    
    

});