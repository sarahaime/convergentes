var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


const AmiClient = require('asterisk-ami-client');
let client = new AmiClient();
/*
client.connect('5001', 'sarahaime123', {host: '192.168.0.19', port: 0})
    .then(amiConnection => {

        client
            .on('connect', () => console.log('connect'))
            .on('event', event => console.log(event))
            .on('data', chunk => console.log(chunk))
            .on('response', response => console.log(response))
            .on('disconnect', () => console.log('disconnect'))
            .on('reconnection', () => console.log('reconnection'))
            .on('internalError', error => console.log(error))
            .action({
                Action: 'Ping'
            });

        setTimeout(() => {
            client.disconnect();
        }, 5000);

    })
    .catch(error => console.log(error));

*/


module.exports = router;
