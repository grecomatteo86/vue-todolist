var app = new Vue (
  {
    el:'#app',
    data:{
      userTitle:'',
      comix:[
        'Possessione Diabolica',
        'L\'alba dei morti viventi',
        'Canale 666',
        'Le notti della luna piena'
      ],

    },
    methods:{
      deleteItem: function(index){
        this.comix.splice(index,1);
      },
      addTitle: function(){
        if(this.userTitle != "") {
          this.comix.push(this.userTitle);
          this.userTitle = "";
        }
      },
      submit: function () {

      }
    }
  }
);
