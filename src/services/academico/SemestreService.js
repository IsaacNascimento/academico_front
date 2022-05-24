class SemestreService {
    getAll(){
        const semestre = localStorage.getItem('semestre')
        return semestre ? JSON.parse(semestre) : []
    }

    get(id){
        const semestre = this.getAll()
        return semestre[id]
    }

    create(dados){
        const semestre = this.getAll()
        semestre.push(dados)
        localStorage.setItem('semestre', JSON.stringify(semestre))
    }

    update(id, dados){
        const semestre = this.getAll()
        semestre.splice(id, 1, dados)
        localStorage.setItem('semestre', JSON.stringify(semestre))
    }

    delete(id){
        const semestre = this.getAll()
        semestre.splice(id, 1)
        localStorage.setItem('semestre', JSON.stringify(semestre))
    }
}
export default new SemestreService()