import { useState } from "react";
import InputCep from "../components/inputCep";
import InputCidades from "../components/InputCidades";
import InputEstados from "../components/InputEstados";

export default function() {
    const [uf, setUf] = useState("")

    return <>
        <h1>Cadastro</h1>
        <h2>Dados de Endereço</h2>
        <InputCep />
        <InputEstados setUf={setUf} />
        <InputCidades uf={uf} />
        <input placeholder="Bairro"></input>
        <input placeholder="Rua"></input>
        <input placeholder="Número"></input>
        <input placeholder="Complemento"></input>
        
    </>
}