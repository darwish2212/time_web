
function updateClock() {
  let now = new Date();
    let h = now.getHours()
    let m = now.getMinutes().toString().padStart(2, '0');
    let s = now.getSeconds().toString().padStart(2, '0');
    let options = { year: 'numeric', day: 'numeric',month: 'long'  };
    let d = now.toLocaleDateString('en-US', options); 
   h = h % 12;
   h = h ? h : 12; 
   h = h.toString().padStart(2, '0');

 
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
    document.getElementById("date").textContent = d;
  }
  
  updateClock();
  setInterval(updateClock, 1000);

 


  