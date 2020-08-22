import { Agregado } from '../agregados/agregado'
import { Pedido } from '../pedidos/pedido'

export class LineaPedidoAgregado {
  id: number;
  agregado: Agregado;
  pedido: Pedido;
  cantidad: number;

}
