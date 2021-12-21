let app = new Vue({
  el: "#app",
  data: {
      edad: "",
      peso: "",
      estatura: "",
      result: false,
      imc: false,
      pesoMinimo: false,
      pesoMaximo: false,
      pesoIdeal: false,
      situacion: false,
      tiposDeSituaciones: {
        "1": "Bajo Peso",
        "sobrepeso": ""
      },
      infoSituaciones: {
          1: ""
      }
  },
  methods: {
    calcular(){
        console.log(this.edad, this.peso, this.estatura);

        let edad = parseInt(this.edad)
        let peso = parseFloat(this.peso)
        let estatura = parseFloat(this.estatura)

if(this.edad && this.peso && this.estatura){   
    // 
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'La infrmación ha sido exitosa',
        showConfirmButton: false,
        timer: 1500
      })
    
    
    this.result = true;
        // IMC
        this.imc = (peso / (estatura**2)).toFixed(2)

        // Situacion de IMC
        if(this.imc <= 18.5){
            this.situacion = "Bajo peso"
        }else if(this.imc > 18.5 && this.imc <= 24.9){
            this.situacion = "Normopeso"
        }else if(this.imc > 24.9 && this.imc <= 26.6){
            this.situacion = "Sobre peso grado I"
        }else if(this.imc > 26.6 && this.imc <= 29.9){
            this.situacion = "Sobre peso grado II"
        }else if(this.imc > 29.9 && this.imc <= 34.9){
            this.situacion = "Obesidad tipo I"
        }else if(this.imc > 34.9 && this.imc <= 39.9){
            this.situacion = "Obesidad tipo II"
        }else if(this.imc > 39.9 && this.imc <= 49.9){
            this.situacion = "Obesidad tipo III (mórbida)"
        }else if(this.imc > 50){
            this.situacion = "Obesidad tipo IV (extrema)"
        }

        // Peso mínimo y maximo


        let pMin = 0
        let pMax = 0

        if(this.edad >= 19 || this.edad <= 24){
            pMin = 19
            pMax = 24
        }else if(this.edad > 19 || this.edad <= 34){
            pMin = 20
            pMax = 25
        }else if(this.edad > 34 || this.edad <= 44){
            pMin = 21
            pMax = 26
        }else if(this.edad > 44 || this.edad <= 54){
            pMin = 22
            pMax = 27
        }else if(this.edad > 54 || this.edad <= 64){
            pMin = 23
            pMax = 28
        }else if(this.edad > 65){
            pMin = 24
            pMax = 29
        }

        let pesoMinimo = (pMin * (this.estatura**2)).toFixed(2)
        this.pesoMinimo = pesoMinimo

        let pesoMaximo = (pMax * (this.estatura**2)).toFixed(2)
        this.pesoMaximo = pesoMaximo

        this.pesoIdeal = ((parseFloat(pesoMinimo) + parseFloat(pesoMaximo)) / 2).toFixed(2)
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campos incompletos',
            footer: '<a href="">Todos los campos del formulario deben ser validos</a>'
          })
    }

        

    }

  }
  
})