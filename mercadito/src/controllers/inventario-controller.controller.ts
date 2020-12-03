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
import {Inventario} from '../models';
import {InventarioRepository} from '../repositories';

export class InventarioControllerController {
  constructor(
    @repository(InventarioRepository)
    public InventarioRepository : InventarioRepository,
  ) {}

  @post('/inventarios', {
    responses: {
      '200': {
        description: 'Inventario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Inventario)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inventario, {
            title: 'NewInventario',
            exclude: ['id'],
          }),
        },
      },
    })
    inventario: Omit<Inventario, 'id'>,
  ): Promise<Inventario> {
    return this.InventarioRepository.create(inventario);
  }

  @get('/inventarios/count', {
    responses: {
      '200': {
        description: 'Inventario model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Inventario) where?: Where<Inventario>,
  ): Promise<Count> {
    return this.InventarioRepository.count(where);
  }

  @get('/inventarios', {
    responses: {
      '200': {
        description: 'Array of Inventario model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Inventario, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Inventario) filter?: Filter<Inventario>,
  ): Promise<Inventario[]> {
    return this.InventarioRepository.find(filter);
  }

  @patch('/inventarios', {
    responses: {
      '200': {
        description: 'Inventario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inventario, {partial: true}),
        },
      },
    })
    inventario: Inventario,
    @param.where(Inventario) where?: Where<Inventario>,
  ): Promise<Count> {
    return this.InventarioRepository.updateAll(inventario, where);
  }

  @get('/inventarios/{id}', {
    responses: {
      '200': {
        description: 'Inventario model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Inventario, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Inventario, {exclude: 'where'}) filter?: FilterExcludingWhere<Inventario>
  ): Promise<Inventario> {
    return this.InventarioRepository.findById(id, filter);
  }

  @patch('/inventarios/{id}', {
    responses: {
      '204': {
        description: 'Inventario PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inventario, {partial: true}),
        },
      },
    })
    inventario: Inventario,
  ): Promise<void> {
    await this.InventarioRepository.updateById(id, inventario);
  }

  @put('/inventarios/{id}', {
    responses: {
      '204': {
        description: 'Inventario PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() inventario: Inventario,
  ): Promise<void> {
    await this.InventarioRepository.replaceById(id, inventario);
  }

  @del('/inventarios/{id}', {
    responses: {
      '204': {
        description: 'Inventario DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.InventarioRepository.deleteById(id);
  }
}
