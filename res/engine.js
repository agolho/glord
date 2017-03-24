var money,item1,item2,item3,item4,item5,item6,manager1,manager2,manager3,manager4,manager5,manager6 = new Number();
var Data = localStorage.getItem("glord-data");
//These all were dutluk, next time they will be using something delicious nomoomonomonom!
//Kookiies
if (Data == null){

  money=0,item1=10,item2=0,item3=0,item4=0,item5=0,item6=0,manager1=0,manager2=0,manager3=0,manager4=0,manager5=0,manager6=0;
  localStorage.setItem("glord-data",[[money,item1,item2,item3,manager1,manager2,manager3]]);
} else {
  var arrayed = Data.split(',');
  money=Math.round(arrayed[0]),item1=Math.round(arrayed[1]),item2 = Math.round(arrayed[2]),item3=Math.round(arrayed[3]),manager1=Math.round(arrayed[4]),manager2=Math.round(arrayed[5]),manager3=Math.round(arrayed[6]),item4=Math.round(arrayed[7]),item5 = Math.round(arrayed[8]),item6=Math.round(arrayed[9]),manager4=Math.round(arrayed[10]),manager5=Math.round(arrayed[11]),manager6=Math.round(arrayed[12]);
}
//Initializing
setInterval(numbermaster5k, 1000);
setInterval(purchaseable, 250);
setInterval(autoSave, 1000);
//Autosave
function autoSave(){
  localStorage.setItem("glord-data",[Math.round(money),Math.round(item1),Math.round(item2),Math.round(item3),Math.round(manager1),Math.round(manager2),Math.round(manager3),Math.round(item4),Math.round(item5),Math.round(item6),Math.round(manager4),Math.round(manager5),Math.round(manager6)]);
}
//Delete
$("#deleteData").click(function(e){
  e.preventDefault();
  localStorage.removeItem("glord-data");
  money=0,item1=10,item2=0,item3=0,item4=0,item5=0,item6=0,manager1=0,manager2=0,manager3=0,manager4=0,manager5=0,manager6=0;
});
//Dev Settings
$("#newItemReset").click(function(e){
  e.preventDefault();
  item4=0,item5=0,item6=0,manager2=0,manager3=0,manager4=0,manager5=0,manager6=0;
});
$("#addFunds").click(function(e){
  e.preventDefault();
  money+=1000000;
});
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
  $("#item4").html('<i class="fa fa-bolt"></i> '+item4);
  $("#item5").html('<i class="fa fa-bomb"></i> '+item5);
  $("#item6").html('<i class="fa fa-eye"></i> '+item6);
  if(manager1==1) $("#manager1").html('<i class="fa fa-certificate"></i> Çalışıyor Gevşek Süleyman · 1hap/sn');
  if(manager2==1) $("#manager2").html('<i class="fa fa-cube"></i> Çalışıyor Çakal Furkan · 1 küp/sn');
  if(manager3==1) $("#manager3").html('<i class="fa fa-eercast"></i> Çalışıyor Dümen Yusuf · 1 torba/sn');
  if(manager4==1) $("#manager4").html('<i class="fa fa-bolt"></i> Çalışıyor Arap Lawrence · 1 bolt/sn');
  if(manager5==1) $("#manager5").html('<i class="fa fa-bomb"></i> Charles Ponzi · 1 bomba/sn');
  if(manager6==1) $("#manager6").html('<i class="fa fa-eye"></i> Çalışıyor Sülün Osman · 1 nirvana/sn');

  var rounded=Math.round(money);
  if(rounded<999999){
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
var item4buy = document.getElementById("item4buy");
var item4sell = document.getElementById("item4sell");
var item5buy = document.getElementById("item5buy");
var item5sell = document.getElementById("item5sell");
var item6buy = document.getElementById("item6buy");
var item6sell = document.getElementById("item6sell");
var managerbutton1 = document.getElementById("manager1");
var managerbutton2 = document.getElementById("manager2");
var managerbutton3 = document.getElementById("manager3");
var managerbutton4 = document.getElementById("manager4");
var managerbutton5 = document.getElementById("manager5");
var managerbutton6 = document.getElementById("manager6");

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
      if (money>=130000){
          item4buy.disabled = false;
          }
          else {
            item4buy.disabled = true;
          }
      if (item4>0){
          item4sell.disabled = false;
          }
          else {
          item4sell.disabled = true;
          }
      if (money>=1400000){
          item5buy.disabled = false;
          }
          else {
            item5buy.disabled = true;
          }
      if (item5>0){
          item5sell.disabled = false;
          }
          else {
          item5sell.disabled = true;
          }
      if (money>=20000000){
          item6buy.disabled = false;
          }
          else {
            item6buy.disabled = true;
          }
      if (item6>0){
          item6sell.disabled = false;
          }
          else {
          item6sell.disabled = true;
          }
if (money>1000000){
    managerbutton1.disabled = false;
    }
    else {
    managerbutton1.disabled = true;
    }
if (money>5000000){
    managerbutton2.disabled = false;
    }
    else {
    managerbutton2.disabled = true;
    }
if (money>10000000){
    managerbutton3.disabled = false;
    }
    else {
    managerbutton3.disabled = true;
    }
if (money>20000000){
    managerbutton4.disabled = false;
    }
    else {
    managerbutton4.disabled = true;
    }
if (money>40000000){
    managerbutton5.disabled = false;
    }
    else {
    managerbutton5.disabled = true;
    }
if (money>80000000){
    managerbutton6.disabled = false;
    }
    else {
    managerbutton6.disabled = true;
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
$("#item4sell").click(function(e){
  e.preventDefault();
  if (item4>0){
    item4--;
    money+=14000;
  }
  writer();
});
$("#item4buy").click(function(e){
  e.preventDefault();
  if (money>=130000){
    item4+=10;
    money-=130000;
  }
  writer();
});
$("#item5sell").click(function(e){
  e.preventDefault();
  if (item5>0){
    item5--;
    money+=150000;
  }
  writer();
});
$("#item5buy").click(function(e){
  e.preventDefault();
  if (money>=1400000){
    item5+=10;
    money-=1400000;
  }
  writer();
});
$("#item6sell").click(function(e){
  e.preventDefault();
  if (item6>0){
    item6--;
    money+=2100000;
  }
  writer();
});
$("#item6buy").click(function(e){
  e.preventDefault();
  if (money>=20000000){
    item6+=10;
    money-=20000000;
  }
  writer();
});
//Manager Purchase
$("#manager1").click(function(e){
  e.preventDefault();
  if(manager1=0){
    if (money>=1000000){
      manager1=1;
      money-=1000000;
    }
    writer();
  }
});
$("#manager2").click(function(e){
  e.preventDefault();
  if(manager2=0){
  if (money>=5000000){
    manager2=1;
    money-=5000000;
  }
  writer();
}
});
$("#manager3").click(function(e){
  e.preventDefault();
  if(manager3=0){
  if (money>=10000000){
    manager3=1;
    money-=10000000;
  }
  writer();
  }
});
$("#manager4").click(function(e){
  e.preventDefault();
  if(manager4=0){
  if (money>=2000000){
    manager4=1;
    money-=2000000;
  }
  writer();
}
});
$("#manager5").click(function(e){
  e.preventDefault();
  if(manager5=0){
  if (money>=4000000){
    manager5=1;
    money-=4000000;
  }
  writer();
}
});
$("#manager6").click(function(e){
  e.preventDefault();
  if(manager6=0){
  if (money>=8000000){
    manager6=1;
    money-=8000000;
  }
  writer();
}
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
  if(manager2==1){
    if(item2>0) manager2work();
  }
  writer();
  if(manager3==1){
    if(item3>0) manager3work();
  }
  writer();
  if(manager4==1){
    if(item4>0) manager4work();
  }
  writer();
  if(manager5==1){
    if(item5>0) manager5work();
  }
  writer();
  if(manager6==1){
    if(item6>0) manager6work();
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
function manager2work(){
  if (item2>0){
    item2--;
    money+=120;
  }
}
function manager3work(){
  if (item3>0){
    item3--;
    money+=1300;
  }
}
function manager4work(){
  if (item4>0){
    item4--;
    money+=14000;
  }
}
function manager5work(){
  if (item5>0){
    item5--;
    money+=150000;
  }
}
function manager6work(){
  if (item6>0){
    item6--;
    money+=2100000;
  }
}
