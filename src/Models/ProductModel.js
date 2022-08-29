export class Product{
    constructor(tipo, id){
        this._tipo = nome,
        this._id = id
    }

    static async SelectAll(){
        try {
            const { recordset } = await conexao.query('select * from Produto')
            return recordset
        } catch (error) {
            console.log("error script ProductModel.js " + error)
            return false
        }
    }

    async Insert(){
       try {
            const { rowsAffected } = await conexao.query(`insert into Produto values('${ this._tipo }')`)
            return true
        } catch (error) {
            console.log("error model: " + error)
            return false
        }
    }

    async Update(){
        try {
            const { rowsAffected } = await conexao.query(`update Produto set tipo = '${this._tipo}' where id = ${this._id}`)
            return rowsAffected
        } catch (error) {
            console.log("error model: " + error)
            return false
        }
    }

    async Delete(){
        try {
            const { rowsAffected } = await conexao.query(` delete Produto where id = ${this._id}`)
            return rowsAffected
        } catch (error) {
            console.log("error model: " + error)
            return false
        } 
    }
}