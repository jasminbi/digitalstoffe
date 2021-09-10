export default function Sketch(p5) {
  let canvas

  p5.setup = () => {
    canvas = p5.createCanvas(p5.displayWidth, p5.displayHeight)
    canvas.position(0, 0).style("z-index", "-1")
    p5.noStroke()
  }

  p5.draw = () => {
    let y = p5.color("#FF00FF")

    p5.fill(y)
    p5.circle(60, 60, 0)

    // if (p5.mouseIsPressed) {
    //   p5.fill(p5.color("#FF77FF"))
    // } else {
    p5.fill(p5.color("#FF00FF"))
    // }
    p5.circle(p5.mouseX, p5.mouseY, 60, 60)
  }
}
