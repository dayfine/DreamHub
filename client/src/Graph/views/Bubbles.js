import React, { Component } from 'react';
import * as d3 from 'd3';
import { select } from 'd3-selection';
import { schemePastel2 } from 'd3-scale-chromatic';

class Bubbles extends Component {
  constructor(props) {
    super(props);
    this.renderBubbles = this.renderBubbles.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
  }

  renderBubbles(data, selection) {
    const { width, height } = this.props;
    const columnForRadius = "priority";
    const columnForColors = "status";
    const svg = d3.select("svg");

    const colorCircles = d3.scaleOrdinal(schemePastel2);
    const scaleRadius = d3.scaleLinear().domain([d3.min(data, function(d) {
          return +d[columnForRadius];
        }), d3.max(data, function(d) {
          return +d[columnForRadius];
        })]).range([10, 100])

    const self = this;

    const bubbles = svg.selectAll('svg')
      .data(data)
      .enter()
      .append("circle")
      .attr('r', function(d) {
        return scaleRadius(d[columnForRadius])
      })
      .style("fill", function(d) {
        return colorCircles(d[columnForColors])
      })
      .attr('transform', 'translate(' + [width / 2, height / 2] + ')')
      .on("mouseover", function(d) {
        // tooltip.html(`Title ${d.title} <br> priority: ${d[columnForRadius]} <br> status: ${d[columnForColors]}`);
        // return tooltip.style("visibility", "visible");
        self.mouseOver(this, d, tooltip)
      })
      .on("mousemove", function() {
        return tooltip.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
      })
      .on("mouseout", function() {
        return tooltip.style("visibility", "hidden");
      })
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended))

    const tooltip = d3.select('#bubblechart')
      .append("div")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("color", "white")
      .style("padding", "8px")
      .style("background-color", "#626D71")
      .style("border-radius", "6px")
      .style("text-align", "center")
      .style("font-family", "monospace")
      .style("width", "300px")
      .text("");

    const simulation = d3.forceSimulation(data)
      .force("charge", d3.forceManyBody().strength([-600]))
      .force("x", d3.forceX())
      .force("y", d3.forceY())
      .on("tick", ticked);

    function ticked(e) {
      bubbles.attr("cx", function(d) {
        return d.x + 10;
      })
      .attr("cy", function(d) {
        return d.y;
      });
    }

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(1).restart();
      d.fx = d.x;
      d.fy = d.y;
      // return tooltip.style("visibility", "hidden");
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
      // return tooltip.style("visibility", "hidden");
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }

    mouseOver(elem, d, tip) {
      console.log(elem, d)
      tip.html(d.title);
      return tip.style("visibility", "visible");
  }

  componentDidMount() {
    const { tasks } = this.props;
    console.log(tasks)
    if (tasks && tasks.length) this.renderBubbles(tasks);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tasks !== this.props.tasks) {
      this.renderBubbles(nextProps.tasks)
    }
  }

  shouldComponentUpdate() { return true }

  render() {
    const { width, height } = this.props;
    return (
      <svg ref={node => this.node = node} width={ width } height={ height } />
    )
  }
}

export default Bubbles;
