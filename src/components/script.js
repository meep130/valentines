const messages = [
  'Are you sure?',
  'Really sure??',
  'Are you positive?',
  'Pookie please...',
  'Just think about it!',
  'If you say no, I will be really sad...',
  'I will be very sad...',
  'I will be very very very sad...',
  'Ok fine, I will stop asking...',
  'Just kidding, say yes please! ❤️',
]

let messageIndex = 0

function handleNoClick() {
  const noButton = document.querySelector('.no-button')
  const yesButton = document.querySelector('.yes-button')

  // Update the text content of the "no" button
  noButton.textContent = 'No'

  // Increase the font size of the "yes" button
  //   const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize)
  //   yesButton.style.fontSize = `${currentSize * 1.5}px`

  // Move the "no" button to a random position
  const randomTop = Math.floor(Math.random() * window.innerHeight) + 'px'
  const randomLeft = Math.floor(Math.random() * window.innerWidth) + 'px'
  noButton.style.top = randomTop
  noButton.style.left = randomLeft
}

function handleYesClick() {
  window.location.href = './yes_page.html'
}

// function playVideo() {
//   const iframe = document.getElementById('background-video')
//   const playMessage = document.querySelector('.play-message')
//   playMessage.style.display = 'none' // Hide the play message
//   iframe.src += '&autoplay=1' // Enable autoplay
// }

// function unmuteVideo() {
//   const iframe = document.getElementById('background-video')
//   const unmuteMessage = document.querySelector('.unmute-message')
//   unmuteMessage.style.display = 'none' // Hide the unmute message
//   const newSrc = iframe.src.replace('&mute=1', '') // Remove mute parameter
//   iframe.src = newSrc
// }
