
//defining the variables
let songIndex =0;
let masterPlay=document.querySelector('#masterPlay') ;
let audioElement = new Audio('songs/1.mp3');
let progressBar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let newArr=document.getElementsByClassName('song-item')
let songItem = Array.from(newArr);
let mastersongplay = document.querySelector('.mastersongplay');
// let timespan = Array.from(document.getElementsByClassName('timespan'));
let songs = [
    {songName:"No Love",filePath:'songs/No-Love.mp3',coverPath:'covers/1.jpg',duration:3.20},
    {songName:"man mera",filePath:'songs/10.mp3',coverPath:'covers/2.jpg',duration:5.20},
    {songName:"bagani",filePath:'songs/12.mp3',coverPath:'covers/3.jpg',duration:7.20},
    {songName:"diruba",filePath:'songs/13-Love.mp3',coverPath:'covers/4.jpg',duration:2.20},
    {songName:"hii",filePath:'songs/14-Love.mp3',coverPath:'covers/5.jpg',duration:4.50},
    ]
    
    
songItem.forEach((ele,i)=>{
    console.log(ele,i);
    ele.getElementsByTagName('img')[0].src=songs[i].coverPath;
ele.getElementsByClassName('splay')[0].innerText=songs[i].songName;

ele.getElementsByClassName('timespan')[0].innerText=songs[i].duration;

})
//handle play pause click 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();    
        gif.style.opacity=0;}
});
audioElement.addEventListener('timeupdate',()=>{
    pbar= parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value= pbar;
});
progressBar.addEventListener('change',()=>{
   audioElement.currentTime = progressBar.value*audioElement.duration/100;
});
Array.from(document.getElementsByClassName('play')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        // makeAllPlays();
        
                songIndex = parseInt(e.target.id);
                
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersongplay.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
         })  

})
document.querySelector('.forward').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongplay.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();


})
document.querySelector('.backward').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongplay.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    
})
