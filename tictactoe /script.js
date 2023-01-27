var turn=0
var player = "-"
function winnerhorizontal(id,player){
  const strike_ids = []
  var count=0
  var strid = id.toString()
  var rowid = strid[0]
  
  for(let i=1;i<4;i++){
    var cur_id = rowid.concat(i.toString())
    if(strid!=cur_id){
      var btn = document.getElementById(cur_id)
      if(btn.value == player){
        strike_ids.push(cur_id)
        count += 1
      }
      else{
        return 0
      }
    }
  }
  if(count==2){
    strike_ids.push(strid)
    return [1,strike_ids]
  }
}
function winnervertical(id){
  const strike_ids = []
  var count=0
  var strid = id.toString()
  var col_id = strid[1]
  for(let i=1;i<4;i++){
    var cur_id = i.toString().concat(col_id)
    if(strid!=cur_id){
      var btn = document.getElementById(cur_id)
      if(btn.value == player){
        strike_ids.push(cur_id)
        count += 1
      }
      else{
        
        return 0
      }
    }
  }
  if(count==2){
    strike_ids.push(strid)
    return [1,strike_ids]
  }
  
  
}
function winnerdiagonal(id,player){
  const strike_ids1 = []
  const strike_ids2 = []
  const strike_ids3 = []
  var count=0
  var strid = id.toString()
  if((strid == "11") || (strid == "33")){
    for (let i=1;i<4;i++){
      var cur_id = i.toString().concat(i.toString())
      if(strid!=cur_id){
        var btn = document.getElementById(cur_id)
        if(btn.value == player){
          strike_ids1.push(cur_id)
          count += 1
        }
        else{
          return 0
        }
      }
    }
  }
  else if ((strid == "13") || (strid == "31")){
    newstrid = strid.split('').reverse().join('')
    console.log(strid)
    console.log(newstrid)
    var btn1 = document.getElementById(newstrid)
    var btn2 = document.getElementById(strid)
    var btn3 = document.getElementById("22")
    console.log(btn1.value)
    console.log(btn2.value)
    console.log(btn3.value)
    if((btn1.value == btn2.value) && (btn2.value == btn3.value)){
      strike_ids2.push("13","22","31")
      return [1,strike_ids2]
    }
    else
      return 0
  }
  else if(strid == "22"){
    var btn1 = document.getElementById("13")
    var btn2 = document.getElementById("22")
    var btn3 = document.getElementById("31")
    var btn4 = document.getElementById("11")
    var btn5 = document.getElementById("33")
    if((btn1.value == btn2.value) && (btn1.value == btn3.value)){
      strike_ids3.push("13","22","31")
      return [1,strike_ids3]
    }
    else if((btn2.value == btn4.value) && (btn2.value == btn5.value)){
      strike_ids3.push("11","22","33")
      return [1,strike_ids3]
    }
    else{
      return 0
    }
  }
  if(count==2){
    strike_ids1.push(strid)
    return [1,strike_ids1]
  }
  else{
    return 0
  }
}
function displaywinner(player,elements){
  if(player=="X"){
  document.getElementById("p1").innerHTML = "PLAYER ONE WINS"
  document.getElementById("p1").style.animation = 'blinker 1s linear infinite'
  }
  else
  {
    document.getElementById("p2").innerHTML = "PLAYER TWO WINS"
    document.getElementById("p2").style.animation = 'blinker 1s linear infinite'
  }
  for (let i=0;i<elements.length;i++){
    console.log(document.getElementById(elements[i]).style.animation = 'blinker 1s linear infinite')
  }
}
function draw(){
  document.getElementById("p3").hidden = false;
  document.getElementById("p3").innerHTML = "Match Ends in A Draw"
}
function disableinput(){
  for(let i=1;i<4;i++){
    for(let j=1;j<4;j++){
      var id = i.toString().concat(j.toString())
      document.getElementById(id).disabled = true; 
    }
  }
}
function myfunction(id) {
  var flag = 0
  var btn = document.getElementById(id.toString())
  btn.disabled = true
  if(turn%2==0){
    btn.value = "X"
    player = "X"
    btn.style.backgroundColor = '#7FC792'
  }
  else{
    btn.value = "O"
    player = "O"
    btn.style.backgroundColor = '#7ED7DE'
  }
  var hz = winnerhorizontal(id,player);
  var vt = winnervertical(id,player);
  var dg = winnerdiagonal(id,player);

  if(hz[0]){
    displaywinner(player,hz[1])
    disableinput()
    flag=1
  }
  if(vt[0]){
    displaywinner(player,vt[1])
    disableinput()
    flag=1
  }
  if(dg[0]){
    displaywinner(player,dg[1])
    disableinput()
    flag=1
  }
  turn += 1
  if((turn == 9) && (flag == 0)){
    draw()
  }
}
