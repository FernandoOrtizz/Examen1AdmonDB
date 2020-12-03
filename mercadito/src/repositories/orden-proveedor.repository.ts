import {DefaultCrudRepository} from '@loopback/repository';
import {OrdenProveedor, OrdenProveedorRelations} from '../models';
import {MercaditoDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrdenProveedorRepository extends DefaultCrudRepository<
  OrdenProveedor,
  typeof OrdenProveedor.prototype.id,
  OrdenProveedorRelations
> {
  constructor(
    @inject('datasources.mercaditoDataSource') dataSource: MercaditoDataSourceDataSource,
  ) {
    super(OrdenProveedor, dataSource);
  }
}
