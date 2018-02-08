const app = angular.module('projeto', []);

// =========================== controller cadastro.html =======================

app.controller('cadastroController',($scope, $http) =>{
    $scope.cadastro = (nome, sobrenome, login, senha, email) => {
        if($scope.senha == $scope.senha2){
		
		$http({
			url: 'http://localhost:3000/api/usuarios/usuario',
			method: "POST",
			data: { 'nome' : nome,
					'sobrenome' : sobrenome,
					'login' : login,
					'senha' : senha,
					'email' : email
				 }
			})
			.then(function(response) {
			alert('Cadastro efetuado com sucesso');
			window.location = "perfil.html";
			});

        }else{
            alert("As senhas não conferem")
        }
}})

// =========================== controller login.html =======================

app.controller('loginController', ($scope, $http) =>{

	$scope.entrar = (login, senha) =>{
		$scope.validar = $http({
			url: 'http://localhost:3000/api/usuarios',
			method: "GET"
			})
			.then(function(response) {
				console.log(response);
				
				const usuarios = response.data;

				
				for(let usuario of usuarios){
					if(login == usuario.login && senha == usuario.senha){
						window.location = 'perfil.html'
						return;
					}
				
				}

})}})
// =========================== controller avaliacoes.html =======================

app.controller('avaliacoesController', ($scope, $http) =>{
	$http({
        method : "GET",
        url : "http://localhost:3000/api/avaliacoes"
    }).then(function (response) {
		$scope.avaliacoes = response.data;
		// console.log(response.data);
		for(let avaliacao of $scope.avaliacoes){

			avaliacao.status = false;

		  }
    });
		$scope.mostrar = (avaliacao) => {
			avaliacao.status = true;
			}
	
		});

















































// =========================== controller login.html ==========================

//LOGIN SIMPLES COM APENAS UMA RESPOSTA CORRETA

			// app.controller('loginController', ($scope) =>{
				

			// 	$scope.entrar = (login, senha) => {
			// 		if(login == "raphaml" && senha == "123"){
			// 			open('perfil.html', '_self');
			// 		}else{
			// 			alert('E-mail e ou senhas incorretos')

			// 		}
			// 	}
			// });

//LOGIN POR VETOR

			// app.controller('loginController', function($scope){
			// 	let usuariosCadastrados = [
			// 	  {
			// 		  login: 'admin',
			// 		  senha: '123'
			// 	  }];
				
			// 	  let entrou = false;

			// 	  $scope.entrar = (login, senha) =>{
			// 		for(let usuario of usuariosCadastrados){
			// 		   if(login == usuario.login && senha == usuario.senha){
			// 				open('perfil.html', '_self');
			// 				entrou = true;
			// 		   } else if(entrou == false){
			// 				alert('E-mail e ou senhas incorretos');
			// 		   }
			// 		}
			// 	  }
			//     });
    

    // =========================== controller login.html ==========================
