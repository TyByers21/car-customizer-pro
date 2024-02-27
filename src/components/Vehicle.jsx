import React, { useRef } from 'react';
import ReactSelect from 'react-select';
import { proxy, useSnapshot } from 'valtio';
import { TacomaModel } from '../vehicles/TacomaModel';
import { Maverick } from '../vehicles/Maverick';
import { MustangMach } from '../vehicles/MustangMach';
import { Supra } from '../vehicles/Supra';
import { Bronco } from '../vehicles/Bronco';
import { Darkhorse } from '../vehicles/DarkHorse';
import { Porsche } from '../vehicles/Porsche911';
import { Wrangler } from '../vehicles/Wrangler';
import { ModelY } from '../vehicles/ModelY';
import { Silverado } from '../vehicles/Silverado';
import { Challenger } from '../vehicles/Challenger';
import { F150 } from '../vehicles/F150';
import { Canyon } from '../vehicles/Canyon';
import { GTR } from '../vehicles/GTR';
import { Runner4 } from '../vehicles/4Runner';
import { Boxster } from '../vehicles/Boxster';
import { Frontier } from '../vehicles/Frontier';
import { Ranger } from '../vehicles/Ranger';
import { NissanZ } from '../vehicles/NissanZ';
import { Camaro } from '../vehicles/Camaro';
import { Hummer } from '../vehicles/Hummer';
import { Gladiator } from '../vehicles/Gladiator';
import { Colorado } from '../vehicles/Colorado';
import { Cayman } from '../vehicles/Cayman';
import { Sierra } from '../vehicles/Sierra';
import { Model3 } from '../vehicles/Model3';
import { ModelX } from '../vehicles/ModelX';
import { Cybertruck } from '../vehicles/Cybertruck';
import { NewTundra } from '../vehicles/NewTundra';
import { Corvette } from '../vehicles/Corvette';







const state = proxy({ selectedMake: null, selectedModel: null });

const makeOptions = [
  { value: 'chevy', label: 'Chevy' },
  { value: 'dodge', label: 'Dodge' },
  { value: 'ford', label: 'Ford' },
  { value: 'gmc', label: 'GMC' },
  { value: 'jeep', label: 'Jeep' },
  { value: 'nissan', label: 'Nissan' },
  { value: 'porsche', label: 'Porsche' },
  { value: 'tesla', label: 'Tesla' },
  { value: 'toyota', label: 'Toyota' },

];

const modelOptions = {
  chevy: [
    { value: 'camaro', label: "Camaro ZL1" },
    { value: 'colorado', label: 'Colorado ZR2' },
    { value: 'corvette', label: 'Corvette Z06' },
    { value: 'silverado', label: "Silverado ZR2" },
  ],
  dodge: [
    { value: 'challenger', label: 'Challenger' },
  ],
  ford: [
    { value: 'bronco', label: "Bronco Raptor" },
    { value: 'f150', label: "F150 Raptor" },
    { value: 'maverick', label: "Maverick" },
    { value: 'mustang1', label: "Mustang Mach-E" },
    { value: 'mustang2', label: "Mustang Dark Horse" },
    { value: 'ranger', label: "Ranger Raptor" },

  ],
  gmc: [
    { value: 'canyon', label: "Canyon" },
    { value: 'hummer', label: "Hummer EV" },
    { value: 'sierra', label: "Sierra Elevation" },
  ],
  jeep: [   
    { value: 'gladiator', label: "Gladiator" },
    { value: 'wrangler', label: "Wrangler" },
  ],
  nissan: [
    { value: 'z', label: "Z" },
    { value: 'gtr', label: "GT-R" },
    { value: 'frontier', label: "Frontier Pro" },
  ],
  porsche: [
    { value: 'boxster', label: "Boxster" },
    { value: 'cayman', label: "Cayman" },
    { value: 'porsche911', label: "911" },
  ],
  tesla: [
    { value: 'cybertruck', label: "Cybertruck" },
    { value: 'model3', label: "Model 3" },
    { value: 'modelx', label: "Model X" },
    { value: 'modely', label: "Model Y" },
   
  ],
  toyota: [
    { value: 'tacoma', label: "Tacoma TRD" },
    { value: 'runner', label: "4 Runner TRD" },
    { value: 'supra', label: "GR Supra" },
    { value: 'tundra', label: "Tundra" },
  ],

};

