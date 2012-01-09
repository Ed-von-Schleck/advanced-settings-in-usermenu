
const St = imports.gi.St;
const Main = imports.ui.main;
const Lang = imports.lang;
const Shell = imports.gi.Shell;
const PopupMenu = imports.ui.popupMenu;

let item, userMenu;

function _onAdvancedSettingsActivate() {
    Main.overview.hide();
    let app = Shell.AppSystem.get_default().lookup_app('gnome-tweak-tool.desktop');
    app.activate();
}

function init() {
    userMenu = Main.panel._statusArea.userMenu.menu;
}

function enable() {
    item = new PopupMenu.PopupMenuItem(_("Advanced Settings"));
    item.connect('activate', Lang.bind(item, _onAdvancedSettingsActivate));
    userMenu.addMenuItem(item, 5);
}

function disable() {
    if (item) {
        item.destroy();
    }
}
