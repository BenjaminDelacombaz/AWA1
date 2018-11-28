var controller = new ScrollMagic.Controller()

var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1"
})
.setTween(".divimage", 0.5, {opacity: 1})
.addIndicators({name: "1 (duration: 0)"})
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#parallax1", 
    duration: "200%",
    triggerHook: "onEnter"
})
.setTween(".onePara", {y: "80%", ease: Linear.easeNone})
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#parallax2", 
    duration: "200%",
    triggerHook: "onEnter"
})
.setTween(".twoPara", {y: "50%", ease: Linear.easeNone})
.addTo(controller);
