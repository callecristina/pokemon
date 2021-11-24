import React from 'react'

export default function Cardpoke({pokemon}) {
    return (
        <>
        <div className="card text-center mx-auto" key={pokemon.id}></div>
        <div className="card-header">
            <b>{pokemon.name}</b>
        </div>
        <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">Identificador:{pokemon.id}</h6>
            <img src={pokemon.sprites['front_default']} />
            <img src={pokemon.sprites['back_default']} />
        </div>
        </>
    )
}
