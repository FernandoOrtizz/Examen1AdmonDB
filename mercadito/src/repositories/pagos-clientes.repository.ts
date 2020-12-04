import {DefaultCrudRepository} from '@loopback/repository';
import {PagosClientes, PagosClientesRelations} from '../models';
import {MercaditoDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PagosClientesRepository extends DefaultCrudRepository<
  PagosClientes,
  typeof PagosClientes.prototype.id,
  PagosClientesRelations
> {
  constructor(
    @inject('datasources.mercaditoDataSource') dataSource: MercaditoDataSourceDataSource,
  ) {
    super(PagosClientes, dataSource);
  }
}
