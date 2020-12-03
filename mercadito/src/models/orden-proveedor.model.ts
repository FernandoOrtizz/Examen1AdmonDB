import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'OrdenProveedor'}}
})
export class OrdenProveedor extends Entity {
  @property({
    type: 'number',
    required: false,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'idProveedor', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idProveedor: number;

  @property({
    type: 'date',
    required: true,
    mssql: {columnName: 'fechaOrden', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fechaOrden: string;

  @property({
    type: 'date',
    required: true,
    mssql: {columnName: 'fechaEntrega', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fechaEntrega: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'estado', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  estado: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<OrdenProveedor>) {
    super(data);
  }
}

export interface OrdenProveedorRelations {
  // describe navigational properties here
}

export type OrdenProveedorWithRelations = OrdenProveedor & OrdenProveedorRelations;
