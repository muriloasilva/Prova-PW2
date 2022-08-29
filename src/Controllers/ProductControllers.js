import { Product } from "../Models/ProductModel.js";

export class ProductController{

    static async listarTodos( req, res){
        try {
            const produtos = await Product.SelectAll();
            return res.status(200).json(produtos);
        } catch (error) {
            console.log('Error controller ProductController.js: ' + error)
            return res.status(500).json(error)
        }
    }

    static async novoProduto(req, res){
        try {
            const { tipo } = req.body;
            const novo_cliente = await new Product(tipo).Insert();
            return res.status(200).json(novo_cliente);
        } catch (error) {
            console.log("error controller: " + error)
            return res.status(500).json(error)
        }
    }

    static async alterarProduto(req, res){
        try {
            const { tipo } = req.body;
            const { id } = req.params;
            const alt_produto = await new Product(tipo, id).Update();
            return res.status(200).json(alt_produto);
        } catch (error) {
            console.log("error controller: " + error)
            return res.status(500).json(error)
        }
    }

    static async deletarProduto(req, res){
        try {
            const { id } = req.params;
            const del_produto = await new Product(id).Delete();
            return res.status(200).json(del_produto);
        } catch (error) {
            console.log("error controller: " + error)
            return res.status(500).json(error)
        }
    }
}