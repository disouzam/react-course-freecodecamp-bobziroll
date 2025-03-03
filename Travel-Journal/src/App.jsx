import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

const App = () => {
  const entries = data.map((entryData) => (
    <Entry key={entryData.id} {...entryData} />
  ));

  return (
    <>
      <Header />
      <main className="container">{entries}</main>
    </>
  );
};

export default App;
