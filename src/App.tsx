import Hero from "./components/ui/Hero";
import NavBar from "./components/ui/NavBar";

const navItems = [
    { name: "الرئيسية", link: "/#home" },
    { name: "أعمالي", link: "/#portfolio" }, // Changed the link to #portfolio
    { name: "خبراتي", link: "/#experience" }, // Changed the link to #experience
    { name: "المدونة", link: "/#blog" },
    { name: "للتواصل", link: "/#contact" },
];

function App() {
    return (
        <>
            <Hero />
            <NavBar navItems={navItems} className="font-vazirmatn font-500" />
        </>
    );
}

export default App;
