import {DefaultCrudRepository} from '@loopback/repository';
import {VCuentaPersonal, VCuentaPersonalRelations} from '../models';
import {MercaditoDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VCuentaPersonalRepository extends DefaultCrudRepository<
  VCuentaPersonal,
  typeof VCuentaPersonal.prototype.id,
  VCuentaPersonalRelations
> {
  constructor(
    @inject('datasources.mercaditoDataSource') dataSource: MercaditoDataSourceDataSource,
  ) {
    super(VCuentaPersonal, dataSource);
  }
}
