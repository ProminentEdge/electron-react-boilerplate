
export default function init() {
  setInterval(function(){
    // remove it from require's cache to force a reload from latest file
    // otherwise you have to restart app
    delete require.cache[require.resolve('./action-dynamic')];

    const msg = require('./action-dynamic');
    console.log('----> running spade service. msg: ', msg);
  }, 2000);
}
