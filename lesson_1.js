let hello = 'hello!';
let user = '  tora963';

// function callName(call,name){
  
//   console.log(call + '  '+  name + 'さん');
// }
// callName('hello！','tora963');

//jQueryの動作チェック
//＄はjQueryの短縮型
// $(document).ready(function (){
//   $('body').html('<h1>jQueryの動作チェック</h1>');
// });
$('#button_A').click(function(){
  document.write(this);
});
$('#button_B').click(function(){
  alert('B-button on Click!!');
});
function add(z,y){
  let num1 = z + y;
  return num1;
}
const addFunc = add;

function addPl(a,b){
  let num1 = addFunc(3,5);
  let num2 = a + b;
  console.log(num1 + num2);
  
}
addPl(1,2);

//Json構文
let humen =
{
  "name": "Tanaka",
  "age": 24,
  "seizin": true,
  "talk": function talk(){
    console.log("I talk joke!! HAHAHA");
  }

}
console.log(humen.age);

function Old(){
  console.log(humen.age + "歳");
  console.log(humen.age + 1 + "歳");
  if(humen.seizin==true){
    console.log('私は成人しています');
  }
  humen.talk();
}
Old();

    
      




