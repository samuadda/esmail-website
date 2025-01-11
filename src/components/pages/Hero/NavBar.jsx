import InteractiveHoverButton from "./interactive-hover-button";

const NavBar = () => {
    const navItems = [
        { title: "الرئيسية", route:"./" },
        { title: "التجارب", route:"./ex" },
        { title: "الأعمال", route:"./wo"},
        { title: "النصوص", route :"sc"},
    ];


    return (
        <nav className="w-full flex justify-between items-center px-28 py-5 top-0 fixed z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
            <div>
                <ul className="flex gap-10 text-lg items-center">
                    {navItems.map(item => {
                        const isActive = window.location.pathname === item.route;
                        return (
                            <li key={item.title} className="text-primary font-400 cursor-pointer hover:opacity-50 transition-all duration-300 ">
                                <a href={item.route}>{item.title}</a>
                            </li>
                        );
                    })}
                    <li className="relative text-primary font-400">
                        <span class="absolute top-0 right-0 -mt-2 -mr-2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-sm before:content-['قريباً'] before:absolute before:inset-0 before:flex before:items-center before:justify-center before:text-white before:font-bold before:leading-none" />
                        <a href="#" className="cursor-not-allowed opacity-45">
                            المدونة
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-3">
                <InteractiveHoverButton text="خلنا نتواصل" className="text-white " borderColor="bg-primary" dotColor="bg-primary" />
            </div>
        </nav>
    );
};

export default NavBar;
