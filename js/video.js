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

// display Show Categories 
const displayCategories = (categories) => {
    const categoriesContainer = document.querySelector('#categories-container');
    categories.forEach(item => {
        const categoriesBtn = document.createElement('button')
        categoriesBtn.className = 'btn bg-primary-color text-white font-bold text-base'
        categoriesBtn.innerText = item.category

        categoriesContainer.append(categoriesBtn)
    })
}

// display Show Categories 
const displayVideos = (videos) => {
    const videosContainer = document.querySelector('#videos');
    videos.forEach(video => {
        console.log(video);
        const card = document.createElement('div')
        card.className = 'card card-compact'
        card.innerHTML = `
            <figure class='h-[250px]'>
                <img class="h-full w-full object-cover" src=${video.thumbnail} />
            </figure>

            <div class="py-2 flex gap-3">
                <div class="py-3">
                    <img class="h-[40px] w-[40px] object-cover rounded-full" src=${video.authors[0].profile_picture} />
                </div>
                <div class="py-2">
                    <h2 class="font-bold text-lg">${video.title}</h2>
                    <div class="py-1 flex gap-1 items-center">
                        <p class="text-gray-500 text-base">${video.authors[0].profile_name}</p>
                         ${video.authors[0].verified === true ? `<img class="h-[20px] w-[20px] object-cover rounded-full" src="https://img.icons8.com/?size=48&id=p9jKUHLk5ejE&format=png" />`: ''}
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