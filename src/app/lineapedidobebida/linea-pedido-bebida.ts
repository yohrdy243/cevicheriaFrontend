import { Bebida } from '../bebidas/bebida'
import { Pedido } from '../pedidos/pedido'
export class LineaPedidoBebida {
  id: number;
  bebida: Bebida;
  pedido: Pedido;
  cantidad: number;
  comentario: string;

}
