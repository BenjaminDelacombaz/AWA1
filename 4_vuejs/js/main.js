Vue.component('listeVehicules', {
    props: ['vehicule'],
    template: '<li class="men-itm" @click="changeVehicule(vehicule.id)">{{ vehicule.titre }}<i :class="getIconFromCat(vehicule.cat)" aria-hidden="true"></i></li>',
    methods: {
        changeVehicule (id) {
            const tl = new TimelineLite();
            tl.add(TweenMax.staggerTo(".animdroite",.4, {x:300, autoAlpha: 0, ease:Power1.easeIn, onComplete: () => {
                this.$emit('click', id)
                tl.add(TweenMax.staggerTo(".animdroite",1, {x:0, autoAlpha: 1, ease:Power4.easeOut},0.03));
            }},0.02));
            $(".men-itm").mouseup( function() {         
                tl.restart();        
            })
        },
        getIconFromCat(cat) {
            return this.$parent.getIconFromCat(cat)
        }
    }
})

Vue.component('detailVehicule', {
    props: ['vehicules', 'selected'],
    template: `<div><div class="animdroite" id="titre">{{ vehicules[selected].titre }}</div>
    <div class="animdroite" id="introduction">{{ vehicules[selected].introduction }}</div>
    <div class="animdroite" id="image">
        <img :src="vehicules[selected].image" width="400px">
        <i :class="getIconFromCat(vehicules[selected].cat)" aria-hidden="true"></i>
    </div>
    <div class="animdroite" id="description">{{ vehicules[selected].description }}</div>
    <button  class="animdroite" id="reserver">RESERVER</button></div>`,
    methods: {
        getIconFromCat(cat) {
            return this.$parent.getIconFromCat(cat)
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        vehicules: listeVehicules,
        selected: 0
    },
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
