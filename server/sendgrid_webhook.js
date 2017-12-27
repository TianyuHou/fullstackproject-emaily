var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'gaadsasdqweqwe' }, function(err, tunnel) {
  console.log('LT running');
});
