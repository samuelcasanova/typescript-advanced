type Routes = { [key: string]: string | Routes };

const routes = {
    home: '/',
    about: '/about',
    contact: '/contact',
    marketplace: {
        products: '/marketplace/products',
        services: '/marketplace/services'
    }
} satisfies Routes

const otherRoutes : Routes = {
    home: '/',
    about: '/about',
    contact: '/contact',
}

console.log(routes.marketplace.products) // I have autocompletion here
console.log(otherRoutes.marketplace) // I don't lose the const type, so I have autocompletion here, and I can use any string as key, so it can lead to errors