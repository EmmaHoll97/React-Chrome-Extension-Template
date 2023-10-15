import React, { useEffect, useState } from 'react';
import './popup.css';
function Popup() {
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
       console.log(`Hello!`)
    }, []);

    return (
        <div className="App">
            <div style={{ minWidth: "500px", minHeight: "500px" }}>
                <h1>Hello, React in Popup!</h1>
                <p>This is a simple React component in your popup.</p>
            </div>
        </div>
    );
}

export default Popup;
