import React from 'react';

import mapMarkerImg from '../images/map-marker.svg'

import {Link} from 'react-router-dom';

import {FiPlus, FiArrowRight} from 'react-icons/fi';

import {Map, TileLayer, Marker,Popup} from 'react-leaflet';

import '../styles/pages/orphanages-map.css'
import mapIcon from '../utils/mapIcon';
import { useEffect , useState} from 'react';
import api from '../servers/api';
import Orphanage from './Orphanage';


interface Orphanage{
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  
  useEffect(()=>{
    api.get('orphanages').then(response => {
       setOrphanages(response.data);
    })
  }, []);
  
  return(
    <div id="page-map">
      <aside>
          <header>
             <img src={mapMarkerImg} alt="Happy"/>
             <h2> Escolha um orfanato no mapa</h2>
             <p>Muitas crianças estão esperando a sua visita</p>
          </header>
        
         <footer>
           <strong> Londrina </strong>
           <span> Paraná</span>
          </footer>
       </aside>
       <Map 
         center = {[-23.321264,-51.2358034]}
         zoom={15}
         style= {{width:'100%',height: '100%'}}
       > 
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
       {orphanages.map(orphanage =>{
         return(
           
           <Marker
             key ={orphanage.id}
             icon = {mapIcon}
             position={[orphanage.latitude,orphanage.longitude]}
             >
             <Popup 
                 closeButton={false} 
                  minWidth= {248} 
                  maxWidth={248}
                  className= "map-popup">
                {orphanage.name}
               <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="FFF"/>
               </Link>

             </Popup>
           </Marker>
         )
       })} 

       </Map>
       <Link to="/orphanages/create" className="create-orphanage">
          <FiPlus size ={32} color='#FFF'></FiPlus> 
       </Link>     
       <div className="quantOrphanages">
          <h1>{orphanages.length} casas de acolhimento institucional </h1>
      </div>
    </div>
   )
}

export default OrphanagesMap;