import data from './data.mjs';

function Header() {
  return (
    <header className="hero">
      <img src="/globe.png" alt="globe-image" width='24px' height='24px'id="globe"/>
      <p>My Travel “Journal</p>
    </header>
  );
};

function Entry({ img, country, googleMapsLink, title, dates, text }) {
  return (
  <article className="journal-entry">

    <div className="main-image-container">
      <img src={img.src} alt={img.alt} className='main-image'/> 
    </div>

    <div className="info-container">
      <img src='/marker.png' alt='Location-marker'/>

      <span className="country">{country}</span>

      <a href={googleMapsLink} target="_blank">View on Google Map</a>

      <p className="entry-title">{title}</p>

      <p className="trip-dates">{dates}</p>
      
      <p className="entry-text">{text}</p>

    </div>

    </article>
  );
};


export default function App() {
  const datas = data.map(entry => <Entry key={entry.title} {...entry}/>)
  return (
    <>
    <Header/>
    <main>
      {datas}
    </main>
    </>
  );
}; 

// in JSX or React main.jsx always import App as default.
// Each component or say jsx file can have each css we can just import it. Or if we want one single css for all we can do so too,
// But we can directly import it to main.jsx no need of ever adding css or link tag to index.html.