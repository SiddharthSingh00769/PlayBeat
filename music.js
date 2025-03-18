let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let holly_song_left=document.getElementById('holly_song_left');
let holly_song_right=document.getElementById('holly_song_right');
let punjabi_song_left=document.getElementById('punjabi_song_left');
let punjabi_song_right=document.getElementById('punjabi_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];
let holly_hit_song=document.getElementsByClassName('holly_hit_song')[0];
let punjabi_hit_song=document.getElementsByClassName('punja_hit_song')[0];

pop_song_right.addEventListener('click', ()=> {
    pop_song.scrollLeft+=270;
})

pop_song_left.addEventListener('click', ()=> {
    pop_song.scrollLeft-=270;
})

holly_song_right.addEventListener('click', ()=> {
    holly_hit_song.scrollLeft+=270;
})

holly_song_left.addEventListener('click', ()=> {
    holly_hit_song.scrollLeft-=270;
})

punjabi_song_right.addEventListener('click', ()=> {
    punjabi_hit_song.scrollLeft+=270;
})

punjabi_song_left.addEventListener('click', ()=> {
    punjabi_hit_song.scrollLeft-=270;
})

const music=new Audio('');
// music.play();

const songs=[
    {
        id: 1,
        songName: `King Shit <br>
        <div class="subtitle text-xs text-gray-500">Shubh</div>`,
        poster: "song photos/1.png"
    },
    {
        id: 2,
        songName: `Maharani <br>
        <div class="subtitle text-xs text-gray-500">Arpit Bala, Karun, Revo Lekhak, Lambo Drive</div>`,
        poster: "song photos/2.png"
    },
    {
        id: 3,
        songName: `P*$$Y FAIRY <br>
        <div class="subtitle text-xs text-gray-500">Jhene Aiko</div>`,
        poster: "song photos/3.png"
    },
    {
        id: 4,
        songName: `Hass Hass <br>
        <div class="subtitle text-xs text-gray-500">Diljit Dosanjh, Sia, Greg Kurstin</div>`,
        poster: "song photos/4.png"
    },
    {
        id: 5,
        songName: `Tumhe Jo Maine Dekha <br>
        <div class="subtitle text-xs text-gray-500">Abhijeet, Shreya Ghoshal</div>`,
        poster: "song photos/5.png"
    },
    {
        id: 6,
        songName: `Nagada Sang Dhol <br>
        <div class="subtitle text-xs text-gray-500">Shreya Ghoshal, Osman Mir</div>`,
        poster: "song photos/6.png"
    },
    {
        id: 7,
        songName: `Saudebazi <br>
        <div class="subtitle text-xs text-gray-500">Javed Ali</div>`,
        poster: "song photos/7.png"
    },
    {
        id: 8,
        songName: `Dhundhala <br>
        <div class="subtitle text-xs text-gray-500">Yashraj, Dropped Out, Talwiinder</div>`,
        poster: "song photos/8.png"
    },
    {
        id: 9,
        songName: `Tere Bin <br>
        <div class="subtitle text-xs text-gray-500">Rabbi Shergill</div>`,
        poster: "song photos/9.png"
    },
    {
        id: 10,
        songName: `Heeriye <br>
        <div class="subtitle text-xs text-gray-500">Jasleen Royal, Arijeet Singh</div>`,
        poster: "song photos/10.png"
    },
    {
        id: 11,
        songName: `KALESHI CHORI <br>
        <div class="subtitle text-xs text-gray-500">Raga, DARK HORSE, DJ IMMORTALS, Harjas Harjaayi</div>`,
        poster: "song photos/11.png"
    },
    {
        id: 12,
        songName: `Nakhre <br>
        <div class="subtitle text-xs text-gray-500">Zack Knight</div>`,
        poster: "song photos/12.png"
    },
    {
        id: 13,
        songName: `Arjan Vailly <br>
        <div class="subtitle text-xs text-gray-500">Manan Bhardwaj, Bhupinder Babbal</div>`,
        poster: "song photos/13.png"
    },
    {
        id: 14,
        songName: `Hua Main <br>
        <div class="subtitle text-xs text-gray-500">Pritam, Raghav Chaitanya, Manoj Muntashir</div>`,
        poster: "song photos/14.png"
    },
    {
        id: 15,
        songName: `Satranga <br>
        <div class="subtitle text-xs text-gray-500">Arijit Singh, Shreyas Puranik</div>`,
        poster: "song photos/15.png"
    },
    {
        id: 16,
        songName: `Pehle Bhi Main <br>
        <div class="subtitle text-xs text-gray-500">Vishal Mishra, Raj Shekhar</div>`,
        poster: "song photos/16.png"
    },
    {
        id: 17,
        songName: `Papa Meri Jaan <br>
        <div class="subtitle text-xs text-gray-500">Sonu Nigam, Raj Shekhar, Harshvardhan Rameshwar</div>`,
        poster: "song photos/17.png"
    },
    {
        id: 18,
        songName: `Saari Duniya Jala Denge <br>
        <div class="subtitle text-xs text-gray-500">Jaani, B Praak</div>`,
        poster: "song photos/18.png"
    },
    {
        id: 19,
        songName: `Jamal Kudu <br>
        <div class="subtitle text-xs text-gray-500">Harshvardhan Rameshwar, Choir</div>`,
        poster: "song photos/19.png"
    },
    {
        id: 20,
        songName: `Lutt Putt Gaya <br>
        <div class="subtitle text-xs text-gray-500">Pritam, Arijit Singh, Swanand Kirkire, IP singh</div>`,
        poster: "song photos/20.png"
    },
    {
        id: 21,
        songName: `Chaleya <br>
        <div class="subtitle text-xs text-gray-500">Arijit Singh, Shilpa Rao</div>`,
        poster: "song photos/21.png"
    },
    {
        id: 22,
        songName: `Zinda Banda <br>
        <div class="subtitle text-xs text-gray-500">Anirudh Ravichander, Irshad Kamil</div>`,
        poster: "song photos/22.png"
    },
    {
        id: 23,
        songName: `Ek Mulaqaat <br>
        <div class="subtitle text-xs text-gray-500">Vishal Mishra, Shreya Ghoshal</div>`,
        poster: "song photos/23.png"
    },
    {
        id: 24,
        songName: `Janiye <br>
        <div class="subtitle text-xs text-gray-500">Vishal Mishra, Rashmeet Kaur</div>`,
        poster: "song photos/24.png"
    },
    {
        id: 25,
        songName: `Cheap Thrills <br>
        <div class="subtitle text-xs text-gray-500">SIA, Sean Paul</div>`,
        poster: "song photos/25.png"
    },
    {
        id: 26,
        songName: `Let Me Love You <br>
        <div class="subtitle text-xs text-gray-500">DJ Snake, Justin Bieber</div>`,
        poster: "song photos/26.png"
    },
    {
        id: 27,
        songName: `Don't Let Me Down <br>
        <div class="subtitle text-xs text-gray-500">The Chainsmokers</div>`,
        poster: "song photos/27.png"
    },
    {
        id: 28,
        songName: `We don't talk anymore <br>
        <div class="subtitle text-xs text-gray-500">Charlie Puth, Selena Gomez</div>`,
        poster: "song photos/28.png"
    },
    {
        id: 29,
        songName: `Hymn for the Weekend <br>
        <div class="subtitle text-xs text-gray-500">Coldplay</div>`,
        poster: "song photos/29.png"
    },
    {
        id: 30,
        songName: `Sorry <br>
        <div class="subtitle text-xs text-gray-500">Justin Bieber</div>`,
        poster: "song photos/30.png"
    },
    {
        id: 31,
        songName: `24K Magic <br>
        <div class="subtitle text-xs text-gray-500">Bruno Mars</div>`,
        poster: "song photos/31.png"
    },
    {
        id: 32,
        songName: `One Dance <br>
        <div class="subtitle text-xs text-gray-500">Drake, Wizkid, Kyla</div>`,
        poster: "song photos/32.png"
    },
    {
        id: 33,
        songName: `Love Yourself <br>
        <div class="subtitle text-xs text-gray-500">Justin Bieber</div>`,
        poster: "song photos/33.png"
    },
    {
        id: 34,
        songName: `Closer <br>
        <div class="subtitle text-xs text-gray-500">The Chainsmokers, Halsey</div>`,
        poster: "song photos/34.png"
    },
    {
        id: 35,
        songName: `Softly <br>
        <div class="subtitle text-xs text-gray-500">Karan Aujla, Ikky</div>`,
        poster: "song photos/35.png"
    },
    {
        id: 36,
        songName: `Cheque <br>
        <div class="subtitle text-xs text-gray-500">Shubh</div>`,
        poster: "song photos/36.png"
    },
    {
        id: 37,
        songName: `One Love <br>
        <div class="subtitle text-xs text-gray-500">Shubh</div>`,
        poster: "song photos/37.png"
    },
    {
        id: 38,
        songName: `Baller <br>
        <div class="subtitle text-xs text-gray-500">Shubh</div>`,
        poster: "song photos/38.png"
    },
    {
        id: 39,
        songName: `8 parche <br>
        <div class="subtitle text-xs text-gray-500">Baani Sandhu, Gur Sidhu</div>`,
        poster: "song photos/39.png"
    },
    {
        id: 40,
        songName: `3 Peg <br>
        <div class="subtitle text-xs text-gray-500">Sharry Mann</div>`,
        poster: "song photos/40.png"
    },
    {
        id: 41,
        songName: `With You <br>
        <div class="subtitle text-xs text-gray-500">AP Dhillon</div>`,
        poster: "song photos/41.png"
    },
    {
        id: 42,
        songName: `Same Beef <br>
        <div class="subtitle text-xs text-gray-500">Sidhu Moose Wala, Bohemia</div>`,
        poster: "song photos/42.png"
    },
    {
        id: 43,
        songName: `Kuley Kuley <br>
        <div class="subtitle text-xs text-gray-500">Yo Yo Honey Singh, Apache Indian</div>`,
        poster: "song photos/43.png"
    },
    {
        id: 44,
        songName: `Ik Tera <br>
        <div class="subtitle text-xs text-gray-500">Maninder Buttar</div>`,
        poster: "song photos/44.png"
    },
    {
        id: 45,
        songName: `Excuses <br>
        <div class="subtitle text-xs text-gray-500">AP Dhillon, Gurinder Gill, Intense</div>`,
        poster: "song photos/45.png"
    },
    {
        id: 46,
        songName: `Desi Kalakaar <br>
        <div class="subtitle text-xs text-gray-500">Yo Yo Honey Singh</div>`,
        poster: "song photos/46.png"
    },
    {
        id: 47,
        songName: `Daru Badnaam <br>
        <div class="subtitle text-xs text-gray-500">Param Singh, Kamal Kahlon</div>`,
        poster: "song photos/47.png"
    },
    {
        id: 48,
        songName: `Dance like <br>
        <div class="subtitle text-xs text-gray-500">Harrdy Sandhu</div>`,
        poster: "song photos/48.png"
    },
    {
        id: 49,
        songName: `Bombay to Punjab <br>
        <div class="subtitle text-xs text-gray-500">Divine, Deep Jandu</div>`,
        poster: "song photos/49.png"
    },
    {
        id: 50,
        songName: `Amplfiier <br>
        <div class="subtitle text-xs text-gray-500">Imran Khan</div>`,
        poster: "song photos/50.png"
    },
    {
        id: 51,
        songName: `Pata Chalega <br>
        <div class="subtitle text-xs text-gray-500">Imran Khan</div>`,
        poster: "song photos/51.png"
    },
    {
        id: 52,
        songName: `Houdini <br>
        <div class="subtitle text-xs text-gray-500">Dua Lipa</div>`,
        poster: "song photos/52.png"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let master_play=document.getElementById('master_play');
master_play.addEventListener('click', ()=> {
    if (music.paused || music.currentTime<=0) {
        music.play();
        master_play.classList.remove('bi-play-fill');
        master_play.classList.add('bi-pause-circle');
    } else {
        music.pause();
        master_play.classList.add('bi-play-fill');
        master_play.classList.remove('bi-pause-circle');
    }
});

const makeAllBackground=()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background='rgb(105,105,105,.0)';
    })
}

