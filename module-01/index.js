// Script para instanciar Vue.js
const app = Vue.createApp({
    // Vue.js invoca el método data() y espera que le devuelva un objeto de JavaScript.
    data() {
        return {
            productName: 'Book a Cruise to the Moon',
            productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            productImage: 'assets/cruise.jpg',
            productImageDescription: 'An astronaut floats outside the window while you sit in comfort',
            productImageStyle: {
                'border-radius': '15px'
            }
        };
    }
}).mount('#app');

// Si no tuvieramos el .mount('#app'), montamos la aplicación en el DOM
// app.mount('#app');