const componentMap = {
  chevy: {
    camaro: <Camaro scale={1.6} position={[0, -1.1, 0]} />,
    colorado: <Colorado scale={6} position={[0, -1.1, 0]} />,
    corvette: <Corvette scale={1.5} position={[0, -1.1, 0]} />,
    silverado: <Silverado scale={0.4} position={[0, -1.1, 0]} />,
  },
  ford: {
    f150: <F150 scale={2.6} position={[0, -1.1, 0]} />,
    mustang1: <MustangMach scale={0.6} position={[0, -1.1, 0]} />,
    bronco: <Bronco scale={1.1} position={[0, -1.1, 0]} />,
    maverick: <Maverick scale={2.6} position={[0, -1.1, 0]} />,
    mustang2: <Darkhorse scale={0.6} position={[0, -1.1, 0]} />,
    ranger: <Ranger scale={5.7} position={[0, -1.1, 0]} />,
    // Add other Ford models as needed
  },
  dodge: {
    challenger: <Challenger scale={2.5} position={[0, -1.1, 0]} />,
    // Add other Dodge models as needed
  },
  gmc: {
    hummer: <Hummer scale={.5} position={[0, -1.1, 0]} />,
    canyon: <Canyon scale={.05} position={[0, -1.1, 0]} />,
    sierra: <Sierra scale={.1} position={[0, -1.1, 0]} />,
  //   // Add other GMC models as needed
  },
  jeep: {
    gladiator: <Gladiator scale={.24} position={[0, -1.1, 0]} />,
    wrangler: <Wrangler scale={2.2} position={[0, -1.1, 0]} />,
    // Add other Jeep models as needed
  },
  nissan: {
    frontier: <Frontier scale={1.7} position={[0, -1.1, 0]} />,
    gtr: <GTR scale={1.3} position={[0, -1.1, 0]} />,
    z: <NissanZ scale={1.8} position={[0, -1.1, 0]} />,

  },
  porsche: {
    boxster: <Boxster scale={3} position={[0, -1.1, 0]} />,
    cayman: <Cayman scale={.72} position={[0, -1.1, 0]} />,
    porsche911: <Porsche scale={3} position={[0, -1.1, 0]} />,
    // Add other Porsche models as needed
  },
  tesla: {
    cybertruck: <Cybertruck scale={3} position={[0, -1.1, 0]} />,
    modelx: <ModelX scale={2.5} position={[0, -1.1, 0]} />,
    modely: <ModelY scale={2.5} position={[0, -1.1, 0]} />,
    model3: <Model3 scale={2.5} position={[0, -1.1, 0]} />,
    // Add other Tesla models as needed
  },
  toyota: {
    tacoma: <TacomaModel scale={3.5} position={[0, -1.1, 0]} />,
    supra: <Supra scale={0.7} position={[0, -1.1, 0]} />,
    runner: <Runner4 scale={2.6} position={[0, -1.1, 0]} />,
    tundra: <NewTundra scale={4.6} position={[0, -1.1, 0]} />,
    // Add other Toyota models as needed
  },

};


const Vehicle = () => {
  const makeSelectRef = useRef(null);
  const modelSelectRef = useRef(null);

  const { selectedMake, selectedModel } = useSnapshot(state);

  const makeChange = (selectedMake) => {
    state.selectedMake = selectedMake;
    state.selectedModel = null;
  };

  const modelChange = (selectedModel) => {
    state.selectedModel = selectedModel;
  };

  return (
    <>
      <div>
        <ReactSelect
          options={makeOptions}
          value={selectedMake}
          onChange={makeChange}
          ref={makeSelectRef}
        />
      </div>

      <div>
        <ReactSelect
          options={modelOptions[selectedMake?.value] || []}
          value={selectedModel}
          onChange={modelChange}
          ref={modelSelectRef}
        />
      </div>
    </>
  );
};



export const DisplayModel = () => {
  const { selectedMake, selectedModel } = useSnapshot(state);

  const renderedComponent = componentMap[selectedMake?.value]?.[selectedModel?.value] || null;
  return <>{renderedComponent}</>;

};


export default Vehicle;