import React, { useState } from "react";

const ToggleButton = () => {
    const [toggled, setToggled] = useState(false);

    const handleToggle = () => {
        setToggled(!toggled);
    };

    return (
        <div className="flex justify-center items-center">
            <button onClick={handleToggle} className={`relative w-6 h-5 flex flex-col justify-between items-center group ${toggled ? "top-2" : ""}`}>
                {/* Top Bar */}
                <span className={`block w-7 h-[3px] bg-primary rounded transition-all duration-300 ${toggled ? "rotate-45 absolute" : ""}`}></span>
                {/* Middle Bar */}
                <span className={`block w-full h-[3px] bg-primary rounded transition-all duration-300 ${toggled ? "scale-0" : ""}`}></span>
                {/* Bottom Bar */}
                <span className={`block w-7 h-[3px] bg-primary rounded transition-all duration-300 ${toggled ? "-rotate-45 absolute" : ""}`}></span>
            </button>
        </div>
    );
};

export default ToggleButton;
