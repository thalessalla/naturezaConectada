import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserPage from '../userPage/UserPage';
import Confirmation from '../confirmation/Confirmation';
import "./Result.css"
import jacaranda from "../../assets/Jacarandá.webp"



interface Plant {
  ID_Muda: number;
  Tipo_Muda: string;
  Nome: string;
  Nome_Cientifico: string;
  Porte: string;
  Descrição: string;
  ECOSSISTEMA: string;
  QUANTIDADE: number;
}

const PlantsList: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [selectedPlants, setSelectedPlants] = useState<number[]>([]);

  useEffect(() => {
    async function fetchPlants() {
      try {
        const response = await fetch('http://localhost:3001/mudas');
        if (!response.ok) {
          throw new Error('Failed to fetch plants');
        }
        const plantsData: Plant[] = await response.json();
        setPlants(plantsData);
      } catch (error) {
        // console.error(error.message);
      }
    }

    fetchPlants();
  }, []);

  const handleToggleSelectPlant = (plantId: number) => {
    if (selectedPlants.includes(plantId)) {
      setSelectedPlants(selectedPlants.filter(id => id !== plantId));
    } else {
      setSelectedPlants([...selectedPlants, plantId]);
    }
  
    // Após atualizar o estado selectedPlants, salve no localStorage
    localStorage.setItem('selectedPlants', JSON.stringify(selectedPlants));
  };

  const teste = JSON.parse(localStorage.getItem('selectedPlants') || '[]');


  
  return (
    <div className="section-plants">

      <div className='max-plants'>
      <div>
      <h1>Resultado</h1>
      <p className='decription-result'> 
      Após um analise no clima da sua região, selecionamos 3 plantas que se adequam a sua localidade. Você pode escolher as que se adequam melhor ao seu espaço
      </p>
      <div className='container-cardas'>
      {plants.map((plant) => (
        <div key={plant.ID_Muda} className="plant-card">
           <div className="img-card-container">
           <img className="plant-img" src={jacaranda} alt={plant.Nome} />
           
          </div>
          <div className="plant-info">
            <h3 className="plant-title">{plant.Nome}</h3>
            <h4>{plant.Nome_Cientifico}</h4>
            <p><strong>Tipo:</strong> {plant.Tipo_Muda}</p>
            <p><strong>Porte:</strong> {plant.Porte}</p>
            <p className='description-result-plant'>{plant.Descrição}</p>
           

<button
  className={`btn-select-plant ${selectedPlants.includes(plant.ID_Muda) ? 'selected' : ''}`}
  onClick={() => handleToggleSelectPlant(plant.ID_Muda)}
>
  {selectedPlants.includes(plant.ID_Muda) ? 'Remover' : 'Selecionar'}
</button>



          </div>
        </div>
      ))}
      </div>

      <div className='container-butons-nav-result'>
          <Link to="/UserPage">
            <div className="btn-voltar"><p>Voltar</p></div>
          </Link>

          <Link to="/Confirmation">
            <div className="btn-continuar"><p>Continuar</p></div>
          </Link>  
      </div>

      </div>
      </div>
    </div>
  );
};

export default PlantsList;