let y=document.getElementsByClassName("left")[0],v=document.getElementsByClassName("right")[0],c=document.getElementsByClassName("cards")[0],b=document.getElementsByClassName("search")[0],u=document.getElementById("search_input");y.addEventListener("click",()=>{c.scrollLeft-=290});v.addEventListener("click",()=>{c.scrollLeft+=290});let g="movie.json";fetch(g).then(t=>t.json()).then(t=>{t.forEach((i,e)=>{let{name:s,about:l,imdb:p,date:n,sposter:d,bposter:o,genre:a,url:x}=i,m=document.createElement("a");m.classList.add("card2"),m.href=x,m.innerHTML=`
            <img src="${d}" class="poster w-[100%] h-[100%] rounded-md relative" alt="${s}">
                    <div class="rest_card absolute w-[100%] h-[100%] rounded-md left-0 bottom-0 z-[9999] opacity-0 hover:opacity-100">
                        <img src="${o}" class="relative w-[100%] h-[100%] rounded-md z-[-1]" alt="">
                        <div class="cont absolute w-[100%] bottom-3 left-0 pl-5 pr-5">
                            <h4 class="font-semibold text-base sm:text-lg">${s}</h4>
                            <div class="sub sm:flex sm:items-center sm:justify-between">
                                <p class="text-sm font-normal sm:text-base text-gray-400">${a}, ${n}</p>
                                <h3 class="text-sm font-normal sm:text-base"><span class="bg-yellow-300 text-black font-medium pl-[2px] pr-[2px] sm:pl-1 sm:pr-1 mr-[2px] sm:mr-1">IMDB</span> <i class="bi bi-star-fill mr-[2px]"></i>${p}</h3>
                            </div>
                        </div>
                    </div>
            `,c.appendChild(m)}),document.getElementById("title").innerText=t[0].name,document.getElementById("ab").innerText=t[0].about,document.getElementById("gen").innerText=t[0].genre,document.getElementById("date").innerText=t[0].date,document.getElementById("rate").innerHTML=`<span class="bg-yellow-300 text-black font-medium pl-[2px] pr-[2px] sm:pl-1 sm:pr-1 mr-[2px] sm:mr-1">IMDB</span> <i class="bi bi-star-fill mr-[2px]"></i>${t[0].imdb}</h3>`,t.forEach(i=>{let{name:e,about:s,imdb:l,date:p,sposter:n,genre:d,url:o}=i,a=document.createElement("a");a.classList.add("card1"),a.href=o,a.style,a.innerHTML=`
            <img class="w-5 sm:w-7 h-[90%] ml-2 rounded-sm" src="${n}" alt="">
                        <div class="cont ml-2 text-white leading-4 sm:leading-6 text-xs sm:text-base overflow-hidden">
                            <h3 class="whitespace-nowrap overflow-hidden text-ellipsis font-bold text-xs sm:text-base">${e}</h3>
                            <p class="whitespace-nowrap overflow-hidden text-ellipsis text-[8px] sm:text-sm text-[rgba(255,255,255,0.7)]">${d}, ${p}, <span class="bg-yellow-300 text-black font-medium pl-[2px] pr-[2px] sm:pl-1 sm:pr-1 mr-[2px] ml-[4px] sm:mr-1 sm:ml-2">IMDB</span> <i class="bi bi-star-fill mr-1"></i>${l}</p>
                        </div>
            `,b.appendChild(a)}),u.addEventListener("keyup",()=>{let i=u.value.toUpperCase(),e=b.getElementsByTagName("a");for(let s=0;s<e.length;s++){let l=e[s].getElementsByClassName("cont")[0];(l.TextValue||l.innerText).toUpperCase().indexOf(i)>-1?(e[s].style.display="flex",b.style.visibility="visible",b.style.opacity="1"):e[s].style.display="none",u.value==0&&(b.style.visibility="hidden",b.style.opacity="none")}});let h=document.getElementById("series"),f=document.getElementById("movies");h.addEventListener("click",()=>{c.innerHTML="",t.filter(e=>e.type==="series").forEach((e,s)=>{let{name:l,about:p,imdb:n,date:d,sposter:o,bposter:a,genre:x,url:m}=e,r=document.createElement("a");r.classList.add("card2"),r.href=m,r.innerHTML=`
                <img src="${o}" class="poster w-[100%] h-[100%] rounded-md relative" alt="${l}">
                        <div class="rest_card absolute w-[100%] h-[100%] rounded-md left-0 bottom-0 z-[9999] opacity-0 hover:opacity-100">
                            <img src="${a}" class="relative w-[100%] h-[100%] rounded-md z-[-1]" alt="">
                            <div class="cont absolute w-[100%] bottom-3 left-0 pl-5 pr-5">
                                <h4 class="font-semibold text-base sm:text-lg">${l}</h4>
                                <div class="sub sm:flex sm:items-center sm:justify-between">
                                    <p class="text-sm font-normal sm:text-base text-gray-400">${x}, ${d}</p>
                                    <h3 class="text-sm font-normal sm:text-base"><span class="bg-yellow-300 text-black font-medium pl-[2px] pr-[2px] sm:pl-1 sm:pr-1 mr-[2px] sm:mr-1">IMDB</span> <i class="bi bi-star-fill mr-[2px]"></i>${n}</h3>
                                </div>
                            </div>
                        </div>
                `,c.appendChild(r)})}),f.addEventListener("click",()=>{c.innerHTML="",t.filter(e=>e.type==="movie").forEach((e,s)=>{let{name:l,about:p,imdb:n,date:d,sposter:o,bposter:a,genre:x,url:m}=e,r=document.createElement("a");r.classList.add("card2"),r.href=m,r.innerHTML=`
                <img src="${o}" class="poster w-[100%] h-[100%] rounded-md relative" alt="${l}">
                        <div class="rest_card absolute w-[100%] h-[100%] rounded-md left-0 bottom-0 z-[9999] opacity-0 hover:opacity-100">
                            <img src="${a}" class="relative w-[100%] h-[100%] rounded-md z-[-1]" alt="">
                            <div class="cont absolute w-[100%] bottom-3 left-0 pl-5 pr-5">
                                <h4 class="font-semibold text-base sm:text-lg">${l}</h4>
                                <div class="sub sm:flex sm:items-center sm:justify-between">
                                    <p class="text-sm font-normal sm:text-base text-gray-400">${x}, ${d}</p>
                                    <h3 class="text-sm font-normal sm:text-base"><span class="bg-yellow-300 text-black font-medium pl-[2px] pr-[2px] sm:pl-1 sm:pr-1 mr-[2px] sm:mr-1">IMDB</span> <i class="bi bi-star-fill mr-[2px]"></i>${n}</h3>
                                </div>
                            </div>
                        </div>
                `,c.appendChild(r)})})});
