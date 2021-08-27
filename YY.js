
angular.module('exModule', []);
angular.module('exModule');
angular.module('exModule').controller('mainController', ['$scope', '$sce','$http', function($scope, $sce, $http){
	console.log("controller loaded")
$scope.practiceareasshow = 0;

$scope.mobilemenuarray = {
	mobileon: 1,
	back: 0,
	attorneyson : 0,
	practiceareason: 0,
	otheron: 0,
	mobileoff: 0,
	menuon: 0
};
$scope.contentarray={
	home: 1,	
	generalcounsel: 0,
	corporate: 0,
	regulatory: 0,
	employment: 0,
	litigation: 0,
	investigations: 0,
	webdev: 0,
	dave: 0,
	contact: 0
}

$scope.menuoff = function(){
	$scope.mobilemenuarray = {
	mobileon: 1,
	back: 0,
	attorneyson : 0,
	practiceareason: 0,
	otheron: 0,
	mobileoff: 0,
	menuon: 0
};
}

$scope.menuoperation = function(x){
if(x=='menuon'){
	console.log("menu on")
	$scope.mobilemenuarray.mobileon = 0;
	$scope.mobilemenuarray.mobileoff = 1;
	$scope.mobilemenuarray.menuon = 1;
	$scope.mobilemenuarray.practiceareason = 0;
	$scope.mobilemenuarray.otheron = 0;
	$scope.mobilemenuarray.attorneyson = 0;
	}

else if(x=="menuoff"){
	$scope.menuoff();
}

else if(x=="back"){
	$scope.mobilemenuarray.mobileon = 0;
	$scope.mobilemenuarray.mobileoff = 1;
	$scope.mobilemenuarray.practiceareason = 0;
	$scope.mobilemenuarray.otheron = 0;
	$scope.mobilemenuarray.attorneyson = 0;
	$scope.mobilemenuarray.menuon = 1;
	$scope.mobilemenuarray.back = 0;
	}


else if (x=='practiceareas'){
	$scope.mobilemenuarray.mobileon = 0;
	$scope.mobilemenuarray.mobileoff = 1;
	$scope.mobilemenuarray.menuon = 0;
	$scope.mobilemenuarray.practiceareason = 1;
	$scope.mobilemenuarray.back = 1;
	$scope.mobilemenuarray.otheron = 0;
	$scope.mobilemenuarray.attorneyson = 0;
}
else if (x=='otherserv'){
	$scope.mobilemenuarray.mobileon = 0;
	$scope.mobilemenuarray.mobileoff = 1;
	$scope.mobilemenuarray.menuon = 0;
	$scope.mobilemenuarray.practiceareason = 0;
	$scope.mobilemenuarray.back = 1;
	$scope.mobilemenuarray.otheron = 1;
	$scope.mobilemenuarray.attorneyson = 0;
}
else if (x=='attorneys'){
	$scope.mobilemenuarray.mobileon = 0;
	$scope.mobilemenuarray.mobileoff = 1;
	$scope.mobilemenuarray.menuon = 0;
	$scope.mobilemenuarray.practiceareason = 0;
	$scope.mobilemenuarray.back = 1;
	$scope.mobilemenuarray.otheron = 0;
	$scope.mobilemenuarray.attorneyson = 1;
}
else if (x == 'generalcounsel'){
$scope.contentarray={
	home: 0,	
	generalcounsel: 1,
	corporate: 0,
	regulatory: 0,
	employment: 0,
	litigation: 0,
	investigations: 0,
	webdev: 0,
	dave: 0,
	contact: 0,
	emily: 0
	}
	$scope.menuoff();
}
else if (x=='corporate'){
	$scope.contentarray={
	home: 0,	
	generalcounsel: 0,
	corporate: 1,
	regulatory: 0,
	employment: 0,
	litigation: 0,
	investigations: 0,
	webdev: 0,
	dave: 0,
	contact: 0,
	emily: 0
	}
	$scope.menuoff();
}
else if (x=='regulatory'){
	$scope.contentarray={
	home: 0,	
	generalcounsel: 0,
	corporate: 0,
	regulatory: 1,
	employment: 0,
	litigation: 0,
	investigations: 0,
	webdev: 0,
	dave: 0,
	contact: 0,
	emily: 0
	}
	$scope.menuoff();
}
else if (x=='employment'){
	$scope.contentarray={
	home: 0,	
	generalcounsel: 0,
	corporate: 0,
	regulatory: 0,
	employment: 1,
	litigation: 0,
	investigations: 0,
	webdev: 0,
	dave: 0,
	contact: 0,
	emily: 0
	}
	$scope.menuoff();
}
else if (x=='litigation'){

	$scope.contentarray={
	home: 0,	
	generalcounsel: 0,
	corporate: 0,
	regulatory: 0,
	employment: 0,
	litigation: 1,
	investigations: 0,
	webdev: 0,
	dave: 0,
	contact: 0,
	emily: 0
	}
	$scope.menuoff();
}

else if (x=='investigations'){

	$scope.contentarray={
	home: 0,	
	generalcounsel: 0,
	corporate: 0,
	regulatory: 0,
	employment: 0,
	litigation: 0,
	investigations: 1,
	webdev: 0,
	dave: 0,
	contact: 0,
	emily: 0
	}
	$scope.menuoff();
}
else if (x=='webdev'){

	$scope.contentarray={
	home: 0,	
	generalcounsel: 0,
	corporate: 0,
	regulatory: 0,
	employment: 0,
	litigation: 0,
	investigations: 0,
	webdev: 1,
	dave: 0,
	contact: 0,
	emily: 0
	}
	$scope.menuoff();
}

else if (x=='emily'){

	$scope.contentarray={
	home: 0,	
	generalcounsel: 0,
	corporate: 0,
	regulatory: 0,
	employment: 0,
	litigation: 0,
	investigations: 0,
	webdev: 0,
	dave: 0,
	emily: 1,
	contact: 0
	}
	$scope.menuoff();
}


else if (x=='dave'){

	$scope.contentarray={
	home: 0,	
	generalcounsel: 0,
	corporate: 0,
	regulatory: 0,
	employment: 0,
	litigation: 1,
	investigations: 0,
	webdev: 0,
	dave: 1,
	contact: 0,
	emily: 0

	}
	$scope.menuoff();
}
else if (x=='home'){

	$scope.contentarray={
	home: 1,	
	generalcounsel: 0,
	corporate: 0,
	regulatory: 0,
	employment: 0,
	litigation: 0,
	investigations: 0,
	webdev: 0,
	dave: 0,
	contact: 0,
	emily: 0

	}
	$scope.menuoff();
	console.log('menu is off');
	console.log ($scope.mobilemenuarray.menuoff)
}
else if (x=='contactus'){

	$scope.contentarray={
	home: 0,	
	generalcounsel: 0,
	corporate: 0,
	regulatory: 0,
	employment: 0,
	litigation: 0,
	investigations: 0,
	webdev: 0,
	dave: 0,
	contact: 1,
	emily: 0

	}
	$scope.menuoff();
}

}





}])

