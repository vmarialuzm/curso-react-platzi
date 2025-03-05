import { useState } from 'react';

const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <button onClick={() => setIsActive(!isActive)}>
            {isActive ? 'Activo 😀' : 'Inactivo 😌'}
        </button>
    )
}

export default ToggleButton;