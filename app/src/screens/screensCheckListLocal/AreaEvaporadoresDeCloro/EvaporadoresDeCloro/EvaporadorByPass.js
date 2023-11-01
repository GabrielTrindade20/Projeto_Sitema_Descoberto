import React from 'react';

import EvaporadorGenerico from './EvaporadorGenerico';


export function EvaporadorByPass({ choices, setChoices, updateObservacao }) {
    return (
        <EvaporadorGenerico
            choices={choices}
            setChoices={setChoices}
            title="Evaporador By Pass"
        />
    );
};