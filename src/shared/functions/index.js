import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

//FUNCAO PARA RETORNAR UM A LISTA DE  5 NUMEROS NAO REPETIDOS

export function Random_list(max, quant) {
  var random_list = [];
  while (random_list.length < quant) {
    let e = Math.ceil(Math.random() * max);
    if (random_list.indexOf(e) == -1) {
      random_list.push(e);
    }
  }
  return random_list;
}
// console.log(sorteado(100, 5));
