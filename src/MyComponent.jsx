import React, { useState } from 'react';

function MyComponent() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddChange() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };
        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveChange(index) {
        setCars(cars.filter((_, i) => i !== index));
    }


    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return (<div>
        <h2>List of Car Objects</h2>
        <ul>
            {cars.map((car, index) => <li key={index} onClick={() => handleRemoveChange(index)}>{car.year} {car.make} {car.model}</li>)}
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange} /><br />
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter the car make" /><br />
        <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter the car model" /><br />
        <button onClick={handleAddChange}>Add car</button>
    </div>);
}

export default MyComponent