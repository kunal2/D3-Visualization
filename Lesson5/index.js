//d3 expects to receive the data into an array format
//for the time being let's use a manually created data
const data = [
  {width:200, height: 100, fill: 'purple'},
  {width:100, height: 60, fill: 'pink'},
  {width:50, height: 30, fill: 'red'}
]

//get a reference of the svg
const svg = d3.select('svg');

//If there are more data in our array than elements(rectangles) in our html,
//Then d3 uses enter method to assign the data to virtual elements
//This is called enter method

//Join data to elements
const rects = svg.selectAll('rect')
  .data(data);

//add attrs to rects already in the dom
rects.attr('width', (d, i, n) =>  d.width)
  .attr('height', d => d.height)
  .attr('fill', d => d.fill);

//append the enter selection to DOM
rects.enter()
  .append('rect')
  .attr('width', (d, i, n) =>  d.width)
  .attr('height', d => d.height)
  .attr('fill', d => d.fill);
