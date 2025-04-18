import React from 'react';

import Imagem1 from './../img/Imagem 1.jpg'
import Imagem2 from './../img/Imagem 2.jpg'
import Imagem3 from './../img/Imagem 3.jpg'

function Declaration() {
    return (
        <>
        
        <h1 className='font-Baby font-[700] text-white text-[2rem]'>Feliz Páscoa Marcia!</h1>
        
        <p className='w-[80%] font-Baby h-auto text-center text-[1rem] text-white'>Oii, Você esta bem?</p>
        <p className='font-Baby w-[80%] h-auto text-center text-[1rem] text-white'>Curtiu a surpresa?</p>
        <p className='font-Baby w-[80%] h-auto text-center text-[1rem] text-white'>Bom poderia falar muitas coisas, Mas vou tentar dizer o que sinto, Estou triste a todo momento, Mas enfim, Eu Te Amo! Não estou te comprando nem nada, Mas isso era algo que eu ia fazer, Você é alguem incrivel que eu admiro muito, De Verdade mesmo, Você é minha inspiração, Com Fé em Deus a minha mudança vai tocar no seu coraçãozinho, Porque eu vou mudar por mim e principalmente por Você! Porque eu quero você! Porque o que eu fiz foi errado e me arrependo profundamente!</p>
        <p className='font-Baby w-[80%] h-auto text-center text-[1rem] text-white'>Feliz Páscoa Marcia! Beijos para você e o Davi.</p>
        
        <img src={Imagem1} alt="Imagem 1" className='w-[250px] my-[10px] rounded-[5px]'/>

        <img src={Imagem2} alt="Imagem 1" className='w-[250px] my-[10px] rounded-[5px]'/>

        <img src={Imagem3} alt="Imagem 1" className='w-[250px] my-[10px] rounded-[5px]'/>

        </>
    );
}

export default Declaration;