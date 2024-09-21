import { Main } from "../../components/main";
import { Sidebar } from "../../components/sidebar";

export function Body() {
    return (
        <div className="flex mx-2 gap-2">
            <Sidebar />
            <Main />
        </div>
    )
}