// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'App Coffee', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/audiovisual/',
    	url: 'audiovisual.html',
    	name: 'audiovisual',
  		},
		{
		path: '/drinks/',
    	url: 'drinks.html',
    	name: 'drinks',
  		},
		
		{
		path: '/estrategica/',
    	url: 'estrategica.html',
    	name: 'estrategica',
  		},
		
		
		{
		path: '/disenografico/',
    	url: 'disenografico.html',
    	name: 'disenografico',
  		},
		
		{
		path: '/empresas/',
    	url: 'empresas.html',
    	name: 'empresas',
  		},
		
		{
		path: '/freelancer/',
    	url: 'freelancer.html',
    	name: 'freelancer',
  		},
		
		{
		path: '/ofertantes/',
    	url: 'ofertantes.html',
    	name: 'ofertantes',
  		},
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

