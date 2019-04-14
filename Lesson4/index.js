//d3 expects to receive the data into an array format
//for the time being let's use a manually created data
const data = [
  {width:200, height: 100, fill: 'purple'},
  {width:100, height: 60, fill: 'pink'},
  {width:50, height: 30, fill: 'red'}
]

//get a reference of the svg
const svg = d3.select('svg');

//Now select the rect inside the svg
//While using arrow function if in the same line we do not need to use
// curly braces and paranthesis

//for one attributes no need to use paranthesis for d
//const rect = svg.select('rect') // currently first element selected by default
const rect = svg.selectAll('rect')
  .data(data)
  .attr('width', (d, i, n) =>  d.width)
  .attr('height', d => d.height)
  .attr('fill', d => d.fill);
//Note when using the arrow function the this keyword returns the window
//instead of the element
//but we can use n[i] to get the element as same way as a function
