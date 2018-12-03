Vue.component('listeVehicules', {
    props: ['vehicule'],
    template: '<li class="men-itm">{{ vehicule.titre }}<i :class="getIconFromCat(vehicule.cat)" aria-hidden="true"></i></li>',
    methods: {
        getIconFromCat (catName) {
            switch (catName) {
                case 'velo':
                    return 'fa fa-bicycle my-green'
                
                case 'voiture':
                    return 'fa fa-car my-orange'

                case 'moto':
                    return 'fa fa-motorcycle my-darkblue'

                case 'van':
                    return 'fa fa-bus my-red'
            }
        }
    }
})

Vue.component('detailVehicule', {
    props: ['vehicule'],
    template: `<div><div class="animdroite" id="titre">{{ vehicule.titre }}</div>
    <div class="animdroite" id="introduction">{{ vehicule.introduction }}</div>
    <div class="animdroite" id="image">
        <img :src="vehicule.image" width="400px">
        <i :class="getIconFromCat(vehicule.cat)" aria-hidden="true"></i>
    </div>
    <div class="animdroite" id="description">{{ vehicule.description }}</div>
    <button  class="animdroite" id="reserver">RESERVER</button></div>`,
    methods: {
        getIconFromCat (catName) {
            switch (catName) {
                case 'velo':
                    return 'fa fa-bicycle my-green'
                
                case 'voiture':
                    return 'fa fa-car my-orange'

                case 'moto':
                    return 'fa fa-motorcycle my-darkblue'

                case 'van':
                    return 'fa fa-bus my-red'
            }
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        vehicules: listeVehicules
    }
})
