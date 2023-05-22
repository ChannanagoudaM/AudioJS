let playButton=document.getElementById('foot2');
let pauseButton=document.getElementById('foot3');
let b=document.getElementById('foot1');
let f=document.getElementById('foot4');
let foot=document.getElementById('foot');
let bar=document.getElementById('bar')

let nav2=document.getElementById('nav2');
nav2.addEventListener('click',()=>
{
window.location.href='http://127.0.0.1:5500/song1.html';
})
nav2.addEventListener('mouseover',()=>
{
    alert("Next song");
})

let nav1=document.getElementById('nav1');
nav1.addEventListener('click',()=>
{
    window.location.href="http://127.0.0.1:5500/song.html";
})
nav1.addEventListener('mouseover',()=>
{
    alert("No more previous Songs");
})


let audio=new Audio('love.mp3');

bar.value=audio.currentTime;
bar.max=audio.duration;
bar.min=0;
setInterval(()=>
{
bar.value=audio.currentTime;
},500)

playButton.addEventListener('click',function()
{
   audio.play();
   foot.classList.add('fa-beat');
   
})
{/* <i class="fa-solid fa-music fa-beat" style="color: #ff3f0f;"></i> */}
pauseButton.addEventListener('click',function()
{
    audio.pause();
    foot.classList.remove('fa-beat');
})
b.addEventListener('click',function()
{
let bTime=audio.currentTime-5;
audio.currentTime=bTime;
})
f.addEventListener('click',()=>
{
    let fTime=audio.currentTime+10;
    audio.currentTime=fTime;
})

// if(audio.play())
// {
//     setInterval(()=>
//     {
//         bar.value=audio.currentTime;
//     },500);
// }