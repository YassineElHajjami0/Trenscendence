(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_settings_page_tsx_ca1bbe._.js", {

"[project]/app/settings/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/userToken.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recoil/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Atoms/logged.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
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
//http://localhost:3000/image.jpeg
const Settings = ()=>{
    _s();
    const [ArticlesType, setArticlesType] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [showArticlesPopup, setShowArticlesPopup] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const [errors, setErrors] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [qrImage, setQrImage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [avatarsAndPaddles, setAvatarsAndPaddles] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const userTok = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$userToken$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userToken"]);
    const userId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Atoms$2f$logged$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loggedUser"]);
    //http://localhost:3000/users/2 if no 2 the backend does not return an error
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 1000);
        const fetchedData = async ()=>{
            try {
                const avatarsAndPaddlesResponse = await fetch(`http://localhost:3000/useritems?userId=${userId}`, {
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    }
                });
                const response = await fetch(`http://localhost:3000/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${userTok}`,
                        "Content-Type": "application/json"
                    }
                });
                const avatarsAndPaddlesData = await avatarsAndPaddlesResponse.json();
                const data = await response.json();
                setData(data);
                setAvatarsAndPaddles(avatarsAndPaddlesData);
                console.log("data", data);
                console.log("avatarsAndPaddles", avatarsAndPaddlesData);
            } catch (err) {
                console.error("settings error >>>>>>", err);
            }
        };
        fetchedData();
    }, [
        showArticlesPopup
    ]);
    function changeInputValue(e) {
        const { name, value } = e.target;
        switch(name){
            case "username":
                setData((data)=>({
                        ...data,
                        username: value
                    }));
                break;
            case "email":
                setData((data)=>({
                        ...data,
                        email: value
                    }));
                break;
            case "oldPassword":
                setData((data)=>({
                        ...data,
                        oldPassword: value
                    }));
                break;
            case "newPassword":
                setData((data)=>({
                        ...data,
                        newPassword: value
                    }));
                break;
            case "confirmedPassword":
                setData((data)=>({
                        ...data,
                        confirmedPassword: value
                    }));
                break;
            case "bio":
                setData((data)=>({
                        ...data,
                        bio: value
                    }));
                break;
            default:
                break;
        }
    }
    const saveUpdatewBtn = async ()=>{
        console.log("????", data);
        try {
            setErrors("");
            if (data?.newPassword == "" && data?.confirmedPassword == "" && data?.oldPassword == "") {} else {
                if (data?.newPassword == "" || data?.confirmedPassword == "" || data?.oldPassword == "") {
                    setErrors("fill the 3 password fileds to change it !");
                    return;
                } else if (data?.newPassword !== data?.confirmedPassword) {
                    setErrors("you didn't confirm your password well ! ");
                    return;
                }
            }
            const response = await fetch(`http://localhost:3000/users/${userId}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${userTok}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    avatar: data?.avatar,
                    banner: data?.banner,
                    username: data?.username,
                    email: data?.email,
                    oldPassword: data?.oldPassword,
                    newPassword: data?.newPassword,
                    confirmedPassword: data?.confirmedPassword,
                    bio: data?.bio,
                    twoFA: data?.twoFA
                })
            });
            if (!response.ok) {
                const errorResponse = await response.json();
                setErrors((prev)=>prev + "\n" + errorResponse.message);
                throw new Error(`Failed to patch data. Error: ${errorResponse.message}`);
            }
            setErrors("");
        } catch (err) {
            console.error("SS ERR>>>", err);
        }
    };
    const saveUpdatewBtn2 = async ()=>{
        try {
            setErrors("");
            if (data?.newPassword == "" && data?.confirmedPassword == "" && data?.oldPassword == "") {} else {
                if (data?.newPassword == "" || data?.confirmedPassword == "" || data?.oldPassword == "") {
                    setErrors("fill the 3 password fileds to change it !");
                    return;
                } else if (data?.newPassword !== data?.confirmedPassword) {
                    setErrors("you didn't confirm your password well ! ");
                    return;
                }
            }
            const body = {
                username: data?.username,
                email: data?.email,
                bio: data?.bio,
                twoFA: data?.twoFA
            };
            if (data?.oldPassword && data.oldPassword !== "") {
                body.oldPassword = data.oldPassword;
                body.newPassword = data.newPassword;
                body.confirmedPassword = data.confirmedPassword;
            }
            console.log(body);
            const response = await fetch(`http://localhost:3000/users/${userId}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${userTok}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...body
                })
            });
            if (!response.ok) {
                const errorResponse = await response.json();
                setErrors((prev)=>prev + "\n" + errorResponse.message);
                throw new Error(`Failed to patch data. Error: ${errorResponse.message}`);
            }
            setErrors("");
        } catch (err) {
            console.error("SS ERR>>>", err);
        }
    };
    const bringQrImage = async (type)=>{
        console.log("email   ", data?.email);
        if (!type) {
            const response = await fetch(`http://localhost:3000/auth/2fa/turn-on`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${userTok}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    uid: userId,
                    email: data?.email
                })
            });
            const data_ = await response.text();
            setQrImage(data_);
            console.log(data_);
        } else {
            const response = await fetch(`http://localhost:3000/users/${userId}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${userTok}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    twoFASecret: "",
                    twoFA: false
                })
            });
        }
    };
    const changeImageInTheServer = async (id, img, type)=>{
        try {
            if (type == "avatar") {
                setData((data)=>({
                        ...data,
                        avatar: img
                    }));
            } else if (type == "banner") {
                setData((data)=>({
                        ...data,
                        banner: img
                    }));
            }
            // const response = await fetch(`http://localhost:3000/useritems`, {
            //   method: "PATCH",
            //   headers: {
            //     Authorization: `Bearer ${userTok}`,
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify({
            //     userId: userId,
            //     itemId: id,
            //     choosed: true,
            //   }),
            // });
            // if (!response.ok) {
            //   const errorResponse = await response.json();
            //   throw new Error(`Failed to PATCH data. Error: ${errorResponse.message}`);
            // }
            setLoading(true);
            setTimeout(()=>setLoading(false), 1000);
            setShowArticlesPopup(false);
            const response = type == "avatar" ? await fetch(`http://localhost:3000/useritems`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${userTok}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    itemId: id,
                    userId: userId,
                    choosed: true
                })
            }) : await fetch(`http://localhost:3000/users/${userId}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${userTok}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    banner: img
                })
            });
            if (!response.ok) {
                const errorResponse = await response.json();
                setErrors("Something went wrong !");
                throw new Error(`Failed to patch data. Error: ${errorResponse.message}`);
            }
        } catch (err) {
            console.error(err);
        }
    };
    const handleFileUpload = (event)=>{
        console.log("changed");
        const file = event.target.files?.[0];
        if (file) {
            const formData = new FormData();
            formData.append("image", file);
            fetch(`http://localhost:3000/upload/${userId}?type=${ArticlesType}`, {
                method: "POST",
                body: formData
            }).then((res)=>{
                setShowArticlesPopup(false);
            }).catch((error)=>{
                setErrors("something went wrong ! try again.");
            });
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
                                lineNumber: 393,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/app/settings/page.tsx>",
                            lineNumber: 392,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "front"
                        }, void 0, false, {
                            fileName: "<[project]/app/settings/page.tsx>",
                            lineNumber: 395,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/settings/page.tsx>",
                    lineNumber: 391,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "ball"
                }, void 0, false, {
                    fileName: "<[project]/app/settings/page.tsx>",
                    lineNumber: 397,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/app/settings/page.tsx>",
            lineNumber: 390,
            columnNumber: 9
        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: showArticlesPopup ? // <Popup
            //   Type={ArticlesType}
            //   Articles={player_data.avatarsAndPaddles}
            //   setShowArticlesPopup={setShowArticlesPopup}
            //   setProfileImage={setProfileImage}
            //   setProfileBanner={setProfileBanner}
            // />
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "choosedItemsList",
                        children: avatarsAndPaddles?.map((e)=>{
                            return e.type == ArticlesType ? e.type == "avatar" && e.owned && !e.choosed ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "item",
                                onClick: ()=>changeImageInTheServer(e.id, e.img, "avatar"),
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "img",
                                        src: `http://localhost:3000/av/${e.img}`,
                                        width: 200,
                                        height: 200,
                                        alt: "IMG"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 421,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: e.name
                                    }, void 0, false, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 428,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, e.id, true, {
                                fileName: "<[project]/app/settings/page.tsx>",
                                lineNumber: 414,
                                columnNumber: 23
                            }, this) : e.type == "banner" && !e.choosed ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "item",
                                style: {
                                    backgroundColor: "transparent"
                                },
                                onClick: ()=>changeImageInTheServer(e.id, e.img, "banner"),
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "img",
                                    style: {
                                        borderRadius: 0,
                                        width: "100%",
                                        height: "60%"
                                    },
                                    src: `http://localhost:3000/bn/${e.img}`,
                                    width: 200,
                                    height: 200,
                                    alt: "IMG"
                                }, void 0, false, {
                                    fileName: "<[project]/app/settings/page.tsx>",
                                    lineNumber: 439,
                                    columnNumber: 25
                                }, this)
                            }, e.id, false, {
                                fileName: "<[project]/app/settings/page.tsx>",
                                lineNumber: 431,
                                columnNumber: 23
                            }, this) : "" : "";
                        })
                    }, void 0, false, {
                        fileName: "<[project]/app/settings/page.tsx>",
                        lineNumber: 410,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "uploadAndCancel",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                htmlFor: "file-upload",
                                className: "custom-file-upload",
                                children: [
                                    "Upload Image ",
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaImages"], {}, void 0, false, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 462,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/settings/page.tsx>",
                                lineNumber: 461,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                id: "file-upload",
                                type: "file",
                                accept: "image/*",
                                onChange: handleFileUpload
                            }, void 0, false, {
                                fileName: "<[project]/app/settings/page.tsx>",
                                lineNumber: 464,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                className: "cancel",
                                onClick: ()=>{
                                    setArticlesType("");
                                    setShowArticlesPopup(false);
                                },
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowLeft"], {}, void 0, false, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 477,
                                        columnNumber: 19
                                    }, this),
                                    " Cancel"
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/settings/page.tsx>",
                                lineNumber: 470,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/settings/page.tsx>",
                        lineNumber: 460,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "settings-container",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "banner",
                        style: {
                            backgroundImage: `url('${data?.banner}')`,
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
                                            src: `${data?.avatar}`,
                                            width: 192,
                                            height: 192,
                                            alt: "Profile Picture"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/settings/page.tsx>",
                                            lineNumber: 493,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 492,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        className: "btn-change-profile",
                                        onClick: ()=>{
                                            setLoading(true);
                                            setTimeout(()=>setLoading(false), 1000);
                                            setArticlesType("avatar");
                                            setShowArticlesPopup(true);
                                        },
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoCameraReverse"], {
                                            className: "camera"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/settings/page.tsx>",
                                            lineNumber: 510,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 501,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/settings/page.tsx>",
                                lineNumber: 491,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "button-holder",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    className: "addBannerBtn",
                                    onClick: ()=>{
                                        setLoading(true);
                                        setTimeout(()=>setLoading(false), 1000);
                                        setArticlesType("banner");
                                        setShowArticlesPopup(true);
                                    },
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdAdd"], {
                                        className: "plus-icon"
                                    }, void 0, false, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 523,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/app/settings/page.tsx>",
                                    lineNumber: 514,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/settings/page.tsx>",
                                lineNumber: 513,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/settings/page.tsx>",
                        lineNumber: 483,
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
                                                lineNumber: 530,
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
                                                lineNumber: 531,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 529,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                htmlFor: "label",
                                                children: "email"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 542,
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
                                                lineNumber: 543,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 541,
                                        columnNumber: 19
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                htmlFor: "label",
                                                children: "Bio"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 554,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("textarea", {
                                                rows: 4,
                                                placeholder: "Bio",
                                                className: "username",
                                                name: "bio",
                                                value: data?.bio,
                                                onChange: (e)=>changeInputValue(e)
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 555,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 553,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                htmlFor: "label",
                                                children: "password"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 565,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                id: "password",
                                                type: "password",
                                                name: "oldPassword",
                                                placeholder: "old Password",
                                                className: "Password",
                                                value: data?.oldPassword,
                                                onChange: (e)=>changeInputValue(e)
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 566,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 564,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                htmlFor: "label",
                                                children: "new password"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 577,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                id: "newpassword",
                                                type: "password",
                                                name: "newPassword",
                                                placeholder: "new Password",
                                                className: "Password",
                                                value: data?.newPassword,
                                                onChange: (e)=>changeInputValue(e)
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 578,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 576,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                htmlFor: "confirmpassword",
                                                children: "confirm password"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 589,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                id: "confirmpassword",
                                                type: "password",
                                                name: "confirmedPassword",
                                                placeholder: "confirm Password",
                                                className: "Password",
                                                value: data?.confirmedPassword,
                                                onChange: (e)=>changeInputValue(e)
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 590,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 588,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("pre", {
                                        className: "errorsMsg",
                                        children: errors
                                    }, void 0, false, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 600,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/settings/page.tsx>",
                                lineNumber: 528,
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
                                                lineNumber: 604,
                                                columnNumber: 54
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 603,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: [
                                            data?.twoFA == true && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: qrImage,
                                                alt: "Qr code",
                                                width: 200,
                                                height: 200
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 608,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                onClick: ()=>{
                                                    setData((data)=>({
                                                            ...data,
                                                            twoFA: !data?.twoFA
                                                        }));
                                                    bringQrImage(data?.twoFA);
                                                },
                                                className: data?.twoFA ? "redbc" : "greenbc",
                                                children: data?.twoFA ? "Disable 2FA" : "Enable 2FA"
                                            }, void 0, false, {
                                                fileName: "<[project]/app/settings/page.tsx>",
                                                lineNumber: 615,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/app/settings/page.tsx>",
                                        lineNumber: 606,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/settings/page.tsx>",
                                lineNumber: 602,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/settings/page.tsx>",
                        lineNumber: 527,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        className: "saveUpdates",
                        onClick: saveUpdatewBtn2,
                        children: "Save Updates"
                    }, void 0, false, {
                        fileName: "<[project]/app/settings/page.tsx>",
                        lineNumber: 630,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/settings/page.tsx>",
                lineNumber: 482,
                columnNumber: 13
            }, this)
        }, void 0, false)
    }, void 0, false);
};
_s(Settings, "i3N3DaO8wXc2wEMNKPPm/gqFeMw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recoil$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecoilValue"],
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

//# sourceMappingURL=app_settings_page_tsx_ca1bbe._.js.map