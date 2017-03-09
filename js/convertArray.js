

  var toArray = function() {
    var img= document.getElementById("image");
    console.log(img);
    // document.getElementById("arrayResult").appendChild(myImg);
    var canvas= document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    console.log(canvas.width,"ww");
    var context= canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    img.crossOrigin = 'anonymous';
    var Data = context.getImageData(0,0,canvas.width,canvas.height).data;
    var i=0, getBit=[];
    console.log(Data.length/4);
    console.log(Data);
    for(i=0; i< Data.length; i+=4){
      if(Data[i] >= 128){
        getBit.push("1");
      }
      else{
        getBit.push("0");
      }
    }

    console.log(getBit.length,"kkk");
    document.getElementById("arrayResult").innerHTML= getBit;
  }
