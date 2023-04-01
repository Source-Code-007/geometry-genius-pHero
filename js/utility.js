// utility function
function getInpVal(e, inpClass) {
    return e.target.parentNode.querySelector(inpClass).value
}

function inpFieldResetAfterCalc(e, inpOne, inpTwo) {
    e.target.parentNode.querySelector(inpOne).value = ''
    e.target.parentNode.querySelector(inpTwo).value = ''
}

//create dynamic element
function createDynamicElem(calcOutput, counterForAreaBox, boxName, multiplication) {
    let div = document.createElement('div')
    div.className = 'flex justify-between items-center gap-2'
    div.innerHTML = `
    <span>${counterForAreaBox}.</span>
    <span>${boxName}</span>
    <span>${multiplication}cm<sup>2</sup></span>
    <button class="px-2 py-1 text-sm font-semibold rounded-lg bg-orange-400 hover:bg-orange-500 transition text-slate-50">convert to m<sup>2</sup> </button>
    <i class="fa-solid fa-trash-can area-calc-output-rmv cursor-pointer"></i>
    `
    calcOutput.appendChild(div)
}

// multiple three value
function multipleThreeVal(defVal, inpOne, inpTwo) {
    let multiple = (parseFloat(defVal) * parseFloat(inpOne) * parseFloat(inpTwo))
    if (Number.isInteger(multiple)) {
        return multiple
    } else {
        return multiple.toFixed(2)
    }
}
//multiple two value
function multipleTwoVal(inpOne, inpTwo) {
    let multiple = (parseFloat(inpOne) * parseFloat(inpTwo))
    if(Number.isInteger(multiple)){
        return multiple
    } else{
        return multiple.toFixed(2)
    }
}

// Dynamic toast/alert message
function toastMessage(msg) {
    let toastSound = new Audio('./assets/toast-sound.wav')
    toastSound.volume = 0.2
    toastSound.play()
    toastDiv = document.createElement('toastDiv')
    toastDiv.className = 'toast animation-in'
    toastDiv.innerText = msg
    document.body.appendChild(toastDiv)
    toastDiv.addEventListener('animationend', () => {
        toastDiv.classList.add('animation-out')
        toastDiv.addEventListener('animationend', (e) => {
            e.target.remove()
            e.target = null
        })
    })
}

// random color generator
function generateRandomColor() {
    let randomColor1 = Math.round(Math.random() * 250)
    let randomColor2 = Math.round(Math.random() * 250)
    let randomColor3 = Math.round(Math.random() * 250)
    return `rgb(${randomColor1},${randomColor2},${randomColor3})`
}

// change box bgc when mouse hover
function applyRandomColorOnBoxHover(btn) {
    btn.parentNode.addEventListener('mouseenter', (e) => {
        if (e.target.classList.contains('area-calc-box')) {
            let color = generateRandomColor()
            // e.target.dataset.color = color
            // e.target.style.backgroundColor = e.target.dataset.color
            e.target.style.backgroundColor = color
        }
    })
    btn.parentNode.addEventListener('mouseleave', (e) => {
        if (e.target.classList.contains('area-calc-box')) {
            e.target.style.backgroundColor = 'white'
            // e.target.dataset.color = ''
        }
    })
}