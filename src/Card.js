import React from 'react';
const Cards = ({name,email,id}) => {
    return(
    <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${id}`}/>
    <div>
        <h2> {name} </h2>
        <p> {email} </p>
        
    </div>
    </div>
    )
}
export default Cards;