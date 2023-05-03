import { useState, useEffect } from "react";

export function useSpinner() {
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowSpinner(false);
        }, 1500);
        return () => clearTimeout(timeoutId);
    }, []);

    return showSpinner;
}
