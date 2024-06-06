module.exports = {

"[project]/app/Atoms/friendAtom.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "slctdFriend": ()=>slctdFriend
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const slctdFriend = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["atom"]({
    key: "selectedFriend",
    default: Number(localStorage.getItem("selectedFriend")) || -1
});

})()),
"[project]/app/Atoms/selectedFriendProfile.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "selectedFriendProfile": ()=>selectedFriendProfile
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const selectedFriendProfile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["atom"]({
    key: "selectedFriendProfile",
    default: -1
});

})()),
"[project]/app/profile/Friend.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Friend
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/lu/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/bi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$cg$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/cg/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/tb/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$friendAtom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/friendAtom.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$selectedFriendProfile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/selectedFriendProfile.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
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
;
;
;
function Friend({ friend }) {
    const [selectedProfile, setSelectedProfile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilState"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$selectedFriendProfile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectedFriendProfile"]);
    const [selectedFriend, setSelectedFriend] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilState"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$friendAtom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slctdFriend"]);
    const route = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"]();
    const [logged, setLogged] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](friend?.status === "online" || friend?.status === "ingame");
    const [inGame, setInGame] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](friend?.status === "ingame");
    const [blocked, setBlocked] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](friend?.fsStatus === "BLOCKED");
    const [burgerM, setBurgerM] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const handleSwitch = ()=>{
        setBlocked((prev)=>!prev);
    };
    const handleBurgerM = ()=>{
        setBurgerM((prev)=>!prev);
    };
    const test = ()=>{
        setSelectedFriend(friend?.uid);
        route.push("/chat");
        console.log("-------->>>>>>>");
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "friend_container",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "friend_name_photo",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: friend?.avatar,
                    width: 2000,
                    height: 2000,
                    className: `friend_avatar ${blocked && "blocked_friend_avatar"}`,
                    alt: "avatar"
                }, void 0, false, {
                    fileName: "<[project]/app/profile/Friend.tsx>",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                    htmlFor: "friendProfile",
                    className: `profile_name ${blocked && "blocked_friend"}  ${burgerM && "hideName"}`,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: `dot ${logged && "logged"}  ${logged && inGame && "ingame"}`
                        }, void 0, false, {
                            fileName: "<[project]/app/profile/Friend.tsx>",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        friend?.name
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/profile/Friend.tsx>",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: `btn_conatiner ${burgerM && "showParam"}`,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            id: "friendProfile",
                            onClick: ()=>setSelectedProfile(friend?.uid),
                            className: "friend_component_btn view_profile",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TbUserShare"], {
                                className: "go_to_profile"
                            }, void 0, false, {
                                fileName: "<[project]/app/profile/Friend.tsx>",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/profile/Friend.tsx>",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            className: `friend_component_btn friend_msg ${(blocked || !logged) && "disable_btns"}`,
                            onClick: test,
                            disabled: blocked || !logged,
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuMessagesSquare"], {}, void 0, false, {
                                fileName: "<[project]/app/profile/Friend.tsx>",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/profile/Friend.tsx>",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            className: `friend_component_btn friend_play ${(blocked || !logged || logged && inGame) && "disable_btns"}
                    `,
                            onClick: test,
                            disabled: blocked || !logged || logged && inGame,
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiSolidJoystickAlt"], {}, void 0, false, {
                                fileName: "<[project]/app/profile/Friend.tsx>",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/profile/Friend.tsx>",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdBlock"], {
                            onClick: handleSwitch,
                            className: `friend_block  ${blocked && "hide_block"}`
                        }, void 0, false, {
                            fileName: "<[project]/app/profile/Friend.tsx>",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$cg$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CgUnblock"], {
                            onClick: handleSwitch,
                            className: `friend_unblock  ${blocked && "show_unblock"}`
                        }, void 0, false, {
                            fileName: "<[project]/app/profile/Friend.tsx>",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/profile/Friend.tsx>",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    onClick: handleBurgerM,
                    className: "profile_burger_menu",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                            children: " "
                        }, void 0, false, {
                            fileName: "<[project]/app/profile/Friend.tsx>",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                            children: " "
                        }, void 0, false, {
                            fileName: "<[project]/app/profile/Friend.tsx>",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                            children: " "
                        }, void 0, false, {
                            fileName: "<[project]/app/profile/Friend.tsx>",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/profile/Friend.tsx>",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/app/profile/Friend.tsx>",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/app/profile/Friend.tsx>",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}

})()),
"[project]/app/profile/Friends.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Friends
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$profile$2f$Friend$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/profile/Friend.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/logged.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/userToken.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
function Friends({ whichProfile }) {
    const loggedU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loggedUser"]);
    const userTok = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userToken"]);
    const [userFriends, setUserFriends] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const getUserData = async ()=>{
            try {
                const res = await fetch(`http://localhost:3000/friends/${whichProfile}`, {
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    }
                });
                const data = await res.json();
                setUserFriends(data);
                console.log("userData-->>>", data);
            } catch (error) {
                console.log("--->>>", error.message);
            }
        };
        getUserData();
    }, [
        whichProfile
    ]);
    // const sortedFriends = friend_data.sort((a: FriendData, b: FriendData) => {
    //   const onlineComparison =
    //     (b.status === "online" ? 1 : 0) - (a.status === "online" ? 1 : 0);
    //   const ingameComparison =
    //     (b.status === "ingame" ? 1 : 0) - (a.status === "ingame" ? 1 : 0);
    //   return onlineComparison || ingameComparison;
    // });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "friends_container",
        children: userFriends?.length > 0 && userFriends?.map((e)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$profile$2f$Friend$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                friend: e
            }, e.uid, false, {
                fileName: "<[project]/app/profile/Friends.tsx>",
                lineNumber: 48,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "<[project]/app/profile/Friends.tsx>",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}

})()),
"[project]/app/data/player-info.json (json)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("{\"uid\":1645589456,\"status\":\"online\",\"username\":\"yassine el hajjami\",\"email\":\"yassine@gmail.com\",\"bio\":\"someone who like software :) !\",\"password\":\"yassine1234\",\"TwoFA\":true,\"choosedProfileImage\":\"/av/av1.png\",\"choosedBanner\":\"/Xarben_bear.png\",\"achievements\":[{\"name\":\"Precision Paddler\",\"description\":\"Win a single match with a perfect score, never missing a shot.\",\"uri\":\"/Precision_Paddler.png\",\"date\":\"02/22/2024\",\"unlocked\":true},{\"name\":\"Flawless Victory\",\"description\":\"Win a single match without letting your opponent score a single point.\",\"uri\":\"/flawless.png\",\"date\":\"\",\"unlocked\":false},{\"name\":\"Speed Demon\",\"description\":\"Win a match with a point scored within the first 10 seconds of each game.\",\"uri\":\"/Speed_Demon.png\",\"date\":\"\",\"unlocked\":false},{\"name\":\"Ping Pong Pro\",\"description\":\"Win 100 matches against tough opponents.\",\"uri\":\"/ping_pong_pro.png\",\"date\":\"03/07/2024\",\"unlocked\":true},{\"name\":\"AI Conqueror\",\"description\":\"Defeat the AI opponent on the highest difficulty level in a single match.\",\"uri\":\"/ai_conqueror.png\",\"date\":\"\",\"unlocked\":false}],\"avatarsAndPaddles\":[{\"id\":1,\"paddle\":\"green-paddle.png\",\"name\":\"ZENITH\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":500,\"owned\":true,\"choosed\":true},{\"id\":2,\"avatar\":\"avatar1.png\",\"name\":\"super hero\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":720,\"owned\":true,\"choosed\":false},{\"id\":3,\"avatar\":\"avatar2.png\",\"name\":\"pro avatar\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":310,\"owned\":true,\"choosed\":false},{\"id\":4,\"paddle\":\"gold-paddle.png\",\"name\":\"golden\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":880,\"owned\":true,\"power\":\"+ 15% ball speed\",\"choosed\":false},{\"id\":5,\"paddle\":\"pink-paddle.png\",\"name\":\"pinky\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":920,\"owned\":false,\"power\":\"+ 17% ball speed\",\"choosed\":false},{\"id\":6,\"avatar\":\"avatar3.png\",\"name\":\"flash\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":150,\"owned\":true,\"choosed\":false},{\"id\":7,\"avatar\":\"avatar4.png\",\"name\":\"hulk\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":360,\"owned\":false,\"choosed\":false}],\"statistic\":{\"level\":4,\"points\":783,\"rank\":\"beginner\",\"win\":19,\"lose\":6,\"resign\":7,\"wlr\":2.2},\"matches\":[{\"todaysDate\":\"20/12/2023\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"yahya taqsi\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":3},{\"hour\":\"11:24\",\"opponent\":\"mhammed hamadani\",\"result\":\"LOSE\",\"mygoals\":6,\"opponentgoals\":7}]},{\"todaysDate\":\"29/12/2023\",\"todaysMatches\":[{\"hour\":\"12:24\",\"opponent\":\"ayoub amentag\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":1},{\"hour\":\"14:24\",\"opponent\":\"lmaati lmadani\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":2}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"xxxxxx\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]}],\"stats\":[{\"date\":\"10/01/2024\",\"win\":7,\"lose\":2},{\"date\":\"11/01/2024\",\"win\":9,\"lose\":3},{\"date\":\"20/01/2024\",\"win\":11,\"lose\":4},{\"date\":\"22/01/2024\",\"win\":4,\"lose\":0},{\"date\":\"02/02/2024\",\"win\":14,\"lose\":20},{\"date\":\"05/02/2024\",\"win\":40,\"lose\":32},{\"date\":\"10/02/2024\",\"win\":12,\"lose\":12},{\"date\":\"12/02/2024\",\"win\":1,\"lose\":0},{\"date\":\"15/02/2024\",\"win\":18,\"lose\":10},{\"date\":\"20/02/2024\",\"win\":22,\"lose\":30},{\"date\":\"22/02/2024\",\"win\":9,\"lose\":10}]}"));
})()),
"[project]/app/profile/Stats.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Stats
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$player$2d$info$2e$json__$28$json$29$__ = __turbopack_import__("[project]/app/data/player-info.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/chart/AreaChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/Area.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
function Stats() {
    const player_data = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$player$2d$info$2e$json__$28$json$29$__["default"];
    const [statsSwitch, setStatsSwitch] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({
        state: "win",
        color: "#1ce14e"
    });
    const [chartData, setChartData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>transformPlayerData(player_data));
    function transformPlayerData(player_data) {
        const dataArray = player_data.stats.map((stat)=>{
            const [month, year] = stat.date.split("/");
            if (statsSwitch.state === "win") return {
                [statsSwitch.state]: parseInt(stat.win),
                name: `${month}/${year.slice(-2)}`
            };
            if (statsSwitch.state === "lose") return {
                [statsSwitch.state]: parseInt(stat.lose),
                name: `${month}/${year.slice(-2)}`
            };
            if (statsSwitch.state === "w/l") {
                const wl = parseInt(stat.win) / (parseInt(stat.win) + parseInt(stat.lose)) * 100;
                return {
                    [statsSwitch.state]: wl.toFixed(2),
                    name: `${month}/${year.slice(-2)}`
                };
            }
        });
        return dataArray;
    }
    const switchStats = (e)=>{
        const buttonText = e.target.textContent;
        if (buttonText === "win") setStatsSwitch({
            state: "win",
            color: "#1ce14e"
        });
        if (buttonText === "lose") setStatsSwitch({
            state: "lose",
            color: "#ff3355"
        });
        if (buttonText === "w/l") setStatsSwitch({
            state: "w/l",
            color: "#ff7f00"
        });
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setChartData(transformPlayerData(player_data));
    }, [
        statsSwitch
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "stats_container",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                className: "chart",
                width: "100%",
                height: "90%",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"], {
                    data: chartData,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "name",
                            axisLine: {
                                stroke: "white"
                            },
                            tick: {
                                fill: "white"
                            }
                        }, void 0, false, {
                            fileName: "<[project]/app/profile/Stats.tsx>",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                            domain: statsSwitch.state === "w/l" ? [
                                0,
                                100
                            ] : undefined,
                            axisLine: {
                                stroke: "white"
                            },
                            tick: {
                                fill: "white"
                            }
                        }, void 0, false, {
                            fileName: "<[project]/app/profile/Stats.tsx>",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                            fileName: "<[project]/app/profile/Stats.tsx>",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("defs", {
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("linearGradient", {
                                id: "colorUv",
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                        offset: "0%",
                                        stopColor: statsSwitch.color,
                                        stopOpacity: 0.8
                                    }, void 0, false, {
                                        fileName: "<[project]/app/profile/Stats.tsx>",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                        offset: "100%",
                                        stopColor: statsSwitch.color,
                                        stopOpacity: 0
                                    }, void 0, false, {
                                        fileName: "<[project]/app/profile/Stats.tsx>",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/profile/Stats.tsx>",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/profile/Stats.tsx>",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
                            type: "monotone",
                            dataKey: statsSwitch.state,
                            stroke: statsSwitch.color,
                            fill: "url(#colorUv)"
                        }, void 0, false, {
                            fileName: "<[project]/app/profile/Stats.tsx>",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/profile/Stats.tsx>",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/profile/Stats.tsx>",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "stat_btn_switch",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        className: `${statsSwitch.state === "win" && "btn_win"}`,
                        onClick: switchStats,
                        children: "win"
                    }, void 0, false, {
                        fileName: "<[project]/app/profile/Stats.tsx>",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        className: `${statsSwitch.state === "lose" && "btn_lose"}`,
                        onClick: switchStats,
                        children: "lose"
                    }, void 0, false, {
                        fileName: "<[project]/app/profile/Stats.tsx>",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        className: `${statsSwitch.state === "w/l" && "btn_wl"}`,
                        onClick: switchStats,
                        children: "w/l"
                    }, void 0, false, {
                        fileName: "<[project]/app/profile/Stats.tsx>",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/profile/Stats.tsx>",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/profile/Stats.tsx>",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}

})()),
"[project]/app/profile/Achievement.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Achievement
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function Achievement({ achievement }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: `achievement_container ${!achievement.unlocked && "locked_achievement"}`,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: achievement.uri,
                width: 1000,
                height: 1000,
                className: `friend_achievement_badge  `,
                alt: "achievement"
            }, void 0, false, {
                fileName: "<[project]/app/profile/Achievement.tsx>",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "achievement_name",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "achievement_desc",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                children: achievement.name
                            }, void 0, false, {
                                fileName: "<[project]/app/profile/Achievement.tsx>",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                className: "unlocked_at",
                                children: achievement.date
                            }, void 0, false, {
                                fileName: "<[project]/app/profile/Achievement.tsx>",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/profile/Achievement.tsx>",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h5", {
                        children: achievement.description
                    }, void 0, false, {
                        fileName: "<[project]/app/profile/Achievement.tsx>",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/profile/Achievement.tsx>",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/profile/Achievement.tsx>",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}

})()),
"[project]/app/profile/Achievements.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Achievements
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$profile$2f$Achievement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/profile/Achievement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$player$2d$info$2e$json__$28$json$29$__ = __turbopack_import__("[project]/app/data/player-info.json (json)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
function Achievements() {
    const player_data = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$player$2d$info$2e$json__$28$json$29$__["default"];
    const sortedAchievements = player_data.achievements.sort((a, b)=>b.unlicked - a.unlicked);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "achievements_container",
        children: sortedAchievements.map((e)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$profile$2f$Achievement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                achievement: e
            }, e.name, false, {
                fileName: "<[project]/app/profile/Achievements.tsx>",
                lineNumber: 16,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "<[project]/app/profile/Achievements.tsx>",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}

})()),
"[project]/app/profile/ProfileDetails.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>ProfileDetails
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$profile$2f$Friends$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/profile/Friends.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$profile$2f$Stats$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/profile/Stats.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$profile$2f$Achievements$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/profile/Achievements.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
function ProfileDetails({ whichProfile }) {
    const [switchElements, setSwitchElements] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("friends");
    const switchE = (e)=>{
        setSwitchElements(e.currentTarget.textContent || "");
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "profile_details_container",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "profile_details_header",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        onClick: switchE,
                        className: `${switchElements === "stats" && "underline_animation"}`,
                        children: "stats"
                    }, void 0, false, {
                        fileName: "<[project]/app/profile/ProfileDetails.tsx>",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        onClick: switchE,
                        className: `${switchElements === "friends" && "underline_animation"}`,
                        children: "friends"
                    }, void 0, false, {
                        fileName: "<[project]/app/profile/ProfileDetails.tsx>",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        onClick: switchE,
                        className: `${switchElements === "achievements" && "underline_animation"}`,
                        children: "achievements"
                    }, void 0, false, {
                        fileName: "<[project]/app/profile/ProfileDetails.tsx>",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/profile/ProfileDetails.tsx>",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "profile_details_data",
                children: [
                    switchElements === "stats" && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$profile$2f$Stats$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "<[project]/app/profile/ProfileDetails.tsx>",
                        lineNumber: 45,
                        columnNumber: 40
                    }, this),
                    switchElements === "friends" && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$profile$2f$Friends$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        whichProfile: whichProfile
                    }, void 0, false, {
                        fileName: "<[project]/app/profile/ProfileDetails.tsx>",
                        lineNumber: 46,
                        columnNumber: 43
                    }, this),
                    switchElements === "achievements" && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$profile$2f$Achievements$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "<[project]/app/profile/ProfileDetails.tsx>",
                        lineNumber: 47,
                        columnNumber: 47
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/profile/ProfileDetails.tsx>",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/profile/ProfileDetails.tsx>",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}

})()),
"[project]/app/profile/page.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$profile$2f$ProfileDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/profile/ProfileDetails.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/logged.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/userToken.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/pi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$selectedFriendProfile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/selectedFriendProfile.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
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
;
const Profile = ()=>{
    const uidRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const [selectedProfile, setSelectedProfile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilState"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$selectedFriendProfile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectedFriendProfile"]);
    const loggedU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loggedUser"]);
    const userTok = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userToken"]);
    const [userData, setUserData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({});
    // const copyUID = () => {
    //   return;
    //   if (uidRef.current) {
    //     const textToCopy = uidRef.current.textContent || "";
    //     navigator.clipboard
    //       .writeText(textToCopy)
    //       .then(() => {
    //         console.log("Text copied to clipboard:", textToCopy);
    //       })
    //       .catch((error) => {
    //         console.error("Unable to copy text to clipboard", error);
    //       });
    //   }
    // };
    // useEffect(() => {
    //   setSelectedProfile(-1);
    // });
    const whichProfile = selectedProfile === -1 ? loggedU : selectedProfile;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const getUserData = async ()=>{
            try {
                const res = await fetch(`http://localhost:3000/users/${whichProfile}`, {
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    }
                });
                const data = await res.json();
                setUserData(data);
                console.log("userData-->>>", data);
            } catch (error) {
                console.log("--->>>", error.message);
            }
        };
        getUserData();
    }, [
        whichProfile
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "profile_container",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                style: {
                    backgroundImage: `linear-gradient(
          77deg,
          rgba(0, 0, 0, 1) 30%,
          rgba(255, 255, 255, 0) 100%
        ), url(http://localhost:3000/bn${userData?.banner})`
                },
                className: "user_account",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "edit_label",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                children: "Edit"
                            }, void 0, false, {
                                fileName: "<[project]/app/profile/page.tsx>",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdOutlineEdit"], {}, void 0, false, {
                                fileName: "<[project]/app/profile/page.tsx>",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/profile/page.tsx>",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: `http://localhost:3000/av/${userData?.avatar}`,
                        // src={userData?.avatar}
                        width: 2000,
                        height: 2000,
                        alt: "profile_avatar",
                        className: "profile_photo"
                    }, void 0, false, {
                        fileName: "<[project]/app/profile/page.tsx>",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "profile_data",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                children: userData?.username
                            }, void 0, false, {
                                fileName: "<[project]/app/profile/page.tsx>",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                className: "profile_username",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiCurrencyEthFill"], {}, void 0, false, {
                                        fileName: "<[project]/app/profile/page.tsx>",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    userData?.wallet
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/profile/page.tsx>",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                className: "profile_email",
                                children: userData?.email
                            }, void 0, false, {
                                fileName: "<[project]/app/profile/page.tsx>",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                className: "profile_user_lvl",
                                children: [
                                    "LVL ",
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        children: userData?.level
                                    }, void 0, false, {
                                        fileName: "<[project]/app/profile/page.tsx>",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/profile/page.tsx>",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/profile/page.tsx>",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "profile_progress",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "progress",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    style: {
                                        width: `${userData?.level}%`
                                    },
                                    className: "pseudoProgress"
                                }, void 0, false, {
                                    fileName: "<[project]/app/profile/page.tsx>",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/profile/page.tsx>",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                //  onClick={copyUID}
                                ref: uidRef,
                                className: "profile_uid",
                                children: [
                                    userData?.uid,
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdContentCopy"], {}, void 0, false, {
                                        fileName: "<[project]/app/profile/page.tsx>",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/profile/page.tsx>",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/profile/page.tsx>",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/profile/page.tsx>",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "profile_details",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$profile$2f$ProfileDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    whichProfile: whichProfile
                }, void 0, false, {
                    fileName: "<[project]/app/profile/page.tsx>",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/profile/page.tsx>",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/profile/page.tsx>",
        lineNumber: 64,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Profile;

})()),
"[project]/app/profile/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),

};

//# sourceMappingURL=app_2467c1._.js.map