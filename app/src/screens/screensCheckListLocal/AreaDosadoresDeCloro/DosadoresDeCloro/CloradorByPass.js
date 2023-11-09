import React from 'react';

import CloradorGenerico from './CloradorGenerico';


export function CloradorByPass({ choices, setChoices, updateObservacao }) {
    return (
        <CloradorGenerico
            choices={choices}
            setChoices={setChoices}
            title="Clorador By Pass"
        />
    );
};