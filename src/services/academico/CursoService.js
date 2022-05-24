class CursoService {
    getAll(){
        const curso = localStorage.getItem('curso')
        return curso ? JSON.parse(curso) : []
    }

    get(id){
        const curso = this.getAll()
        return curso[id]
    }

    create(dados){
        const curso = this.getAll()
        curso.push(dados)
        localStorage.setItem('curso', JSON.stringify(curso))
    }

    update(id, dados){
        const curso = this.getAll()
        curso.splice(id, 1, dados)
        localStorage.setItem('curso', JSON.stringify(curso))
    }

    delete(id){
        const curso = this.getAll()
        curso.splice(id, 1)
        localStorage.setItem('curso', JSON.stringify(curso))
    }
}

export default new CursoService()