import {DefaultCrudRepository} from '@loopback/repository';
import {LibroDiario, LibroDiarioRelations} from '../models';
import {MercaditoDataSourceDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LibroDiarioRepository extends DefaultCrudRepository<
  LibroDiario,
  typeof LibroDiario.prototype.id,
  LibroDiarioRelations
> {
  constructor(
    @inject('datasources.mercaditoDataSource') dataSource: MercaditoDataSourceDataSource,
  ) {
    super(LibroDiario, dataSource);
  }
}
