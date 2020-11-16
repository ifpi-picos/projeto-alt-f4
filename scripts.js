const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.cards')

for (let card of cards) {
    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`

        modalOverlay.querySelector(`#${videoId}`).classList.add('active2');

    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
    modalOverlay.querySelector('.game-content').classList.remove('active2')
});