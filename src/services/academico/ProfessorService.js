class ProfessorService {
    getAll(){
        const professor = localStorage.getItem('professor')
        return professor ? JSON.parse(professor) : []
    }

    get(id){
        const professor = this.getAll()
        return professor[id]
    }

    create(dados){
        const professor = this.getAll()
        professor.push(dados)
        localStorage.setItem('professor', JSON.stringify(professor))
    }

    update(id, dados){
        const professor = this.getAll()
        professor.splice(id, 1, dados)
        localStorage.setItem('professor', JSON.stringify(professor))
    }

    delete(id){
        const professor = this.getAll()
        professor.splice(id, 1)
        localStorage.setItem('professor', JSON.stringify(professor))
    }
}
export default new ProfessorService()