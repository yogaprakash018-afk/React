import data from './data.mjs';


function Header() {
  return (
    <header className="hero">
      <img src="/globe.png" alt="globe-image" width='24px' height='24px'id="globe"/>
      <p>My Travel Journel</p>
    </header>
  );
};

function Entry() {
  return (
  <article className='country'>
    <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Mt-Fuji-image" width='125px' height='168px'/>
    <div className='country-details'>
      <p><span><img src="/marker.png" alt="marker-image" width='7px' height='9.55px'/></span>Japan</p>
      <p>{data.title}</p>
      <a href='https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9'>View on google maps</a>
      <p>12 Jan, 2021 - 24 Jan, 2021</p>
      <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
    </div>
    </article>
  );
};


export default function App() {
  return (
    <>
    <Header/>
    <Entry />
    </>
  );
}; 

// in JSX or React main.jsx always import App as default.
// Each component or say jsx file can have each css we can just import it. Or if we want one single css for all we can do so too,
// But we can directly import it to main.jsx no need of ever adding css or link tag to index.html.