import React from "react";
import { Link, useHistory } from 'react-router-dom';


const Home = () => {
    const history = useHistory();

    const routeToOrder = () => {
        history.push('/pizza');
    }

    return(
        <div>
            <img
                src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1428&q=80' 
                alt='Pizza'
            />
            <button onClick={routeToOrder}>Pizza?</button>
            <h2>Come Try Your New Favorite Pizza</h2>
            <p>Adipisicing enim velit laboris enim pariatur cillum eiusmod elit commodo esse adipisicing. Do ex mollit voluptate sint sit consectetur occaecat tempor. Dolore duis anim esse deserunt voluptate eiusmod ut. Exercitation laborum quis amet duis qui cillum elit est occaecat reprehenderit consequat sit. Nulla ad nisi commodo do consequat occaecat excepteur amet anim. Duis ad id do pariatur consectetur cupidatat officia occaecat proident qui do qui aliquip duis. In sunt enim et do enim veniam quis proident fugiat proident tempor est occaecat.</p>
            <img
                src='https://images.unsplash.com/photo-1564128442383-9201fcc740eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80'
                alt='Pepperoni Pizza'
            />
            <img
                src='https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80'
                alt='Specialty Pizza'
            />
        </div>
    );
};

export default Home;