class SalaService {
    getAll(){
        const sala = localStorage.getItem('sala')
        return sala ? JSON.parse(sala) : []
    }

    get(id){
        const sala = this.getAll()
        return sala[id]
    }

    create(dados){
        const sala = this.getAll()
        sala.push(dados)
        localStorage.setItem('sala', JSON.stringify(sala))
    }

    update(id, dados){
        const sala = this.getAll()
        sala.splice(id, 1, dados)
        localStorage.setItem('sala', JSON.stringify(sala))
    }

    delete(id){
        const sala = this.getAll()
        sala.splice(id, 1)
        localStorage.setItem('sala', JSON.stringify(sala))
    }
}
export default new SalaService()