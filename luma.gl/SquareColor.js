mport {AnimationLoop, Program, VertexArray, Buffer, setParameters} from 'luma.gl';
import {Matrix4} from 'math.gl';

const VERTEX_SHADER = `\
attribute vec3 positions;
attribute vec4 colors;
uniform mat4 uMVMatrix; // view matrix
uniform mat4 uPMatrix;  // projection matrix 
varying vec4 vColor;
void main(void) {
  gl_Position = uPMatrix * uMVMatrix * vec4(positions, 1.0);
  vColor = colors;
}
`;

const FRAGMENT_SHADER = `\
precision highp float;
varying vec4 vColor;
void main(void) {
  gl_FragColor = vColor;
}
`;

const animationLoop = new AnimationLoop({
  onInitialize({gl, aspect, canvas}) {
    const SQUARE_VERTS = [1, 1, 0,  -1, 1, 0,  1, -1, 0,  -1, -1, 0];
    const SQUARE_COLORS = [0.5, 0.5, 1, 1, 0.5, 0.5, 1, 1, 0.5, 0.5, 1, 1, 0.5, 0.5, 1, 1];
    const program = new Program(gl, {
      vs: VERTEX_SHADER,
      fs: FRAGMENT_SHADER
    });
    
    const squareVertexArray = new VertexArray(gl, {
      program,
      attributes: {
        positions: new Buffer(gl, {data: new Float32Array(SQUARE_VERTS)}),
        colors: new Buffer(gl, {data: new Float32Array(SQUARE_COLORS)})
      }
    });
    
    const view = new Matrix4().translate([-1.5, 0, -7]);
    const projection = new Matrix4().perspective({aspect});
    
    setParameters(gl, {
      clearColor: [0, 0, 0, 1],
      clearDepth: [1],
      depthTest: true,
      depthFunc: gl.LEQUAL
    });
    
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    
    program.draw({
      vertexArray: squareVertexArray,
      uniforms: {
        uMVMatrix: view,
        uPMatrix: projection
      },
      drawMode: gl.TRIANGLE_STRIP,
      vertexCount: 4
    });
  }
});

animationLoop.getInfo = () => INFO_HTML;

export default animationLoop;


if (!window.website) {
  animationLoop.start();
}
