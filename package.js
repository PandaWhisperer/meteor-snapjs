Package.describe({
  summary: "A library to create mobile shelf-style menus"
});

Package.on_use(function (api, where) {
  api.add_files(['lib/snap.css', 'lib/snap.js'], 'client');
});
