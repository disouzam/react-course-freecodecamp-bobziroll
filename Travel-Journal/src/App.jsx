import Header from "./components/Header";
import Entry from "./components/Entry";

const App = () => {
  const img = {
    src: "https://scrimba.com/links/travel-journal-japan-image-url",
    alt: "Mount Fuji",
  };

  const title = "Mount Fuji";

  const country = "Japan";

  const googleMapsLink =
    "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu";

  const dates = "12 Jan, 2021 - 24 Jan, 2021";

  const text =
    "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.";

  return (
    <>
      <Header />
      <main className="container">
        <Entry
          img={img}
          title={title}
          country={country}
          googleMapsLink={googleMapsLink}
          dates={dates}
          text={text}
        />
      </main>
    </>
  );
};

export default App;
