import React, { Component } from 'react';
import Cartao from './Cartao';

export default class App extends Component {
  urls = [
    'https://sjc.fatec.sp.gov.br/static/media/reinaldo_gen_ichiro_arakaki.dc8cbdc8.jpg',
    'https://sjc.fatec.sp.gov.br/static/media/claudio_etelvino.a45b8a36.png',
    'https://sjc.fatec.sp.gov.br/static/media/fernando_masanori.a8ab3abc.png',
    'https://sjc.fatec.sp.gov.br/static/media/eduardo_sakaue.356eb2a7.jpg'
  ]
  render() {
    return (
      <>
        <Cartao url={this.urls[0]} nome='Reinaldo Arakaki' disciplina='Matematica para Computacao' />
        <Cartao url={this.urls[1]} nome='Claudio Lima' disciplina='Engenharia de Software' />
        <Cartao url={this.urls[2]} nome='Fernando Masanori' disciplina='Algoritmos' />
        <Cartao url={this.urls[3]} nome='Eduardo Sakaue' disciplina='Gestao Agil de Projetos' />
      </>
    )
  }
}


