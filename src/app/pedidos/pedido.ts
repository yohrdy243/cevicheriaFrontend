import {Mesa} from '../mesas/mesa'
import { LineaPedidoAgregado } from '../lineapedidoagregado/linea-pedido-agregado'
import { LineaPedidoBebida } from '../lineapedidobebida/linea-pedido-bebida'
import { LineaPedidoPlato } from '../lineapedidoplato/linea-pedido-plato'

export class Pedido {

  idPedido: number;
  nombreRazon: string;
  creadoEl: Date;
  mesa: Mesa;

  platos: LineaPedidoPlato[];
  bebidas: LineaPedidoBebida[];
  agregados: LineaPedidoAgregado[];

}
