const appImgs = document.querySelector('.app__imgs')
const appPagin = document.querySelector('.app__pagination')
const imgs = ['./imgs/1.jpg', './imgs/2.jpg', './imgs/3.jpg', './imgs/4.jpg'] 

//logic
imgs.map((item)=> {
  const img = document.createElement('img')
  img.src = item
  const button = document.createElement('button')
  button.addEventListener('click', () => {
      appImgs.innerHTML = ''
      const buttons = document.querySelectorAll('button')
      console.log(buttons)
      for(let i = 0; i < buttons.length; i++){
        buttons[i].className = ''
      }
      button.className = 'active'
      return appImgs.append(img)    
  })
  return appPagin.append(button)
})

//first img
const img = document.createElement('img')
img.src = imgs[0]
appImgs.append(img)  

//first btn
const buttons = document.querySelectorAll('button')
buttons[0].className = 'active'

