import { Pedido } from '../pedidos/pedido'
import { Plato } from '../platos/plato'
export class LineaPedidoPlato {
    id: number;
    pedido: Pedido;
    plato: Plato;
    cantidad: number;
    comentario: string;
}
