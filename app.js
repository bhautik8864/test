const scriptURL = 'https://script.google.com/macros/s/AKfycbz-q1E2h6xX6JAp2d_PyIQ5qK068eGOHbatJewUdukGRVKbKS9OTYio3IVN1XYA30Jjtw/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(setTimeout(form.reset(), 1000)) 
      .catch(err => alert('Error: '+err.message))
  })
