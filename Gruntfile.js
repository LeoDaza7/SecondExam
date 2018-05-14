module.exports = function (grunt) {

	var config = grunt.file.readJSON('config.json' || grunt.option('config'));

	grunt.loadNpmTasks('grunt-contrib-jasmine');

	grunt.registerTask('formatPage1',function(){
	
		grunt.file.copy('page1.html', config.buildFolder + '/' + config.pageOneName + '.html',{

			process: function funcion(fileContent) {

				return grunt.template.process(fileContent,{

					data: {

						pageTitle : config.appName,

					},

				});

			}

		});

	});

	grunt.registerTask('formatPage2',function(){
	
		grunt.file.copy('page2.html', config.buildFolder + '/' + config.pageTwoName + '.html',{

			process: function funcion(fileContent) {

				return grunt.template.process(fileContent,{

					data: {

						pageTitle : config.appName,

					},

				});

			}

		});

	});

		grunt.registerTask('formatIndex',function(){
	
		grunt.file.copy('index.html', config.buildFolder + '/index.html',{

			process: function funcion(fileContent) {

				return grunt.template.process(fileContent,{

					data: {

						pageTitle : config.appName,

					},

				});

			}

		});

	});

	grunt.initConfig({

		jasmine: {
			JS: {
				options: {
					specs: 'spec/*.spec.js'
				}
			}
		}
	});

	grunt.registerTask('build',['formatPage1','formatPage2','formatIndex','jasmine']);

};
