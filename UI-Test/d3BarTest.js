//test case checking for bar chart
describe ('the svg',function(){
    var svg = document.getElementsByTagName("svg");
    //checking the creation of svg
    it('svg should be created',function(){
        expect(svg.length).to.equal(1);
    });
    // check the condition that svg have rectangles
    it('svg have rectangles for bar chart',function(){
        expect(document.getElementsByTagName('rect')).to.not.be.null;
    });
    //function for getting svg
    function getSvg(){
        return d3.select('svg');
    }
});