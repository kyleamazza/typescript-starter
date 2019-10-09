import convict from 'convict'; // @types/convict broken for '* as' imports.
import * as appRoot from 'app-root-path';

const conf = convict({
  env: {
    doc: 'The development environment and value that process.env.NODE_ENV will take',
    format: [ 'development', 'testing', 'qa', 'production' ],
    default: 'development'
  }
});

conf.loadFile(`${appRoot}/config/${conf.get('env')}.json`);

const config = conf.getProperties();

export { config };

