;/*FB_PKG_DELIM*/

__d("LSUpdateTypingIndicator",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.seq([function(c){return a[2]?b.seq([function(c){return b.db.table(52).put({threadKey:a[0],senderId:a[1],expirationTimestampMs:b.i64.add(b.i64.of_float(Date.now()),[0,5e3])})},function(a){return 0}]):b.resolve()},function(c){return a[2]?b.resolve():b.seq([function(c){return b.fe(b.ftr(b.db.table(52).fetch([[[a[0],a[1]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&b.i64.eq([0,0],[0,0])&&b.i64.eq(c.senderId,a[1])}),function(a){return a["delete"]()})},function(a){return 0}])}])},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("DeactivatePasswordReauthRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5360998290662328"}),null);