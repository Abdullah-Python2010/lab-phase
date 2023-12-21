
export const Check = ({ bool }) => {
        if(bool) {
            return (
                <div className='check'>
                    <i className="fa-solid fa-check"></i>
                </div>
            )
        } else{
            return(
                <div className='uncheck'>
                    <i className="fa-solid fa-check"></i>
                </div>
            )
        }


}