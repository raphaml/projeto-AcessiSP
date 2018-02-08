const app = angular.module('app', []);
      let service;
      let map;

      function initMap() {
        map = new google.maps.Map(document.querySelector('#map'), {
          center: {lat: -23.550759, lng: -46.634129},
          zoom: 12
        });

        service = new google.maps.places.PlacesService(map);
      }

      app.controller('FormController', ($scope, $http) => {
        $scope.dados = {};
        $scope.resultados;

        $scope.buscar = () => {

          let request = {
            location: {lat: -23.550759, lng: -46.634129},
            radius: '5',
            query: $scope.dados.entrada
          };

          service.textSearch(request, res => {
            $scope.resultados = res;

            for(let item of $scope.resultados){

              item.status = false;

            }
            $scope.$digest();
          });
        }

        $scope.avaliar = (item) =>{
          console.log(item);
          $scope.resultados = [item];
          item.status = true;
        }
        $scope.gravar = (res1, res2, res3, res4, res5, item) =>{

        $http({
          url: 'http://localhost:3000/api/avaliacoes/avaliacao',
          method: "POST",
          data: { 'local' : item.name,
                  'endereco' : item.formatted_address,
                  'pergunta1' : res1,
                  'pergunta2' : res2,
                  'pergunta3' : res3,
                  'pergunta4' : res4,
                  'pergunta5' : res5
             }
          })
          .then(function(response) {
          alert('avaliação feita com sucesso');
          window.location = 'avaliacoes.html'
          })}
        
});
