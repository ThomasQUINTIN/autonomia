const fetch = require("node-fetch");

fetch('https://ntfy.sh/Chocolatine-000', {
  method: 'POST', // PUT works too
  body: 'Backup successful 😀'
})