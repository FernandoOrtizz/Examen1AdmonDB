import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mercaditoDataSource',
  connector: 'mssql',
  url: 'mssql://Fernando:123456@DESKTOP-F1Q5C8L/MercaditoDB',
  host: 'DESKTOP-F1Q5C8L',
  port: 1433,
  user: 'Fernando',
  password: '123456',
  database: 'MercaditoDB'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MercaditoDataSourceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mercaditoDataSource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mercaditoDataSource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
