import {DefaultCrudRepository} from '@loopback/repository';
import {VPrecioDefinido, VPrecioDefinidoRelations} from '../models';
import {MercaditoDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VPrecioDefinidoRepository extends DefaultCrudRepository<
  VPrecioDefinido,
  typeof VPrecioDefinido.prototype.id,
  VPrecioDefinidoRelations
> {
  constructor(
    @inject('datasources.mercaditoDataSource') dataSource: MercaditoDataSourceDataSource,
  ) {
    super(VPrecioDefinido, dataSource);
  }
}
