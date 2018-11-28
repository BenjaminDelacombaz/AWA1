var tl = new TimelineLite()

tl.staggerFrom("#codegauche", 1, {drawSVG: 0})
tl.staggerFrom("#codecentre", 1, {drawSVG: 0})
tl.staggerFrom("#codedroite", 1, {drawSVG: 0})

tl.to("#codegauche", 1, {morphSVG:"#screengauche"}, "+=0.5")
tl.to("#codedroite", 1, {morphSVG:"#screendroite"}, "-=0.5")
tl.to("#codecentre", 1, {morphSVG:"#screencentre"}, "-=0.5")
