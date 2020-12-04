import {DefaultCrudRepository} from '@loopback/repository';
import {Pedido, PedidoRelations} from '../models';
import {MercaditoDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PedidoRepository extends DefaultCrudRepository<
  Pedido,
  typeof Pedido.prototype.id,
  PedidoRelations
> {
  constructor(
    @inject('datasources.mercaditoDataSource') dataSource: MercaditoDataSourceDataSource,
  ) {
    super(Pedido, dataSource);
  }
}
