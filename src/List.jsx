

function List() {
    const fruits = [
        { id: 1, name: "apple", calories: 10 },
        { id: 2, name: "orange", calories: 200 },
        { id: 3, name: "banana", calories: 250 },
        { id: 4, name: "coconut", calories: 270 },
        { id: 5, name: "pineapple", calories: 290 }];

    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    // fruits.sort((a, b) => a.calories - b.calories);

    // const lowCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
        {lowCalFruit.name}: &nbsp;
        <b>{lowCalFruit.calories}</b></li>);




    return (<ol>{listItems}</ol>);
}

export default List