function gerarLista(final = 10) {
    const lista = [];
    for(let i = 1; i <= final; i++) {
        lista.push(<span>{i} </span>)
    }
    return lista;
}

export default function lista1() {
    return (
        <div>
            <h1>Lista 2</h1>
            <div>{gerarLista(20)}</div>
            <br />
            <div>{gerarLista(5)}</div>
        </div>
    )
}