const cursoValidator = {
    nome: {
        required: "O campo Nome é Obrigatório",
        minLength: {
            value: 6,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 8,
            message: "Qtd máxima de caracteres ultrapassada"
        },
    },
    capacidade: {
        required: "O campo Capacidade Obrigatório",
        minLength: {
            value: 6,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 8,
            message: "Qtd máxima de caracteres ultrapassada"
        },
    },
    tipo: {
        required: "O campo Tipo de sala Obrigatório",
        minLength: {
            value: 6,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 8,
            message: "Qtd máxima de caracteres ultrapassada"
        },
    },
}

export default cursoValidator