import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {OrdenProducto} from '../models';
import {OrdenProductoRepository} from '../repositories';

export class OrdenProductoControllerController {
  constructor(
    @repository(OrdenProductoRepository)
    public ordenProductoRepository : OrdenProductoRepository,
  ) {}

  @post('/orden-productos', {
    responses: {
      '200': {
        description: 'OrdenProducto model instance',
        content: {'application/json': {schema: getModelSchemaRef(OrdenProducto)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenProducto, {
            title: 'NewOrdenProducto',
            exclude: ['id'],
          }),
        },
      },
    })
    ordenProducto: Omit<OrdenProducto, 'id'>,
  ): Promise<OrdenProducto> {
    return this.ordenProductoRepository.create(ordenProducto);
  }

  @get('/orden-productos/count', {
    responses: {
      '200': {
        description: 'OrdenProducto model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(OrdenProducto) where?: Where<OrdenProducto>,
  ): Promise<Count> {
    return this.ordenProductoRepository.count(where);
  }

  @get('/orden-productos', {
    responses: {
      '200': {
        description: 'Array of OrdenProducto model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(OrdenProducto, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(OrdenProducto) filter?: Filter<OrdenProducto>,
  ): Promise<OrdenProducto[]> {
    return this.ordenProductoRepository.find(filter);
  }

  @patch('/orden-productos', {
    responses: {
      '200': {
        description: 'OrdenProducto PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenProducto, {partial: true}),
        },
      },
    })
    ordenProducto: OrdenProducto,
    @param.where(OrdenProducto) where?: Where<OrdenProducto>,
  ): Promise<Count> {
    return this.ordenProductoRepository.updateAll(ordenProducto, where);
  }

  @get('/orden-productos/{id}', {
    responses: {
      '200': {
        description: 'OrdenProducto model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(OrdenProducto, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(OrdenProducto, {exclude: 'where'}) filter?: FilterExcludingWhere<OrdenProducto>
  ): Promise<OrdenProducto> {
    return this.ordenProductoRepository.findById(id, filter);
  }

  @patch('/orden-productos/{id}', {
    responses: {
      '204': {
        description: 'OrdenProducto PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenProducto, {partial: true}),
        },
      },
    })
    ordenProducto: OrdenProducto,
  ): Promise<void> {
    await this.ordenProductoRepository.updateById(id, ordenProducto);
  }

  @put('/orden-productos/{id}', {
    responses: {
      '204': {
        description: 'OrdenProducto PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ordenProducto: OrdenProducto,
  ): Promise<void> {
    await this.ordenProductoRepository.replaceById(id, ordenProducto);
  }

  @del('/orden-productos/{id}', {
    responses: {
      '204': {
        description: 'OrdenProducto DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ordenProductoRepository.deleteById(id);
  }
}
