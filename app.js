new Vue({
    el: '#app',
    data: {
        title:  'Becoming a Vue developer',
        name:   'Shabab'
    },
    methods: {
        greet(time){
            return `Hello there ${this.name}! Good ${time}`
        }
    }
})