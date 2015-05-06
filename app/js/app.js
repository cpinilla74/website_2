//Add the necessary routes here
angular.module('jboss-forge', ['ui.router','routeStyles'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  // Set up the states
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    css: 'css/parallax-styles.css',
    controller: 'rootCtrl'
  })
  .state('addons', {
    url: '/addons',
    templateUrl: 'views/addons.html',
    css: ['css/forge_addons.css', 'css/parallax-styles.css'],
    controller: 'addonCtrl'
  })
  .state('addon_detail',{
    url: '/addons/mobile/{addonId}',
    templateUrl: 'views/addon_phone_template.html',
    css: 'css/forge_addons.css'
  })
  .state('documentation', {
    url: '/documentation',
    templateUrl: 'views/documentation.html',
    css: 'css/forge_documentation.css'
  })
  .state('community', {
    url: '/community',
    templateUrl: 'views/community.html',
    css: ['css/forge_community.css','css/parallax-styles.css'],
    controller: 'communityCtrl'
  })
  .state('news', {
    url: '/news',
    templateUrl: 'views/news.html',
    css: 'css/forge_news.css',
    controller: 'newsCtrl'
  })
  .state('news_detail', {
    url: '/news/{newsId}',
    templateUrl: 'views/news_page.html',
    css: 'css/forge_doc_pages.css',
    controller: 'newsCtrl'      
  })
  .state('documentation_detail',{
    url: '/documentation/{docId}',
    templateUrl: 'views/documentation_page.html',
    css: 'css/forge_doc_pages.css'
  })
});