/*******************************************
Author: Minzhe Zhang
Since: 06/08/2016
*******************************************/
(function (){

  	var app = angular.module('app', []);

  	app.controller('PageCtrl', function ($scope, $window) {

		$scope.paperPublished = [
			{'name': 'Identifying genes with tri-modal association with survival and tumor grade in cancer patients',
			 'author': 'Minzhe Zhang, Tao Wang, Rosa Sirianni, Philip W Shaul, Yang Xie',
			 'journal': 'BMC Bioinformatics',
			 'year': '2019 20:13',
			 'link': 'https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-018-2582-7'
			},
			{'name': 'GeNeCK: a web server for gene network construction and visualization',
			 'author': 'Minzhe Zhang, Qiwei Li, Donghyeon Yu, Bo Yao, Wei Guo, Yang Xie, Guanghua Xiao',
			 'journal': 'BMC Bioinformatics',
			 'year': '2019 20:12',
			 'link': 'https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-018-2560-0'
			},
			{'name': 'DIGREM: an integrated web-based platform for detecting effective multi-drug combinations',
			 'author': 'Minzhe Zhang, Sangin Lee, Bo Yao, Guanghua Xiao, Lin Xu, Yang Xie',
			 'journal': 'Bioinformatics',
			 'year': '2018',
			 'link': 'https://academic.oup.com/bioinformatics/advance-article-abstract/doi/10.1093/bioinformatics/bty860/5123352'
			},
			{'name': 'A Bayesian hierarchical model for analyzing methylated RNA immunoprecipitation sequencing data',
			 'author': 'Minzhe Zhang, Qiwei Li, Yang Xie',
			 'journal': 'Quantitative Biology',
			 'year': '2018 6(3)',
			 'link': 'https://link.springer.com/article/10.1007/s40484-018-0149-2'
			},
			{'name': 'Support vector machine (SVM) classification model based rational design of novel tetronic acid derivatives as potent insecticidal and acaricidal agents',
			 'author': 'Ting-Ting Yao, Jing-Li Cheng, Bing-Rong Xu, Min-Zhe Zhang, Yong-Zhou Hu, Jin-Hao Zhao, Xiao-Wu Dong',
			 'journal': 'Rsc Advances',
			 'year': '2015 5(61)',
			 'link': 'https://pubs.rsc.org/en/content/articlehtml/2015/ra/c5ra05663b'
			}
		];

		$scope.projectML = [
			{'title': 'Convolutional neural network model for entity relation extraction',
			 'intro': 'Developed a convolutional neural network model to extract entity relations from text corpus. Used word embedding to transform tokens into numeric vectors, and applied convolutional kernels to extract semantic features to do prediction.',
			 'keyword': 'Deep Learning, Convolutional neural network, Word embedding, Relation extraction, Information retrieval'
			}
		]

	  	$scope.init = function(){
	  		$scope.callback();
	  	};
	      
	  	$scope.callback = function(){
			$('.level-bar-inner').each(function(){
				newWidth = $(this).parent().width() * $(this).data('percent');
				$(this).width(0);
				$(this).animate({
					width: newWidth,
				}, 1000);
			});
			$('.icons-blue').each(function(){
				height = $(this).height();
				$(this).animate({
					height: 14,
				}, 2000);
			});
		};

		var resize;
		window.onresize = function() {
			clearTimeout(resize);
			resize = setTimeout(function(){
				$scope.callback();
			}, 100);
		};

		$scope.goToLinkedIn = function(){
			$window.open("https://www.linkedin.com/in/Minzhe", "_blank");
		};
		$scope.goToGithub = function(){
			$window.open("https://github.com/Minzhe", "_blank");
		};
		$scope.goToSourcerer = function(){
			$window.open("https://sourcerer.io/minzhe", "_blank");
		}
		$scope.sendMail = function(){
    		$window.location.href = "mailto:zenroute.mzhang@gmail.com";
		};
		
		
    $scope.downloadPaper = function(link){
    		$window.location.href = link;
    };

  });
  
})();