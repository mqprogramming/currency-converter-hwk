import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      fetchedData: [],
      amountToConvert: 0,
      firstRate: 0,
      secondRate: 0
    },
    mounted() {
      this.fetchData();
    },
    computed: {
      convertResult: function () {
        let result = (this.secondRate / this.firstRate) * this.amountToConvert;
        return result.toFixed(2);
      }
    },
    methods: {
      fetchData: function() {
        fetch('https://api.exchangeratesapi.io/latest')
          .then( response => response.json() )
          .then( data => this.fetchedData = data.rates)
          .then( more => this.fetchedData['EUR'] = 1)
          .catch( err => console.error( err ) )
      }
    }
  })
})

