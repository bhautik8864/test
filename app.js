const scriptURL = 'https://script.google.com/macros/s/AKfycbzZsR7glcsx2xd8L5mEtjK-k4pHr0sFK1BAcnqs0Rbkp0o9VgS027qSlN05A0obMiO2rw/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(setTimeout(form.reset(), 1000)) 
      .catch(err => alert('Error: '+err.message))
  })
