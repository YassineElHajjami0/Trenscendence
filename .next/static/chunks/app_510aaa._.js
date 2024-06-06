(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_510aaa._.js", {

"[project]/app/settings/popupChooseImage/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ti$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ti/index.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
const Popup = ({ Type, Articles, setShowArticlesPopup, setProfileImage, setProfileBanner })=>{
    const paddles = Articles.filter((e)=>e.paddle ? e : "");
    const avatars = Articles.filter((e)=>e.avatar ? e : "");
    const banners = Articles.filter((e)=>e.banner ? e : "");
    console.log(Type, banners);
    let ArticlesToRender;
    if (Type == "avatar") {
        ArticlesToRender = avatars.map((e)=>{
            if (e.owned == "yes" && e.choosed == "no") {
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "item",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "picture",
                                src: `/${e.avatar}`,
                                width: 150,
                                height: 150,
                                alt: "avatar"
                            }, void 0, false, {
                                fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "name",
                            children: e.name
                        }, void 0, false, {
                            fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "description",
                            children: e.description
                        }, void 0, false, {
                            fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            className: "selectBtn",
                            onClick: ()=>{
                                setShowArticlesPopup(false);
                                setProfileImage(`/${e.avatar}`);
                            },
                            children: "select"
                        }, void 0, false, {
                            fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this)
                    ]
                }, e.id, true, {
                    fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                    lineNumber: 45,
                    columnNumber: 11
                }, this);
            }
        });
    } else if (Type == "paddle") {
        ArticlesToRender = paddles.map((e)=>{
            if (e.owned == "yes" && e.choosed == "no") {
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "item",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "picture",
                                src: `/${e.paddle}`,
                                width: 150,
                                height: 150,
                                alt: "paddle"
                            }, void 0, false, {
                                fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "name",
                            children: e.name
                        }, void 0, false, {
                            fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "description",
                            children: e.description
                        }, void 0, false, {
                            fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            className: "selectBtn",
                            onClick: ()=>{
                                setShowArticlesPopup(false);
                            },
                            children: "select"
                        }, void 0, false, {
                            fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this)
                    ]
                }, e.id, true, {
                    fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                    lineNumber: 74,
                    columnNumber: 11
                }, this);
            }
        });
    } else if (Type == "banner") {
        ArticlesToRender = banners.map((e)=>{
            if (e.choosed == "no") {
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "item",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "picture",
                                src: `/${e.banner}`,
                                width: 150,
                                height: 100,
                                alt: "banner"
                            }, void 0, false, {
                                fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            className: "selectBtn",
                            onClick: ()=>{
                                setShowArticlesPopup(false);
                                console.log(e.banner);
                                setProfileBanner(`/${e.banner}`);
                            },
                            children: "select"
                        }, void 0, false, {
                            fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    ]
                }, e.id, true, {
                    fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                    lineNumber: 102,
                    columnNumber: 11
                }, this);
            }
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "renderedArticles",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "blobs"
            }, void 0, false, {
                fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                className: "cancel",
                onClick: ()=>setShowArticlesPopup(false),
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ti$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiDelete"], {
                    className: "icon"
                }, void 0, false, {
                    fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                    lineNumber: 196,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "renderedArticlesContainer",
                children: [
                    " ",
                    ArticlesToRender ? ArticlesToRender : "soory no article availabele"
                ]
            }, void 0, true, {
                fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
                lineNumber: 198,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/settings/popupChooseImage/page.tsx>",
        lineNumber: 128,
        columnNumber: 5
    }, this);
};
_c = Popup;
const __TURBOPACK__default__export__ = Popup;
var _c;
__turbopack_refresh__.register(_c, "Popup");

})()),
"[project]/app/data/player-info.json (json)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("{\"uid\":1645589456,\"status\":\"online\",\"username\":\"yassine el hajjami\",\"email\":\"yassine@gmail.com\",\"bio\":\"someone who like software :) !\",\"password\":\"yassine1234\",\"TwoFA\":true,\"choosedProfileImage\":\"/av/av1.png\",\"choosedBanner\":\"/Xarben_bear.png\",\"achievements\":[{\"name\":\"Precision Paddler\",\"description\":\"Win a single match with a perfect score, never missing a shot.\",\"uri\":\"/Precision_Paddler.png\",\"date\":\"02/22/2024\",\"unlocked\":true},{\"name\":\"Flawless Victory\",\"description\":\"Win a single match without letting your opponent score a single point.\",\"uri\":\"/flawless.png\",\"date\":\"\",\"unlocked\":false},{\"name\":\"Speed Demon\",\"description\":\"Win a match with a point scored within the first 10 seconds of each game.\",\"uri\":\"/Speed_Demon.png\",\"date\":\"\",\"unlocked\":false},{\"name\":\"Ping Pong Pro\",\"description\":\"Win 100 matches against tough opponents.\",\"uri\":\"/ping_pong_pro.png\",\"date\":\"03/07/2024\",\"unlocked\":true},{\"name\":\"AI Conqueror\",\"description\":\"Defeat the AI opponent on the highest difficulty level in a single match.\",\"uri\":\"/ai_conqueror.png\",\"date\":\"\",\"unlocked\":false}],\"avatarsAndPaddles\":[{\"id\":1,\"paddle\":\"green-paddle.png\",\"name\":\"ZENITH\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":500,\"owned\":true,\"choosed\":true},{\"id\":2,\"avatar\":\"avatar1.png\",\"name\":\"super hero\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":720,\"owned\":true,\"choosed\":false},{\"id\":3,\"avatar\":\"avatar2.png\",\"name\":\"pro avatar\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":310,\"owned\":true,\"choosed\":false},{\"id\":4,\"paddle\":\"gold-paddle.png\",\"name\":\"golden\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":880,\"owned\":true,\"power\":\"+ 15% ball speed\",\"choosed\":false},{\"id\":5,\"paddle\":\"pink-paddle.png\",\"name\":\"pinky\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":920,\"owned\":false,\"power\":\"+ 17% ball speed\",\"choosed\":false},{\"id\":6,\"avatar\":\"avatar3.png\",\"name\":\"flash\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":150,\"owned\":true,\"choosed\":false},{\"id\":7,\"avatar\":\"avatar4.png\",\"name\":\"hulk\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":360,\"owned\":false,\"choosed\":false}],\"statistic\":{\"level\":4,\"points\":783,\"rank\":\"beginner\",\"win\":19,\"lose\":6,\"resign\":7,\"wlr\":2.2},\"matches\":[{\"todaysDate\":\"20/12/2023\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"yahya taqsi\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":3},{\"hour\":\"11:24\",\"opponent\":\"mhammed hamadani\",\"result\":\"LOSE\",\"mygoals\":6,\"opponentgoals\":7}]},{\"todaysDate\":\"29/12/2023\",\"todaysMatches\":[{\"hour\":\"12:24\",\"opponent\":\"ayoub amentag\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":1},{\"hour\":\"14:24\",\"opponent\":\"lmaati lmadani\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":2}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"xxxxxx\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]}],\"stats\":[{\"date\":\"10/01/2024\",\"win\":7,\"lose\":2},{\"date\":\"11/01/2024\",\"win\":9,\"lose\":3},{\"date\":\"20/01/2024\",\"win\":11,\"lose\":4},{\"date\":\"22/01/2024\",\"win\":4,\"lose\":0},{\"date\":\"02/02/2024\",\"win\":14,\"lose\":20},{\"date\":\"05/02/2024\",\"win\":40,\"lose\":32},{\"date\":\"10/02/2024\",\"win\":12,\"lose\":12},{\"date\":\"12/02/2024\",\"win\":1,\"lose\":0},{\"date\":\"15/02/2024\",\"win\":18,\"lose\":10},{\"date\":\"20/02/2024\",\"win\":22,\"lose\":30},{\"date\":\"22/02/2024\",\"win\":9,\"lose\":10}]}"));
})()),
"[project]/app/settings/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$settings$2f$popupChooseImage$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/settings/popupChooseImage/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/userToken.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const Settings = ()=>{
    _s();
    // const player_data: PlayerInfo = playerData;
    const [ArticlesType, setArticlesType] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [showArticlesPopup, setShowArticlesPopup] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    // const [profileBanner, setProfileBanner] = useState(player_data.choosedBanner);
    // const [profileImage, setProfileImage] = useState(
    //   player_data.choosedProfileImage
    // );
    // const [twoFaStatus, setTwoFaStatus] = useState(player_data.TwoFA);
    // const [username, setUserName] = useState(player_data.username);
    // const [email, setEmail] = useState(player_data.email);
    // const [password, setPassword] = useState(player_data.password);
    // const [bio, setBio] = useState(player_data.bio);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const userTok = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userToken"]);
    //http://localhost:3000/users/2 if no 2 the backend does not return an error
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const fetchedData = async ()=>{
            try {
                const response = await fetch("http://localhost:3000/users/1", {
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    }
                });
                const data = await response.json();
                setData(data);
                console.log(data);
            } catch (err) {
                console.error("settings error >>>>>>", err);
            }
        };
        fetchedData();
    }, []);
    function changeInputValue(e) {
        const { name, value } = e.target;
        switch(name){
            case "username":
                setData((prevData)=>({
                        ...prevData,
                        username: value
                    }));
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "bio":
                setBio(value);
                break;
            default:
                break;
        }
        // const newData = {
        //   avatar: "avatar1",
        //   banner: "banner.jpeg",
        //   username: username, //here the input is not yet updated it gives me the old value of username
        //   email: email,
        //   password: password,
        //   bio: bio,
        //   twoFA: twoFaStatus,
        // };
        setData((prevData)=>({
                ...prevData,
                avatar: "avatar1",
                banner: "banner.jpeg",
                username: username,
                email: email,
                password: password,
                bio: bio,
                twoFA: twoFaStatus
            }));
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 1000);
    }, []);
    const saveUpdatewBtn = async ()=>{
        try {
            const response = await fetch("http://10.11.4.15:3001/users/2", {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${userTok}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    avatar: "hamada",
                    banner: data?.banner,
                    username: data?.username,
                    email: data?.email,
                    password: data?.password,
                    bio: data?.bio,
                    twoFA: data?.twoFA
                })
            });
            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(`Failed to patch data. Error: ${errorResponse.message}`);
            }
        } catch (err) {
            console.error(">>>", err);
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: loading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "container",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "bat",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "handle",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "inner"
                            }, void 0, false, {
                                fileName: "<[project]/app/settings/page.tsx>",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/settings/page.tsx>",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "front"
                        }, void 0, false, {
                            fileName: "<[project]/app/settings/page.tsx>",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/settings/page.tsx>",
                    lineNumber: 149,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "ball"
                }, void 0, false, {
                    fileName: "<[project]/app/settings/page.tsx>",
                    lineNumber: 155,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/app/settings/page.tsx>",
            lineNumber: 148,
            columnNumber: 9
        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: showArticlesPopup ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$settings$2f$popupChooseImage$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                Type: ArticlesType,
                Articles: player_data.avatarsAndPaddles,
                setShowArticlesPopup: setShowArticlesPopup,
                setProfileImage: setProfileImage,
                setProfileBanner: setProfileBanner
            }, void 0, false, {
                fileName: "<[project]/app/settings/page.tsx>",
                lineNumber: 160,
                columnNumber: 13
            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "settings-container",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "banner",
                        style: {
                            backgroundImage: `url('${profileBanner}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        },
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "image-holder",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "profile-image",
                                            src: profileImage,
                                            width: 200,
                                            height: 200,
                                            alt: "Profile Picture"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/settings/page.tsx>",
                                            lineNumber: 179,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 178,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        className: "btn-change-profile",
                                        onClick: ()=>{
                                            setArticlesType("avatar");
                                            setShowArticlesPopup(!showArticlesPopup);
                                        },
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoCameraReverse"], {
                                            className: "camera"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/settings/page.tsx>",
                                            lineNumber: 194,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 187,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/settings/page.tsx>",
                                lineNumber: 177,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "button-holder",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    className: "addBannerBtn",
                                    onClick: ()=>{
                                        setArticlesType("banner");
                                        setShowArticlesPopup(!showArticlesPopup);
                                    },
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdAdd"], {
                                        className: "plus-icon"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 205,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/app/settings/page.tsx>",
                                    lineNumber: 198,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/settings/page.tsx>",
                                lineNumber: 197,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/settings/page.tsx>",
                        lineNumber: 169,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "inputs-and-2fa",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "inputs",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                htmlFor: "username",
                                                children: "username"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 212,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                type: "text",
                                                name: "username",
                                                id: "username",
                                                placeholder: "Username",
                                                className: "username",
                                                value: data?.username,
                                                onChange: (e)=>changeInputValue(e)
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 213,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 211,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                htmlFor: "label",
                                                children: "email"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 224,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                type: "text",
                                                name: "email",
                                                id: "email",
                                                placeholder: "Email",
                                                className: "email",
                                                value: data?.email,
                                                onChange: (e)=>changeInputValue(e)
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 225,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 223,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                htmlFor: "label",
                                                children: "password"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 236,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                id: "password",
                                                type: "password",
                                                name: "password",
                                                placeholder: "Password",
                                                className: "Password",
                                                value: password,
                                                onChange: (e)=>changeInputValue(e)
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 237,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 235,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                htmlFor: "label",
                                                children: "Bio"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 248,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("textarea", {
                                                rows: 4,
                                                placeholder: "Bio",
                                                className: "username",
                                                name: "bio",
                                                value: bio,
                                                onChange: (e)=>changeInputValue(e)
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 249,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 247,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/settings/page.tsx>",
                                lineNumber: 210,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "twofa",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                        children: [
                                            "Set Up Two Factor Authentication ",
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLock"], {}, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 261,
                                                columnNumber: 54
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 260,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/qr.png",
                                                alt: "Qr code",
                                                width: 200,
                                                height: 200
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 264,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                onClick: ()=>setTwoFaStatus(!twoFaStatus),
                                                className: twoFaStatus ? "redbc" : "greenbc",
                                                children: twoFaStatus ? "Disable 2FA" : "Enable 2FA"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 270,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 263,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/settings/page.tsx>",
                                lineNumber: 259,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/settings/page.tsx>",
                        lineNumber: 209,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        className: "saveUpdates",
                        onClick: saveUpdatewBtn,
                        children: "Save Updates"
                    }, void 0, false, {
                        fileName: "<[project]/app/settings/page.tsx>",
                        lineNumber: 279,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/settings/page.tsx>",
                lineNumber: 168,
                columnNumber: 13
            }, this)
        }, void 0, false)
    }, void 0, false);
};
_s(Settings, "19wfxXmSDNlNOPUa1WppuHAK2cc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"]
    ];
});
_c = Settings;
const __TURBOPACK__default__export__ = Settings;
var _c;
__turbopack_refresh__.register(_c, "Settings");

})()),
"[project]/app/settings/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=app_510aaa._.js.map