import React from 'react';
import WebView from 'react-native-webview';
import Canvas, { Image } from 'react-native-canvas';
import testSvg from './assets/images/test';

// var i = [0,0,0,0,0,0,0,0,0,0];
// var lastTime = 0;

// export default function App() {

//   const handleFrame = (
//     canvas: Canvas,
//     image: Image,
//     time: number
//   ) => {
//     const frameTime = time - lastTime;
//     lastTime = time;
//     const fps = 1000 / frameTime;
//     console.log(fps);
//     const ctx = canvas.getContext('2d');
//     for (var level=0; level<10; level++) {
//       ctx.clearRect(i[level], level*10, level+1, 10);
//       ctx.drawImage(image, i[level]+level, level*10, 10, 10);
//       i[level] = (i[level]+level+1)%400;
//     }

//     requestAnimationFrame((time: number) => {handleFrame(canvas, image, time)});
// }

  // const handleCanvas = (canvas: Canvas): any => {
  //   if (canvas == null) {
  //     return;
  //   }
  //   const ctx = canvas.getContext('2d');
  //   ctx.clearRect(0, 0, 400, 100)
  //   const image = new Image(canvas);
  //   image.src = testSvg();
  //   image.addEventListener('load', () => {
  //     handleFrame(canvas, image, performance.now());
  //   });
  // }

  // return (
  //   <Canvas ref={handleCanvas}/>
  // );
export default function App() {
  return <WebView source={{ html: '<html>'+
'  <head>' +
'    <title>SVG file on HTML Canvas </title>' +
'  </head>' +
'  <body>' +
'    <img id="image" src="https://www.flaticon.com/svg/static/icons/svg/1170/1170611.svg" height="100", width="100"></img>' +
'    <canvas id="canvas" style="border:2px solid green;" width="400" height="400"></canvas>' +
'    <script>' +
'var image = document.getElementById("image");' +
'var i = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];' +
'var lastTime = 0;' +
'' +
'function handleFrame(canvas, image, time) {' +
'    const frameTime = time - lastTime;' +
'    lastTime = time;' +
'    const fps = 1000 / frameTime;' +
'    const ctx = canvas.getContext("2d");' +
'    ctx.clearRect(0, 0, 400, 400);' +
'    const h = 20;' +
'    for (var level=0; level<400/h; level++) {' +
'      ctx.drawImage(image, i[level]+level, level*h, h, h);' +
'      i[level] = (i[level]+level+1)%400;' +
'    }' +
// '' +
'    requestAnimationFrame((time) => {handleFrame(canvas, image, time)});' +
'}' +
'' +
'const handleCanvas = () => {' +
'    const canvas = document.getElementById("canvas");' +
'    const ctx = canvas.getContext("2d");' +
'    ctx.clearRect(0,0,400,400);' +
// '    ctx.beginPath();' +
// '    ctx.rect(20, 20, 150, 100);' +
// '    ctx.stroke();' +
'    setTimeout(() => {' +
'    ctx.beginPath();' +
'    ctx.rect(20, 20, 150, 100);' +
'    ctx.stroke();' +
'      handleFrame(canvas, image, performance.now());' +
'    }, 10);' +
'};' +
'' +
'handleCanvas();' +
'    </script>' +
'  </body>' +
'</html>'}}

/>
}