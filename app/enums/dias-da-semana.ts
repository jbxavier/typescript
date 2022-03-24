/*
    ENUM é readonly por default, não pode ser alterado em outra parte do código.
    Fazendo dessa maneira ele pode ser utilizado em qualquer parte do sistema 
    chamando o import. 
    "OBS.: FIXAR OS VALORES PARA GARANTIR, não deixar no automático"
*/

export enum DiasDaSemana {
    DOMINGO = 0, 
    SEGUNDA = 1,
    TERCA = 2,
    QUARTA = 3,
    QUINTA = 4,
    SEXTA = 5,
    SABADO = 6
}