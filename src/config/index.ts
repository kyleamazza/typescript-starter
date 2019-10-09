import convict from 'convict'; // @types/convict broken for '* as' imports.
import * as appRoot from 'app-root-path';

require('dotenv').config({
  path: `${appRoot}/envs/.env.${process.env.NODE_ENV || 'development'}`
});

const conf = convict({
  env: {
    doc:
      'The development environment and value that process.env.NODE_ENV will take',
    format: ['development', 'testing', 'qa', 'production'],
    default: 'development'
  }
});

conf.validate({ allowed: 'strict' });

const config = conf.getProperties();

export { config };
