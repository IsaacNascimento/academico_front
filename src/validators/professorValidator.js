const professorValidator = {
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
        min: {
            value: 3,
            message: "O valor mínimo é 3"
        },
    },
    cpf: {
        required: "O campo CPF é Obrigatório",
        minLength: {
            value: 6,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 8,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 3,
            message: "O valor mínimo é 3"
        },
    },
    matricula: {
        required: "O campo matricula é Obrigatório",
        minLength: {
            value: 6,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 8,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 3,
            message: "O valor mínimo é 3"
        },
    },
    salario: {
        required: "O campo Salario é Obrigatório",
        minLength: {
            value: 6,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 8,
            message: "Qtd máxima de caracteres ultrapassada"
        },
    },
    email: {
        required: "O campo E-mail é Obrigatório",
        minLength: {
            value: 10,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 50,
            message: "Qtd máxima de caracteres ultrapassada"
        },
    },
    telefone: {
        required: "O campo Telefone é Obrigatório",
        minLength: {
            value: 8,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 12,
            message: "Qtd máxima de caracteres ultrapassada"
        },
    },
    cep: {
        required: "O campo CEP é Obrigatório",
        minLength: {
            value: 8,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 12,
            message: "Qtd máxima de caracteres ultrapassada"
        },
    },
    logadouro: {
        required: "O campo Logadouro é Obrigatório",
        minLength: {
            value: 8,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 25,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 6,
            message: "O valor mínimo é 3"
        },
    },
    complemento: {
        required: "O campo Complemento é Obrigatório",
        minLength: {
            value: 10,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 25,
            message: "Qtd máxima de caracteres ultrapassada"
        },
    },
    numero: {
        required: "O campo Número é Obrigatório",
        minLength: {
            value: 8,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 12,
            message: "Qtd máxima de caracteres ultrapassada"
        },
    },
    bairro: {
        required: "O campo Bairro é Obrigatório",
        minLength: {
            value: 8,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 15,
            message: "Qtd máxima de caracteres ultrapassada"
        },
    },
}

export default professorValidator