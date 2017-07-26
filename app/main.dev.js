import cargs from 'commander';
import path from 'path';
import initUi from './spade-ui';
import initService from './spade-service';


cargs
  .version('0.1.0')
  .option('-s, --service', 'Run as a service')
  .option('-u, --ui', 'Run with user interface')
  .parse(process.argv);

console.log('----[ argv: ', cargs);

if (cargs.service) {
  console.log('----[ spade: running as Service');
  initService();
} else {
  console.log('----[ spade: running as UI');
  initUi();
}
