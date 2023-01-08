import { useState } from 'react';

export const useSugestion = () => {
    const [pourquoi, setPourquoi] = useState('');
    const [types, setTypes] = useState('');
    const [position, setPosition] = useState('');

    const onSuggestion = () => {
        // TODO
        console.log(pourquoi, types,position.latitude,position.longitude);
    }

    return {
        pourquoi,
        setPourquoi,
        types,
        setTypes,
        position,
        setPosition,
        onSuggestion
    }
}