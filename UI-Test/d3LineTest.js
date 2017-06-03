//test case checking for line chart
describe ('the svg',function(){
    var svg = document.getElementsByTagName("svg");
    //checking the creation of svg
    it('svg should be created',function(){
        expect(svg.length).to.equal(1);
    });
    // check the condition that svg have line
    it('svg have rectangles for bar chart',function(){
        expect(document.getElementsByTagName('line')).to.not.be.null;
    });
    //function for getting svg
    function getSvg(){
        return d3.select('svg');
    } 
});