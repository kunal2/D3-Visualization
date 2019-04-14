//d3 expects to receive the data into an array format
//for the time being let's use a manually created data
const data = [
  {width:200, height: 100, fill: 'purple'}
]

//get a reference of the svg
const svg = d3.select('svg');

//Now select the rect inside the svg
const rect = svg.select('rect')
  .data(data)
  .attr('width', function(d) {return d.width})
  .attr('height', function(d) {return d.height})
  .attr('fill', function(d) {return d.fill});
