import { BanccoService } from '../../services/bancco.service';
import { useState } from 'react';

export const useDegradation = (itemId) => {
    const [NatureDegradation, setNatureDegradation] = useState('');

    const onDegradation = () => {
        console.log("item id", itemId);
        BanccoService.postDegradation(itemId, NatureDegradation)
    }

    return {
        NatureDegradation,
        setNatureDegradation,
        onDegradation
    }

}
