let rated = 0
let spans = document.getElementsByClassName('rate-me')
let submitBTN = document.querySelector(".btn")
let previousSelectedElement = undefined
spans = [...spans]


// adding click event to every rated icons 
spans.forEach(item => {
    item.addEventListener('click', (e) => {
        rated = parseInt(item.innerHTML)
        if (!previousSelectedElement) {
            previousSelectedElement = item
            item.classList.add('currentSelected')
        } else {
            previousSelectedElement.classList.remove('currentSelected')
            previousSelectedElement = item
            item.classList.add('currentSelected')
        }
    })
})

// when user clicks on submit button 
submitBTN.addEventListener('click', (e) => {
    if (rated === 0){
        alert('do give a rating 😊')
        return
    }
    document.querySelector('#front-card').classList.add('hide-card')
    document.querySelector('#back-card').classList.add('show-card')
    let target = document.querySelector('.dynamic-data')
    target.textContent = `You selected ${rated} out of 5`
})
