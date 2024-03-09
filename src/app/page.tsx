import Dashboard from "./components/Dashboard";
import Widget from "./components/Widget";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Dashboard>
        <Widget id="mesmall" size="small" content="one of my bad days"/>
        <Widget id="mechonkithink" size="medium" content="one of my bad days"/>
        <Widget id="ohmyfuckimhuge" size="large" content="one of my bad days"/>
      </Dashboard>
    </main>
  );
}
