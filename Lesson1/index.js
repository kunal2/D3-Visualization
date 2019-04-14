const canvas = d3.select(".canvas");
console.log(canvas)
/*const svg = canvas.append("svg");
//add attributes
svg.attr('height', 600);
svg.attr('width', 600);
*/

//append shapes to svg container
/*
svg.append('rect');
svg.append('circle');
svg.append('line');
*/
//method chaining
const svg = canvas.append("svg")
  .attr('height',600)
  .attr('width',600);

//Create Rectangle
svg.append('rect')
  .attr('width', 200)
  .attr('height', 100)
  .attr('fill', 'blue')
  .attr('x', 20)
  .attr('y', 20);

  //Create circle
  svg.append('circle')
    .attr('r', 50)
    .attr('cx', 300)
    .attr('cy', 70)
    .attr('fill', 'pink');

  //create the line
  svg.append('line')
    .attr('x1', 370)
    .attr('x2', 400)
    .attr('y1', 20)
    .attr('y2', 120)
    .attr('stroke', 'red')

    //Create text
  svg.append('text')
    .attr('x', 20)
    .attr('y', 200)
    .attr('fill', 'grey')
    .text('Hello world!')
    .style('font-family', 'arial');
