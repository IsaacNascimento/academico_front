class AlunoService {
    getAll(){
        const aluno = localStorage.getItem('aluno')
        return aluno ? JSON.parse(aluno) : []
    }

    get(id){
        const aluno = this.getAll()
        return aluno[id]
    }

    create(dados){
        const aluno = this.getAll()
        aluno.push(dados)
        localStorage.setItem('aluno', JSON.stringify(aluno))
    }

    update(id, dados){
        const aluno = this.getAll()
        aluno.splice(id, 1, dados)
        localStorage.setItem('aluno', JSON.stringify(aluno))
    }

    delete(id){
        const aluno = this.getAll()
        aluno.splice(id, 1)
        localStorage.setItem('aluno', JSON.stringify(aluno))
    }
}

export default new AlunoService()