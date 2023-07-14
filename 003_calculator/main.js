function Calculadora() {
  this.display = document.querySelector(".display");

  this.start = function(){
    this.getClick();
  };

  this.btnDisplay = (e) => this.display.value += e; 

  this.clearDisplay = () => this.display.value = " ";

  this.delOne = () => this.display.value = this.display.value.slice(0, -1);
  
  this.realizaConta =  () => {
    const conta = eval(this.display.value);
    try {
      this.display.value = conta
    } 
    catch (e) {
        alert('Não foi possivel realizar a conta')
    }
  };

  this.getClick = () => {
    document.addEventListener("click",function (e) {
        const el = e.target;
        const btnClass = (e) => el.classList.contains(e);
        if (btnClass('btn-num')) {
          this.btnDisplay(el.innerText);
        }else if(btnClass('btn-clear')){
          this.clearDisplay();
        }else if(btnClass('btn-del')){
          this.delOne();
        }else if(btnClass('btn-eq')){
          this.realizaConta();
        }
    }.bind(this));
    };
};


const calc = new Calculadora()
calc.start();
