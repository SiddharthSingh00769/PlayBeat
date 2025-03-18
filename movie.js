let left_btn=document.getElementsByClassName('left')[0];
let right_btn=document.getElementsByClassName('right')[0];
let cards=document.getElementsByClassName('cards')[0];
let search=document.getElementsByClassName('search')[0];
let search_input=document.getElementById('search_input');

left_btn.addEventListener('click', () => {
    cards.scrollLeft -= 290;
})

right_btn.addEventListener('click', () => {
    cards.scrollLeft += 290;
})

let json_url="movie.json";

fetch(json_url).then(Response => Response.json())
    .then((data) => {
        data.forEach((ele,i) => {
            let {name, about, imdb, date, sposter, bposter, genre, url}=ele;
            let card=document.createElement('a');
            card.classList.add('card2');
            card.href=url;
            card.innerHTML=`
            <img src="${sposter}" class="poster w-[100%] h-[100%] rounded-md relative" alt="${name}">
                    <div class="rest_card absolute w-[100%] h-[100%] rounded-md left-0 bottom-0 z-[9999] opacity-0 hover:opacity-100">
                        <img src="${bposter}" class="relative w-[100%] h-[100%] rounded-md z-[-1]" alt="">
                        <div class="cont absolute w-[100%] bottom-3 left-0 pl-5 pr-5">
                            <h4 class="font-semibold text-base sm:text-lg">${name}</h4>
                            <div class="sub sm:flex sm:items-center sm:justify-between">
                                <p class="text-sm font-normal sm:text-base text-gray-400">${genre}, ${date}</p>
                                <h3 class="text-sm font-normal sm:text-base"><span class="bg-yellow-300 text-black font-medium pl-[2px] pr-[2px] sm:pl-1 sm:pr-1 mr-[2px] sm:mr-1">IMDB</span> <i class="bi bi-star-fill mr-[2px]"></i>${imdb}</h3>
                            </div>
                        </div>
                    </div>
            `
            cards.appendChild(card);
        });

        document.getElementById('title').innerText=data[0].name;
        document.getElementById('ab').innerText=data[0].about;
        document.getElementById('gen').innerText=data[0].genre;
        document.getElementById('date').innerText=data[0].date;
        document.getElementById('rate').innerHTML=`<span class="bg-yellow-300 text-black font-medium pl-[2px] pr-[2px] sm:pl-1 sm:pr-1 mr-[2px] sm:mr-1">IMDB</span> <i class="bi bi-star-fill mr-[2px]"></i>${data[0].imdb}</h3>`;

        data.forEach(element => {
            let {name, about, imdb, date, sposter, genre, url}=element;
            let card=document.createElement('a');
            card.classList.add('card1');
            card.href=url;
            card.style
            card.innerHTML=`
            <img class="w-5 sm:w-7 h-[90%] ml-2 rounded-sm" src="${sposter}" alt="">
                        <div class="cont ml-2 text-white leading-4 sm:leading-6 text-xs sm:text-base overflow-hidden">
                            <h3 class="whitespace-nowrap overflow-hidden text-ellipsis font-bold text-xs sm:text-base">${name}</h3>
                            <p class="whitespace-nowrap overflow-hidden text-ellipsis text-[8px] sm:text-sm text-[rgba(255,255,255,0.7)]">${genre}, ${date}, <span class="bg-yellow-300 text-black font-medium pl-[2px] pr-[2px] sm:pl-1 sm:pr-1 mr-[2px] ml-[4px] sm:mr-1 sm:ml-2">IMDB</span> <i class="bi bi-star-fill mr-1"></i>${imdb}</p>
                        </div>
            `

            search.appendChild(card);
        });

        search_input.addEventListener('keyup', ()=> {
            let filter=search_input.value.toUpperCase();
            let a=search.getElementsByTagName('a');

            for (let index = 0; index < a.length; index++) {
                let b=a[index].getElementsByClassName('cont')[0];
                let TextValue=b.TextValue || b.innerText;
                if (TextValue.toUpperCase().indexOf(filter) > -1) {
                    a[index].style.display="flex";
                    search.style.visibility="visible";
                    search.style.opacity="1";
                } else {
                    a[index].style.display="none";
                }
                if(search_input.value==0){
                    search.style.visibility="hidden";
                    search.style.opacity="none";
                }
            }
        })

        let series=document.getElementById('series');
        let movies=document.getElementById('movies');
        
        series.addEventListener('click', ()=> {
            cards.innerHTML=``;

            let series_array= data.filter(ele => {
                return ele.type==="series";
            })

            series_array.forEach((ele,i) => {
                let {name, about, imdb, date, sposter, bposter, genre, url}=ele;
                let card=document.createElement('a');
                card.classList.add('card2');
                card.href=url;
                card.innerHTML=`
                <img src="${sposter}" class="poster w-[100%] h-[100%] rounded-md relative" alt="${name}">
                        <div class="rest_card absolute w-[100%] h-[100%] rounded-md left-0 bottom-0 z-[9999] opacity-0 hover:opacity-100">
                            <img src="${bposter}" class="relative w-[100%] h-[100%] rounded-md z-[-1]" alt="">
                            <div class="cont absolute w-[100%] bottom-3 left-0 pl-5 pr-5">
                                <h4 class="font-semibold text-base sm:text-lg">${name}</h4>
                                <div class="sub sm:flex sm:items-center sm:justify-between">
                                    <p class="text-sm font-normal sm:text-base text-gray-400">${genre}, ${date}</p>
                                    <h3 class="text-sm font-normal sm:text-base"><span class="bg-yellow-300 text-black font-medium pl-[2px] pr-[2px] sm:pl-1 sm:pr-1 mr-[2px] sm:mr-1">IMDB</span> <i class="bi bi-star-fill mr-[2px]"></i>${imdb}</h3>
                                </div>
                            </div>
                        </div>
                `
                cards.appendChild(card);
            }); 
        })

        movies.addEventListener('click', ()=> {
            cards.innerHTML=``;

            let movies_array= data.filter(ele => {
                return ele.type==="movie";
            })

            movies_array.forEach((ele,i) => {
                let {name, about, imdb, date, sposter, bposter, genre, url}=ele;
                let card=document.createElement('a');
                card.classList.add('card2');
                card.href=url;
                card.innerHTML=`
                <img src="${sposter}" class="poster w-[100%] h-[100%] rounded-md relative" alt="${name}">
                        <div class="rest_card absolute w-[100%] h-[100%] rounded-md left-0 bottom-0 z-[9999] opacity-0 hover:opacity-100">
                            <img src="${bposter}" class="relative w-[100%] h-[100%] rounded-md z-[-1]" alt="">
                            <div class="cont absolute w-[100%] bottom-3 left-0 pl-5 pr-5">
                                <h4 class="font-semibold text-base sm:text-lg">${name}</h4>
                                <div class="sub sm:flex sm:items-center sm:justify-between">
                                    <p class="text-sm font-normal sm:text-base text-gray-400">${genre}, ${date}</p>
                                    <h3 class="text-sm font-normal sm:text-base"><span class="bg-yellow-300 text-black font-medium pl-[2px] pr-[2px] sm:pl-1 sm:pr-1 mr-[2px] sm:mr-1">IMDB</span> <i class="bi bi-star-fill mr-[2px]"></i>${imdb}</h3>
                                </div>
                            </div>
                        </div>
                `
                cards.appendChild(card);
            }); 
        })


    });