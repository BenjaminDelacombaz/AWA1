var body = Snap("#romandie")

var cantons = body.selectAll(".canton")

var paper = Snap(200,200);

var total = 0

cantons.attr({
    stroke: "none"
})

cantons.forEach(canton => {
    // Generate data
    canton.name = canton.node.id
    canton.clh = Math.trunc(Math.random()* 1000)
    canton.clf = Math.trunc(Math.random()* 1000)
    
    total += canton.clh + canton.clf 

    canton.mouseover(result => {
        canton = body.select(`#${result.explicitOriginalTarget.id}`)
        canton.attr({
            stroke: "#cc4f4e",
            strokeWidth: 5
        })

        // Edit label
        document.getElementById("labelClient").innerText = `Clients ${canton.name}`

        // Edit arc
        let arc = (canton.clf + canton.clh) / total * 360
        var pie = paper.pie(100,100,30,80,0,arc).attr({fill:"red"});
            pie.stop().attr({start:0,end:0})
                .animate({start:0, end:arc}, 3000, mina.bounce);
        paper.prependTo(container);
    })
    canton.mouseout(mouseoverCantonsOut)
})

function mouseoverCantonsOut () {
     cantons.attr({
        stroke: "none"
    })
}
