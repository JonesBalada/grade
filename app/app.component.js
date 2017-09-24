"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var AppComponent = (function () {
    function AppComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
    }
    AppComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) {
            _this.heroes = heroes;
            _this.primeiro = [];
            _this.segundo = [];
            _this.terceiro = [];
            for (var _i = 0, heroes_1 = heroes; _i < heroes_1.length; _i++) {
                var hero = heroes_1[_i];
                if (hero.date === '1') {
                    _this.primeiro.push(_this.traduzir(hero));
                }
                else if (hero.date === '2') {
                    _this.segundo.push(_this.traduzir(hero));
                }
                else {
                    _this.terceiro.push(_this.traduzir(hero));
                }
            }
            _this.primeiro.sort(function (a, b) { return parseInt(a.time) - parseInt(b.time); });
            _this.segundo.sort(function (a, b) { return parseInt(a.time) - parseInt(b.time); });
            _this.terceiro.sort(function (a, b) { return parseInt(a.time) - parseInt(b.time); });
        });
    };
    AppComponent.prototype.traduzir = function (hero) {
        var original = parseInt(hero.time);
        var hour = 9;
        switch (original) {
            case 1:
                hour = 9;
                break;
            case 2:
                hour = 10;
                break;
            case 3:
                hour = 11;
                break;
            case 4:
                hour = 12;
                break;
            case 5:
                hour = 13;
                break;
            case 6:
                hour = 14;
                break;
            case 7:
                hour = 15;
                break;
            case 8:
                hour = 16;
                break;
            case 9:
                hour = 17;
                break;
            case 10:
                hour = 18;
                break;
            case 11:
                hour = 19;
                break;
            case 12:
                hour = 20;
                break;
            case 13:
                hour = 21;
                break;
            case 20:
                hour = 9;
                break;
            case 22:
                hour = 19;
                break;
            default: hour = original;
        }
        hero.time = hour.toString();
        if (original === 20 || original === 22) {
            hero.authorId = hour + ':00 - ' + (hour + 3) + ':00';
        }
        else {
            hero.authorId = hour + ':00 - ' + hour + ':50';
        }
        var tipo = '';
        switch (parseInt(hero.type)) {
            case 1:
                tipo = 'Palestra';
                break;
            case 2:
                tipo = 'Minicurso';
                break;
            case 3:
                tipo = 'Encontro de comunidade';
                break;
            default: tipo = '';
        }
        hero.type = tipo;
        return hero;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './atividades.html',
        styleUrls: ['./atividades.css'],
        providers: [hero_service_1.HeroService]
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map