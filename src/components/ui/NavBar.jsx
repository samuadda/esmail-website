import InteractiveHoverButton from "./interactive-hover-button";

const NavBar = () => {
    const navItems = [
        { title: "الرئيسية", route:"./" },
        { title: "التجارب", route:"./ex" },
        { title: "الأعمال", route:"./wo"},
        { title: "النصوص", route :"sc"},
        { title: "المدونة", route:"bl" },
    ];


    return (
        <nav className="w-full flex justify-between items-center px-28 py-5 top-0 fixed z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
            <div>
                <ul className="flex gap-10 text-lg items-center">
                    {navItems.map(item => {
                        const isActive = window.location.pathname === item.route;
                        return (
                            <li key={item.title} className="text-primary font-400 cursor-pointer hover:opacity-50 transition-all duration-300 rounded-full ">
                                <a href={item.route}>{item.title}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="flex items-center gap-3">
                <InteractiveHoverButton text="خلنا نتواصل" className="text-white " borderColor="bg-primary" dotColor="bg-primary" />
            </div>
        </nav>
    );
};

export default NavBar;
