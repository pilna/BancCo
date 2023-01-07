import { useState } from 'react';
export const useDegradation = () => {

    const [Degradation, setDegradation] = useState('');
    const [NatureDegradation, setNatureDegradation] = useState('');

    const onDegradation = () => {
        // TODO
        console.log(Degradation, NatureDegradation);
    }

    return {
        Degradation,
        setDegradation,
        NatureDegradation,
        setNatureDegradation,
        onDegradation
    }

}
