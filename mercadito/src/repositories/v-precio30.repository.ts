import {DefaultCrudRepository} from '@loopback/repository';
import {VPrecio30, VPrecio30Relations} from '../models';
import {MercaditoDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VPrecio30Repository extends DefaultCrudRepository<
  VPrecio30,
  typeof VPrecio30.prototype.id,
  VPrecio30Relations
> {
  constructor(
    @inject('datasources.mercaditoDataSource') dataSource: MercaditoDataSourceDataSource,
  ) {
    super(VPrecio30, dataSource);
  }
}
