const scriptURL = 'https://script.google.com/macros/s/AKfycbxZqVvUJNTvf5a8gio1Xh_WGM8Kn2tNThXvJ2CcxS8wXCfWoj04y0MDaJCZ9KAcwJA8jQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(setTimeout(form.reset(), 1000)) 
      .catch(err => alert('Error: '+err.message))
  })
