let youtube = document.querySelector(".youtube");
let key = "AIzaSyAvXtQ9OXbUTwyFysCAVztVXJzBoE8BwDY";
let playlistId = "PLPqLzl0nlhpSbTkzl0xjskOqU0gWrcIJj";
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=12`;

fetch(url)
.then((data) => {
    console.log(data);
    return data.json();
})
.then((json) => {
    console.log(json);
    let items = json.items;
    let result = '';
    
    items.map((el) => {

        let title = el.snippet.title;
        if(title.length > 40){
            title = title.substr(0, 40) + "...";
        }
        let des = el.snippet.description
        if(des.length > 100){
            des = des.substr(0, 100) + "...";
        };
        result += `
            <article>
                <a href="${el.snippet.resourceId.videoId}" class="pic">
                    <img src="${el.snippet.thumbnails.medium.url}">
                 </a>

                <div class="con">
                    <h2>${title}</h2>
                    <p>${des}</p>
                </div>
            </article>
            
        `;
        youtube.innerHTML = result;
    })
})
    youtube.addEventListener("click", (e) => {

        e.preventDefault();

        if (!e.target.closest("a")) return;
       
        const vidId = e.target.closest("article").querySelector("a").getAttribute("href");

     

        let pop = document.createElement("figure");
        pop.classList.add("pop");

        pop.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${vidId}" frameborder = "0" width="100%" height="100%" allowfullscreen></iframe>
            <span class="btnClose">close</span>
        `;
        youtube.append(pop);
    });
    

    youtube.addEventListener("click", (e) => {
        const pop = youtube.querySelector(".pop");
        if (pop) {
            const close = pop.querySelector
            ("span");
            if (e.target == close) pop.remove();
        }
    })