let index=0;
let poster_master_play=document.getElementById('poster_master_play');
let title=document.getElementsByClassName('title');

Array.from(document.getElementsByClassName('play_song')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index=el.target.id;
        music.src=`song/${index}.mp3`;
        poster_master_play.src=`song photos/${index}.png`;
        music.play();
        master_play.classList.remove('bi-play-fill');
        master_play.classList.add('bi-pause-circle');

        let songTitles= songs.filter((els)=>{
            return els.id==index;
        })

        songTitles.forEach(elss =>{
            let {songName}=elss;
            title[0].innerHTML=songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,0.1)';
    })
});

let currentStart=document.getElementById('currentStart');
let currentEnd=document.getElementById('currentEnd');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;

    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);

    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentEnd.innerText=`${min1}:${sec1}`;

    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);
    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentStart.innerText=`${min2}:${sec2}`;

    let progressBar=parseInt((music_curr/music_dur)*100);
    seek.value=progressBar;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;

    seek.addEventListener('change', ()=>{
        music.currentTime=seek.value*music_dur/100;
    })
});

let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click', ()=>{
    index-=1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src=`song/${index}.mp3`;
        poster_master_play.src=`song photos/${index}.png`;
        music.play();
        master_play.classList.remove('bi-play-fill');
        master_play.classList.add('bi-pause-circle');

        let songTitles= songs.filter((els)=>{
            return els.id==index;
        })

        songTitles.forEach(elss =>{
            let {songName}=elss;
            title[0].innerHTML=songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,0.1)';
});

