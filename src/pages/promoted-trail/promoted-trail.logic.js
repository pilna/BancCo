import { BanccoService } from '../../services/bancco.service';
import { useState } from 'react';

export const useSugestion = () => {
    const [pourquoi, setPourquoi] = useState('');
    const [position, setPosition] = useState('');
    const [lattitude, setLattitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const onSuggestion = () => {
        BanccoService.postSuggestion({
            lattitude: lattitude,
            longitude: longitude,
        },
        pourquoi
        )
    }

    return {
        lattitude,
        setLattitude,
        longitude,
        setLongitude,
        pourquoi,
        setPourquoi,
        position,
        setPosition,
        onSuggestion
    }
}