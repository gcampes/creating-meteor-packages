Package.on_use(function(api){
  api.use("templating", "client");
  api.add_files("aTemplate.html", "client");
  api.add_files("serverFunction.js", "server");
  api.export('capitalise', 'server');
});
