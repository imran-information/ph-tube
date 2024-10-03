// time Converts
const setTimeConvert = (time) => {
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} Hours ${minute} minute ${remainingSecond} second ago`
}


// remove Active Class
const removeActiveClass = () => {
    const buttons = document.getElementsByClassName('btn')
    for (const btn of buttons) {
        btn.classList.remove('active')
    }

}


// categories Data load 
const categoriesData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    const data = await res.json();
    displayCategories(data.categories)
}

// videos Data load 
const videosData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    const data = await res.json()
    displayVideos(data.videos)
}

// btn Categories id
const videosCategoriesData = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    const data = await res.json()

    removeActiveClass()
    const activeBtn = document.getElementById(`btn-${id}`)
    activeBtn.classList.add('active')

    displayVideos(data.category);
}





// display Show Categories 
const displayCategories = (categories) => {
    const categoriesContainer = document.querySelector('#categories-container');
    categories.forEach(item => {
        const categoriesBtnContainer = document.createElement('div')
        categoriesBtnContainer.innerHTML = `
         <button id="btn-${item.category_id}" onclick="videosCategoriesData(${item.category_id})" class="btn">
         ${item.category}
         </button>
        `
        categoriesContainer.append(categoriesBtnContainer)
    })
}

// display Show Categories 
const displayVideos = (videos) => {
    const videosContainer = document.querySelector('#videos');
    videosContainer.innerHTML = '';

    if (videos.length === 0) {
        videosContainer.classList.remove('grid')
        videosContainer.innerHTML = `
            <div class="min-h-[250px] flex items-center justify-center gap-4 mt-[100px]">
                <img src="asset/Icon.png" />
                
            </div>
            <h2 class="text-4xl font-bold text-center">
                Oops!! Sorry, There is no <br> content here
            </h2>
        `
    } else {
        videosContainer.classList.add('grid')
    }

    videos.forEach(video => {
        console.log(video);
        const card = document.createElement('div')
        card.className = 'card card-compact'
        card.innerHTML = `
            <figure class='h-[250px] relative'>
                <img class="h-full w-full object-cover" src=${video.thumbnail} />
                ${video.others.posted_date?.length == 0 ? '' : `<span class="absolute right-2 bottom-2 text-white text-sm bg-slate-400 px-2 rounded">
                     ${setTimeConvert(video.others.posted_date)}
                </span>`}
            </figure>

            <div class="py-2 flex gap-3">
                <div class="py-3">
                    <img class="h-[40px] w-[40px] object-cover rounded-full" src=${video.authors[0].profile_picture} />
                </div>
                <div class="py-2">
                    <h2 class="font-bold text-lg">${video.title}</h2>
                    <div class="py-1 flex gap-1 items-center">
                        <p class="text-gray-500 text-base">${video.authors[0].profile_name}</p>
                         ${video.authors[0].verified === true ? `<img class="h-[20px] w-[20px] object-cover rounded-full" src="https://img.icons8.com/?size=48&id=p9jKUHLk5ejE&format=png" />` : ''}
                    </div>
                    <p class="text-gray-500 text-base">${video.others.views} views</p>
                </div>
            </div>
        `
        videosContainer.append(card)
    })
}


categoriesData()
videosData()