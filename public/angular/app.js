angular
        .module('myApp', ['ngMaterial', 'ngMessages', 'ui.router', 'oc.lazyLoad', 'ngAnimate', 'md.data.table', 'menu',])
        .config(function ($mdThemingProvider, $mdIconProvider, $mdToastProvider) {
            $mdToastProvider.addPreset('simpleToast', {
                options: function () {
                    return {
                        template:
                                '<md-toast>' +
                                '<div class="md-toast-content">' +
                                'This is a custom preset' +
                                '</div>' +
                                '</md-toast>',
                        controllerAs: 'toast',
                        bindToController: true
                    };
                }
            });
            $mdIconProvider
                    .defaultIconSet("./assets/svg/avatars.svg", 128)
                    .icon("menu", "./assets/svg/menu.svg", 24)
                    .icon("share", "./assets/svg/share.svg", 24)
                    .icon("google_plus", "./assets/svg/google_plus.svg", 512)
                    .icon("hangouts", "./assets/svg/hangouts.svg", 512)
                    .icon("twitter", "./assets/svg/twitter.svg", 512)
                    .icon("phone", "./assets/svg/phone.svg", 512);
            $mdThemingProvider.theme('default')
                    .primaryPalette('teal')
                    .accentPalette('red');
        });