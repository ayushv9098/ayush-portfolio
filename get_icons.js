const si = require('simple-icons');

const icons = ['framer', 'amazonaws', 'vercel', 'netlify', 'whatsapp', 'android'];

icons.forEach(name => {
  const icon = si.get(name) || si.Get(name) || Object.values(si).find(i => i.slug === name);
  if (icon) {
    console.log(`"${name}": <svg viewBox="0 0 24 24" className="w-full h-full"><path fill="#${icon.hex}" d="${icon.path}"/></svg>`);
  } else {
    console.log(`Not found: ${name}`);
  }
});
