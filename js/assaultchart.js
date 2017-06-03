//linechart coding using d3
//color for the lines in the bargraph
var color = d3.scale.ordinal()
           .range(["purple","lightgreen"]);
//using function
    function Chart() { 
         var data = [   {"Year":2001,"Arrested":6611,"Not_Arrested":22527},
                        {"Year":2002,"Arrested":6732,"Not_Arrested":22487},
                        {"Year":2003,"Arrested":6341,"Not_Arrested":20852},
                        {"Year":2004,"Arrested":6349,"Not_Arrested":19945},
                        {"Year":2005,"Arrested":6020,"Not_Arrested":18683},
                        {"Year":2006,"Arrested":5752,"Not_Arrested":17988},
                        {"Year":2007,"Arrested":6003,"Not_Arrested":18232},
                        {"Year":2008,"Arrested":4754,"Not_Arrested":18545},
                        {"Year":2009,"Arrested":5184,"Not_Arrested":15923},
                        {"Year":2010,"Arrested":4605,"Not_Arrested":15321},
                        {"Year":2011,"Arrested":4780,"Not_Arrested":14200},
                        {"Year":2012,"Arrested":4498,"Not_Arrested":14095},
                        {"Year":2013,"Arrested":4143,"Not_Arrested":12497},
                        {"Year":2014,"Arrested":4191,"Not_Arrested":11565},
                        {"Year":2015,"Arrested":3809,"Not_Arrested":12245},
                        {"Year":2016,"Arrested":859,"Not_Arrested":3800}];

        color.domain(d3.keys(data[0]).filter(function(key) { return key !== "Year"; }));
//sorting the Year
      data.sort(function(a,b){
          return a.Year - b.Year;
      });
      //passing ID to display and styles for linechart
        var vis = d3.select("#visualisation"),
            WIDTH = 700,
            HEIGHT = 300,
            MARGINS = {
                top: 20,
                right: 150,
                bottom: 20,
                left: 70
            },
         xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([2000, 2016]),
         yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([500, 25000]),
            xAxis = d3.svg.axis()
            .scale(xScale),
            yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");
        //appending the svg element
        vis.append("svg:g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
            .call(xAxis);
        vis.append("svg:g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + (MARGINS.left) + ",0)")
            .call(yAxis);
        var lineGen = d3.svg.line()
            .x(function(d) {
                return xScale(d.Year);
            })
            .y(function(d) {
                return yScale(d.Arrested);
            })
            .interpolate("basis");
        vis.append('svg:path')
            .attr('d', lineGen(data))
            .attr('stroke', 'purple')
            .attr('stroke-width', 3)
            .attr('fill', 'none');
        var lineGen = d3.svg.line()
            .x(function(d) {
                return xScale(d.Year);
            })
            .y(function(d) {
                return yScale(d.Not_Arrested);
            })
            .interpolate("basis");
        vis.append('svg:path')
            .attr('d', lineGen(data))
            .attr('stroke','lightgreen')
            .attr('stroke-width', 3)
            .attr('fill', 'none');
       //adding legends
        var legend = vis.selectAll(".legend")
        .data(color.domain().slice().reverse())
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

        legend.append("rect")
        .attr("x", WIDTH - 18)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color);

        legend.append("text")
        .attr("x", WIDTH - 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(function(d) { return d; });
    }
    Chart();

