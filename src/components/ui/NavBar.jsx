import InteractiveHoverButton from "./interactive-hover-button";
    
const NavBar = () => {

    return (
        <nav className="w-full flex justify-between p-10 top-0 fixed z-50">
            <div>
                <InteractiveHoverButton/>
            </div>
            <div></div>
        </nav>
    );
};

export default NavBar