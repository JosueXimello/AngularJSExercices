//*********Manejo de Angular JS************


//Se crea una fucnion recursiva la cual significa que se llamará a si misma
//Estructura basica:  (function(argumentos){ definicfión })(argumentos);
(function(){

	//
	var app = angular.module('book', []);

	//Arreglo de objetos
	var books = [ {
		id: '1',
		name: 'Programación en C',
		author: 'José Dredodigene',
		editorial:'3 edition' ,
		description: 'Esta obra se ha escrito como libro de referencia y guia de estudio en un curso de introducción a la programación, con una segunda parte que puede utilizarse en cursos de introducción a las estructuras de datos y a la programación orientada a objetos; en todos estos cursos hay que utilizar C++ como lenguaje de programación. Los objetivos fundamentales de la obra son:Énfasis fuerte en el análisis, construcción y diseño de programas.Resolución de problemas mediante técnicas de programación.Introducción a la informática y a las ciencias de la computación utilizando C++ como herramienta de programación.Por ello, el libro se ha diseñado para enseñar a programar utilizando C++, aunque también pretende enseñar C++. Así, se tratará de enseñar las técnicas clásicas y avanzadas de programación estructurada, junto con técnicas orientadas a objetos.La obra pretende enseñar a programar utilizando tres conceptos fundamentales:Algoritmos. Conjunto de instrucciones programadas para resolver una tarea específica.Datos. Una colección de datos que se proporcionan a los algoritmos que se han de ejecutar para encontrar una solución: los datos se organizan en estructuras de datos. Objetos. Conjuntos de datos y algoritmos que los manipulan, encapsulados en un tipo de dato nuevo conocido como objeto.Así, pues, los objetivos fundamentales de la obra son: introducción a la programación estructurada, estructuras de datos y programación orientada a objetos con el lenguaje estándar C++ ANSI/ISO.',
		canpurchase: true,
		soldOut: true,
		images: [
			{
				full:'public/img/img2.jpg',
				thumb:'public/img/img2.jpg'
			}
		]
		
	}
	,
	{
		id: '2',
		name: 'Teoria de circuitos electronicos',
		author: 'cv ',
		editorial: 'c xc ',
		description: 'Diodos Semiconductores ,Aplicaciones del Diodo Transistores de Unión Bipolar Polarización DC de los BJT Análisis de AC de un BJT Transistores de Efecto de Campo Polarización de los FET Amplificadores con FET Respuestas en Frecuencia de los BJT y los JFET Amplificadores Operaciones Aplicaciones del Amplificador Operacional Amplificadores de Potencia Circuitos Integrados Analógicos-Digitales Realimentación y Circuitos Osciladores Fuentes de Alimentación (Reguladores de Voltaje) Otros Dispositivos de Dos Terminales Dispositivs pnpn y de otros tipos Apéndice A: Parámetros Híbridos: Determinación Gráfica y Ecuaciones de Conversión (Exactas y Aproximadas) Apéndice B: Factor de Rizo y Cálculos de Voltaje Apéndice C: Gráficas y Tablas Apéndice D: Soluciones a Problemas',
		canpurchase: false,
		soldOut: true,
		images: [
			{
				full:'public/img/img3.png',
				thumb:'public/img/img3.jpg'
			}
		]
	}
	,
	{
		id: '3',
		name: 'Desarrollo de sofware',
		author: 'cdc',
		editorial: 'adcs' ,
		description: 'El libro contiene un ejemplo completo de un desarrollo dirigido por modelos. El desarrollo comienza con la definición de un modelo abstracto expresado en UML y finaliza con el despliegue de un programa ejecutable escrito en Java. La transformación del modelo a código es realizada a través de la aplicación de transformaciones expresadas en un lenguaje estándar. Este ejemplo brinda un panorama completo y comprensible sobre los aspectos técnicos de MDD.',
		canpurchase: false,
		soldOut: true,
		images: [
			{
				full:'public/img/img4.jpg',
				thumb:'public/img/img4.jpg'
			}
		]
	}
	,
	{
		id: '4',
		name: 'Redes Cisco. Guía De Estudio Para La Certificación CCNA Routing Y Switching ',
		author: 'sadcas',
		editorial: 'adv' ,
		description: 'Este libro representa una herramienta de autoestudio para el aprendizaje de los temas relacionados con los objetivos del examen de certificación CCNA 200-120. Esta obra proporciona los conceptos, comandos y prácticas necesarias para configurar routers y switches Cisco para que funcionen en las redes corporativas y para alcanzar dicha certificación. Aunque este libro fue creado para aquellos que persiguen la certificación CCNA R&S, también es útil para administradores, personal de soporte, o para los que simplemente desean entender más claramente el funcionamiento de las LAN, las WAN, sus protocolos y los servicios de acceso.',
		canpurchase: false,
		soldOut: true,
		images: [
			{
				full:'public/img/img5.jpg',
				thumb:'public/img/img5.jpg'
			}
		]
	}

	]


	//Esto es para poder mostrar mis datos en la pagina
	//Para la cual necesitamos un controlador
	app.controller('BookApp', function(){
		//this quiere desir que solo el controlador puede manejar esta variable y tambien el scope para poder
		//manejarlo en la pagina web
		this.products = books;

	});



})();
