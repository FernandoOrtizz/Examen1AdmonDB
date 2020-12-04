import {DefaultCrudRepository} from '@loopback/repository';
import {DetallePedido, DetallePedidoRelations} from '../models';
import {MercaditoDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DetallePedidoRepository extends DefaultCrudRepository<
  DetallePedido,
  typeof DetallePedido.prototype.id,
  DetallePedidoRelations
> {
  constructor(
    @inject('datasources.mercaditoDataSource') dataSource: MercaditoDataSourceDataSource,
  ) {
    super(DetallePedido, dataSource);
  }
}
