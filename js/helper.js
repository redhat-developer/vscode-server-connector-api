"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const vscode = __importStar(require("vscode"));
class Lazy {
    constructor(fn) {
        this.fn = fn;
        this.value = undefined;
    }
    get() {
        if (this.value === undefined) {
            this.value = this.fn();
        }
        return this.value;
    }
}
class ExtensionHelper {
    constructor() {
        this.apiBroker = new Lazy(() => getBroker());
        this.RSPProvider = readonlify({
            api: this.get()
        });
    }
    getCore() {
        return __awaiter(this, void 0, void 0, function* () {
            const apiBroker = yield this.apiBroker.get();
            if (!apiBroker) {
                return { available: false, reason: "extension-not-available" };
            }
            return apiBroker.get();
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const api = yield this.getCore();
            return api;
        });
    }
}
exports.ExtensionHelper = ExtensionHelper;
function readonlify(t) {
    return t;
}
function getBroker() {
    return __awaiter(this, void 0, void 0, function* () {
        const extension = vscode.extensions.getExtension(constants_1.SERVER_CONNECTOR_EXTENSION_ID);
        console.log('extension inside npm' + (extension === undefined).toString());
        if (!extension) {
            return undefined;
        }
        const apiBroker = yield extension.activate();
        console.log('apiBroker inside npm' + (apiBroker === undefined).toString());
        return apiBroker;
    });
}
//# sourceMappingURL=helper.js.map