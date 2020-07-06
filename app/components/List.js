import React from 'react';

export default function(props) {

    const { wordPrediction, location } = props
    const { ability } = location.match.params;

    console.log(wordPrediction);
    console.log('...');

    wordPrediction.map(poke => {
      console.log(poke);
      console.log('-');
    })

    return (
        <div>
            <h3>{ability}</h3>
            <ul>
                { wordPrediction.map(poke => {
                    return <li key={poke.word}>{poke.word}</li>
                })}
            </ul>
        </div>
    )
}
