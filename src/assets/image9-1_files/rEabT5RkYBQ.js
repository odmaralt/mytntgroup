;/*FB_PKG_DELIM*/

__d("ProfileCometCoverPhotoUpdateMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8247793861913071"}),null);
__d("ProfileCometCoverPhotoUpdateMutation.graphql",["ProfileCometCoverPhotoUpdateMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"contextualProfileContext"},c={defaultValue:null,kind:"LocalArgument",name:"input"},d={defaultValue:null,kind:"LocalArgument",name:"scale"},e=[{kind:"Variable",name:"data",variableName:"input"}],f=[{kind:"Variable",name:"contextualProfileContext",variableName:"contextualProfileContext"}],g={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},h={alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"focus",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}],storageKey:null},i={kind:"Literal",name:"width",value:500},j={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},m=[j,k,l],n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},o=[{kind:"Variable",name:"contextual_profile_context",variableName:"contextualProfileContext"}],p={kind:"Variable",name:"scale",variableName:"scale"},q={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:[a,c,d],kind:"Fragment",metadata:null,name:"ProfileCometCoverPhotoUpdateMutation",selections:[{alias:null,args:e,concreteType:"UserUpdateCoverPhotoResponsePayload",kind:"LinkedField",name:"user_update_cover_photo",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometCoverPhoto_user"},{args:null,kind:"FragmentSpread",name:"ProfileCometSOAPOnboardingAddCoverPhotoSection_coverPhoto"},{args:f,kind:"FragmentSpread",name:"ProfileCometCoverPhoto_renderedProfile"},{args:f,kind:"FragmentSpread",name:"ProfileCometSingleEditCoverPhoto_user"}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometSettingsDropdownListHeader_viewer"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,d,a],kind:"Operation",name:"ProfileCometCoverPhotoUpdateMutation",selections:[{alias:null,args:e,concreteType:"UserUpdateCoverPhotoResponsePayload",kind:"LinkedField",name:"user_update_cover_photo",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[g,{alias:null,args:null,kind:"ScalarField",name:"gender",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_friend",storageKey:null},{kind:"InlineFragment",selections:[{alias:"basic_cover_photo",args:null,concreteType:"FocusedPhoto",kind:"LinkedField",name:"cover_photo",plural:!1,selections:[h,{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"photo",plural:!1,selections:[{alias:"image500",args:[{kind:"Literal",name:"scale",value:1},i],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:m,storageKey:"image(scale:1,width:500)"},n],storageKey:null}],storageKey:null},{alias:null,args:o,concreteType:"FocusedPhoto",kind:"LinkedField",name:"cover_photo",plural:!1,selections:[h,{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"photo",plural:!1,selections:[n,{alias:null,args:[p],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:m,storageKey:null},{alias:"viewer_image",args:[{kind:"Literal",name:"context",value:"comet_media_viewer"},{kind:"Literal",name:"height",value:1e6},p,{kind:"Literal",name:"width",value:1e6}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[l,k],storageKey:null},{alias:null,args:[{kind:"Literal",name:"supported",value:["XFBCometImmersive360PhotoRenderer"]}],concreteType:null,kind:"LinkedField",name:"comet_photo_renderer",plural:!1,selections:[q,{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometCoverPhoto_renderedProfile_photo_renderer",fragmentName:"CometRemote360PhotoViewerRenderer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBCometImmersive360PhotoRenderer",abstractKey:null}],storageKey:'comet_photo_renderer(supported:["XFBCometImmersive360PhotoRenderer"])'},{alias:"blurred_image",args:[{kind:"Literal",name:"blur",value:50},{kind:"Literal",name:"width",value:320}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:m,storageKey:"image(blur:50,width:320)"},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}],storageKey:null},{alias:"single_edit_cover_photo",args:o,concreteType:"FocusedPhoto",kind:"LinkedField",name:"cover_photo",plural:!1,selections:[h,{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"photo",plural:!1,selections:[{alias:"single_edit_image",args:[p,i],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:m,storageKey:null},n],storageKey:null}],storageKey:null}],type:"RenderedProfile",abstractKey:"__isRenderedProfile"},n],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[q,g,{alias:"settings_dropdown_profile_picture",args:[{kind:"Literal",name:"height",value:60},p,{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[j],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"profile_type_name_for_content",storageKey:null},{alias:"profileSwitcherEligibleProfiles",args:null,concreteType:"UserProfileSwitcherEligibleProfilesConnection",kind:"LinkedField",name:"profile_switcher_eligible_profiles",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null}],type:"User",abstractKey:null},n],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:b("ProfileCometCoverPhotoUpdateMutation_facebookRelayOperation"),metadata:{},name:"ProfileCometCoverPhotoUpdateMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometEntityHeaderCoverActionBar.react",["fbt","CometTheme.react","FocusRegion.react","TetraButtonGroup.react","focusScopeQueries","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j={description:{display:"x78zum5",flexGrow:"x1iyjqo2",$$css:!0},root:{display:"x78zum5",paddingBottom:"xsag5q8",paddingEnd:"x1pi30zi",paddingStart:"x1swvt13",paddingTop:"xz9dl7a",$$css:!0}};function a(a){var b=a.cancelLabel,e=a.confirmLabel,f=a.description,g=a.disabled;g=g===void 0?!1:g;var k=a.onCancel,l=a.onConfirm;a=a.shouldAutoFocus;a=a===void 0?!1:a;return i.jsx(c("CometTheme.react"),{theme:"dark",xstyle:j.root,children:i.jsxs(d("FocusRegion.react").FocusRegion,{autoFocusQuery:a?d("focusScopeQueries").tabbableScopeQuery:null,children:[i.jsx("div",{className:"x78zum5 x1iyjqo2",children:f}),i.jsx(c("TetraButtonGroup.react"),{direction:"backward",paddingHorizontal:0,paddingTop:0,primary:{disabled:g,label:(a=e)!=null?a:h._("__JHASH__Yske7OqlYXF__JHASH__"),onPress:l,padding:"wide",testid:"CometEntityHeaderCoverActionBarConfirmButton",type:"primary"},secondary:{disabled:g,label:(f=b)!=null?f:h._("__JHASH__ko1T7DvDF-J__JHASH__"),onPress:k,testid:"CometEntityHeaderCoverActionBarCancelButton"}})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometScrollTo.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");c=d("react");var i=c.useEffect,j=c.useRef;function b(b){var c=b.children,d=b.enabled,e=b.offset,f=e===void 0?0:e,g=b.scrollKey,k=j(null),l=j(null);i(function(){var b=l.current;l.current=g;if(g!=null&&g===b)return;if(d&&k.current!=null){var c=k.current.offsetTop,e=a.requestAnimationFrame(function(){return a.scrollTo(a.pageXOffset,c+f)});return function(){a.cancelAnimationFrame(e)}}},[d,g,f]);return h.jsx("div",{ref:k,children:c})}b.displayName=b.name+" [from "+f.id+"]";g["default"]=b}),98);
__d("PageAdminCompletionMeterActionType",[],(function(a,b,c,d,e,f){a=Object.freeze({ADD_COVER_PHOTO:"add_cover_photo",ADD_DESCRIPTION:"add_description",ADD_DETAILS_ABOUT_YOURSELF:"add_details_about_yourself",ADD_HOURS:"add_hours",ADD_LOCATION:"add_location",ADD_MENU_TAB:"add_menu_tab",ADD_MESSAGING_PREFERENCE:"add_messaging_preference",ADD_MESSENGER_CTA:"add_messenger_cta",ADD_PAGE_BUTTON:"add_page_button",ADD_PHONE_NUMBER:"add_phone_number",ADD_PROFILE_PICTURE:"add_profile_picture",ADD_SERVICE:"add_service",ADD_WEBSITE:"add_website",ADD_WIFI:"add_wifi",BUSINESS_CLEAN_ASSET:"business_clean_asset",CHOOSE_CATEGORY:"choose_category",CONFIRM_BUSINESS_ACCOUNT:"confirm_business_account",CONNECT_INSTAGRAM:"connect_instagram",CREATE_AD:"create_ad",CREATE_AUTOMATED_ADS:"create_automated_ads",CREATE_FACEBOOK_SHOP:"create_facebook_shop",CREATE_PAGE_NAME:"create_page_name",CREATE_POST:"create_post",CREATE_STORY:"create_story",CREATE_VIDEO_POST:"create_video_post",CREATE_WELCOME_POST:"create_welcome_post",ENABLE_AD_RECOMMENDATIONS:"enable_ad_recommendations",ENABLE_AUTOMATED_REPLIES:"enable_automated_replies",FIX_MISSING_USERS:"fix_missing_users",INVITE_FRIENDS_TO_LIKE:"invite_friends_to_like",POST_JOB:"post_job",SAVE_MENU_QR:"save_menu_qr",SCHEDULING_POST:"scheduling_post"});f["default"]=a}),66);
__d("PageAdminCompletionMeterStatus",[],(function(a,b,c,d,e,f){a=Object.freeze({COMPLETED:"completed",INCOMPLETE:"incomplete",NOT_APPLICABLE:"not_applicable",SAVED_FOR_LATER:"saved_for_later",SKIPPED:"skipped"});f["default"]=a}),66);
__d("PagesCometAdminCompletionMeterUtils",["PageAdminCompletionMeterActionType","PageAdminCompletionMeterStatus","firstKeyWithValue","getJSEnumSafe","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=(f={},f.incomplete=1,f.saved_for_later=2,f.completed=3,f.not_applicable=4,f.skipped=5,f);function i(a,b){return a+"-"+b}function j(a,b,d){a=a.get(b);if(a==null)return;a.setValue(c("firstKeyWithValue")(c("PageAdminCompletionMeterStatus"),d),"status")}function a(a){return a!=="incomplete"&&a!=="saved_for_later"}function k(a,b){var c=b.actionType,d=b.newStatus;b=b.pageID;b=i(b,c);j(a,b,d)}function b(a,b){var c=b.actionType,d=b.isComplete;b=b.pageID;d=d?"completed":"incomplete";k(a,{actionType:c,newStatus:d,pageID:b})}function d(a,b,d,e){b=a!=null?b.get(a):null;if(b==null||a==null)throw c("unrecoverableViolation")("Item must have a status and action type","page_admin_completion_meter");var f=function(){return e(a)};return{key:a,pageID:d,setSavedForLater:f,status:b}}function e(a,b){a=c("getJSEnumSafe")(c("PageAdminCompletionMeterActionType"),a);b=a!=null?b.get(a):null;return b!=null?h[b]:0}g.getPCMItemID=i;g.localItemStatusUpdater=j;g.isCompletedStatus=a;g.updateStatusForItemType=k;g.updateStatusToCompleteOrIncomplete=b;g.getCommonsProps=d;g.getItemStatusOrder=e}),98);
__d("ProfileCometCoverPhotoEditStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";b=h._("__JHASH__9qLsKpPLXmB__JHASH__");c=h._("__JHASH__sX7c9Q3pReC__JHASH__");d=h._("__JHASH__cSPYwFlWsyH__JHASH__");e=h._("__JHASH__3-2U57XKHo9__JHASH__");f=h._("__JHASH__UUS2YD7AFh0__JHASH__");var i=h._("__JHASH__X1FYhpPEzu7__JHASH__"),j=h._("__JHASH__lWQAs64nTBE__JHASH__"),k=h._("__JHASH__LxrZtjg1J_i__JHASH__"),l=h._("__JHASH__sX7c9Q3pReC__JHASH__"),m=h._("__JHASH__QN9kB9vi5kM__JHASH__"),n=h._("__JHASH__zoatLqkxShl__JHASH__"),o=h._("__JHASH__Rii2dFpPKOP__JHASH__"),p=h._("__JHASH__jA0Q284c9y9__JHASH__"),q=h._("__JHASH__iwnSu7v6JaV__JHASH__"),r=h._("__JHASH__qRNzDp16teg__JHASH__"),s=h._("__JHASH__hY9QuWB2tha__JHASH__"),t=h._("__JHASH__wItb90QkS9d__JHASH__"),u=h._("__JHASH__mXnpZv4ve2j__JHASH__"),v=h._("__JHASH__b3K0hkLBwZg__JHASH__"),w=h._("__JHASH__q9F2i0e5WmB__JHASH__"),x=h._("__JHASH__7FoAaY6xRGz__JHASH__"),y=h._("__JHASH__7TH3VJTxvKq__JHASH__"),z=h._("__JHASH__V5_fDeth8Fg__JHASH__"),A=h._("__JHASH__AYcMnzZa7Ov__JHASH__"),B=h._("__JHASH__Ms48oHWMPrY__JHASH__");function a(a){return h._("__JHASH__vkCuSDEqQ9H__JHASH__",[h._plural(a,"number")])}g.ALBUMS=b;g.CANCEL=c;g.DIALOG_TITLE=d;g.PHOTO_ALBUMS=e;g.PRIVACY_DISCLAIMER=f;g.RECENT_PHOTOS=i;g.REMOVE=j;g.REMOVE_DIALOG_BODY=k;g.REMOVE_DIALOG_CANCEL=l;g.REMOVE_DIALOG_CONFIRM=m;g.REMOVE_DIALOG_TITLE=n;g.REPOSITION=o;g.REPOSITION_SAVE=p;g.SAVE=q;g.SAVE_FAILED=r;g.SAVE_FAILED_DEFAULT=s;g.SELECT_PHOTO=t;g.SELECT_ILLUSTRATION_0=u;g.SELECT_ILLUSTRATION_1=v;g.SELECT_ILLUSTRATION_2=w;g.SELECT_ILLUSTRATION_3=x;g.SELECT_ILLUSTRATION_4=y;g.SELECT_PHOTO_OR_VIDEO=z;g.SELECT_VIDEO=A;g.UPLOAD_PHOTO=B;g.getItemCount=a}),98);
__d("ProfileCometCoverPhotoUpdateMutation",["CometRelay","PagesCometAdminCompletionMeterUtils","ProfileCometCoverPhotoUpdateMutation.graphql","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("ProfileCometCoverPhotoUpdateMutation.graphql");function a(a,b,c){var e=b.contextualProfileContext,f=b.focusX,g=b.focusY,h=b.navigationChain,j=b.photoID,k=b.profileID;d("CometRelay").commitMutation(a,babelHelpers["extends"]({mutation:i,updater:function(a){d("PagesCometAdminCompletionMeterUtils").updateStatusToCompleteOrIncomplete(a,{actionType:"add_cover_photo",isComplete:!0,pageID:k})},variables:{contextualProfileContext:e,input:{attribution_id_v2:h,contextual_profile_context:e,cover_photo_id:j,focus:{x:f,y:g},target_user_id:k},scale:d("WebPixelRatio").get()}},c))}g.updateCoverPhoto=a}),98);
__d("ProfileCometCoverPhotoRepositioner.react",["ix","CometEntityHeaderCoverActionBar.react","CometEntityHeaderCoverMedia.react","CometRelay","ProfileCometContext","ProfileCometCoverPhotoEditContext","ProfileCometCoverPhotoEditStrings","ProfileCometCoverPhotoUpdateMutation","TetraIcon.react","TetraText.react","fbicon","react","useMinifiedProductAttribution","useProfileCometErrorDialog_DEPRECATED"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useContext,l=b.useRef,m=b.useState;function a(){var a,b=d("CometRelay").useRelayEnvironment(),e=k(c("ProfileCometCoverPhotoEditContext")),f=e.dispatch;e=e.state;var g=e.coverPhoto;e=k(c("ProfileCometContext"));var n=e.profileID;e=c("useProfileCometErrorDialog_DEPRECATED")(d("ProfileCometCoverPhotoEditStrings").SAVE_FAILED);var o=e[0];e=m(!1);var p=e[0],q=e[1];e=m({x:(e=g==null?void 0:g.focusX)!=null?e:.5,y:(e=g==null?void 0:g.focusY)!=null?e:.5});var r=e[0],s=e[1],t=l({x:(e=g==null?void 0:g.focusX)!=null?e:.5,y:(e=g==null?void 0:g.focusY)!=null?e:.5});e=j(function(a,b){t.current.x=a,t.current.y=b},[]);var u=c("useMinifiedProductAttribution")(),v=j(function(){f({type:"REPOSITION_CANCEL"})},[f]),w=j(function(){var a;s(babelHelpers["extends"]({},t.current));q(!0);d("ProfileCometCoverPhotoUpdateMutation").updateCoverPhoto(b,{focusX:t.current.x,focusY:t.current.y,navigationChain:u,photoID:(a=g==null?void 0:g.id)!=null?a:"",profileID:n},{onCompleted:function(){f({type:"REPOSITION_CANCEL"})},onError:function(a){a.message.includes("1341010")||o(a),f({type:"REPOSITION_CANCEL"})}})},[g==null?void 0:g.id,f,b,u,n,o]);return i.jsx(c("CometEntityHeaderCoverMedia.react"),{backgroundMedia:{focusX:r.x,focusY:r.y,height:(a=g==null?void 0:g.height)!=null?a:0,uri:(a=g==null?void 0:g.blurredURI)!=null?a:"",width:(a=g==null?void 0:g.width)!=null?a:0},coverActionBar:i.jsx(c("CometEntityHeaderCoverActionBar.react"),{confirmLabel:d("ProfileCometCoverPhotoEditStrings").REPOSITION_SAVE,description:i.jsxs("div",{className:"x6s0dn4 x78zum5",children:[i.jsx("div",{className:"x78zum5 xq8finb",children:i.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(h("560120"),20)})}),i.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"headline4",children:d("ProfileCometCoverPhotoEditStrings").PRIVACY_DISCLAIMER})]}),disabled:p,onCancel:v,onConfirm:w,shouldAutoFocus:!0}),coverMedia:{focusX:r.x,focusY:r.y,height:(a=g==null?void 0:g.height)!=null?a:0,mediaSource:(v=g==null?void 0:g.uri)!=null?v:"",width:(w=g==null?void 0:g.width)!=null?w:0},isDraggable:!p,onDrag:e,roundCorners:"bottom"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfilishCometCoverPhotoLoadingOverlay.react",["CometProgressIndicator.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={loadingOverlay:{backgroundColor:"x2bj2ny",display:"x78zum5",justifyContent:"xl56j7k",opacity:"x1us6l5c",position:"x10l6tqk",width:"xn9wirt",$$css:!0},loadingSpinner:{position:"x10l6tqk",top:"x156by65",$$css:!0},loadingSpinnerPages:{end:"xeukjqw",position:"x10l6tqk",top:"xwa60dl",$$css:!0}};function a(a){var b=a.height,d=a.profilePhotoPosition;d=d===void 0?"center":d;a=a.xstyle;return h.jsx("div",{className:c("stylex")(i.loadingOverlay,a),style:{height:b},children:d==="start"?h.jsx("div",{className:"xeukjqw x10l6tqk xwa60dl",children:h.jsx(c("CometProgressIndicator.react"),{})}):h.jsx("div",{className:"x10l6tqk x156by65",children:h.jsx(c("CometProgressIndicator.react"),{})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometCoverPhotoMediaPickerDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5867272456626133"}),null);
__d("FxGrowthIdentitySyncingFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1790");c=b("FalcoLoggerInternal").create("fx_growth_identity_syncing",a);e.exports=c}),null);