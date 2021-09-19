function main(){
    /**
    * @type {HTMLCanvasElement} canvas
    */
    const canvas = document.getElementById('myCanvas');

    /**
    * @type {WebGLRenderingContext} gl
    */
    const gl = canvas.getContext('webgl');
 
    var vertices = [
        // balok kiri
        -0.7, 0.7,
        -0.7, -0.7,
        -0.35, -0.7,
        -0.35, -0.7,
        -0.35, 0.7,
        -0.7, 0.7,

        // balok kanan
        0.7, 0.7,
        0.7, -0.7,
        0.35, -0.7,
        0.35, -0.7,
        0.35, 0.7,
        0.7, 0.7,

        // balok miring
        -0.7, 0.7,
        0.35, -0.7,
        0.7, -0.7,
        0.7, -0.7,
        -0.35, 0.7,
        -0.7, 0.7,
    ];

    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShaderCode = document.getElementById("vertexShaderCode").textContent;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    var fragmentShaderCode = document.getElementById("fragmentShaderCode").textContent;

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    var aPosition = gl.getAttribLocation(shaderProgram, 'a_position');
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES, 0, 18);
 }