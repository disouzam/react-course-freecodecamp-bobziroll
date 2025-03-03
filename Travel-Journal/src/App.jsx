import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

const App = () => {
  console.log(data);

  const entries = data.map((entryData) => (
    <Entry
      key={entryData.id}
      img={entryData.img}
      title={entryData.title}
      country={entryData.country}
      googleMapsLink={entryData.googleMapsLink}
      dates={entryData.dates}
      text={entryData.text}
    />
  ));

  return (
    <>
      <Header />
      <main className="container">{entries}</main>
    </>
  );
};

export default App;
