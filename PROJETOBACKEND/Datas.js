class Datas{
    constructor(){
        this.moment = require('moment');
    }

diferencaDias(data){
    return data.diff(this.dataAtual(), 'days')
}
adicionarDias(data,dias){
    return data.add(dias,'days')
}
removerDias(data,dias){
    data.subtract(dias,'days')
}
formataData(data){
    return data.format("dd/mm/yyyy");
}
dataAtual(){
    return this.moment()
}
}
module.exports = Datas;