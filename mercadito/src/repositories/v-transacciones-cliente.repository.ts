import {DefaultCrudRepository} from '@loopback/repository';
import {VTransaccionesCliente, VTransaccionesClienteRelations} from '../models';
import {MercaditoDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VTransaccionesClienteRepository extends DefaultCrudRepository<
  VTransaccionesCliente,
  typeof VTransaccionesCliente.prototype.id,
  VTransaccionesClienteRelations
> {
  constructor(
    @inject('datasources.mercaditoDataSource') dataSource: MercaditoDataSourceDataSource,
  ) {
    super(VTransaccionesCliente, dataSource);
  }
}
