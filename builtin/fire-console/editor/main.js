(function () {
module.exports = {
    load: function (plugin) {
        plugin.on('fire-console:open', function () {
            plugin.openPanel('default');
        });
    },
    unload: function (plugin) {
    },
};
})();
