function Collection(className, options) {
    "use strict";
    options = options || {};
    var list = [],
        self = this;
    this.init = function (initList) {
        list = initList;
        return self;
    };
    this.add = function (elem) {
        if (elem instanceof className) {
            list.push(elem);
            if (typeof options.afterAdd === "function") {
                options.afterAdd(elem);
            }
            if (typeof options.afterChange === "function") {
                options.afterChange(list);
            }
            return list.length - 1;
        }
        return -1;
    };
    this.get = function (id) {
        if (id > -1 && id < list.length) {
            return list[id];
        } else {
            return null;
        }
    };
    this.remove = function (id) {
        if (typeof options.beforeRemove === "function") {
            options.beforeRemove(list[id]);
        }
        list[id] = null;
        if (typeof options.afterChange === "function") {
            options.afterChange(list);
        }
    };
    this.clear = function () {
        list.forEach(function (e, i, a) {
            self.remove(i);
        });
        list = [];
        if (typeof options.afterChange === "function") {
            options.afterChange(list);
        }
    };
    this.extend = function (methodName, methodFunc) {
        if (typeof self[methodName] === "function") {
            return self;
        }
        self[methodName] = function () {
            methodFunc(list);
        };
        return self;
    };
    this.forEach = function (callback) {
        list.forEach(callback);
        if (typeof options.afterChange === "function") {
            options.afterChange(list);
        }
    };
}
