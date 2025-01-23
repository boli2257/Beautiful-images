let page = 1
const queryUrl=`https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=`
let queryString
function handleClick(e){
    e.preventDefault()
    console.log('ok');
    queryString=document.getElementById('queryString').value
    console.log(queryString);
    const url=queryUrl+ queryString + `&page=${page}`
    getData(url,renderData)    
}

function renderData(data){
    console.log(data.results);
    document.querySelector('.cards').innerHTML=''
    data.results.forEach(obj=>
        document.querySelector('.cards').innerHTML+=`
        

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src=${obj.urls['small']} alt=${obj.id} />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">${obj.alt_description}</h5>
        </a>
       
        <button popovertarget="mypopover-${obj.id}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            More details
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
        <div id="mypopover-${obj.id}" class="popover_container". popover>
            <h3>likes:${obj.likes}</h3>
            <img class="popover_img" src="${obj.urls.full}" alt="">
            <p>${obj.description ? obj.description : obj.alt_description } </p>
        </div>

    </div>
</div>`
    )
}
function SetPage(op){
    //console.log(op);
    if(op == "-"){
        if(page == 0) return
         page--
    }
    else page++
    const url=queryUrl+ queryString + `&page=${page}`
    console.log(page, queryString);
    getData(url,renderData)
    
}