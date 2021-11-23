const el = document.getElementById('video');
navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>el.srcObject=stream);