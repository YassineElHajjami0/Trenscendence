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
"[project]/app/chat/Friends/FriendChat.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$friendAtom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/friendAtom.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const FriendChat = ({ friendData })=>{
    const [selectedFriend, setSelectedFriend] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilState"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$friendAtom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slctdFriend"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        onClick: ()=>setSelectedFriend(friendData.uid),
        className: "friend_chat_container",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "chat_list_avatar_container",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "chat_list_avatar",
                        src: friendData?.avatar,
                        width: 2000,
                        height: 2000,
                        alt: "avatar"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendChat.tsx>",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                        className: `status_dot ${friendData?.status === "online" && "logged"}  ${friendData?.status === "ingame" && "ingame"}`
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendChat.tsx>",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Friends/FriendChat.tsx>",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "chat_list_name",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                        children: friendData?.name
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendChat.tsx>",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                        children: friendData?.lastMSG
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendChat.tsx>",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Friends/FriendChat.tsx>",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/chat/Friends/FriendChat.tsx>",
        lineNumber: 16,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = FriendChat;

})()),
"[project]/app/chat/Friends/FriendsChat.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>FriendsChat
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Friends/FriendChat.tsx [app-ssr] (ecmascript)");
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
function FriendsChat() {
    const loggedUserUID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loggedUser"]);
    const userTok = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userToken"]);
    const [myFriends, setMyFriends] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    const getMyFriends = async ()=>{
        try {
            const response = await fetch(`http://localhost:3000/friends/${loggedUserUID}`, {
                headers: {
                    Authorization: `Bearer ${userTok}`,
                    "Content-Type": "application/json"
                }
            });
            if (!response) {
                console.log("Error000");
            }
            const data = await response.json();
            console.log("------->my friends", data);
            setMyFriends(data);
        } catch (error) {
            console.log("Error111");
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        getMyFriends();
    }, []);
    // const friend_data: FriendData[] = friendData;
    // const sortedFriends = friend_data.sort((a: FriendData, b: FriendData) => {
    //   const onlineComparison =
    //     (b.status === "online" ? 1 : 0) - (a.status === "online" ? 1 : 0);
    //   const ingameComparison =
    //     (b.status === "ingame" ? 1 : 0) - (a.status === "ingame" ? 1 : 0);
    //   return onlineComparison || ingameComparison;
    // });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "friends_chat_container",
        children: myFriends.length > 0 && myFriends.map((f)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                friendData: f
            }, f?.uid, false, {
                fileName: "<[project]/app/chat/Friends/FriendsChat.tsx>",
                lineNumber: 54,
                columnNumber: 35
            }, this))
    }, void 0, false, {
        fileName: "<[project]/app/chat/Friends/FriendsChat.tsx>",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}

})()),
"[project]/app/chat/Channels/channelChat.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ai/index.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const ChannelChat = ({ channels, setSelectedChannel, setShowPopUpCreateChannel })=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "channelsListContainer",
                children: channels?.map((channel)=>{
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "channelContainer",
                        onClick: ()=>{
                            setSelectedChannel(channel.id);
                        },
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "imageContainer",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "channelImage",
                                    src: `http://localhost:3000/${channel.uri}`,
                                    width: 80,
                                    height: 80,
                                    alt: "avatar"
                                }, void 0, false, {
                                    fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                                    lineNumber: 40,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "name_lastmsg",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: channel.name.length > 10 ? `${channel.name.substring(0, 10)}..` : channel.name
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        children: [
                                            channel.roles.length,
                                            " ",
                                            channel.roles.length < 2 ? "member" : "members",
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this)
                        ]
                    }, channel.id, true, {
                        fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "addChannelBtn",
                onClick: ()=>setShowPopUpCreateChannel(true),
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineUsergroupAdd"], {}, void 0, false, {
                    fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = ChannelChat;

})()),
"[project]/app/chat/Channels/SelectedChannelChat.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
const socket = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["io"]("http://localhost:3001", {
    transports: [
        "websocket"
    ]
});
console.log("MMMMMM", socket);
const SelectedChannelChat = ({ userId, userTok, channels, selectedChannel, setSelectedChannel })=>{
    const [chToDisplay, setChToDisplay] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const [messages, setMessages] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const [msgContent, setMsgContent] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("");
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let channelToDisplay = channels?.find((ch)=>ch.id === selectedChannel);
        const fetchMessages = async ()=>{
            try {
                const response = await fetch(`http://localhost:3000/message/${channelToDisplay?.id}`, {
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    }
                });
                const data = await response.json();
                console.log(">>>MESSAGES>>>>>", data);
                setMessages(data);
            } catch (error) {
                console.log("Error herere");
            }
        };
        fetchMessages();
        console.log("channel to display : ", channelToDisplay);
        setChToDisplay(channelToDisplay);
    }, [
        selectedChannel
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleReceiveMessage = (message)=>{
            if (message?.channelID === chToDisplay?.id) setMessages((prevMessages)=>[
                    ...prevMessages,
                    message
                ]);
        };
        socket.on("message", handleReceiveMessage);
        return ()=>{
            console.log("OUUUUUUUUTTTT");
            socket.off("message");
        };
    }, [
        chToDisplay?.id
    ]);
    const handleSendingMessage = (e)=>{
        const sendTheMessage = async ()=>{
            try {
                const channelData = {
                    userID: userId,
                    channelID: chToDisplay?.id,
                    content: msgContent
                };
                const response = await fetch(`http://localhost:3000/message`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(channelData)
                }).then(()=>{
                    setMsgContent("");
                });
            } catch (error) {
                console.log("Error herere");
            }
        };
        sendTheMessage();
    };
    const returnTime = (msgTime)=>{
        const options = {
            hour: "2-digit",
            minute: "2-digit"
        };
        const date = new Date(msgTime).toLocaleString("en-US", options);
        return date;
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "channel_msg_section",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "channel_msg_section_header",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoArrowBackOutline"], {
                        style: {
                            width: "20px",
                            margin: "5px"
                        },
                        className: "arrow_back",
                        onClick: ()=>setSelectedChannel(-1)
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "channel_msg_section_header_avatar",
                        src: `http://localhost:3000/${chToDisplay?.uri}` ?? "http://localhost:3000/default.png",
                        width: 100,
                        height: 100,
                        alt: "avatar"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                style: {
                                    display: "block"
                                },
                                children: chToDisplay?.name
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                children: [
                                    chToDisplay?.roles.length,
                                    " ",
                                    chToDisplay?.roles.length && chToDisplay?.roles.length < 2 ? "member" : "members"
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "channel_msg_section_chat",
                children: messages?.map((message)=>{
                    return message.userID == userId ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "channelMsgContainerRecipient",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "msgAndTime",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "channelMsg",
                                    children: message.content
                                }, void 0, false, {
                                    fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                                    lineNumber: 161,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "msgTime",
                                    children: returnTime(message.createdAT)
                                }, void 0, false, {
                                    fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                            lineNumber: 160,
                            columnNumber: 15
                        }, this)
                    }, message.id, false, {
                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                        lineNumber: 159,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "channelMsgContainer",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "senderOrRecieverImage",
                                src: `http://localhost:3000/${message.users.avatar}`,
                                width: 30,
                                height: 30,
                                alt: "PIC"
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                                lineNumber: 167,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "msgAndTime",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "channelMsg",
                                        children: message.content
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "msgTime",
                                        children: returnTime(message.createdAT)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this)
                        ]
                    }, message.id, true, {
                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                        lineNumber: 166,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "channel_msg_section_input",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                        type: "text",
                        value: msgContent,
                        onChange: (e)=>setMsgContent(e.target.value),
                        onKeyDown: (e)=>{
                            if (e.key == "Enter") {
                                handleSendingMessage(e);
                            }
                        }
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoIosSend"], {
                        className: "sendIcon",
                        onClick: (e)=>{
                            handleSendingMessage(e);
                        }
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
        lineNumber: 129,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = SelectedChannelChat;

})()),
"[project]/app/chat/Friends/FriendMSG.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "FriendMSG": ()=>FriendMSG
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/logged.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const FriendMSG = ({ message })=>{
    const loggedU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loggedUser"]);
    const options = {
        hour: "2-digit",
        minute: "2-digit"
    };
    const date = new Date(message?.createdAT).toLocaleString("en-US", options);
    // "id": 4,
    //       "userID": 2,
    //       "channelID": 21,
    //       "content": "wax nta f medrasa",
    //       "createdAT": "2024-03-31T13:08:33.627Z"
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: `chat_msg_container ${message?.userID !== loggedU && "sender"}`,
        children: [
            message?.content,
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                className: `friend_msg_time ${message?.userID !== loggedU && "sender_time"}`,
                children: date
            }, void 0, false, {
                fileName: "<[project]/app/chat/Friends/FriendMSG.tsx>",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/chat/Friends/FriendMSG.tsx>",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};

})()),
"[project]/app/chat/Friends/ChatContainer.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ChatContainer": ()=>ChatContainer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendMSG$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Friends/FriendMSG.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const ChatContainer = ({ messages })=>{
    // const options = { month: "long", day: "numeric", year: "numeric" };
    // const date = new Date(messages?.date).toLocaleString(
    //   "en-US",
    //   options as Intl.DateTimeFormatOptions
    // );
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "chat_container",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendMSG$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FriendMSG"], {
            message: messages
        }, messages.createdAT, false, {
            fileName: "<[project]/app/chat/Friends/ChatContainer.tsx>",
            lineNumber: 17,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "<[project]/app/chat/Friends/ChatContainer.tsx>",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};

})()),
"[project]/app/Atoms/currentFriend.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "currentFriend": ()=>currentFriend
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const currentFriend = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["atom"]({
    key: "currentFriend",
    default: null
});

})()),
"[project]/app/chat/Friends/FriendChatList.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/bi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$ChatContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Friends/ChatContainer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$friendAtom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/friendAtom.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$currentFriend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/currentFriend.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/logged.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/userToken.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ri/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js [app-ssr] (ecmascript)");
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
;
;
;
const socket = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__["io"]("http://localhost:3001", {
    transports: [
        'websocket'
    ]
});
const FriendChatList = ()=>{
    const chatContainerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const loggedU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loggedUser"]);
    const userTok = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userToken"]);
    // const friends: FriendData[] = playerData;
    // const myFriendChat: FriendChat[] = myFriendsChat;
    const [selectedFriend, setSelectedFriend] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilState"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$friendAtom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slctdFriend"]);
    const [friendChat, setFriendChat] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    const [friend, setFriend] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilState"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$currentFriend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["currentFriend"]);
    const [inputMSG, setInputMSG] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("");
    const [channelID, setChannelID] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](-1);
    const [showEmoji, setShowEmoji] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    // const [msgSent, setMsgSent] = useState<number>(-1);
    const onEmojiClick = (event)=>{
        setInputMSG((prevInput)=>prevInput + event.emoji);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleReceiveMessage = (message)=>{
            if (message?.channelID === channelID) setFriendChat((prevMessages)=>[
                    ...prevMessages,
                    message
                ]);
        };
        socket.on("message", handleReceiveMessage);
        return ()=>{
            socket.off("message");
        };
    }, [
        channelID
    ]);
    const getAllMSG = async (id)=>{
        console.log("--------id>>>>>>>>", id);
        if (id === -1) return;
        const selectedFriendChat = await fetch(`http://localhost:3000/message/${id}`, {
            headers: {
                Authorization: `Bearer ${userTok}`,
                "Content-Type": "application/json"
            }
        });
        const data = await selectedFriendChat.json();
        if (data?.statusCode) return;
        // console.log("message=========>>>>", data);
        setFriendChat(data);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        //get my friend data
        // friends.find((f) => f.uid === selectedFriend);
        const getMyFriendData = async ()=>{
            /*----------------------------get my friend data------------------------------- */ const selectedFriendData = await fetch(`http://localhost:3000/users/${selectedFriend}`, {
                headers: {
                    Authorization: `Bearer ${userTok}`,
                    "Content-Type": "application/json"
                }
            });
            const dataF = await selectedFriendData.json();
            //set my friend data
            setFriend(dataF);
            /*---------------------------create a channel or get its id------------------- */ const channelData = {
                name: "",
                topic: "",
                id: loggedU,
                friendId: selectedFriend
            };
            const createOrGetChannelID = await fetch("http://localhost:3000/channels/dm", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${userTok}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(channelData)
            });
            const dataC = await createOrGetChannelID.json();
            if (dataC?.statusCode || dataC === -1) {
                return;
            }
            setChannelID(dataC);
            console.log("=========================errr", dataC);
            getAllMSG(dataC);
            setInputMSG("");
        };
        getMyFriendData();
    }, [
        selectedFriend
    ]);
    // useEffect(() => {
    //   getAllMSG(channelID);
    // }, [msgSent]);
    const sendMSG = async (e)=>{
        e.preventDefault();
        if (inputMSG.length === 0) return;
        console.log("===========================channelid", channelID);
        const channelData = {
            userID: loggedU,
            channelID: channelID,
            content: inputMSG
        };
        const msg = await fetch("http://localhost:3000/message", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${userTok}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(channelData)
        });
        // const data = await msg.json();
        setInputMSG("");
        setShowEmoji(false);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [
        friendChat
    ]);
    const isSameDay = (date1, date2)=>{
        const getFormattedDate = (timestamp)=>{
            const date = new Date(timestamp);
            return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        };
        return getFormattedDate(date1) === getFormattedDate(date2);
    };
    // const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    //   e.preventDefault();
    //   if (inputMSG.length === 0) return;
    //   const currentDate = Date.now();
    //   const message = {
    //     time: Date.now() as number,
    //     msg: inputMSG,
    //     recipient: false,
    //   };
    //   const friendChatToUpdate: FriendChat = {
    //     ...friendChat,
    //     allmessages: friendChat?.allmessages || [],
    //     uid: friendChat?.uid || "",
    //   };
    //   const lastMessage =
    //     friendChatToUpdate?.allmessages[
    //       friendChatToUpdate?.allmessages.length - 1
    //     ];
    //   if (lastMessage && isSameDay(lastMessage.date, currentDate))
    //     lastMessage.messages.push(message);
    //   else {
    //     friendChatToUpdate?.allmessages.push({
    //       date: currentDate as number,
    //       messages: [message],
    //     });
    //   }
    //   setFriendChat(friendChatToUpdate);
    //   setInputMSG("");
    // };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "friend_chat_msg",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "friend_chat_msg_header",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoArrowBackOutline"], {
                        className: "arrow_back",
                        onClick: ()=>setSelectedFriend(-1)
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "my_chat_msg_avatar",
                        src: friend?.avatar || "/avatar3.png",
                        width: 2000,
                        height: 2000,
                        alt: "avatar"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "my_chat_msg_name",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                children: friend?.username
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h5", {
                                className: `online ${friend?.status === "ingame" && "ingames"}
          ${friend?.status === "offline" && "offline"}
          `,
                                children: friend?.status === "online" ? "Online" : friend?.status === "ingame" ? "Playing" : "Offline"
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                ref: chatContainerRef,
                className: "friend_chat_msg_body",
                children: friendChat.map((m)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$ChatContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatContainer"], {
                        messages: m
                    }, m.createdAT, false, {
                        fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                        lineNumber: 237,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("form", {
                onSubmit: sendMSG,
                className: "friend_chat_msg_form",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("fieldset", {
                    disabled: friend?.blocked,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "closed_picker",
                            onClick: ()=>setShowEmoji((prev)=>!prev),
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiEmojiStickerFill"], {}, void 0, false, {
                                fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            emojiVersion: "facebook",
                            theme: "dark",
                            className: `emoji_picker ${showEmoji && "show_Emoji"} `,
                            searchDisabled: true,
                            open: true,
                            onEmojiClick: onEmojiClick,
                            lazyLoadEmojis: true,
                            previewConfig: {
                                showPreview: false
                            }
                        }, void 0, false, {
                            fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                            value: inputMSG,
                            onChange: (e)=>setInputMSG(e.target.value),
                            className: "input_msg",
                            type: "text",
                            placeholder: `${friend?.blocked ? "You blocked this friend" : "Message"}`
                        }, void 0, false, {
                            fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "play_send_msg",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiSolidJoystickAlt"], {}, void 0, false, {
                                    fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    className: "submit_msg",
                                    type: "submit",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoIosSend"], {}, void 0, false, {
                                        fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                                        lineNumber: 274,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                    lineNumber: 241,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                lineNumber: 240,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
        lineNumber: 206,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = FriendChatList;

})()),
"[project]/app/data/channels_list.json (json)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("[{\"avatar\":\"/aljazera.png\",\"channel_id\":512542,\"channel_name\":\"aljazira alarabia\",\"members_number\":22,\"topic\":\"this channel about all arabic news\",\"lastmsg\":\"great\",\"members\":[{\"id\":78451200,\"type\":\"admin\",\"name\":\"yahya_Taqsi\",\"avatar\":\"/avatar1.png\"},{\"id\":1645589456,\"type\":\"owner\",\"name\":\"yassine El\",\"avatar\":\"/avatar2.png\"},{\"id\":78451294,\"type\":\"admin\",\"name\":\"ayoub\",\"avatar\":\"/avatar3.png\"},{\"id\":78477294,\"type\":\"user\",\"name\":\"mimoun\",\"avatar\":\"/avatar4.png\"},{\"id\":78422294,\"type\":\"user\",\"name\":\"fakhita\",\"avatar\":\"/avatar5.png\"},{\"id\":78411294,\"type\":\"user\",\"name\":\"lmekhtar\",\"avatar\":\"/avatar-for-store.png\"}],\"messages\":[{\"id\":73737357357,\"time\":135498451685,\"msg\":\"hello iuhdfkv erljgcmx [iprks'vx/c , [ipksv/l ,xcpo ;jdsv;dosjm poj;rgmedfv[kdf [prskv \",\"recipient\":true,\"avatar\":\"/avatar1.png\"},{\"id\":7357737357,\"time\":135498451686,\"msg\":\"how are you\",\"recipient\":false,\"avatar\":\"/avatar2.png\"},{\"id\":73737357357,\"time\":135498451687,\"msg\":\"im good\",\"recipient\":true,\"avatar\":\"/avatar3.png\"},{\"id\":37741073573,\"time\":135498451688,\"msg\":\"great\",\"recipient\":false,\"avatar\":\"/avatar4.png\"},{\"id\":3320773573,\"time\":135498441688,\"msg\":\"great\",\"recipient\":false,\"avatar\":\"/avatar4.png\"},{\"id\":3779513573,\"time\":13544498451688,\"msg\":\"great\",\"recipient\":false,\"avatar\":\"/avatar4.png\"},{\"id\":3773741573,\"time\":13549845168448,\"msg\":\"great\",\"recipient\":false,\"avatar\":\"/avatar4.png\"},{\"id\":3773573213,\"time\":4135498451688,\"msg\":\"great\",\"recipient\":false,\"avatar\":\"/avatar4.png\"},{\"id\":377374573,\"time\":13549845168811,\"msg\":\"great\",\"recipient\":false,\"avatar\":\"/avatar4.png\"},{\"id\":377143573,\"time\":13549845122688,\"msg\":\"great\",\"recipient\":false,\"avatar\":\"/avatar4.png\"},{\"id\":377353273,\"time\":13549845331688,\"msg\":\"great\",\"recipient\":false,\"avatar\":\"/avatar4.png\"},{\"id\":377359673,\"time\":13549845177688,\"msg\":\"great\",\"recipient\":false,\"avatar\":\"/avatar4.png\"},{\"id\":377385573,\"time\":1354984516222288,\"msg\":\"great\",\"recipient\":false,\"avatar\":\"/avatar4.png\"},{\"id\":377357743,\"time\":135498455451688,\"msg\":\"great\",\"recipient\":false,\"avatar\":\"/avatar4.png\"},{\"id\":377357743,\"time\":135498466651688,\"msg\":\"great\",\"recipient\":false,\"avatar\":\"/avatar4.png\"},{\"id\":377357743,\"time\":13549899451688,\"msg\":\"great\",\"recipient\":false,\"avatar\":\"/avatar4.png\"}]},{\"avatar\":\"/arriadia.png\",\"channel_id\":5125474,\"channel_name\":\"arriadia\",\"members_number\":250,\"topic\":\"this channel about sport and matches\",\"lastmsg\":\"wassup\",\"members\":[{\"id\":1645589456,\"type\":\"admin\",\"name\":\"yassine\",\"avatar\":\"/avatar2.png\"},{\"id\":78444294,\"type\":\"owner\",\"name\":\"yahya\",\"avatar\":\"/avatar1.png\"},{\"id\":78433294,\"type\":\"user\",\"name\":\"ayoub\",\"avatar\":\"/avatar3.png\"},{\"id\":784889294,\"type\":\"user\",\"name\":\"mimoun\",\"avatar\":\"/avatar4.png\"}],\"messages\":[{\"id\":7373735737,\"time\":13549845558,\"msg\":\"hello uykdfhjvcn khfdjnv l henrikldfvx  ifhljvknxpsdo;jv slhv\",\"recipient\":true,\"avatar\":\"/avatar2.png\"},{\"id\":37735737357,\"time\":13549847768,\"msg\":\"how are you\",\"recipient\":false,\"avatar\":\"/avatar1.png\"},{\"id\":96373757357,\"time\":13549995168,\"msg\":\"heeey\",\"recipient\":true,\"avatar\":\"/avatar3.png\"},{\"id\":254773573,\"time\":135339845168,\"msg\":\"wassup\",\"recipient\":false,\"avatar\":\"/avatar4.png\"}]}]"));
})()),
"[project]/app/data/player-info.json (json)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("{\"uid\":1645589456,\"status\":\"online\",\"username\":\"yassine el hajjami\",\"email\":\"yassine@gmail.com\",\"bio\":\"someone who like software :) !\",\"password\":\"yassine1234\",\"TwoFA\":true,\"choosedProfileImage\":\"/av/av1.png\",\"choosedBanner\":\"/Xarben_bear.png\",\"achievements\":[{\"name\":\"Precision Paddler\",\"description\":\"Win a single match with a perfect score, never missing a shot.\",\"uri\":\"/Precision_Paddler.png\",\"date\":\"02/22/2024\",\"unlocked\":true},{\"name\":\"Flawless Victory\",\"description\":\"Win a single match without letting your opponent score a single point.\",\"uri\":\"/flawless.png\",\"date\":\"\",\"unlocked\":false},{\"name\":\"Speed Demon\",\"description\":\"Win a match with a point scored within the first 10 seconds of each game.\",\"uri\":\"/Speed_Demon.png\",\"date\":\"\",\"unlocked\":false},{\"name\":\"Ping Pong Pro\",\"description\":\"Win 100 matches against tough opponents.\",\"uri\":\"/ping_pong_pro.png\",\"date\":\"03/07/2024\",\"unlocked\":true},{\"name\":\"AI Conqueror\",\"description\":\"Defeat the AI opponent on the highest difficulty level in a single match.\",\"uri\":\"/ai_conqueror.png\",\"date\":\"\",\"unlocked\":false}],\"avatarsAndPaddles\":[{\"id\":1,\"paddle\":\"green-paddle.png\",\"name\":\"ZENITH\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":500,\"owned\":true,\"choosed\":true},{\"id\":2,\"avatar\":\"avatar1.png\",\"name\":\"super hero\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":720,\"owned\":true,\"choosed\":false},{\"id\":3,\"avatar\":\"avatar2.png\",\"name\":\"pro avatar\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":310,\"owned\":true,\"choosed\":false},{\"id\":4,\"paddle\":\"gold-paddle.png\",\"name\":\"golden\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":880,\"owned\":true,\"power\":\"+ 15% ball speed\",\"choosed\":false},{\"id\":5,\"paddle\":\"pink-paddle.png\",\"name\":\"pinky\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":920,\"owned\":false,\"power\":\"+ 17% ball speed\",\"choosed\":false},{\"id\":6,\"avatar\":\"avatar3.png\",\"name\":\"flash\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":150,\"owned\":true,\"choosed\":false},{\"id\":7,\"avatar\":\"avatar4.png\",\"name\":\"hulk\",\"description\":\"Designed to broaden your playing horizons with an extended width, granting players an Increased Width: 15%.\",\"price\":360,\"owned\":false,\"choosed\":false}],\"statistic\":{\"level\":4,\"points\":783,\"rank\":\"beginner\",\"win\":19,\"lose\":6,\"resign\":7,\"wlr\":2.2},\"matches\":[{\"todaysDate\":\"20/12/2023\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"yahya taqsi\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":3},{\"hour\":\"11:24\",\"opponent\":\"mhammed hamadani\",\"result\":\"LOSE\",\"mygoals\":6,\"opponentgoals\":7}]},{\"todaysDate\":\"29/12/2023\",\"todaysMatches\":[{\"hour\":\"12:24\",\"opponent\":\"ayoub amentag\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":1},{\"hour\":\"14:24\",\"opponent\":\"lmaati lmadani\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":2}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"xxxxxx\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]},{\"todaysDate\":\"02/01/2024\",\"todaysMatches\":[{\"hour\":\"10:24\",\"opponent\":\"fatima lfihriya\",\"result\":\"WIN\",\"mygoals\":7,\"opponentgoals\":5}]}],\"stats\":[{\"date\":\"10/01/2024\",\"win\":7,\"lose\":2},{\"date\":\"11/01/2024\",\"win\":9,\"lose\":3},{\"date\":\"20/01/2024\",\"win\":11,\"lose\":4},{\"date\":\"22/01/2024\",\"win\":4,\"lose\":0},{\"date\":\"02/02/2024\",\"win\":14,\"lose\":20},{\"date\":\"05/02/2024\",\"win\":40,\"lose\":32},{\"date\":\"10/02/2024\",\"win\":12,\"lose\":12},{\"date\":\"12/02/2024\",\"win\":1,\"lose\":0},{\"date\":\"15/02/2024\",\"win\":18,\"lose\":10},{\"date\":\"20/02/2024\",\"win\":22,\"lose\":30},{\"date\":\"22/02/2024\",\"win\":9,\"lose\":10}]}"));
})()),
"[project]/app/chat/Channels/channelInfo.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/gi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/bs/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const ChannelInfo = ({ userId, userTok, selectedChannel, channels })=>{
    // let selectedChannelData: CHANNEL_DATA | undefined = channelsData.find((e) => {
    //   return e.channel_id === selectedChannel;
    // });
    // let channelOwner: CHANNELUSER | undefined = selectedChannelData?.members.find(
    //   (e) => e.type == "owner"
    // );
    // let channelAdmins: CHANNELUSER[] | undefined =
    //   selectedChannelData?.members.filter((e) => e.type == "admin");
    // let channelNormalUsers: CHANNELUSER[] | undefined =
    //   selectedChannelData?.members.filter((e) => e.type == "user");
    // let myTypeInTheChannel = selectedChannelData?.members.find(
    //   (e) => e.id === PlayerData.uid
    // );
    const handleRemoveAdminClick = (id)=>{};
    const handleAdminClick = (id)=>{};
    const handleKickClick = (id)=>{};
    const handleBlockClick = (id)=>{};
    const handleMuteClick = (id)=>{};
    console.log("myTypeInTheChannel=>", myTypeInTheChannel);
    const [channelUsersData, setChannelUsersData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const [MembersObj, setMemmbersObj] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const [channelData, setChannelData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let channelToDisplay = channels?.find((ch)=>ch.id === selectedChannel);
        setChannelData(channelToDisplay);
        const fetchMessages = async ()=>{
            try {
                const response = await fetch(`http://localhost:3000/channelss/messages?channelId=${channelToDisplay?.id}`, {
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    }
                });
                const data = await response.json();
                console.log(">>>channelUsersData>>>>>", data);
                setChannelUsersData(data);
                setMemmbersObj({
                    channelOwner: channelUsersData?.find((e)=>e.role == "OWNER"),
                    channelAdmins: channelUsersData?.filter((e)=>e.role == "ADMIN"),
                    channelNormalUsers: channelUsersData?.filter((e)=>e.role == "USER"),
                    myTypeInTheChannel: channelUsersData?.find((e)=>e.userID === userId)
                });
            } catch (error) {
                console.log("Error herere");
            }
        };
        fetchMessages();
    }, [
        selectedChannel
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "selectedChannelData",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "ChannelImage",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: `http://localhost:3000/${channelData?.uri}` ?? `http://localhost:3000/default.png`,
                    width: 100,
                    height: 100,
                    alt: "avatar",
                    style: {
                        borderRadius: "50%"
                    }
                }, void 0, false, {
                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                className: "channelName",
                children: channelData?.name
            }, void 0, false, {
                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                className: "topic",
                children: channelData?.topic
            }, void 0, false, {
                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "members",
                children: [
                    channelOwner != undefined ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "owner",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "imageNameContainer",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "userPic",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "pic",
                                            src: channelOwner.avatar,
                                            width: 50,
                                            height: 50,
                                            alt: "avatar"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "name",
                                        children: channelOwner.name
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "status",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "type",
                                    children: channelOwner.type
                                }, void 0, false, {
                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this) : "",
                    channelAdmins?.map((adminUser)=>{
                        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "admin",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "imageNameContainer",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "userPic",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "pic",
                                                src: adminUser.avatar,
                                                width: 50,
                                                height: 50,
                                                alt: "avatar"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "name",
                                            children: adminUser.name
                                        }, void 0, false, {
                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "status",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "type",
                                            children: adminUser.type
                                        }, void 0, false, {
                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this),
                                        myTypeInTheChannel?.type === "owner" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "actionsBtn",
                                                children: [
                                                    myTypeInTheChannel?.type === "owner" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BsThreeDotsVertical"], {
                                                        className: "btn"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                        lineNumber: 170,
                                                        columnNumber: 25
                                                    }, this) : "",
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "actions",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                                    children: myTypeInTheChannel?.type === "owner" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                                        onClick: ()=>handleRemoveAdminClick(adminUser.id),
                                                                        children: "Rm Admin"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                                        lineNumber: 178,
                                                                        columnNumber: 31
                                                                    }, this) : ""
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                                    lineNumber: 176,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                                    onClick: ()=>handleKickClick(adminUser.id),
                                                                    children: "kick"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                                    lineNumber: 189,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                                    onClick: ()=>handleBlockClick(adminUser.id),
                                                                    children: "Block"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                                    lineNumber: 192,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                                    onClick: ()=>handleMuteClick(adminUser.id),
                                                                    children: "Mute"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                                    lineNumber: 195,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                            lineNumber: 175,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                        lineNumber: 174,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                lineNumber: 168,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false) : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, adminUser.id, true, {
                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this);
                    }),
                    channelNormalUsers?.map((normalUser)=>{
                        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "user",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "imageNameContainer",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "userPic",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "pic",
                                                src: normalUser.avatar,
                                                width: 50,
                                                height: 50,
                                                alt: "avatar"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "name",
                                            children: normalUser.name
                                        }, void 0, false, {
                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "actionsBtn",
                                    children: [
                                        myTypeInTheChannel?.type === "owner" || myTypeInTheChannel?.type === "admin" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BsThreeDotsVertical"], {}, void 0, false, {
                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                            lineNumber: 227,
                                            columnNumber: 19
                                        }, this) : "",
                                        myTypeInTheChannel?.type === "owner" || myTypeInTheChannel?.type === "admin" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "actions",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                        children: myTypeInTheChannel?.type === "owner" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                            onClick: ()=>handleAdminClick(normalUser.id),
                                                            children: "Admin"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                            lineNumber: 237,
                                                            columnNumber: 27
                                                        }, this) : ""
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                        lineNumber: 235,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                        onClick: ()=>handleKickClick(normalUser.id),
                                                        children: "kick"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                        lineNumber: 244,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                        onClick: ()=>handleBlockClick(normalUser.id),
                                                        children: "Block"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                        lineNumber: 247,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                        onClick: ()=>handleMuteClick(normalUser.id),
                                                        children: "Mute"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                        lineNumber: 250,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                lineNumber: 234,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this) : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, normalUser.id, true, {
                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "leaveBtn",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GiCancel"], {
                        className: "cancelBtn"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        children: [
                            "Leave ",
                            channelData?.name
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                lineNumber: 264,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
        lineNumber: 111,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ChannelInfo;

})()),
"[project]/app/chat/Friends/FriendInfo.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "FriendInfo": ()=>FriendInfo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$currentFriend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/currentFriend.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$cg$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/cg/index.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
const FriendInfo = ()=>{
    const [friend, setFriend] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilState"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$currentFriend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["currentFriend"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "current_friend_info_container",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "current_friend_info",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "current_friend_avatar",
                        src: friend?.avatar || "",
                        width: 5000,
                        height: 5000,
                        alt: "avatar"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                        children: friend?.name
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                        children: friend?.bio
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "current_friend_rank",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                        children: "rank"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "current_friend_rank_badge",
                        src: friend?.rankBadge || "",
                        width: 5000,
                        height: 5000,
                        alt: "rank_badge"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                        children: [
                            " ",
                            friend?.rank,
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "current_friend_achievements_container",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                        children: "achievements"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "current_friend_achievements",
                        children: friend?.achievements?.map((a)=>{
                            if (a?.unlocked) return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "current_friend_achievement",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: "current_friend_achievement_badge",
                                        src: a?.uri || "",
                                        width: 5000,
                                        height: 5000,
                                        alt: "achievement_badge"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                                        lineNumber: 43,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        children: a?.name
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                                        lineNumber: 51,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, a?.name, true, {
                                fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                                lineNumber: 42,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "current_friend_block",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        onClick: ()=>setFriend((prev)=>{
                                if (prev) {
                                    return {
                                        ...prev,
                                        blocked: !prev?.blocked
                                    };
                                }
                            }),
                        className: `block_current_friend ${friend?.blocked ? "block_current_friend" : "unblock_current_friend"}`,
                        children: friend?.blocked ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$cg$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CgUnblock"], {}, void 0, false, {
                            fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                            lineNumber: 70,
                            columnNumber: 30
                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdBlock"], {}, void 0, false, {
                            fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                            lineNumber: 70,
                            columnNumber: 46
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        children: friend?.name
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};

})()),
"[project]/app/chat/Channels/popupCreateChannel.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/userToken.ts [app-ssr] (ecmascript)");
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
const PopupCreateChannel = ({ setShowPopUpCreateChannel })=>{
    const [selectedChannelPicture, setSelectedChannelPicture] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("/channelDefaultImage.png");
    const [name, setName] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("");
    const [status, setStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("PUBLIC");
    const [topic, setTopic] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("");
    const [file, setFile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const userTok = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userToken"]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("type", status);
        formData.append("topic", topic);
        if (file) formData.append("uri", file);
        fetch(`http://localhost:3000/channelss`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${userTok}`
            },
            body: formData
        }).then(()=>{
            setShowPopUpCreateChannel(false);
            setSelectedChannelPicture("/channelDefaultImage.png");
            setName("");
            setStatus("");
            setTopic("");
        });
    };
    const handleChange = (e)=>{
        const selectedFile = e.target.files?.[0];
        setFile(selectedFile || null);
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setSelectedChannelPicture(imageUrl);
        }
    };
    const handleStatusChange = (e)=>{
        setStatus(e.target.value);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "popupContainer",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                className: "cancelBtn",
                onClick: ()=>{
                    setShowPopUpCreateChannel(false);
                },
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdOutlineCancel"], {}, void 0, false, {
                    fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                children: "create channel"
            }, void 0, false, {
                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("form", {
                onSubmit: handleSubmit,
                encType: "multipart/form-data",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "imageContainer",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "img",
                                src: selectedChannelPicture,
                                width: 130,
                                height: 130,
                                alt: ""
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "chooseImageBtn",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "file-upload",
                                        className: "",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoCameraReverse"], {}, void 0, false, {
                                            fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        type: "file",
                                        id: "file-upload",
                                        className: "custom-file-input",
                                        accept: "image/*",
                                        onChange: (e)=>{
                                            handleChange(e);
                                        }
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "nameInput",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                htmlFor: "channelName",
                                children: "channel name"
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                type: "text",
                                name: "name",
                                id: "channelName",
                                value: name,
                                onChange: (e)=>setName(e.target.value),
                                placeholder: "name"
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "topicInput",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                htmlFor: "channeltopic",
                                children: "channel topic"
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                type: "text",
                                name: "topic",
                                id: "channeltopic",
                                value: topic,
                                onChange: (e)=>setTopic(e.target.value),
                                placeholder: "topic"
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "channelType",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        type: "radio",
                                        id: "public",
                                        value: "PUBLIC",
                                        checked: status === "PUBLIC",
                                        onChange: handleStatusChange
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "public",
                                        children: "public"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        type: "radio",
                                        id: "private",
                                        value: "PRIVATE",
                                        checked: status === "PRIVATE",
                                        onChange: handleStatusChange
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "private",
                                        children: "private"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        type: "radio",
                                        id: "protected",
                                        value: "PROTECTED",
                                        checked: status === "PROTECTED",
                                        onChange: handleStatusChange
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "protected",
                                        children: "protected"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        className: "createChannelBtn",
                        type: "submit",
                        children: "create"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
        lineNumber: 65,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = PopupCreateChannel;

})()),
"[project]/app/chat/Friends/AddFriend.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>AddFriend
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ti$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ti/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/userToken.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/logged.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
function AddFriend({ user }) {
    const userTok = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userToken"]);
    const loggedU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loggedUser"]);
    const addFriend = async ()=>{
        const notifData = {
            type: "friendReq",
            content: "sent you a friend request",
            suserId: loggedU,
            ruserId: user.uid
        };
        try {
            const res = await fetch("http://localhost:3000/notifications", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${userTok}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(notifData)
            });
            const data = await res.json();
            console.log(">>>>>>>>>>>>>>>>>>>>>", data);
        } catch (error) {
            console.log("error>>>", error.message);
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "add_friend_conatiner",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "add_friend_avatar",
                src: `/${user.avatar}`,
                width: 1000,
                height: 1000,
                alt: "avatar"
            }, void 0, false, {
                fileName: "<[project]/app/chat/Friends/AddFriend.tsx>",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                className: "add_friend_name",
                children: user.username
            }, void 0, false, {
                fileName: "<[project]/app/chat/Friends/AddFriend.tsx>",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                onClick: addFriend,
                className: "add_friend_btn",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ti$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TiUserAdd"], {}, void 0, false, {
                    fileName: "<[project]/app/chat/Friends/AddFriend.tsx>",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/chat/Friends/AddFriend.tsx>",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/chat/Friends/AddFriend.tsx>",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}

})()),
"[project]/app/chat/Friends/AddFriendSection.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ti$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ti/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/userToken.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$AddFriend$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Friends/AddFriend.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/logged.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
const AddFriendSection = ()=>{
    const userTok = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userToken"]);
    const userL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loggedUser"]);
    const [addFriend, setAddFriend] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [input, setInput] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("");
    const [allUsers, setAllUsers] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    const filteredUsers = allUsers.filter((user)=>user?.username.toLowerCase().includes(input.toLowerCase()));
    const addFriendClick = (e)=>{
        e.stopPropagation();
    };
    const getAllusers = async ()=>{
        if (!addFriend) return;
        try {
            console.log("toooooooooooooooo ====> 0000", userTok);
            const res = await fetch(`http://localhost:3000/friends/allusers/${userL}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${userTok}`,
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            if (data?.statusCode === 401) return;
            console.log("all users ====> ", data);
            setAllUsers(data);
        } catch (error) {
            console.log("3aaaaaaaaaaaa>>>>>");
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        getAllusers();
    }, [
        addFriend
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        onClick: ()=>setAddFriend((prev)=>!prev),
        className: `add_friend ${addFriend && `show_the_big_div`}`,
        children: addFriend ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            onClick: addFriendClick,
            className: "add_friend_container",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                    value: input,
                    onChange: (e)=>setInput(e.target.value),
                    type: "text",
                    placeholder: "Add friend"
                }, void 0, false, {
                    fileName: "<[project]/app/chat/Friends/AddFriendSection.tsx>",
                    lineNumber: 58,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "searchedFriends",
                    children: filteredUsers?.map((user)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$AddFriend$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            user: user
                        }, user.uid, false, {
                            fileName: "<[project]/app/chat/Friends/AddFriendSection.tsx>",
                            lineNumber: 65,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "<[project]/app/chat/Friends/AddFriendSection.tsx>",
                    lineNumber: 63,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/app/chat/Friends/AddFriendSection.tsx>",
            lineNumber: 57,
            columnNumber: 9
        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ti$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TiUserAdd"], {}, void 0, false, {
            fileName: "<[project]/app/chat/Friends/AddFriendSection.tsx>",
            lineNumber: 70,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "<[project]/app/chat/Friends/AddFriendSection.tsx>",
        lineNumber: 52,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = AddFriendSection;

})()),
"[project]/app/chat/page.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/hi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendsChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Friends/FriendsChat.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Channels$2f$channelChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Channels/channelChat.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Channels$2f$SelectedChannelChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Channels/SelectedChannelChat.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendChatList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Friends/FriendChatList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$friendAtom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/friendAtom.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Channels$2f$channelInfo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Channels/channelInfo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendInfo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Friends/FriendInfo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Channels$2f$popupCreateChannel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Channels/popupCreateChannel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$AddFriendSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Friends/AddFriendSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/logged.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/userToken.ts [app-ssr] (ecmascript)");
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
;
;
;
;
;
;
const Chat = ()=>{
    const [hide, setHide] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [mode, setMode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("friends");
    const [selectedFriend, setSelectedFriend] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilState"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$friendAtom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slctdFriend"]);
    const [selectedChannel, setSelectedChannel] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](-1);
    const [showPopUpCreateChannel, setShowPopUpCreateChannel] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const selectedBtn = mode === "friends" ? "toleft" : "toright";
    const userId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loggedUser"]);
    const userTok = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userToken"]);
    const [channels, setChannels] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const fetchChannels = async ()=>{
            try {
                const response = await fetch(`http://localhost:3000/channelss/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    }
                });
                if (!response) {
                    console.log("Error");
                }
                const data = await response.json();
                console.log("DAAAATAAAA:", data);
                const channelsArr = data.map((data)=>data.channels);
                setChannels(channelsArr);
            } catch (error) {
                console.log("Error");
            }
        };
        fetchChannels();
    }, []);
    const preventCHilde = (e)=>{
        e.stopPropagation();
    };
    const handleParentClick = (event)=>{
        setHide(false);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "chat_channels_container",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "chat_channels_sub_container",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: `createChannelPopup ${showPopUpCreateChannel ? "showPopup" : "hidePopUp"}`,
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Channels$2f$popupCreateChannel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        setShowPopUpCreateChannel: setShowPopUpCreateChannel
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/page.tsx>",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/chat/page.tsx>",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: `col1 ${(selectedFriend !== -1 || selectedChannel > 0) && "hideCol1"}  `,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "switcher",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    onClick: ()=>{
                                        setMode("friends");
                                    },
                                    children: "Friends"
                                }, void 0, false, {
                                    fileName: "<[project]/app/chat/page.tsx>",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    onClick: ()=>{
                                        setMode("channels");
                                    },
                                    children: "Channels"
                                }, void 0, false, {
                                    fileName: "<[project]/app/chat/page.tsx>",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: `selectedColor ${selectedBtn}`
                                }, void 0, false, {
                                    fileName: "<[project]/app/chat/page.tsx>",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/chat/page.tsx>",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        mode == "friends" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "friendsList",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendsChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "<[project]/app/chat/page.tsx>",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/chat/page.tsx>",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "channelsList",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Channels$2f$channelChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                channels: channels,
                                setSelectedChannel: setSelectedChannel,
                                setShowPopUpCreateChannel: setShowPopUpCreateChannel
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/page.tsx>",
                                lineNumber: 119,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/chat/page.tsx>",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/chat/page.tsx>",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: `col2 ${(selectedFriend !== -1 || selectedChannel > 0) && "showCol2"}  `,
                    children: mode == "friends" && selectedFriend != -1 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "selectedFriendChat",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendChatList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "<[project]/app/chat/page.tsx>",
                            lineNumber: 135,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/page.tsx>",
                        lineNumber: 134,
                        columnNumber: 13
                    }, this) : mode == "channels" && selectedChannel > 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "selectedChannelChat",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Channels$2f$SelectedChannelChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            userId: userId,
                            userTok: userTok,
                            channels: channels,
                            selectedChannel: selectedChannel,
                            setSelectedChannel: setSelectedChannel
                        }, void 0, false, {
                            fileName: "<[project]/app/chat/page.tsx>",
                            lineNumber: 139,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/page.tsx>",
                        lineNumber: 138,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "svgHolder",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "svgImage",
                                src: "/manageChat.svg",
                                width: 300,
                                height: 300,
                                alt: "select a chat :)"
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/page.tsx>",
                                lineNumber: 150,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                children: "all messages are end to end encrypted."
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/page.tsx>",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/chat/page.tsx>",
                        lineNumber: 148,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/chat/page.tsx>",
                    lineNumber: 127,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    onClick: handleParentClick,
                    className: `col3 ${hide && "show_col3"}`,
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        onClick: preventCHilde,
                        className: "clo3_sub_container",
                        children: mode == "friends" && selectedFriend != -1 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendInfo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FriendInfo"], {}, void 0, false, {
                            fileName: "<[project]/app/chat/page.tsx>",
                            lineNumber: 167,
                            columnNumber: 15
                        }, this) : mode == "channels" && selectedChannel > 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Channels$2f$channelInfo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            userId: userId,
                            userTok: userTok,
                            channels: channels,
                            selectedChannel: selectedChannel
                        }, void 0, false, {
                            fileName: "<[project]/app/chat/page.tsx>",
                            lineNumber: 169,
                            columnNumber: 15
                        }, this) : ""
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/page.tsx>",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/chat/page.tsx>",
                    lineNumber: 161,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    onClick: ()=>{
                        setHide((prev)=>!prev);
                    },
                    className: "chat_channel_details",
                    children: hide ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdOutlineCancel"], {
                        className: "dots_hide"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/page.tsx>",
                        lineNumber: 188,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiDotsVertical"], {
                        className: "dots_hide"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/page.tsx>",
                        lineNumber: 190,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/chat/page.tsx>",
                    lineNumber: 181,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$AddFriendSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "<[project]/app/chat/page.tsx>",
                    lineNumber: 194,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/app/chat/page.tsx>",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/app/chat/page.tsx>",
        lineNumber: 79,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Chat;

})()),
"[project]/app/chat/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),

};

//# sourceMappingURL=app_5fb40a._.js.map