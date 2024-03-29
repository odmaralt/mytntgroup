;/*FB_PKG_DELIM*/

__d("RoomsInviteViewQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5029463257102878"}),null);
__d("RoomsInviteViewQuery$Parameters",["RoomsInviteViewQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("RoomsInviteViewQuery_facebookRelayOperation"),metadata:{},name:"RoomsInviteViewQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("useRoomsRoomDefaultValues_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:60,kind:"LocalArgument",name:"profile_pic_width"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"useRoomsRoomDefaultValues_user",selections:[{alias:"profile_pic",args:[{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Variable",name:"width",variableName:"profile_pic_width"}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"short_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null}],type:"User",abstractKey:null};e.exports=a}),null);
__d("CometIconLogoFlat.react",["cr:11257","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var c;return h.jsx(b("cr:11257"),babelHelpers["extends"]({color:(c=a.color)!=null?c:"active-tab"},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("RoomsRelayStoreUtils",["CometRelay","GroupRoomUpdaterUtils","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var e,f;e=(e=a.getRoot().getLinkedRecord("viewer"))==null?void 0:e.getLinkedRecord("joinable_video_chats");if(!e)return;(f=d("CometRelay").ConnectionHandler.getConnection(e,"RoomsNullStateDialog_published_self_room_cards"))==null?void 0:f.invalidateRecord();f=d("CometRelay").ConnectionHandler.getConnection(e,"useRoomsSelfRooms_published_self_room_cards");if(!f){c("recoverableViolation")("Missing published_self_room_cards","rooms");return}h(b,f,a,"JoinableVideoChatsViewerFieldsPublishedSelfRoomCardsEdge");f=d("CometRelay").ConnectionHandler.getConnection(e,"CometHomeRightRailRoomsUnit_published_self_room_cards");f&&h(b,f,a,"JoinableVideoChatsViewerFieldsPublishedSelfRoomCardsEdge");b=e.getLinkedRecord("published_self_room_cards");f=i(b==null?void 0:b.getValue("count"));b==null?void 0:b.setValue(f+1,"count")}function b(a,b){var e;e=(e=a.getRoot().getLinkedRecord("viewer"))==null?void 0:e.getLinkedRecord("actor");if(!e){c("recoverableViolation")("Missing actor","rooms");return}var f=d("CometRelay").ConnectionHandler.getConnection(e,"RoomsTrayRoot_fb_room_cards");f&&h(b,f,a,"UserToFBRoomCardsEdge");f=d("CometRelay").ConnectionHandler.getConnection(e,"RoomsHomeAllRoomsSection_fb_room_cards");f&&h(b,f,a,"UserToFBRoomCardsEdge");f=d("CometRelay").ConnectionHandler.getConnection(e,"CometHomeRightRailRoomsUnit_fb_room_cards");f&&h(b,f,a,"UserToFBRoomCardsEdge")}function h(a,b,c,e){var f;f=(f=b.getLinkedRecords("edges"))!=null?f:[];var g=a.getDataID();if(g==null||f.find(function(a){return(a==null?void 0:(a=a.getLinkedRecord("node"))==null?void 0:a.getDataID())===g})!=null)return;f=d("CometRelay").ConnectionHandler.createEdge(c,b,a,e);d("CometRelay").ConnectionHandler.insertEdgeBefore(b,f)}function e(a,b,e,f){var g=a.get(b);if(g==null||g.getValue("link_hash")!==e)return;e=(g=a.getRoot().getLinkedRecord("viewer"))==null?void 0:g.getLinkedRecord("actor");if(!e)return;g=d("CometRelay").ConnectionHandler.getConnection(e,"RoomsTrayRoot_fb_room_cards");g&&d("CometRelay").ConnectionHandler.deleteNode(g,b);g=d("CometRelay").ConnectionHandler.getConnection(e,"RoomsHomeAllRoomsSection_fb_room_cards");g&&d("CometRelay").ConnectionHandler.deleteNode(g,b);g=d("CometRelay").ConnectionHandler.getConnection(e,"CometHomeRightRailRoomsUnit_fb_room_cards");g&&d("CometRelay").ConnectionHandler.deleteNode(g,b);f!=null&&d("GroupRoomUpdaterUtils").groupsDeleteRoomUpdater(a,f,b);f=(g=a.getRoot().getLinkedRecord("viewer"))==null?void 0:g.getLinkedRecord("joinable_video_chats");if(!f){c("recoverableViolation")("Missing joinable_video_chats","rooms");return}(a=d("CometRelay").ConnectionHandler.getConnection(f,"RoomsNullStateDialog_published_self_room_cards"))==null?void 0:a.invalidateRecord();g=d("CometRelay").ConnectionHandler.getConnection(f,"useRoomsSelfRooms_published_self_room_cards");if(!g){c("recoverableViolation")("Missing published_self_room_cards","rooms");return}d("CometRelay").ConnectionHandler.deleteNode(g,b);a=d("CometRelay").ConnectionHandler.getConnection(f,"CometHomeRightRailRoomsUnit_published_self_room_cards");a&&d("CometRelay").ConnectionHandler.deleteNode(a,b);g=f.getLinkedRecord("published_self_room_cards");a=i(g==null?void 0:g.getValue("count"));g==null?void 0:g.setValue(Math.max(a-1,0),"count");((f=e.getLinkedRecord("profile_active_messenger_room",{render_location:"NEWSFEED"}))==null?void 0:(g=f.getLinkedRecord("room"))==null?void 0:g.getValue("id"))===b&&e.setValue(null,"profile_active_messenger_room",{render_location:"NEWSFEED"})}function i(a){a=Number((a=a)!=null?a:0);return isNaN(a)?0:a}g.addSelfRoom=a;g.addFriendRoom=b;g.deleteRoom=e}),98);
__d("useRoomsRoomDefaultValues",["fbt","CometRelay","GraphQLGender","unrecoverableViolation","useRoomsRoomDefaultValues_user.graphql","useServerTime"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i!==void 0?i:i=b("useRoomsRoomDefaultValues_user.graphql"),k=String.fromCodePoint(128075);function a(a){var b,e,f=c("useServerTime")();a=d("CometRelay").useFragment(j,a);b=a==null?void 0:(b=a.profile_pic)==null?void 0:b.uri;e=new(c("GraphQLGender"))((e=a==null?void 0:a.gender)!=null?e:"UNKNOWN").toIntlVariationsEnum();a=h._("__JHASH__1lvekt4xu8x__JHASH__",[h._name("ownerName",(a=a==null?void 0:a.short_name)!=null?a:"",e)]).toString();e=a;if(b==null)throw c("unrecoverableViolation")("defaultProfileUri should be non-null","rooms");return{defaultDate:Math.floor(f.getTime()/1e3),defaultEmoji:k,defaultProfileUri:b,defaultRoomName:e}}g["default"]=a}),98);
__d("StoriesTrayErrorCardLazyLoaded.react",["JSResourceForInteraction","lazyLoadComponent"],(function(a,b,c,d,e,f,g){"use strict";a=c("lazyLoadComponent")(c("JSResourceForInteraction")("StoriesTrayErrorCard.react").__setRef("StoriesTrayErrorCardLazyLoaded.react"));g["default"]=a}),98);
__d("RoomsRoot.react",["CometBackupPlaceholder.react","CometProfiler.react","cr:1373242","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.queries;return h.jsx(c("CometProfiler.react"),{id:"VideoChatHomeContainerComet",children:h.jsx(c("CometBackupPlaceholder.react"),{fallback:null,children:a.joinableVideoChatsQueryReference!=null&&b("cr:1373242")!=null?h.jsx(b("cr:1373242"),{joinableVideoChatsQueryReference:a.joinableVideoChatsQueryReference}):null})})}a.displayName=a.name+" [from "+f.id+"]";e=h.memo(a);g["default"]=e}),98);