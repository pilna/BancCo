import { useState } from "react";

export const useDegradation = () => {
    const [selectedDegradation, setSelectedDegradation] = useState(null);

    const selectDegradation = (degredation) => {
        setSelectedDegradation(degredation);
    };

    return {
        selectedDegradation,
        selectDegradation,
    };
}