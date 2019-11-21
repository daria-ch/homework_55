import React, {Component} from 'react';
import './App.css';
import Burger from "./Components/Burger/Burger";
import Ingredients from "./Components/Ingredients/Ingredients";
import IngredientsList from "./Components/Ingredients/IngredientsList";


class App extends Component {
    state = {
        ingredients: [
            {name: 'Meat', count: 0},
            {name: 'Cheese', count: 0},
            {name: 'Salad', count: 0},
            {name: 'Bacon', count: 0},
        ]
    };
    price = 20;


    addPrice = () => {
        let totalPrice = 0;
        for (let i = 0; i < this.state.ingredients.length; i++) {
            totalPrice += Ingredients[i].price * this.state.ingredients[i].count;
        }
        return totalPrice;
    };

    addIngredient = (name) => {
        const ingredients = [...this.state.ingredients];
        for (let ingredient of ingredients) {
            if (ingredient.name === name) {
                ingredient.count++;
            }
        }
        this.setState({ingredients});
        this.price = 20 + this.addPrice();
    };

    removeIngredient = (name) => {
        const ingredients = [...this.state.ingredients];
        for (let ingredient of ingredients) {
            if (ingredient.name === name && ingredient.count > 0) {
                ingredient.count--;
            }
        }
        this.setState({ingredients});
        this.price = 20 + this.addPrice();
    };

    render() {
        const textStyle = {
            color: 'red',
            textTransform: 'uppercase',
            fontWeight: 'bold'
        };
        const ingredientsList = Ingredients.map(ing => {
            return (
                <IngredientsList
                    key={ing.name + 1}
                    image={ing.image}
                    name={ing.name}
                    count={this.state.ingredients[Ingredients.findIndex(p => p.name === ing.name)].count}
                    add={() => this.addIngredient(ing.name)}
                    remove={() => this.removeIngredient(ing.name)}
                />
            )
        });
        return (
            <div className="App">
                <div className="ingredients-div">
                    <p style={textStyle}>Ingredients</p>
                    {ingredientsList}
                </div>
                <div className="burger-div">
                    <p style={textStyle}>Burger</p>
                    <Burger
                        price={this.price}
                    />
                </div>
            </div>
        );
    }
}

export default App;