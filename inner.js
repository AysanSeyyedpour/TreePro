mainWordText.addEventListener('click', function() {
    box2.classList.toggle('active')
    box2.style.height = '170px'
    mainWordIcon.classList.toggle('rorate')
    mainWordLine.classList.toggle('active')
    for (let i = 0; i < 4; i++) {
        collapseArrow.item(i).classList.toggle('active')
        circle.item(i).classList.toggle('active')
        mainProvince.item(i).classList.toggle('active')
    }
    AzarbayjanSH.addEventListener('click', function() {
        AzarbayjanSHPointer.classList.toggle('rorate')
        box2.style.height = '210px'
        for (let j = 0; j < 2; j++) {
            littleboxAzSh.item(j).classList.toggle('active')
            secondPointer.item(j).classList.toggle('active')
            secondCircle.item(j).classList.toggle('active')
            secondInnerProvince.item(j).classList.toggle('active')
        }
        AzadShahr.addEventListener('click', function() {
            box2.style.height = '300px'
            AzadShahrIcon.classList.toggle('rorate')
            for (let i = 0; i < 3; i++) {
                innerProvinceBox1.classList.toggle('active')
                secondNumLines.item(i).classList.toggle('active')
                secondNumCircle.item(i).classList.toggle('active')
                secondNumInner.item(i).classList.toggle('active')
            }
        })
    })
    Esfahan.addEventListener('click', function(e) {
        box2.style.height = '570px';
        EsfahanIcon.classList.toggle('rorate')
        for (let k = 0; k < 6; k++) {
            littleboxEs.item(k).classList.toggle('active')
            thirdPointer.item(k).classList.toggle('active')
            thirdCircle.item(k).classList.toggle('active')
            thirdInnerProvince.item(k).classList.toggle('active')
        }
        AranBidgol.addEventListener('click', function() {
            AranBidgolIcon.classList.toggle('rorate')
            box2.style.height = '645px'
            for (let i = 0; i < 3; i++) {
                innerProvinceBox2.classList.toggle('active')
                thirdNumLines.item(i).classList.toggle('active')
                thirdNumCircle.item(i).classList.toggle('active')
                thirdNumInner.item(i).classList.toggle('active')
            }
        })
    })
})
