function attachGradientEvents() {
    const gradientBox = document.getElementById('gradient')
    const resultElement = document.getElementById('result')

    gradientBox.addEventListener('mousemove', mouseMoveHandler)

    function mouseMoveHandler(e) {
        const cursoreDistanceFromLeft = e.offsetX
        const gradientBoxWidth = e.target.clientWidth

        const percent = Math.floor(cursoreDistanceFromLeft / gradientBoxWidth * 100)

        resultElement.textContent = `${percent}%`
    }

    
}
