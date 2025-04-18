import React from 'react';

function Button({ Text , Function}) {
    return (
        <>
        <button onClick={Function} className='px-[30px] py-[5px] my-[10px] font-Baby bg-rose-500 hover:bg-rose-600 text-white text-[1.5rem] rounded-[5px] transition .3s'>{ Text }</button>
        </>
    );
}

export default Button;