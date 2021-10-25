import anime from 'animejs'

const deleteAnimation = (expression, obj) => function (event) {
  const buttonAnime = event.target
  anime({
    targets: buttonAnime,
    opacity: {
      duration: 400,
      opacity: 0,
    },
  })
  buttonAnime.innerText = 'LOAD...'
  setTimeout(() => {
    expression(obj)
  }, 400)
}

export default deleteAnimation
