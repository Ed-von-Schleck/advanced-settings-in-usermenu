
const St = imports.gi.St;
const Main = imports.ui.main;
const Lang = imports.lang;
const Shell = imports.gi.Shell;
const GLib = imports.gi.GLib;
const PopupMenu = imports.ui.popupMenu;
const Gettext = imports.gettext;
const _ = Gettext.gettext;

let item, userMenu;

function _getUserMenu() {
    if (Main.panel._statusArea) {
        return Main.panel._statusArea.userMenu.menu;
    } else if (Main.panel.statusArea.userMenu) {
        return Main.panel.statusArea.userMenu.menu;
    } else {
        return Main.panel.statusArea.aggregateMenu.menu;
    }
}

function _onAdvancedSettingsActivate() {
    Main.overview.hide();
    let app = Shell.AppSystem.get_default().lookup_app('org.gnome.tweaks.desktop');
    app.activate();
}

function init(extensionMeta) {
    Gettext.bindtextdomain("advanced-settings-in-usermenu@nuware.ru", GLib.build_filenamev([extensionMeta.path, 'locale']));
    userMenu = _getUserMenu();
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
