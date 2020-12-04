import {DefaultCrudRepository} from '@loopback/repository';
import {VTransaccionesProveedor, VTransaccionesProveedorRelations} from '../models';
import {MercaditoDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VTransaccionesProveedorRepository extends DefaultCrudRepository<
  VTransaccionesProveedor,
  typeof VTransaccionesProveedor.prototype.id,
  VTransaccionesProveedorRelations
> {
  constructor(
    @inject('datasources.mercaditoDataSource') dataSource: MercaditoDataSourceDataSource,
  ) {
    super(VTransaccionesProveedor, dataSource);
  }
}
