import React from 'react';


import CloradorGenerico from './CloradorGenerico';

export function CloradorPos({ choices, setChoices, updateObservacao }) {
    return (
        <CloradorGenerico
            choices={choices}
            setChoices={setChoices}
            title="Clorador Pos"
        />
    );
};