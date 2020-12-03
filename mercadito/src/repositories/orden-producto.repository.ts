import {DefaultCrudRepository} from '@loopback/repository';
import {OrdenProducto, OrdenProductoRelations} from '../models';
import {MercaditoDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrdenProductoRepository extends DefaultCrudRepository<
  OrdenProducto,
  typeof OrdenProducto.prototype.id,
  OrdenProductoRelations
> {
  constructor(
    @inject('datasources.mercaditoDataSource') dataSource: MercaditoDataSourceDataSource,
  ) {
    super(OrdenProducto, dataSource);
  }
}
