import {DefaultCrudRepository} from '@loopback/repository';
import {VPagosClientes, VPagosClientesRelations} from '../models';
import {MercaditoDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VPagosClientesRepository extends DefaultCrudRepository<
  VPagosClientes,
  typeof VPagosClientes.prototype.id,
  VPagosClientesRelations
> {
  constructor(
    @inject('datasources.mercaditoDataSource') dataSource: MercaditoDataSourceDataSource,
  ) {
    super(VPagosClientes, dataSource);
  }
}
