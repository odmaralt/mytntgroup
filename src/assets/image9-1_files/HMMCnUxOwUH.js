;/*FB_PKG_DELIM*/

__d("GroupRoomCreateAudioChannelDialogRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5790704310990324"}),null);
__d("GroupRoomCreateAudioChannelDialogRootQuery$Parameters",["GroupRoomCreateAudioChannelDialogRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupRoomCreateAudioChannelDialogRootQuery_facebookRelayOperation"),metadata:{},name:"GroupRoomCreateAudioChannelDialogRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("useGroupRoomCreateAudioChannelDialog_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGroupRoomCreateAudioChannelDialog_group",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("PublicEventCometRSVPButtonStrings",["fbt","react"],(function(a,b,c,d,e,f,g,h){"use strict";d("react");function a(a){return a==="GOING"?h._("__JHASH__I74xO2khJDt__JHASH__"):h._("__JHASH__Oz3cVHrpTIY__JHASH__")}a.displayName=a.name+" [from "+f.id+"]";function b(a){return a==="WATCHED"?h._("__JHASH__PSEKKGP96nF__JHASH__"):h._("__JHASH__2qkjQUh42sG__JHASH__")}b.displayName=b.name+" [from "+f.id+"]";function c(a){return a==="WATCHED"?h._("__JHASH__mW930W3sXs7__JHASH__"):h._("__JHASH__h2mdzk1ue9H__JHASH__")}c.displayName=c.name+" [from "+f.id+"]";function e(){return h._("__JHASH__xoeLuaGKq5s__JHASH__")}e.displayName=e.name+" [from "+f.id+"]";g.Going=a;g.Interested=b;g.Remove=c;g.Purchase=e}),98);
__d("EventCometActionContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({event_action_history:[]});g["default"]=b}),98);
__d("EventCometActionLoggerDeferred",["promiseDone","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("EventCometActionLogger").__setRef("EventCometActionLoggerDeferred");function a(a,b,d){c("promiseDone")(h.load().then(function(c){return c.log(a,b,d)}))}g.log=a}),98);
__d("EventCometActionLoggerUtils",[],(function(a,b,c,d,e,f){"use strict";var g={mechanism:"unknown",surface:"unknown"},h=3;function a(a,b){var c=[].concat(a.event_action_history||[]);c.length>=h&&(c=c.slice(c.length-h+1));var d=i(a);c.push({event_tracking:d.event_tracking,extra_data:d.extra_data,mechanism:b.mechanism,surface:b.surface});return babelHelpers["extends"]({},a,{event_action_history:c})}function i(a){a=a.event_action_history;if(a==null||a[a.length-1]==null)return g;return a.length>=2?a[a.length-2]:a[a.length-1]}f.createForNewSurface=a;f.getLastActionHistoryEntry=i}),66);
__d("useEventActionLoggerParams",["CometRouteParams","EventCometActionLoggerUtils","react","recoverableViolation","useRouteReferrer"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useMemo,i={event_action_history:[]};function j(a,b,c){var e,f=typeof a.acontext==="string"?a.acontext:null,g=typeof a.notif_t==="string"?a.notif_t:null;f=k(f);if(!((e=f.event_action_history)==null?void 0:e.length)){e=n(a,c);e&&(f=babelHelpers["extends"]({},f,{event_action_history:[{surface:e}]}))}f.ref_notif_type=(a=f.ref_notif_type)!=null?a:g;c=d("EventCometActionLoggerUtils").createForNewSurface(f,b);return[f,c]}function k(a){if(a==null||a==="")return i;var b=null;try{b=JSON.parse(a)}catch(a){c("recoverableViolation")("Unable to parse action_context string"+a.toString(),"events")}if(b==null)return i;a=b;b=a.action_history;var d=a.event_action_history,e=a.ref,f=a.ref_notif_type;a=a.source;d=(d=d)!=null?d:b;b=[];typeof d==="string"?b=o(d):Array.isArray(d)&&(b=p(d));return{event_action_history:b,ref:e,ref_notif_type:f,source:a}}var l=["google","bing","yahoo"],m={app:"home",gaming:"games_feed",group:"group",groups:"group",marketplace:"marketplace",page:"page",profile:"user_timeline",save:"saved_dashboard",search_results:"search",watch:"video_feed"};function n(a,b){if(a.ref==="notif"||a.notif_id!=null)return"notifications_tab";b=b==null?void 0:b.split(".");b=b!=null&&b.length>=2&&b[0]==="comet"?b[1]:null;if(b!=null&&Object.prototype.hasOwnProperty.call(m,b))return m[b];if(a.ref==="newsfeed")return"newsfeed";b=(b=document.referrer)==null?void 0:(a=b.match(/\/\/[^\/]*?([\w-]+)\.\w+(\/|$)/))==null?void 0:a[1];if(b!=null){if(l.includes(b))return"external_search_engine";if(b!=="facebook")return"external"}return null}function o(a){if(a==="")return[];var b=[];try{b=JSON.parse(a)}catch(a){c("recoverableViolation")("Unable to parse action_history string"+a.toString(),"events");return b}return p(b)}function p(a){return!Array.isArray(a)?[]:a.filter(function(a){return typeof a==="object"}).map(function(a){var b=a.event_tracking,c=a.extra_data,d=a.mechanism;a=a.surface;return{event_tracking:typeof b==="string"?b:void 0,extra_data:typeof c==="object"?JSON.stringify(c):"",mechanism:typeof d==="string"?d:"unknown",surface:typeof a==="string"?a:"unknown"}})}function a(a){var b=d("CometRouteParams").useRouteParams(),e=c("useRouteReferrer")();return h(function(){return j(b,a,e==null?void 0:e.tracePolicy)},[b,a,e==null?void 0:e.tracePolicy])}g["default"]=a}),98);
__d("addLocalGroupFeedInlineMessage",["CometRelay","cometUniqueID","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function h(a,b,d){a=a.get(b);if(a==null){c("recoverableViolation")("Group Feed Inline Message Updater: Could not find group edge in store","groups_comet");return}b=a.getLinkedRecords("local_feed_inline_messages")||[];a.setLinkedRecords([].concat(b,[d]),"local_feed_inline_messages")}function a(a,b,e){d("CometRelay").commitLocalUpdate(a,function(a){var d="client:LocalGroupFeedVideoInlineMessage:"+c("cometUniqueID")(),f=a.create(d,"LocalGroupFeedVideoInlineMessage");f.setValue(String(d),"id");f.setValue(String(b),"group_id");f.setValue(String(e),"message");h(a,b,f)})}function b(a,b,e){d("CometRelay").commitLocalUpdate(a,function(a){var d=a.get(b);if(d==null){c("recoverableViolation")("Group Feed Inline Message Updater: Could not find group edge in store","groups_comet");return}var f=d.getLinkedRecords("local_feed_inline_messages")||[];f=f.filter(function(a){return(a==null?void 0:a.getDataID())!==e});a["delete"](e);d.setLinkedRecords(f,"local_feed_inline_messages")})}g.addLocalVideoFeedMessage=a;g.removeLocalFeedMessage=b}),98);
__d("GroupRoomCreateAudioChannelDialog.entrypoint",["GroupRoomCreateAudioChannelDialogRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.groupID;return{queries:{queryReference:{parameters:b("GroupRoomCreateAudioChannelDialogRootQuery$Parameters"),variables:{groupID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("GroupRoomCreateAudioChannelDialog.react").__setRef("GroupRoomCreateAudioChannelDialog.entrypoint")};g["default"]=a}),98);
__d("useGroupRoomCreateAudioChannelDialog",["GroupRoomCreateAudioChannelDialog.entrypoint","useCometEntryPointDialog","useGroupRoomCreateAudioChannelDialog_group.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;h!==void 0?h:h=b("useGroupRoomCreateAudioChannelDialog_group.graphql");function a(a,b){a=c("useCometEntryPointDialog")(c("GroupRoomCreateAudioChannelDialog.entrypoint"),{groupID:a},"button");var d=a[0];return function(a){return d({loggingData:b},a)}}g["default"]=a}),98);
__d("FBReelsMuteContextDefaultValue",[],(function(a,b,c,d,e,f){"use strict";a={isMuted:!1,setMute:function(a){}};f["default"]=a}),66);
__d("FBReelsMuteContext",["FBReelsMuteContextDefaultValue","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(c("FBReelsMuteContextDefaultValue"));g["default"]=b}),98);
__d("useFBReelsProcessRoute",["CometRouteParams","useRoutePassthroughProps","uuid"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("CometRouteParams").useRouteParams(),b=c("useRoutePassthroughProps")()||{},e=typeof a.video_id==="string"?a.video_id:"",f=typeof b.trackingString==="string"?b.trackingString:"",g=typeof b.rootVideoTrackingKey==="string"?b.rootVideoTrackingKey:"",h=typeof b.rootVideoID==="string"?b.rootVideoID:"",i=typeof a.group_id==="string"?a.group_id:null,j="";typeof a.s==="string"?j=a.s:typeof b.s==="string"&&(j=b.s);a=typeof b.sessionID==="string"?b.sessionID:c("uuid")();var k=!Boolean(b.showComments),l=typeof b.isMuted==="boolean"?b.isMuted:null,m=typeof b.index==="number"?b.index:null,n=b.paginationFragment;b=b.paginationFragmentKey;return{aggregationPageNodeIndex:m,aggregationPaginationFragment:n,aggregationPaginationFragmentKey:b,groupID:i,isFullScreen:k,isMutedFromPreviousRoute:l,rootVideoID:h,rootVideoTrackingKey:g,source:j,trackingString:f,videoID:e,viewerSessionID:a}}g["default"]=a}),98);
__d("useFBReelsMute",["CometRouteRenderType","react","useFBReelsProcessRoute"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useState;function a(){var a=d("CometRouteRenderType").useIsPushView(),b=c("useFBReelsProcessRoute")();b=b.isMutedFromPreviousRoute;b=h(typeof b==="boolean"?b:!a);a=b[0];var e=b[1];b=function(a){e(a)};return[a,b]}g["default"]=a}),98);
__d("FBReelsMuteContextProvider",["FBReelsMuteContext","FBReelsMuteContextDefaultValue","react","useFBReelsMute"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useContext,j=b.useMemo;function k(a){a=a.children;var b=c("useFBReelsMute")(),d=b[0],e=b[1];b=j(function(){return{isMuted:d,setMute:e}},[d,e]);return h.jsx(c("FBReelsMuteContext").Provider,{value:b,children:a})}k.displayName=k.name+" [from "+f.id+"]";function a(a){var b=a.children,d=a.shouldUseParentContext,e=i(c("FBReelsMuteContext"));return d===!0&&e!==c("FBReelsMuteContextDefaultValue")?b:h.jsx(k,babelHelpers["extends"]({},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("mapMap",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c=new Map();a.forEach(function(a,d){c.set(d,b(a,d))});return c}f["default"]=a}),66);
__d("GroupsMallUserViewedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1835973");c=b("FalcoLoggerInternal").create("groups_mall_user_viewed",a);e.exports=c}),null);
__d("CometEventPermalinkTab",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({ABOUT:"about",DISCUSSION:"discussion",BRACKETS:"brackets",PARTICIPANTS:"participants",STANDINGS:"standings",VIDEOS:"videos",PAID_ACCESS:"paid_access"});c=a;f["default"]=c}),66);
__d("XCometEventPermalinkControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/events/{event_id}/{?child_event_id}/",Object.freeze({active_tab:"about",hide_invite_flow_filter_groups:!1}),void 0);b=a;g["default"]=b}),98);
__d("GroupsCometNewMemberGreetingDialogRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5674093209376826"}),null);
__d("mapMapToArray",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c=[],d=0;for(var e of a){var f=e[0],g=e[1];c.push(b(g,f,d,a));d++}return c}f["default"]=a}),66);