next.addEventListener('click', ()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('songItem')).length){
        index=1;
    }
    music.src=`song/${index}.mp3`;
        poster_master_play.src=`song photos/${index}.png`;
        music.play();
        master_play.classList.remove('bi-play-fill');
        master_play.classList.add('bi-pause-circle');

        let songTitles= songs.filter((els)=>{
            return els.id==index;
        })

        songTitles.forEach(elss =>{
            let {songName}=elss;
            title[0].innerHTML=songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,0.1)';
});

let menu_list_active_btn=document.getElementById('menu_list_active_btn');
let menu_side=document.getElementsByClassName('menu_side')[0];
let mode="uns";

menu_list_active_btn.addEventListener('click', ()=>{
    if(mode=="uns"){
        menu_side.style.transform="unset";
        mode="trans";
    }
    else{
        menu_side.style.transform="translateX(-100%)";
        mode="uns";
    }
})

let main_play=document.getElementById('main_play');

main_play.addEventListener('click', ()=>{
    index=52;
    music.src=`song/${index}.mp3`;
        poster_master_play.src=`song photos/${index}.png`;
        music.play();
        master_play.classList.remove('bi-play-fill');
        master_play.classList.add('bi-pause-circle');

        let songTitles= songs.filter((els)=>{
            return els.id==index;
        })

        songTitles.forEach(elss =>{
            let {songName}=elss;
            title[0].innerHTML=songName;
        });
})