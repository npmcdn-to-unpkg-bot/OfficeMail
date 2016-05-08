(function(global) {

  var ngVer = '@2.0.0-rc.1'; 

  var  map = {
    'app':                       'mail', 
    'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.6',
    'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api' // get latest
  };

  
  var packages = {
    'app':                       { main: 'main.ts',  defaultExtension: 'ts' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
  };

  var packageNames = [
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/http',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router-deprecated',
      '@angular/router',      
      '@angular/testing',
      '@angular/upgrade',
  ];

  
  packageNames.forEach(function(pkgName) {
    map[pkgName] = 'https://npmcdn.com/' + pkgName + ngVer;
  });

  
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    transpiler: 'typescript',
    typescriptOptions: {
      emitDecoratorMetadata: true
    },
    map: map,
    packages: packages
  };


  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);