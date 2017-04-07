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
var router_1 = require("@angular/router");
var task_service_1 = require("./task.service");
var TasksComponent = (function () {
    function TasksComponent(router, taskService) {
        this.router = router;
        this.taskService = taskService;
    }
    TasksComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks().then(function (tasks) { return _this.tasks = tasks; });
    };
    TasksComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    TasksComponent.prototype.onSelect = function (task) {
        this.selectedTask = task;
    };
    TasksComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedTask.id]);
    };
    return TasksComponent;
}());
TasksComponent = __decorate([
    core_1.Component({
        selector: 'my-tasks',
        templateUrl: './tasks.component.html',
        styleUrls: ['./tasks.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        task_service_1.TaskService])
], TasksComponent);
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map