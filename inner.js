mainWordText.addEventListener('click', function() {
    box2.style.display = 'block'
    box2.style.height = '200px'
    mainWordIcon.classList.add('rorate')
    mainWordLine.style.display = 'block'
    for (let i = 0; i < 4; i++) {
        collapseArrow.item(i).style.display = 'block'
        circle.item(i).style.display = 'block'
        mainProvince.item(i).style.display = 'block'
    }
    AzarbayjanSH.addEventListener('click', function() {
        AzarbayjanSHPointer.classList.add('rorate')
        box2.style.height = '230px'
        for (let j = 0; j < 2; j++) {
            littleboxAzSh.item(j).style.display = 'block'
            secondPointer.item(j).style.display = 'block'
            secondCircle.item(j).style.display = 'block'
            secondInnerProvince.item(j).style.display = 'block'
        }
        AzadShahr.addEventListener('click', function() {
            box2.style.height = '300px'
            AzadShahrIcon.classList.add('rorate')
            for (let i = 0; i < 3; i++) {
                innerProvinceBox1.style.display = 'block'
                secondNumLines.item(i).style.display = 'block'
                secondNumCircle.item(i).style.display = 'block'
                secondNumInner.item(i).style.display = 'block'
            }
        })
    })
    Esfahan.addEventListener('click', function(e) {
        box2.style.height = '570px'
        for (let k = 0; k < 6; k++) {
            littleboxEs.item(k).style.display = 'block'
            thirdPointer.item(k).style.display = 'block'
            thirdCircle.item(k).style.display = 'block'
            thirdInnerProvince.item(k).style.display = 'block'
        }
        AranBidgol.addEventListener('click', function() {
            AranBidgolIcon.classList.add('rorate')
            box2.style.height = '645px'
            for (let i = 0; i < 3; i++) {
                innerProvinceBox2.style.display = 'block'
                thirdNumLines.item(i).style.display = 'block'
                thirdNumCircle.item(i).style.display = 'block'
                thirdNumInner.item(i).style.display = 'block'
            }
        })
    })
})