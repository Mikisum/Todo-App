(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5909:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__s0T48",
	"contacts": "footer_contacts__c_bqD"
};


/***/ }),

/***/ 1103:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__dVJXZ",
	"navbar": "header_navbar___Gk0n",
	"container": "header_container__O_lS1"
};


/***/ }),

/***/ 5245:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "layout_container__nm2rW"
};


/***/ }),

/***/ 697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(3195);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(5368);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/Footer/footer.module.css
var footer_module = __webpack_require__(5909);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.tsx





const Footer = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (footer_module_default()).footer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                children: "Contacts"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (footer_module_default()).contacts,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "https://github.com/Mikisum",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                icon: free_brands_svg_icons_.faGithub
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.linkedin.com/in/viktoryia-kiyanka/",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                            icon: free_brands_svg_icons_.faLinkedin
                        })
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/assets/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.a97072ab.png","height":64,"width":64,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAyElEQVR42j3KvS5DYQCA4ec7TrVBUpVIjtqEiI0O7qCDwWw0uw0X4zIkBrOBRCISFpQ0jUj15/T4Pp26vO/yBHAW17UcHAXVpFIf5Z7wVUxkGZzv6152ndw9eyhrPouxi50f7ZVSzCH/0K9Xrk5HirWerWHuLQUdvOcQXpWPL/aKTQOl49bEbSJCDtt/GthdGriJmVEIViPjBSiGUgom08x0OZrN/92IagvQ/rWxlDSz5DAFs/k7s0x/AZql60QvEQNpnnqjcg//1e1LI3+9NPsAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./src/components/Header/header.module.css
var header_module = __webpack_require__(1103);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./src/components/Header/Header.tsx






const Header = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: logo
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: (header_module_default()).navbar,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "todo",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Todo"
                        })
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./src/components/Layout/layout.module.css
var layout_module = __webpack_require__(5245);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
;// CONCATENATED MODULE: ./src/components/Layout/Layout.js




function Layout({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (layout_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    }));
};

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./src/types/todos.ts
var todos = __webpack_require__(5944);
;// CONCATENATED MODULE: ./src/store/reducers/todosReduser.ts

const initialState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    totalTodosCount: 0
};
const updateTodoElement = (todos, todo)=>{
    const index = todos.findIndex((el)=>el.id === todo.id
    );
    if (index !== -1) todos[index] = todo;
    return todos;
};
const todosReducer = (state = initialState, action)=>{
    switch(action.type){
        case todos/* TodosActionTypes.FETCH_TODOS */.X.FETCH_TODOS:
            return {
                ...state,
                loading: true
            };
        case todos/* TodosActionTypes.FETCH_TODOS_SUCCESS */.X.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            };
        case todos/* TodosActionTypes.FETCH_TODOS_ERROR */.X.FETCH_TODOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case todos/* TodosActionTypes.SET_TODO_PAGE */.X.SET_TODO_PAGE:
            return {
                ...state,
                page: action.payload
            };
        case todos/* TodosActionTypes.SET_TOTAL_TODOS_COUNT */.X.SET_TOTAL_TODOS_COUNT:
            return {
                ...state,
                totalTodosCount: action.payload
            };
        // since the resource(https://jsonplaceholder.typicode.com) does not allow adding more than one element, 
        //  I do not use the response and set the id manually
        case todos/* TodosActionTypes.TODO_ADD */.X.TODO_ADD:
            return {
                ...state,
                todos: [
                    {
                        userId: 1,
                        id: state.todos.length + 1,
                        title: action.payload,
                        completed: false
                    },
                    ...state.todos, 
                ]
            };
        case todos/* TodosActionTypes.TODO_DELETE */.X.TODO_DELETE:
            return {
                ...state,
                todos: state.todos.filter((todo)=>todo.id !== action.payload
                )
            };
        case todos/* TodosActionTypes.TODO_ONCHANGE */.X.TODO_ONCHANGE:
            return {
                ...state,
                todos: updateTodoElement(state.todos, action.payload)
            };
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/store/reducers/index.ts


const rootReduser = (0,external_redux_.combineReducers)({
    todos: todosReducer
});

;// CONCATENATED MODULE: ./src/store/index.ts



// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = (0,external_redux_.createStore)(rootReduser, (0,external_redux_.compose)((0,external_redux_.applyMiddleware)((external_redux_thunk_default())))) // export const store = createStore(rootReduser, applyMiddleware(thunk))
;

;// CONCATENATED MODULE: ./src/pages/_app.tsx







fontawesome_svg_core_.config.autoAddCss = false;
function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    }));
};


/***/ }),

/***/ 5944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ TodosActionTypes)
/* harmony export */ });
var TodosActionTypes;
(function(TodosActionTypes) {
    TodosActionTypes["FETCH_TODOS"] = "FETCH_TODOS";
    TodosActionTypes["FETCH_TODOS_SUCCESS"] = "FETCH_TODOS_SUCCESS";
    TodosActionTypes["FETCH_TODOS_ERROR"] = "FETCH_TODOS_ERROR";
    TodosActionTypes["SET_TODO_PAGE"] = "SET_TODO_PAGE";
    TodosActionTypes["SET_TOTAL_TODOS_COUNT"] = "SET_TOTAL_TODOS_COUNT";
    TodosActionTypes["TODO_ADD"] = "TODO_ADD";
    TodosActionTypes["TODO_DELETE"] = "TODO_DELETE";
    TodosActionTypes["TODO_ONCHANGE"] = "TODO_ONCHANGE";
})(TodosActionTypes || (TodosActionTypes = {}));


/***/ }),

/***/ 3195:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ 5368:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61], () => (__webpack_exec__(697)));
module.exports = __webpack_exports__;

})();