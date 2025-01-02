import React from "react";

const NavBar = () => {
    const navItems = [
        { title: "الرئيسية", path: "/" },
        { title: "من أنا", path: "/#about" },
        { title: "أعمالي", path: "/#contact" },
        { title: "خبراتي", path: "/#blog" },
        { title: "خدماتي", path: "/#portfolio" },
        { title: "المدونة", path: "/#services" },
        { title: "للتواصل", path: "/#contact" },
    ];

    return (
        <nav className="fixed p-3 top-10 left-1/2 transform -translate-x-1/2 bg-opacity-50 bg-gray-500 mx-auto z-50 rounded-full shadow-lg bg-white/30 backdrop-blur-md border border-white/20 ">
            <ul className="flex justify-center p-4 gap-10 font-vazirmatn font-500">
                {navItems.map(item => (
                    <li key={item.title} >
                        <a href={item.path}>{item.title}</a>
                    </li>
                ))}
                <li></li>
            </ul>
        </nav>
    );
};

export default NavBar;
