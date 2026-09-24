const https = require('https');

const fetchIcon = (name) => {
  https.get(`https://cdn.simpleicons.org/${name}`, (resp) => {
    let data = '';
    resp.on('data', chunk => data += chunk);
    resp.on('end', () => console.log(`${name}: ${data}`));
  }).on('error', err => console.log(err));
};

['amazonaws', 'vercel', 'netlify', 'whatsapp', 'android', 'github'].forEach(fetchIcon);
