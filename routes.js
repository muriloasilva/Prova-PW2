import express from 'express';
const routes = express.Router();

import { ProductController } from './src/Controllers/ProductController.js'

routes.get("/produto", ProductController.listarTodos)
routes.post("/produto/novo", ProductController.novoProduto)
routes.put("/produto/alterar/:id", ProductController.alterarProduto)
routes.delete("/produto/delete/:id", ClientController.deletarProduto)

export { routes }

/* teste */