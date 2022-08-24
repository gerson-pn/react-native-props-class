import React, { Component } from 'react';
import Cartao from './Cartao';

export default class App extends Component {
  urls = [
    'https://fatecsjc-prd.azurewebsites.net/images/team/docentes/reinaldo_gen_ichiro_arakaki.jpg',
    'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4164443U3',
    'https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4767313D7',
    'https://fatecsjc-prd.azurewebsites.net/images/team/docentes/gerson_da_penha_neto.jpg'
  ]
  render() {
    return (
      <>
        <Cartao url={this.urls[0]} nome='Reinaldo Arakake' disciplina='Matemática para Computação' />
        <Cartao url={this.urls[1]} nome='Cláudio Lima' disciplina='Engenharia de Software' />
        <Cartao url={this.urls[2]} nome='Fernando Masanori' disciplina='Algoritmos' />
        <Cartao url={this.urls[3]} nome='Gerson Penha' disciplina='Programação Orientada à Objetos' />
      </>
    )
  }
}

