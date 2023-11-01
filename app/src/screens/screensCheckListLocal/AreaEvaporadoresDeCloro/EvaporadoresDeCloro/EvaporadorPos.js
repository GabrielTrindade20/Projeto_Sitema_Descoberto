import React from 'react';


import EvaporadorGenerico from './EvaporadorGenerico';

export function EvaporadorPos({ choices, setChoices, updateObservacao }) {
    return (
        <EvaporadorGenerico
            choices={choices}
            setChoices={setChoices}
            title="Evaporador Pos"
        />
    );
};