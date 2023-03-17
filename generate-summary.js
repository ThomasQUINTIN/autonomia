fetch('https://ntfy.sh/Chocolatine-000', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'test toto'
})
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error(error))
