const http = require('http');
const data = require('./data.json');

module.exports = function submit() {
  // Submits the user data for validation

  const options = {
  hostname: 'http://172.21.86.186',
  port: 5000,
  path: '/submit',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  }
}

 data.submit_confirmation = false;
  
  
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    console.log(d)
  })
})

  req.on('error', error => {
    console.error(error)
  })

  req.write(data)
  req.end();
};
