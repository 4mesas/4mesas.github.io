<script>
  import * as d3 from "d3";

  let svgElement;
  let time = [0];

  const interval = setInterval(() => {
    render(time);
    time[0]++;
    if (time[0] > 1000) {
      clearInterval(interval);
    }
  }, 25);

  function render(time) {
    const w = 100;
    const h = 200;
    const g = d3.select(svgElement).select("g");

    const x = ((Math.sin(time[0]*0.1) + 1)/2) * w;
    g.selectAll("circle")
      .data(time)
      .join("circle")
      .style("stroke", "none")
      .style("fill", "var(--colmain)")
      .attr("cx", w/2 + x)
      .attr("cy", h)
      .attr("r", 15)
  }
</script>
<div class="background-container">
  <svg bind:this={svgElement} width="400px" height="400px">
    <g></g>
  </svg>
</div>