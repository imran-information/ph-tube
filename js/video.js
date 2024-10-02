// categories Data load 
const categoriesData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    const data = await res.json();
    displayCategories(data.categories)




}

// display Show Categories 
const displayCategories = (categories) => {
    console.log(categories);
    const categoriesContainer = document.querySelector('#categories-container');
    categories.forEach(item => {
        const categoriesBtn = document.createElement('button')
        categoriesBtn.className = 'btn bg-primary-color text-white font-bold text-base'
        categoriesBtn.innerText = item.category

        categoriesContainer.append(categoriesBtn)
    })


}


categoriesData()