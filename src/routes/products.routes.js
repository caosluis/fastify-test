const Product = require("../models/product.model")

const routes = [{
    url: '/products',
    method: 'GET',
    handler: async (request, reply) => {
        const products = await Product.find()
        return products
    }
}, {
    url: '/products/:id',
    method: 'GET',
    handler: (request, reply) => {
        reply.send('single products')
    }
}, {
    url: '/products',
    method: 'POST',
    handler: (request, reply) => {
        reply.send('new products')
    }
}, {
    url: '/products/:id',
    method: 'DELETE',
    handler: (request, reply) => {
        reply.send('delete products')
    }
}, {
    url: '/products/:id',
    method: 'PATCH',
    handler: (request, reply) => {
        reply.send('modify products')
    }
}]

module.exports = routes