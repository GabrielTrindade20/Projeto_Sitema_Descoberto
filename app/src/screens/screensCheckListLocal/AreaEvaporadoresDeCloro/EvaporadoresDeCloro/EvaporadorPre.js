import React from 'react';

import EvaporadorGenerico from './EvaporadorGenerico';


export function EvaporadorPre({ choices, setChoices, updateObservacao }) {
    return (
        <EvaporadorGenerico
            choices={choices}
            setChoices={setChoices}
            title="Evaporador Pre"
        />
    );
};