import React from 'react';

import { HiOutlineMail } from "react-icons/hi";
import Button from '../Comps/Button';

function Question({ setStatus }) {

    return (
        <>
        
        <HiOutlineMail className='text-[4rem] text-rose-500'/>
        <h1 className='font-Baby font-[700] text-[2rem] text-center text-white'>Deseja visualizar esta mensagem?</h1>
        <Button Function={() => setStatus(true)} Text='Aceitar'/>
        <Button Function={() => alert('Aceitar Por Favorzinho 🥺🫶🏻')} Text='Rejeitar'/>

        </>
    );
}

export default Question;