// for Dynamic toast/alert message, initial value set to null
let toastDiv = null

let counterForAreaBox = 0
let areaBoxBtn = document.querySelectorAll('.area-box-btn')
for (btn of areaBoxBtn) {
    // Random color changes when hovering over each box
    applyRandomColorOnBoxHover(btn)

    if (btn.classList.contains('multiple-three-val-btn')) {
        btn.addEventListener('click', (e) => {
            let areaCalcOutput = document.getElementById('area-calc-output')
            let inpOne = getInpVal(e, '.area-box-inp-one')
            let inpTwo = getInpVal(e, '.area-box-inp-two')
            // input field validation
            if (!(inpOne > 0) || !(inpTwo > 0)) {
                //toast/alert message validation
                if (toastDiv != null) {
                    toastDiv.remove()
                    toastDiv.null
                }
                toastMessage('invalid input field! ⚠')
                inpFieldResetAfterCalc(e, '.area-box-inp-one', '.area-box-inp-two')
            } else {
                counterForAreaBox++
                let defValMult = e.target.parentNode.querySelector('.default-val-mult').innerText
                let multiplication = multipleThreeVal(defValMult, inpOne, inpTwo)
                let boxName = e.target.parentNode.children[1].innerText
                createDynamicElem(areaCalcOutput, counterForAreaBox, boxName, multiplication)
                inpFieldResetAfterCalc(e, '.area-box-inp-one', '.area-box-inp-two')
            }
        })
    } else if (btn.classList.contains('multiple-two-val-btn')) {
        btn.addEventListener('click', (e) => {
            let inpOne = getInpVal(e, '.area-box-inp-one')
            let inpTwo = getInpVal(e, '.area-box-inp-two')
            // input field validation
            if (!(inpOne > 0) || !(inpTwo > 0)) {
                //toast/alert message validation
                if (toastDiv != null) {
                    toastDiv.remove()
                    toastDiv.null
                }
                toastMessage('invalid input field! ⚠')
                inpFieldResetAfterCalc(e, '.area-box-inp-one', '.area-box-inp-two')
            } else {
                counterForAreaBox++
                let multiplication = multipleTwoVal(inpOne, inpTwo)
                let boxName = e.target.parentNode.children[1].innerText
                let areaCalcOutput = document.getElementById('area-calc-output')
                createDynamicElem(areaCalcOutput, counterForAreaBox, boxName, multiplication)
                inpFieldResetAfterCalc(e, '.area-box-inp-one', '.area-box-inp-two')
            }
        })
    }
}

// dynamic element remove by delete button
document.getElementById('area-calc-output').addEventListener(('click'), (e)=>{
    if(e.target.classList.contains('area-calc-output-rmv')){
        e.target.parentNode.remove()
    }
})