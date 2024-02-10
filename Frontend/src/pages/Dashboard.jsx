import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
export default function Dashboard() {
    return (
        <div className="flex">
            <Sidebar />
            <main className="w-screen">
                <TopBar />
            </main>
        </div>
    );
}
