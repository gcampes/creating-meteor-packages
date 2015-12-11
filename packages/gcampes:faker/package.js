Npm.depends({
  faker: "2.1.2"
});

Package.on_use(function(api){
  api.add_files("faker.js", "server");
  api.export('faker', 'server');
});
