import { StationName } from "njt-api/lib/station-name";
import Dashboard from "./components/Dashboard";
import TrainScheduleWidget from "./components/TrainScheduleWidget";
import Widget from "./components/Widget";

export default function Home() {
    return (
        <main className="flex min-h-screen">
            <Dashboard>
                <TrainScheduleWidget
                    id="nb-to-nwk-1"
                    size='large'
                    fromStation={StationName["New Brunswick"]}
                    toStation={StationName["Newark Penn Station"]}
                />
            </Dashboard>
        </main>
    );
}
