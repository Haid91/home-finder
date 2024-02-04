import { Link } from "react-router-dom";

 function Header () {
    return (
        <>
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap"></h1>
        <span className="text-slate-500">Home</span>
        <span className="text-slate-700">Finder</span>
        <form className="bg-slate-100 p-3 rounded-lg">
            <input type="text" placeholder="Search..." className="bg-transparent"/>
        </form>
<ul className="felx gap-4">
    <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
    <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
    <li className=" text-slate-700 hover:underline">Login</li>
    
</ul>

        </div>
        
        </>
    )
}

export default Header