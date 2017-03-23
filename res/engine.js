var money,item1,item2,item3,manager1,manager2,manager3 = new Number();
var Data = localStorage.getItem("glord-data");
//These all were dutluk, next time they will be using something delicious nomoomonomonom!
//Kookiies
if (Data == null){

  money=0,item1=10,item2=0,item3=0,manager1=0,manager2=0,manager3=0;
  localStorage.setItem("glord-data",[[money,item1,item2,item3,manager1,manager2,manager3]]);
} else {
  var arrayed = Data.split(',');
  money=Math.round(arrayed[0]),item1=Math.round(arrayed[1]),item2 = Math.round(arrayed[2]),item3=Math.round(arrayed[3]),manager1=Math.round(arrayed[4]),manager2=Math.round(arrayed[5]),manager3=Math.round(arrayed[6]);
}
//Initializing
setInterval(numbermaster5k, 1000);
setInterval(purchaseable, 250);
setInterval(autoSave, 1000);
//Autosave
function autoSave(){
  localStorage.setItem("glord-data",[Math.round(money),Math.round(item1),Math.round(item2),Math.round(item3),Math.round(manager1),Math.round(manager2),Math.round(manager3)]);
}
//Manual Churning
$("#addonebtn").click(function(e){
  e.preventDefault();
  addone();
});
function addone(){
  money++;
  writer();
}

//Price Calculator
function priceCalc(value){
  return Math.round(15*(Math.pow(1.15,value)));
}
//Writer
function writer(){
  $("#item1").html('<i class="fa fa-certificate"></i> '+item1);
  $("#item2").html('<i class="fa fa-cube"></i> '+item2);
  $("#item3").html('<i class="fa fa-eercast"></i> '+item3);
  if(manager1==1) $("#manager1").html('HIRED 1hap/sn');
  var rounded=Math.round(money);
  if(rounded<999){
    banksy('GEARS',rounded);
  } else {
    var abbrivated=numeral(rounded).format('0.0a');
    banksy('GEARS',abbrivated);
  }
}
function banksy(text,number){
    $("#main .jtron").html('<i class="fa fa-usd" aria-hidden="true"></i> '+number);
    document.title= number + ' | GLORD';
}
//Machine Availability
var item1buy = document.getElementById("item1buy");
var item1sell = document.getElementById("item1sell");
var item2buy = document.getElementById("item2buy");
var item2sell = document.getElementById("item2sell");
var item3buy = document.getElementById("item3buy");
var item3sell = document.getElementById("item3sell");
var managerbutton1 = document.getElementById("manager1");
function purchaseable(){
  if (money>=100){
      item1buy.disabled = false;
      }
      else {
        item1buy.disabled = true;
      }
  if (item1>0){
      item1sell.disabled = false;
      }
      else {
      item1sell.disabled = true;
      }
  if (money>=1100){
      item2buy.disabled = false;
      }
      else {
        item2buy.disabled = true;
      }
  if (item2>0){
      item2sell.disabled = false;
      }
      else {
      item2sell.disabled = true;
      }
  if (money>=12000){
      item3buy.disabled = false;
      }
      else {
        item3buy.disabled = true;
      }
  if (item3>0){
      item3sell.disabled = false;
      }
      else {
      item3sell.disabled = true;
      }
  if (money>1000000){
      managerbutton1.disabled = false;
      }
      else {
      managerbutton1.disabled = true;
      }
}
//Drug Purchase
$("#item1sell").click(function(e){
  e.preventDefault();
  if (item1>0){
    item1--;
    money+=12;
  }
  writer();
});
$("#item1buy").click(function(e){
  e.preventDefault();
  if (money>=100){
    item1+=10;
    money-=100;
  }
  writer();
});
$("#item2sell").click(function(e){
  e.preventDefault();
  if (item2>0){
    item2--;
    money+=120;
  }
  writer();
});
$("#item2buy").click(function(e){
  e.preventDefault();
  if (money>=1100){
    item2+=10;
    money-=1100;
  }
  writer();
});
$("#item3sell").click(function(e){
  e.preventDefault();
  if (item3>0){
    item3--;
    money+=1300;
  }
  writer();
});
$("#item3buy").click(function(e){
  e.preventDefault();
  if (money>=12000){
    item3+=10;
    money-=12000;
  }
  writer();
});
//Manager Purchase
$("#manager1").click(function(e){
  e.preventDefault();
  if (money>=1000000){
    manager1=1;
    money-=1000000;
  }
  writer();
});
//Patented Number Master 5000!
function timing(){
  setInterval(numbermaster5k, 1000);
}
function numbermaster5k(){
  if(manager1==1){
    if(item1>0) manager1work();
  }
  writer();
}
//Machines Producing
function manager1work(){
  if (item1>0){
    item1--;
    money+=12;
  }
}
