import {DefaultCrudRepository} from '@loopback/repository';
import {VProductosCategoria, VProductosCategoriaRelations} from '../models';
import {MercaditoDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VProductosCategoriaRepository extends DefaultCrudRepository<
  VProductosCategoria,
  typeof VProductosCategoria.prototype.id,
  VProductosCategoriaRelations
> {
  constructor(
    @inject('datasources.mercaditoDataSource') dataSource: MercaditoDataSourceDataSource,
  ) {
    super(VProductosCategoria, dataSource);
  }
}
