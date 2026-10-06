import {createRoot} from 'react-dom/client';
import Page from './App.jsx';
import './style.css';

const root = createRoot(document.getElementById("root"));

root.render(
    <Page/>
);