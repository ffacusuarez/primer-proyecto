"use client"

import {use, useEffect, useState } from "react";
import Title from "../componentes/Title";
import Input from "../componentes/Input";

// This is a placeholder for the calculator functionality
// You can implement your calculator logic here

export default function Calculadora() {

    const [numeros, setNumeros] = useState([]);

    useEffect(() => {
        setNumeros([])
    }, []);

    function saveNumber(event) {
        setNumeros(event.target.value);
    }


    return(
        <>
            <Title text="Esta es la caluladora"></Title>

            <main className="container">
                <section className="input-numeros">
                    <Input type="text" placeholder="ingrese un numero" onChange={saveNumber}></Input>
                    <Input type="text" placeholder="ingrese un numero" onChange={saveNumber}></Input>
                    
                </section>
            </main>
            
        </>
    )
}