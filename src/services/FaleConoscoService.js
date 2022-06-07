class FaleConoscoService {
    getAll(){
        const faleConosco = localStorage.getItem('faleConosco')
        return faleConosco ? JSON.parse(faleConosco) : []
    }

    get(id){
        const faleConosco = this.getAll()
        return faleConosco[id]
    }

    create(dados){
        const faleConosco = this.getAll()
        faleConosco.push(dados)
        localStorage.setItem('faleConosco', JSON.stringify(faleConosco))
    }

    update(id, dados){
        const faleConosco = this.getAll()
        faleConosco.splice(id, 1, dados)
        localStorage.setItem('faleConosco', JSON.stringify(faleConosco))
    }

    delete(id){
        const faleConosco = this.getAll()
        faleConosco.splice(id, 1)
        localStorage.setItem('faleConosco', JSON.stringify(faleConosco))
    }
}

export default new FaleConoscoService()