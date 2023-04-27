const cron =  require("node-cron")
const { syncFunction } = require('./tasks/syncFunction')


console.log(`starting process...`);



cron.schedule('1-59/5 * * * * *', syncFunction )