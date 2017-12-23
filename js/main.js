new Vue({
    el: "#exercise",
    data: {
        link: "http://seocoaching.co/wp-content/uploads/2017/10/google-imagenes.png",
        name: "Camilo",
        age: 23
    },
    methods: {
        ageTimes3: function () {
            return this.age*3
        }
    }
});