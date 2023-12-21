import { useState } from 'react'

export const Check = ({ bool }) => {

    const [check, setCheck] = useState(bool);



    return (
        <div className={check ? 'check' : 'uncheck'} onClick={ () => setCheck(!bool) } >
            <i className={`fa-solid ${check ? 'fa-check' : 'fa-minus'}`}></i>
        </div>
    );
};
