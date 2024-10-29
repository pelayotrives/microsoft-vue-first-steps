const app = Vue.createApp({
    data() {
        return {
            product: {
                name: 'Cruise to the moon',
                description: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
                image: {
                    src: 'assets/cruise.jpg',
                    description: 'An astronaut floats outside the window while you sit in comfort',
                    style: { 'border-radius': '15px' },
                },
                cabins: [
                    { name: 'Coach', price: 125000 },
                    { name: 'Business', price: 275000 },
                    { name: 'First', price: 430000 },
                ]
            },
            booking: {
                cabinIndex: 0,
                notes: '',
                completed: false
            }
        }
    },
    // El campo computed es como data(), pero es para valores derivados que dependen de otros datos reactivos.
    // Es una función que devuelve un valor calculado basado en otros datos reactivos.
    // Vue almacena el resultado en caché, y solo recalcula el valor cuando los datos de los que depende han cambiado.
    computed: {
        bookingCabinDisplay() {
            const cabin = this.product.cabins[this.booking.cabinIndex];
            return `${cabin.name}: $ ${cabin.price.toLocaleString('en-US')}`
        }
    },
    // El campo methods es como data(), pero son funciones regulares en Vue que pueden realizar cualquier acción
    methods: {
        bookCabin() {
            this.booking.completed = true;
        }
    }
});
