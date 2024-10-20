import { Name } from "../atoms/Name";
import { ThemeToggle } from "../molecules/ThemeToggle";

export function NavBar() {

    return (
        <nav>
            <div 
                className="flex flex-row items-center">
                <Name />    
                <ThemeToggle />
            </div>
        </nav>
    )
}