(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_d65996._.js", {

"[project]/app/Atoms/friendAtom.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "slctdFriend": ()=>slctdFriend
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const slctdFriend = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"]({
    key: "selectedFriend",
    default: Number(localStorage.getItem("selectedFriend")) || -1
});

})()),
"[project]/app/chat/Friends/FriendChat.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$friendAtom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/friendAtom.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const FriendChat = ({ friendData })=>{
    _s();
    const [selectedFriend, setSelectedFriend] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilState"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$friendAtom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slctdFriend"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        onClick: ()=>setSelectedFriend(friendData.uid),
        className: "friend_chat_container",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "chat_list_avatar_container",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
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
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "chat_list_name",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                        children: friendData?.name
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendChat.tsx>",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
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
_s(FriendChat, "/P+o8S1inOT++nUw7n7PT7MoEaU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilState"]
    ];
});
_c = FriendChat;
const __TURBOPACK__default__export__ = FriendChat;
var _c;
__turbopack_refresh__.register(_c, "FriendChat");

})()),
"[project]/app/chat/Friends/FriendsChat.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>FriendsChat
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Friends/FriendChat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/logged.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/userToken.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
function FriendsChat() {
    _s();
    const loggedUserUID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loggedUser"]);
    const userTok = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userToken"]);
    const [myFriends, setMyFriends] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
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
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
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
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "friends_chat_container",
        children: myFriends.length > 0 && myFriends.map((f)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(FriendsChat, "8iIJuxQDPNKycJi1ic3oWT031yE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"]
    ];
});
_c = FriendsChat;
var _c;
__turbopack_refresh__.register(_c, "FriendsChat");

})()),
"[project]/app/chat/Channels/channelChat.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ai/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/gr/index.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const ChannelChat = ({ channels, setSelectedChannel, setShowPopUpCreateChannel, setShowPopUpSearchChannels })=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "channelsListContainer",
                children: channels?.map((channel)=>{
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "channelContainer",
                        onClick: ()=>{
                            setSelectedChannel(channel.id);
                        },
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "imageContainer",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "channelImage",
                                    src: `http://localhost:3000/${channel.uri}`,
                                    width: 80,
                                    height: 80,
                                    alt: "avatar"
                                }, void 0, false, {
                                    fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "name_lastmsg",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: channel.name.length > 10 ? `${channel.name.substring(0, 10)}..` : channel.name
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        children: [
                                            channel.roles.length,
                                            channel.roles.length < 2 ? " member" : " members"
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this)
                        ]
                    }, channel.id, true, {
                        fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "addChannelBtn",
                onClick: ()=>setShowPopUpCreateChannel(true),
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineUsergroupAdd"], {}, void 0, false, {
                    fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "searchChannelBtn",
                onClick: ()=>setShowPopUpSearchChannels(true),
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrChannel"], {}, void 0, false, {
                    fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/chat/Channels/channelChat.tsx>",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_c = ChannelChat;
const __TURBOPACK__default__export__ = ChannelChat;
var _c;
__turbopack_refresh__.register(_c, "ChannelChat");

})()),
"[project]/app/chat/Channels/SelectedChannelChat.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
const socket = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__["io"]("http://localhost:3001", {
    transports: [
        "websocket"
    ]
});
console.log("MMMMMM", socket);
const SelectedChannelChat = ({ userId, userTok, channels, selectedChannel, setSelectedChannel })=>{
    _s();
    const [chToDisplay, setChToDisplay] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const [messages, setMessages] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const [msgContent, setMsgContent] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [myCondition, setMyCondition] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("NORMAL");
    const chatSectionRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const mutedDiv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
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
                const req = await fetch(`http://localhost:3000/channelss/roles?channelId=${selectedChannel}`, {
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    }
                });
                const myData = await req.json();
                const myCondition = myData.find((e)=>e.user.uid == userId);
                setMyCondition(myCondition.condition);
                if (myCondition.condition == "BLOCKED") {
                    const filtredMessages = data.filter((e)=>e.createdAT < myCondition.blockedSince);
                    setMessages(filtredMessages);
                } else {
                    setMessages(data);
                }
            } catch (error) {
                console.log("Error herere");
            }
        };
        fetchMessages();
        setChToDisplay(channelToDisplay);
    }, [
        selectedChannel
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleReceiveMessage = async (message)=>{
            const response = await fetch(`http://localhost:3000/channelss/roles?channelId=${selectedChannel}`, {
                headers: {
                    Authorization: `Bearer ${userTok}`,
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            const myCondition = data.find((e)=>e.user.uid == userId);
            if (!myCondition) {
                setSelectedChannel(-1);
                return;
            }
            console.log("my condition =", myCondition);
            setMyCondition(myCondition.condition);
            if ((message?.channelID === selectedChannel || message?.channelID === undefined) && myCondition.condition != "BLOCKED") {
                const response = await fetch(`http://localhost:3000/message/${selectedChannel}`, {
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    }
                });
                const data = await response.json();
                setMessages(data);
            }
        };
        socket.on("message", handleReceiveMessage);
        socket.on("updateRoles", handleReceiveMessage);
        socket.on("updateUsersAfterSomeoneKick", (data)=>{
            const imIn = data.find((e)=>e.userID == userId);
            console.log("im In =", imIn);
            if (!imIn) setSelectedChannel(-1);
        });
        return ()=>{
            socket.off("message");
            socket.off("updateRoles");
            socket.off("updateUsersAfterSomeoneKick");
        };
    }, [
        chToDisplay?.id
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (chatSectionRef.current) {
            chatSectionRef.current.scrollTop = chatSectionRef.current.scrollHeight;
        }
    }, [
        messages
    ]);
    const handleSendingMessage = (e)=>{
        const sendTheMessage = async ()=>{
            try {
                const channelData = {
                    userID: userId,
                    channelID: chToDisplay?.id,
                    content: msgContent
                };
                const userIsMuted = async ()=>{
                    const response = await fetch(`http://localhost:3000/channelss/roles?channelId=${selectedChannel}`, {
                        headers: {
                            Authorization: `Bearer ${userTok}`,
                            "Content-Type": "application/json"
                        }
                    });
                    const data = await response.json();
                    const myCondition = data.find((e)=>e.user.uid == userId);
                    if (myCondition.condition == "MUTED") {
                        const dateWhenIGetMuted = new Date(myCondition.mutedSince);
                        const currentTime = new Date();
                        const difference = currentTime.getTime() - dateWhenIGetMuted.getTime();
                        console.log(currentTime.getTime(), " - ", dateWhenIGetMuted.getTime(), " = ", difference);
                        if (difference / (1000 * 60) >= 1) {
                            console.log("IMKN hERE");
                            const patchRmMute = async ()=>{
                                try {
                                    const response = await fetch(`http://localhost:3000/channelss/rmmute?channelId=${selectedChannel}&userId=${userId}`, {
                                        method: "PATCH",
                                        headers: {
                                            Authorization: `Bearer ${userTok}`,
                                            "Content-Type": "application/json"
                                        }
                                    });
                                } catch (error) {
                                    console.log("Error herere");
                                }
                            };
                            patchRmMute();
                            return 1;
                        } else {
                            if (mutedDiv.current) {
                                mutedDiv.current.innerHTML = `you are muted,<br/>wait till the 1 Min complete !`;
                                mutedDiv.current.style.display = "block";
                                mutedDiv.current.style.opacity = "1";
                                setTimeout(()=>{
                                    if (mutedDiv.current) {
                                        mutedDiv.current.style.opacity = "0";
                                        mutedDiv.current.style.display = "block";
                                    }
                                }, 2000);
                            }
                            return 0;
                        }
                    }
                    return 1;
                };
                const isItStillMute = userIsMuted();
                const resolverNumber = await isItStillMute;
                if (resolverNumber == 0) {
                    console.log("STILL MUTED");
                    return;
                }
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
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "channel_msg_section",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "channel_msg_section_header",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoArrowBackOutline"], {
                        style: {
                            width: "20px",
                            margin: "5px"
                        },
                        className: "arrow_back",
                        onClick: ()=>setSelectedChannel(-1)
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "channel_msg_section_header_avatar",
                        src: `http://localhost:3000/${chToDisplay?.uri}` ?? "http://localhost:3000/default.png",
                        width: 100,
                        height: 100,
                        alt: "avatar"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                style: {
                                    display: "block"
                                },
                                children: chToDisplay?.name
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                children: [
                                    chToDisplay?.roles.length,
                                    " ",
                                    chToDisplay?.roles.length && chToDisplay?.roles.length < 2 ? "member" : "members"
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "channel_msg_section_chat",
                ref: chatSectionRef,
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "mutedMsg",
                        ref: mutedDiv,
                        children: "BLA"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    messages?.length && messages?.length > 0 ? messages?.map((message)=>{
                        return message.userID == userId ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "channelMsgContainerRecipient",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "msgAndTime",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "channelMsg",
                                        children: message.content
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                                        lineNumber: 301,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "msgTime",
                                        children: returnTime(message.createdAT)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                                        lineNumber: 302,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                                lineNumber: 300,
                                columnNumber: 19
                            }, this)
                        }, message.id, false, {
                            fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                            lineNumber: 299,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "channelMsgContainer",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "msgAndTime",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "channelMsg",
                                        children: message.content
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                                        lineNumber: 318,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "msgTime",
                                        children: returnTime(message.createdAT)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                                        lineNumber: 319,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                                lineNumber: 317,
                                columnNumber: 19
                            }, this)
                        }, message.id, false, {
                            fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                            lineNumber: 306,
                            columnNumber: 17
                        }, this);
                    }) : ""
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "channel_msg_section_input",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                        disabled: myCondition == "BLOCKED",
                        type: "text",
                        value: msgContent,
                        maxLength: 100,
                        minLength: 1,
                        onChange: (e)=>setMsgContent(e.target.value),
                        onKeyDown: (e)=>{
                            if (e.key == "Enter") {
                                handleSendingMessage(e);
                            }
                        }
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this),
                    myCondition == "BLOCKED" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdBlock"], {
                        className: "sendIcon"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosSend"], {
                        className: "sendIcon",
                        onClick: (e)=>{
                            handleSendingMessage(e);
                        }
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
                lineNumber: 326,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/chat/Channels/SelectedChannelChat.tsx>",
        lineNumber: 265,
        columnNumber: 5
    }, this);
};
_s(SelectedChannelChat, "1uUiTFXn1fb8KJmVev5w7rszfic=");
_c = SelectedChannelChat;
const __TURBOPACK__default__export__ = SelectedChannelChat;
var _c;
__turbopack_refresh__.register(_c, "SelectedChannelChat");

})()),
"[project]/app/chat/Friends/FriendMSG.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "FriendMSG": ()=>FriendMSG
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/logged.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
const FriendMSG = ({ message })=>{
    _s();
    const loggedU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loggedUser"]);
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
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: `chat_msg_container ${message?.userID !== loggedU && "sender"}`,
        children: [
            message?.content,
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
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
_s(FriendMSG, "ZEelaYyiqunKWtYOvXJv8xi/lTI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"]
    ];
});
_c = FriendMSG;
var _c;
__turbopack_refresh__.register(_c, "FriendMSG");

})()),
"[project]/app/chat/Friends/ChatContainer.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ChatContainer": ()=>ChatContainer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendMSG$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Friends/FriendMSG.tsx [app-client] (ecmascript)");
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
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "chat_container",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendMSG$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FriendMSG"], {
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
_c = ChatContainer;
var _c;
__turbopack_refresh__.register(_c, "ChatContainer");

})()),
"[project]/app/Atoms/currentFriend.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "currentFriend": ()=>currentFriend
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const currentFriend = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"]({
    key: "currentFriend",
    default: null
});

})()),
"[project]/app/chat/Friends/FriendChatList.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/bi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$ChatContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Friends/ChatContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$friendAtom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/friendAtom.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$currentFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/currentFriend.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/logged.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/userToken.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ri/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js [app-client] (ecmascript)");
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
;
;
;
;
;
const socket = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__["io"]("http://localhost:3001", {
    transports: [
        'websocket'
    ]
});
const FriendChatList = ()=>{
    _s();
    const chatContainerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const loggedU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loggedUser"]);
    const userTok = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userToken"]);
    // const friends: FriendData[] = playerData;
    // const myFriendChat: FriendChat[] = myFriendsChat;
    const [selectedFriend, setSelectedFriend] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilState"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$friendAtom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slctdFriend"]);
    const [friendChat, setFriendChat] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [friend, setFriend] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilState"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$currentFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentFriend"]);
    const [inputMSG, setInputMSG] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [channelID, setChannelID] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](-1);
    const [showEmoji, setShowEmoji] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    // const [msgSent, setMsgSent] = useState<number>(-1);
    const onEmojiClick = (event)=>{
        setInputMSG((prevInput)=>prevInput + event.emoji);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
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
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
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
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
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
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "friend_chat_msg",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "friend_chat_msg_header",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoArrowBackOutline"], {
                        className: "arrow_back",
                        onClick: ()=>setSelectedFriend(-1)
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "my_chat_msg_name",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                children: friend?.username
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h5", {
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
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                ref: chatContainerRef,
                className: "friend_chat_msg_body",
                children: friendChat.map((m)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$ChatContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatContainer"], {
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
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("form", {
                onSubmit: sendMSG,
                className: "friend_chat_msg_form",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("fieldset", {
                    disabled: friend?.blocked,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "closed_picker",
                            onClick: ()=>setShowEmoji((prev)=>!prev),
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiEmojiStickerFill"], {}, void 0, false, {
                                fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
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
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "play_send_msg",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiSolidJoystickAlt"], {}, void 0, false, {
                                    fileName: "<[project]/app/chat/Friends/FriendChatList.tsx>",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    className: "submit_msg",
                                    type: "submit",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosSend"], {}, void 0, false, {
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
_s(FriendChatList, "65Ea8A9SMzwOOCJwwVQp9czbC9g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilState"]
    ];
});
_c = FriendChatList;
const __TURBOPACK__default__export__ = FriendChatList;
var _c;
__turbopack_refresh__.register(_c, "FriendChatList");

})()),
"[project]/app/chat/Channels/channelInfo.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/gi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/bi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
const socket = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__["io"]("http://localhost:3001", {
    transports: [
        "websocket"
    ]
});
const ChannelInfo = ({ userId, userTok, selectedChannel, channels })=>{
    _s();
    const handleRemoveAdminClick = (id)=>{
        const patchRmAdmin = async ()=>{
            try {
                const response = await fetch(`http://localhost:3000/channelss/rmadmin?channelId=${selectedChannel}&userId=${id}`, {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    }
                });
            } catch (error) {
                console.log("Error herere");
            }
        };
        patchRmAdmin();
    };
    const handleAdminClick = (id)=>{
        const patchMakeAdmin = async ()=>{
            try {
                const response = await fetch(`http://localhost:3000/channelss/makeadmin?channelId=${selectedChannel}&userId=${id}`, {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    }
                });
            } catch (error) {
                console.log("Error herere");
            }
        };
        patchMakeAdmin();
    };
    const handleKickClick = (id)=>{
        const patchKick = async ()=>{
            try {
                const response = await fetch(`http://localhost:3000/channelss/kick?channelId=${selectedChannel}&userId=${id}`, {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    }
                });
            } catch (error) {
                console.log("Error herere");
            }
        };
        patchKick();
        console.log("KICKED");
    };
    const handleLeaveChannel = (id)=>{
        const patchKick = async ()=>{
            try {
                const req = await fetch(`http://localhost:3000/channelss/roles?channelId=${selectedChannel}`, {
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    }
                });
                const allRoles = await req.json();
                const theOwner = allRoles.filter((e)=>e.role == "OWNER");
                console.log("theOwner=>", theOwner[0].user.uid, "  myID:", userId);
                if (theOwner[0].user.uid == userId) {
                    if (allRoles.length > 1) {
                        const response = await fetch(`http://localhost:3000/channelss/leave?channelId=${selectedChannel}&userId=${id}`, {
                            method: "PATCH",
                            headers: {
                                Authorization: `Bearer ${userTok}`,
                                "Content-Type": "application/json"
                            }
                        });
                    } else {
                        handleKickClick(theOwner[0].user.uid);
                    }
                } else {
                    console.log("HEEEEEREEE!!!");
                    const response = await fetch(`http://localhost:3000/channelss/kick?channelId=${selectedChannel}&userId=${userId}`, {
                        method: "PATCH",
                        headers: {
                            Authorization: `Bearer ${userTok}`,
                            "Content-Type": "application/json"
                        }
                    });
                }
            } catch (error) {
                console.log("Error herere");
            }
        };
        patchKick();
    };
    const handleBlockClick = (id)=>{
        const patchblock = async ()=>{
            try {
                const response = await fetch(`http://localhost:3000/channelss/block?channelId=${selectedChannel}&userId=${id}`, {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    }
                });
            } catch (error) {
                console.log("Error herere");
            }
        };
        patchblock();
    };
    const handleRmBlockClick = (id)=>{
        const patchrmblock = async ()=>{
            try {
                const response = await fetch(`http://localhost:3000/channelss/rmblock?channelId=${selectedChannel}&userId=${id}`, {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    }
                });
            } catch (error) {
                console.log("Error herere");
            }
        };
        patchrmblock();
    };
    const handleMuteClick = (id)=>{
        const patchmute = async ()=>{
            try {
                const response = await fetch(`http://localhost:3000/channelss/mute?channelId=${selectedChannel}&userId=${id}`, {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    }
                });
            } catch (error) {
                console.log("Error herere");
            }
        };
        patchmute();
    };
    const handleRmMuteClick = (id)=>{
        const patchRmMute = async ()=>{
            try {
                const response = await fetch(`http://localhost:3000/channelss/rmmute?channelId=${selectedChannel}&userId=${id}`, {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    }
                });
            } catch (error) {
                console.log("Error herere");
            }
        };
        patchRmMute();
    };
    const [MembersObj, setMemmbersObj] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const [channelData, setChannelData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
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
                setMemmbersObj({
                    channelOwner: data?.find((e)=>e.role == "OWNER"),
                    channelAdmins: data?.filter((e)=>e.role == "ADMIN"),
                    channelNormalUsers: data?.filter((e)=>e.role == "USER"),
                    myTypeInTheChannel: data?.find((e)=>e.userID === userId)
                });
            } catch (error) {
                console.log("Error herere");
            }
        };
        fetchMessages();
    }, [
        selectedChannel
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleUpdateRoles = (roles)=>{
            console.log(")))>>> ", roles);
            setMemmbersObj({
                channelOwner: roles?.find((e)=>e.role == "OWNER"),
                channelAdmins: roles?.filter((e)=>e.role == "ADMIN"),
                channelNormalUsers: roles?.filter((e)=>e.role == "USER"),
                myTypeInTheChannel: roles?.find((e)=>e.userID === userId)
            });
        };
        socket.on("updateRoles", handleUpdateRoles);
        socket.on("updateUsersAfterSomeoneKick", handleUpdateRoles);
        return ()=>{
            socket.off("updateRoles");
            socket.off("updateUsersAfterSomeoneKick");
        };
    }, []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "selectedChannelData",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "ChannelImage",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: `http://localhost:3000/${channelData?.uri}` ?? `http://localhost:3000/default.png`,
                    width: 100,
                    height: 100,
                    alt: "avatar",
                    style: {
                        borderRadius: "50%"
                    }
                }, void 0, false, {
                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                    lineNumber: 296,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                className: "channelName",
                children: channelData?.name
            }, void 0, false, {
                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                lineNumber: 307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                className: "topic",
                children: channelData?.topic
            }, void 0, false, {
                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "members",
                children: [
                    MembersObj?.channelOwner != undefined ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "owner",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "imageNameContainer",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "userPic",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "pic",
                                            src: `http://localhost:3000/${MembersObj?.channelOwner.user.avatar}`,
                                            width: 50,
                                            height: 50,
                                            alt: "avatar"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                            lineNumber: 315,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "name",
                                        children: MembersObj?.channelOwner.user.username
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "status",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "type",
                                    children: MembersObj?.channelOwner.role
                                }, void 0, false, {
                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                        lineNumber: 312,
                        columnNumber: 11
                    }, this) : "",
                    MembersObj?.channelAdmins?.map((adminUser)=>{
                        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "admin",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "imageNameContainer",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "userPic",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "pic",
                                                src: `http://localhost:3000/${adminUser.user.avatar}`,
                                                width: 50,
                                                height: 50,
                                                alt: "avatar"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                lineNumber: 339,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                            lineNumber: 338,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "name",
                                            children: adminUser.user.username
                                        }, void 0, false, {
                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                            lineNumber: 347,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "blocked",
                                            style: {
                                                color: "tomato"
                                            },
                                            children: [
                                                adminUser.condition == "BLOCKED" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdBlock"], {}, void 0, false, {
                                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                    lineNumber: 349,
                                                    columnNumber: 55
                                                }, this) : "",
                                                adminUser.condition == "MUTED" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiSolidVolumeMute"], {}, void 0, false, {
                                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                    lineNumber: 350,
                                                    columnNumber: 53
                                                }, this) : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                            lineNumber: 348,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                    lineNumber: 337,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "status",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "type",
                                            children: adminUser.role
                                        }, void 0, false, {
                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                            lineNumber: 354,
                                            columnNumber: 17
                                        }, this),
                                        MembersObj?.myTypeInTheChannel?.role === "OWNER" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "actionsBtn",
                                                children: [
                                                    MembersObj?.myTypeInTheChannel?.role === "OWNER" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsThreeDotsVertical"], {
                                                        className: "btn"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                        lineNumber: 359,
                                                        columnNumber: 25
                                                    }, this) : "",
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "actions",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                                            children: [
                                                                MembersObj?.myTypeInTheChannel?.role === "OWNER" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                                    onClick: ()=>handleRemoveAdminClick(adminUser.user.uid),
                                                                    children: "RM ADMIN"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                                    lineNumber: 366,
                                                                    columnNumber: 29
                                                                }, this) : "",
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                                    onClick: ()=>handleKickClick(adminUser.user.uid),
                                                                    children: "KICK"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                                    lineNumber: 377,
                                                                    columnNumber: 27
                                                                }, this),
                                                                adminUser.condition == "BLOCKED" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                                    onClick: ()=>handleRmBlockClick(adminUser.user.uid),
                                                                    children: "RM BLOCK"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                                    lineNumber: 383,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                                    onClick: ()=>handleBlockClick(adminUser.user.uid),
                                                                    children: "BLOCK"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                                    lineNumber: 391,
                                                                    columnNumber: 29
                                                                }, this),
                                                                adminUser.condition == "MUTED" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                                    onClick: ()=>handleRmMuteClick(adminUser.user.uid),
                                                                    children: "RM MUTE"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                                    lineNumber: 400,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                                    onClick: ()=>handleMuteClick(adminUser.user.uid),
                                                                    children: "MUTE 1MIN"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                                    lineNumber: 408,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                            lineNumber: 364,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                        lineNumber: 363,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                lineNumber: 357,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false) : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                    lineNumber: 353,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, adminUser.id, true, {
                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                            lineNumber: 336,
                            columnNumber: 13
                        }, this);
                    }),
                    MembersObj?.channelNormalUsers?.map((normalUser)=>{
                        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "user",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "imageNameContainer",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "userPic",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "pic",
                                                src: `http://localhost:3000/${normalUser.user.avatar}`,
                                                width: 50,
                                                height: 50,
                                                alt: "avatar"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                lineNumber: 432,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                            lineNumber: 431,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "name",
                                            children: normalUser.user.username
                                        }, void 0, false, {
                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                            lineNumber: 440,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "blocked",
                                            style: {
                                                color: "tomato"
                                            },
                                            children: [
                                                normalUser.condition == "BLOCKED" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdBlock"], {}, void 0, false, {
                                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                    lineNumber: 442,
                                                    columnNumber: 56
                                                }, this) : "",
                                                normalUser.condition == "MUTED" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiSolidVolumeMute"], {}, void 0, false, {
                                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                    lineNumber: 443,
                                                    columnNumber: 54
                                                }, this) : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                            lineNumber: 441,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                    lineNumber: 430,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "actionsBtn",
                                    children: [
                                        MembersObj?.myTypeInTheChannel?.role === "OWNER" || MembersObj?.myTypeInTheChannel?.role === "ADMIN" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsThreeDotsVertical"], {}, void 0, false, {
                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                            lineNumber: 449,
                                            columnNumber: 19
                                        }, this) : "",
                                        MembersObj?.myTypeInTheChannel?.role === "OWNER" || MembersObj?.myTypeInTheChannel?.role === "ADMIN" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "actions",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                                children: [
                                                    MembersObj?.myTypeInTheChannel?.role === "OWNER" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                        onClick: ()=>handleAdminClick(normalUser.user.uid),
                                                        children: "ADMIN"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                        lineNumber: 458,
                                                        columnNumber: 25
                                                    }, this) : "",
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                        onClick: ()=>handleKickClick(normalUser.user.uid),
                                                        children: "KICK"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                        lineNumber: 467,
                                                        columnNumber: 23
                                                    }, this),
                                                    normalUser.condition == "BLOCKED" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                        onClick: ()=>handleRmBlockClick(normalUser.user.uid),
                                                        children: "RM BLOCK"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                        lineNumber: 471,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                        onClick: ()=>handleBlockClick(normalUser.user.uid),
                                                        children: "BLOCK"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                        lineNumber: 479,
                                                        columnNumber: 25
                                                    }, this),
                                                    normalUser.condition == "MUTED" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                        onClick: ()=>handleRmMuteClick(normalUser.user.uid),
                                                        children: "RM MUTE"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                        lineNumber: 486,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                        onClick: ()=>handleMuteClick(normalUser.user.uid),
                                                        children: "MUTE 1MIN"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                        lineNumber: 492,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                                lineNumber: 456,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                            lineNumber: 455,
                                            columnNumber: 19
                                        }, this) : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, normalUser.id, true, {
                            fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                            lineNumber: 429,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                lineNumber: 310,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "leaveBtn",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GiCancel"], {
                        className: "cancelBtn",
                        onClick: ()=>handleLeaveChannel(userId)
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                        lineNumber: 510,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        onClick: ()=>handleLeaveChannel(userId),
                        children: [
                            "Leave ",
                            channelData?.name
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                        lineNumber: 514,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
                lineNumber: 509,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/chat/Channels/channelInfo.tsx>",
        lineNumber: 294,
        columnNumber: 5
    }, this);
};
_s(ChannelInfo, "5+W9kbQWMkz95xz+mKBB6BGGfvU=");
_c = ChannelInfo;
const __TURBOPACK__default__export__ = ChannelInfo;
var _c;
__turbopack_refresh__.register(_c, "ChannelInfo");

})()),
"[project]/app/chat/Friends/FriendInfo.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "FriendInfo": ()=>FriendInfo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$currentFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/currentFriend.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$cg$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/cg/index.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
const FriendInfo = ()=>{
    _s();
    const [friend, setFriend] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilState"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$currentFriend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentFriend"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "current_friend_info_container",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "current_friend_info",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                        children: friend?.name
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
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
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "current_friend_rank",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                        children: "rank"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
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
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "current_friend_achievements_container",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                        children: "achievements"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "current_friend_achievements",
                        children: friend?.achievements?.map((a)=>{
                            if (a?.unlocked) return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "current_friend_achievement",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
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
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "current_friend_block",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        onClick: ()=>setFriend((prev)=>{
                                if (prev) {
                                    return {
                                        ...prev,
                                        blocked: !prev?.blocked
                                    };
                                }
                            }),
                        className: `block_current_friend ${friend?.blocked ? "block_current_friend" : "unblock_current_friend"}`,
                        children: friend?.blocked ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$cg$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CgUnblock"], {}, void 0, false, {
                            fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                            lineNumber: 70,
                            columnNumber: 30
                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdBlock"], {}, void 0, false, {
                            fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                            lineNumber: 70,
                            columnNumber: 46
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Friends/FriendInfo.tsx>",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
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
_s(FriendInfo, "Cx+UaVz9unG9uzThpRGFRhsQHX0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilState"]
    ];
});
_c = FriendInfo;
var _c;
__turbopack_refresh__.register(_c, "FriendInfo");

})()),
"[project]/app/chat/Channels/popupCreateChannel.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/userToken.ts [app-client] (ecmascript)");
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
const PopupCreateChannel = ({ setShowPopUpCreateChannel })=>{
    _s();
    const [selectedChannelPicture, setSelectedChannelPicture] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("/channelDefaultImage.png");
    const [name, setName] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [status, setStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("PUBLIC");
    const [topic, setTopic] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [code, setCode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("0000");
    const [file, setFile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const userTok = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userToken"]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("type", status);
        formData.append("code", code);
        formData.append("topic", topic);
        console.log("formData: ", formData);
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
            setStatus("PUBLIC");
            setTopic("");
            setCode("");
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
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "popupContainer",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                className: "cancelBtn",
                onClick: ()=>{
                    setShowPopUpCreateChannel(false);
                },
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdOutlineCancel"], {}, void 0, false, {
                    fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                children: "create channel"
            }, void 0, false, {
                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("form", {
                onSubmit: handleSubmit,
                encType: "multipart/form-data",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "imageContainer",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "img",
                                src: selectedChannelPicture,
                                width: 130,
                                height: 130,
                                alt: ""
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "chooseImageBtn",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "file-upload",
                                        className: "",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoCameraReverse"], {}, void 0, false, {
                                            fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        required: true,
                                        type: "file",
                                        id: "file-upload",
                                        className: "custom-file-input",
                                        accept: "image/*",
                                        onChange: (e)=>{
                                            handleChange(e);
                                        }
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "nameInput",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                htmlFor: "channelName",
                                children: "channel name"
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                required: true,
                                type: "text",
                                name: "name",
                                id: "channelName",
                                value: name,
                                onChange: (e)=>setName(e.target.value),
                                placeholder: "name"
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "topicInput",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                htmlFor: "channeltopic",
                                children: "channel topic"
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                required: true,
                                type: "text",
                                name: "topic",
                                id: "channeltopic",
                                value: topic,
                                onChange: (e)=>setTopic(e.target.value),
                                placeholder: "topic"
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "channelType",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        type: "radio",
                                        id: "public",
                                        value: "PUBLIC",
                                        checked: status === "PUBLIC",
                                        onChange: handleStatusChange
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "public",
                                        children: "public"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        type: "radio",
                                        id: "private",
                                        value: "PRIVATE",
                                        checked: status === "PRIVATE",
                                        onChange: handleStatusChange
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "private",
                                        children: "private"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                        type: "radio",
                                        id: "protected",
                                        value: "PROTECTED",
                                        checked: status === "PROTECTED",
                                        onChange: handleStatusChange
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        htmlFor: "protected",
                                        children: "protected"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            status == "PROTECTED" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                required: true,
                                maxLength: 4,
                                type: "number",
                                name: "code",
                                value: code,
                                onKeyDown: (e)=>e.key === "." && e.preventDefault(),
                                onChange: (e)=>{
                                    if (e.target.value.length < 5) setCode(e.target.value);
                                },
                                className: "protectedPassword",
                                placeholder: "code"
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this) : ""
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        className: "createChannelBtn",
                        type: "submit",
                        children: "create"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/chat/Channels/popupCreateChannel.tsx>",
        lineNumber: 69,
        columnNumber: 5
    }, this);
};
_s(PopupCreateChannel, "lajx1la4EreJXtjKFiBBGWTkF9Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"]
    ];
});
_c = PopupCreateChannel;
const __TURBOPACK__default__export__ = PopupCreateChannel;
var _c;
__turbopack_refresh__.register(_c, "PopupCreateChannel");

})()),
"[project]/app/chat/Friends/AddFriend.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>AddFriend
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ti$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ti/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/userToken.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/logged.ts [app-client] (ecmascript)");
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
function AddFriend({ user }) {
    _s();
    const userTok = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userToken"]);
    const loggedU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loggedUser"]);
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
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "add_friend_conatiner",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                className: "add_friend_name",
                children: user.username
            }, void 0, false, {
                fileName: "<[project]/app/chat/Friends/AddFriend.tsx>",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                onClick: addFriend,
                className: "add_friend_btn",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ti$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiUserAdd"], {}, void 0, false, {
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
_s(AddFriend, "YO88lU9ClNDxKHE7Us0dwfmRKUQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"]
    ];
});
_c = AddFriend;
var _c;
__turbopack_refresh__.register(_c, "AddFriend");

})()),
"[project]/app/chat/Friends/AddFriendSection.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ti$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ti/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/userToken.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$AddFriend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Friends/AddFriend.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/logged.ts [app-client] (ecmascript)");
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
const AddFriendSection = ()=>{
    _s();
    const userTok = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userToken"]);
    const userL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loggedUser"]);
    const [addFriend, setAddFriend] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [input, setInput] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [allUsers, setAllUsers] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
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
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        getAllusers();
    }, [
        addFriend
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        onClick: ()=>setAddFriend((prev)=>!prev),
        className: `add_friend ${addFriend && `show_the_big_div`}`,
        children: addFriend ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            onClick: addFriendClick,
            className: "add_friend_container",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                    value: input,
                    onChange: (e)=>setInput(e.target.value),
                    type: "text",
                    placeholder: "Add friend"
                }, void 0, false, {
                    fileName: "<[project]/app/chat/Friends/AddFriendSection.tsx>",
                    lineNumber: 58,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "searchedFriends",
                    children: filteredUsers?.map((user)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$AddFriend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ti$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiUserAdd"], {}, void 0, false, {
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
_s(AddFriendSection, "FRrVT1bamifAGG/EmQidUFlHU5M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"]
    ];
});
_c = AddFriendSection;
const __TURBOPACK__default__export__ = AddFriendSection;
var _c;
__turbopack_refresh__.register(_c, "AddFriendSection");

})()),
"[project]/app/chat/Channels/popupSearchChannels.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/userToken.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
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
const PopupSearchChannels = ({ setSelectedChannel, setShowPopUpSearchChannels, userId })=>{
    _s();
    const [error, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [code, setCode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [channelName, setChannelName] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [fetchedChannels, setFetchedChannels] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const userTok = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userToken"]);
    const handleJoin = async (id)=>{
        const req = await fetch(`http://localhost:3000/channelss/roles?channelId=${id}`, {
            headers: {
                Authorization: `Bearer ${userTok}`,
                "Content-Type": "application/json"
            }
        });
        const allRoles = await req.json();
        console.log("all roles =>", allRoles);
        const imIinIt = allRoles.filter((e)=>e.userID == userId);
        if (imIinIt.length && imIinIt.length > 0) {
            console.log("ALREADY IN IT imIinIt => ", imIinIt);
            setShowPopUpSearchChannels(false);
            setSelectedChannel(id);
            setCode(undefined);
            return;
        }
        await fetch(`http://localhost:3000/channelss/joinpublic?userID=${userId}&channelID=${id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${userTok}`,
                "Content-Type": "application/json"
            }
        }).then(()=>{
            setCode(0);
            setShowPopUpSearchChannels(false);
        });
    };
    const handleJoinProtected = async (id, originalCode)=>{
        console.log("id : ", id, " original code :", originalCode, " entered code :", code);
        if (originalCode == code) {
            handleJoin(id);
        } else {
            setError("code is wrong");
            setCode(undefined);
            setTimeout(()=>{
                setError("");
            }, 2000);
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        console.log("HERE");
        const fetchFreshChannels = async ()=>{
            const response = await fetch(`http://localhost:3000/channelss?mustinclude=${channelName}`, {
                headers: {
                    Authorization: `Bearer ${userTok}`,
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            console.log("data is equal to :", data);
            setFetchedChannels(data);
        };
        fetchFreshChannels();
    }, [
        channelName
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "popupContainer",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                className: "cancelBtn",
                onClick: ()=>{
                    setShowPopUpSearchChannels(false);
                    setChannelName("");
                    setCode(undefined);
                },
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdOutlineCancel"], {}, void 0, false, {
                    fileName: "<[project]/app/chat/Channels/popupSearchChannels.tsx>",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/chat/Channels/popupSearchChannels.tsx>",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "searchingArea",
                children: [
                    error.length > 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: "errorMsg",
                        children: error
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Channels/popupSearchChannels.tsx>",
                        lineNumber: 122,
                        columnNumber: 29
                    }, this) : "",
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                        type: "text",
                        name: "channelName",
                        className: "searchingChannelInput",
                        placeholder: "search channel",
                        value: channelName,
                        onChange: (e)=>setChannelName(e.currentTarget.value)
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Channels/popupSearchChannels.tsx>",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "searchedChannelsList",
                        children: fetchedChannels?.map((e)=>{
                            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "channelLink",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "imageAndName",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: `http://localhost:3000/${e.uri}`,
                                                width: 50,
                                                height: 50,
                                                alt: "IMG",
                                                className: "channelImage"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/chat/Channels/popupSearchChannels.tsx>",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "nameAndCode",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        children: e.name
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/chat/Channels/popupSearchChannels.tsx>",
                                                        lineNumber: 144,
                                                        columnNumber: 21
                                                    }, this),
                                                    e.type == "PROTECTED" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                        type: "number",
                                                        style: {
                                                            appearance: "textfield"
                                                        },
                                                        placeholder: "code",
                                                        onKeyDown: (e)=>e.key === "." && e.preventDefault(),
                                                        value: code != undefined ? code.toString() : "",
                                                        onChange: (e)=>{
                                                            if (e.target.value.length < 5) setCode(parseInt(e.target.value));
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "<[project]/app/chat/Channels/popupSearchChannels.tsx>",
                                                        lineNumber: 146,
                                                        columnNumber: 23
                                                    }, this) : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/app/chat/Channels/popupSearchChannels.tsx>",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/chat/Channels/popupSearchChannels.tsx>",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this),
                                    e.type == "PUBLIC" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        className: "joinBtn",
                                        onClick: ()=>handleJoin(e.id),
                                        children: "join"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/popupSearchChannels.tsx>",
                                        lineNumber: 163,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        className: "joinBtn",
                                        onClick: ()=>handleJoinProtected(e.id, e.code),
                                        children: "join"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/chat/Channels/popupSearchChannels.tsx>",
                                        lineNumber: 167,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, e.id, true, {
                                fileName: "<[project]/app/chat/Channels/popupSearchChannels.tsx>",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/Channels/popupSearchChannels.tsx>",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/chat/Channels/popupSearchChannels.tsx>",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/chat/Channels/popupSearchChannels.tsx>",
        lineNumber: 110,
        columnNumber: 5
    }, this);
};
_s(PopupSearchChannels, "kzR8qlzRDjTRi/B633/IWC7BBQo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"]
    ];
});
_c = PopupSearchChannels;
const __TURBOPACK__default__export__ = PopupSearchChannels;
var _c;
__turbopack_refresh__.register(_c, "PopupSearchChannels");

})()),
"[project]/app/chat/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendsChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Friends/FriendsChat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Channels$2f$channelChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Channels/channelChat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Channels$2f$SelectedChannelChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Channels/SelectedChannelChat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendChatList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Friends/FriendChatList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$friendAtom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/friendAtom.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Channels$2f$channelInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Channels/channelInfo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Friends/FriendInfo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Channels$2f$popupCreateChannel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Channels/popupCreateChannel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$AddFriendSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Friends/AddFriendSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/logged.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/userToken.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Channels$2f$popupSearchChannels$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/chat/Channels/popupSearchChannels.tsx [app-client] (ecmascript)");
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
const socket = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__["io"]("http://localhost:3001", {
    transports: [
        "websocket"
    ]
});
const Chat = ()=>{
    _s();
    const [hide, setHide] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [mode, setMode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("friends");
    const [selectedFriend, setSelectedFriend] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilState"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$friendAtom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slctdFriend"]);
    const [selectedChannel, setSelectedChannel] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](-1);
    const [showPopUpCreateChannel, setShowPopUpCreateChannel] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [showPopUpSearchChannels, setShowPopUpSearchChannels] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const selectedBtn = mode === "friends" ? "toleft" : "toright";
    const userId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loggedUser"]);
    const userTok = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userToken"]);
    const [channels, setChannels] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
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
        socket.on("updateUsersAfterSomeoneKick", fetchChannels);
        socket.on("updateChannels", fetchChannels);
        socket.on("updateRoles", fetchChannels);
        return ()=>{
            socket.off("updateUsersAfterSomeoneKick");
            socket.off("updateChannels");
            socket.off("updateRoles");
        };
    }, []);
    const preventCHilde = (e)=>{
        e.stopPropagation();
    };
    const handleParentClick = (event)=>{
        setHide(false);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "chat_channels_container",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "chat_channels_sub_container",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: `createChannelPopup ${showPopUpCreateChannel ? "showPopup" : "hidePopUp"}`,
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Channels$2f$popupCreateChannel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setShowPopUpCreateChannel: setShowPopUpCreateChannel
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/page.tsx>",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/chat/page.tsx>",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: `createChannelPopup ${showPopUpSearchChannels ? "showPopup" : "hidePopUp"}`,
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Channels$2f$popupSearchChannels$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setSelectedChannel: setSelectedChannel,
                        userId: userId,
                        setShowPopUpSearchChannels: setShowPopUpSearchChannels
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/page.tsx>",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/chat/page.tsx>",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: `col1 ${(selectedFriend !== -1 || selectedChannel > 0) && "hideCol1"}  `,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "switcher",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    onClick: ()=>{
                                        setMode("friends");
                                    },
                                    children: "Friends"
                                }, void 0, false, {
                                    fileName: "<[project]/app/chat/page.tsx>",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    onClick: ()=>{
                                        setMode("channels");
                                    },
                                    children: "Channels"
                                }, void 0, false, {
                                    fileName: "<[project]/app/chat/page.tsx>",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: `selectedColor ${selectedBtn}`
                                }, void 0, false, {
                                    fileName: "<[project]/app/chat/page.tsx>",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/chat/page.tsx>",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        mode == "friends" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "friendsList",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendsChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "<[project]/app/chat/page.tsx>",
                                lineNumber: 137,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/chat/page.tsx>",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "channelsList",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Channels$2f$channelChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                channels: channels,
                                setSelectedChannel: setSelectedChannel,
                                setShowPopUpCreateChannel: setShowPopUpCreateChannel,
                                setShowPopUpSearchChannels: setShowPopUpSearchChannels
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/page.tsx>",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/chat/page.tsx>",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/chat/page.tsx>",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: `col2 ${(selectedFriend !== -1 || selectedChannel > 0) && "showCol2"}  `,
                    children: mode == "friends" && selectedFriend != -1 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "selectedFriendChat",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendChatList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "<[project]/app/chat/page.tsx>",
                            lineNumber: 158,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/page.tsx>",
                        lineNumber: 157,
                        columnNumber: 13
                    }, this) : mode == "channels" && selectedChannel > 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "selectedChannelChat",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Channels$2f$SelectedChannelChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            userId: userId,
                            userTok: userTok,
                            channels: channels,
                            selectedChannel: selectedChannel,
                            setSelectedChannel: setSelectedChannel
                        }, void 0, false, {
                            fileName: "<[project]/app/chat/page.tsx>",
                            lineNumber: 162,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/page.tsx>",
                        lineNumber: 161,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "svgHolder",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "svgImage",
                                src: "/manageChat.svg",
                                width: 300,
                                height: 300,
                                alt: "select a chat :)"
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/page.tsx>",
                                lineNumber: 173,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                children: "all messages are end to end encrypted."
                            }, void 0, false, {
                                fileName: "<[project]/app/chat/page.tsx>",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/chat/page.tsx>",
                        lineNumber: 171,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/chat/page.tsx>",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    onClick: handleParentClick,
                    className: `col3 ${hide && "show_col3"}`,
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        onClick: preventCHilde,
                        className: "clo3_sub_container",
                        children: mode == "friends" && selectedFriend != -1 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$FriendInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FriendInfo"], {}, void 0, false, {
                            fileName: "<[project]/app/chat/page.tsx>",
                            lineNumber: 190,
                            columnNumber: 15
                        }, this) : mode == "channels" && selectedChannel > 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Channels$2f$channelInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            userId: userId,
                            userTok: userTok,
                            channels: channels,
                            selectedChannel: selectedChannel
                        }, void 0, false, {
                            fileName: "<[project]/app/chat/page.tsx>",
                            lineNumber: 192,
                            columnNumber: 15
                        }, this) : ""
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/page.tsx>",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/chat/page.tsx>",
                    lineNumber: 184,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    onClick: ()=>{
                        setHide((prev)=>!prev);
                    },
                    className: "chat_channel_details",
                    children: hide ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdOutlineCancel"], {
                        className: "dots_hide"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/page.tsx>",
                        lineNumber: 211,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiDotsVertical"], {
                        className: "dots_hide"
                    }, void 0, false, {
                        fileName: "<[project]/app/chat/page.tsx>",
                        lineNumber: 213,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/chat/page.tsx>",
                    lineNumber: 204,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$chat$2f$Friends$2f$AddFriendSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "<[project]/app/chat/page.tsx>",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/app/chat/page.tsx>",
            lineNumber: 91,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/app/chat/page.tsx>",
        lineNumber: 90,
        columnNumber: 5
    }, this);
};
_s(Chat, "Rw28LCKfBZJXz/CReTm6Mlk+Vvk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"]
    ];
});
_c = Chat;
const __TURBOPACK__default__export__ = Chat;
var _c;
__turbopack_refresh__.register(_c, "Chat");

})()),
"[project]/app/chat/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=app_d65996._.js.map