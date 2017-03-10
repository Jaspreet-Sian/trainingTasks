

  var toArray = function() {
    let img= document.getElementById("image");
    console.log(img);
    // document.getElementById("arrayResult").appendChild(myImg);
    let canvas= document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    let context= canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    img.crossOrigin = 'anonymous';
    let Data = context.getImageData(0,0,canvas.width,canvas.height).data;
    var getBit=[];
    var intensityArr=[];
    // let i=0;
    console.log(Data);
    for(let i=0; i< Data.length; i+=4){
      // White Bits
      if(Data[i] >= 128){
        getBit.push("1");
      }
      // Black bits
      else{
        getBit.push("0");
      }
      // Luminisity method to find intesity
       let r = Data[i]/255;
       let g = Data[i + 1]/255;
       let b = Data[i + 2]/255;
       let intensity = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
      intensity= intensity.toFixed(1);
      if(intensity >= 0.5){
        intensity = Math.ceil(intensity);
      }
      else{
        intensity = Math.floor(intensity);
      }
      intensityArr.push(intensity);
    }
    console.log(intensityArr);

    document.getElementById("arrayResult").innerHTML= getBit;
  }
