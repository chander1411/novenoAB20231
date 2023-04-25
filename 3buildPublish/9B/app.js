const cron = require('node-cron');
const { syncDB } = require('./task/sync-db')


console.log(`starting...`);

let times=0;

cron.schedule('1-59/5 * * * * *',syncDB);