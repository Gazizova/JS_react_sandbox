function CoffeeMachine(power, waterMax) {

    this.waterAmount = 0; // количество воды в кофеварке
    let innerWaterAmount = 0;
    const WATER_HEAT_CAPACITY = 4200;
    let timerId = 0;
    this.time = 0;
    alert( 'Создана кофеварка мощностью: ' + power + ' ватт' );

    this.setWaterAmount =function(amount){
        if(amount < 0){
            throw new Error("Значение должно быть положительным")
        }if(amount > waterMax){
            throw new Error("Нельзя залить воды больше чем "+ waterMax +" мл")
        }
        innerWaterAmount = amount;
    }
    this.setOnReady =function(f){
        if(f)onReady = f;
    }
    this.addWater = function(amount){
        let checkWater = innerWaterAmount + amount;
        console.log("итого " +checkWater+ " мл воды")
       this.setWaterAmount(innerWaterAmount+amount)
    }

    this.getWaterAmount = function(){
        return innerWaterAmount
    }
    
    this.getPower = function(){
        return power;
    }
    this.isRunning=function(){

    }
    function getBoilTime(){
        let time = innerWaterAmount*WATER_HEAT_CAPACITY*80/power;
        console.log(time)
        return time;
    }
 
    function onReady(){
        return alert("Кофе готов!")
    }
    

    this.run = function(){
        setTimeout(function(){onReady();}, getBoilTime())
    }

    this.stop= function(){
        clearTimeout(timerId);
    }

  }
  
  // создать кофеварку
  var coffeeMachine = new CoffeeMachine(50000, 500);
    coffeeMachine.setWaterAmount(100);
    coffeeMachine.addWater(200);
    // coffeeMachine.waterAmount = 600;
    coffeeMachine.run();
  coffeeMachine.stop();

function User(){
    let firstName;
    let surname;

    this.setFirstName = function(name){
        if(typeof(name)!='string'){
            throw new Error("Имя не должно содержать цифры")
        }
        firstName = name;
    }
    this.setSurname=function(name){
        if(typeof(name)!='string'){
            throw new Error("Фамилия не должна содержать цифры")
        }
        surname = name;
    }
    this.getFullName=function(){
        if(firstName && surname){
        return firstName + " " + surname
        }
        if(!surname){
            return firstName
        }
        if(!firstName) {
            return surname;
        }
    }

}

const user = new User();
user.setFirstName("Вася");
// user.setSurname("Вася");
alert(user.getFullName())

function showName(firstName, lastName, ...rest) {
    alert(firstName + ' ' + lastName + ' - ' + rest);
  }
  
  // выведет: Юлий Цезарь - Император,Рима
  showName("Юлий", "Цезарь", "Император", "Рима","Император", "Рима");