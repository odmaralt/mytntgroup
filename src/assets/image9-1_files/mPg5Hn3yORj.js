;/*FB_PKG_DELIM*/

__d("LSGroupRoomTruncate",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d;return b.seq([function(a){return b.fe(b.ftr(b.db.table(63).fetch(),function(a){return b.i64.neq(a.groupRoomType,d)&&b.i64.neq(a.groupRoomType,[0,5])}),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSRoomTruncate",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d;return b.seq([function(a){return b.fe(b.ftr(b.db.table(63).fetch(),function(a){return b.i64.eq(a.groupRoomType,d)||b.i64.eq(a.groupRoomType,[0,5])}),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSRoomUpsert",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.ftr(b.db.table(63).fetch([[[a[1]]],"optimistic"]),function(c){return c.optimisticClientToken===a[1]&&b.i64.gt(c.authorityLevel,[0,80])}).next().then(function(c){var d=c.done;c.value;return d?b.db.table(63).put({roomId:a[0],optimisticClientToken:a[1],ownerId:a[2],url:a[3],name:a[4],emoji:a[5],callstartTimestampMs:a[6],expirationTimestampMs:a[7],lockStatus:a[11],audienceType:a[8],inviteeType:a[9],capacity:a[12],authorityLevel:[0,80],activeParticipantCount:a[13],chatMode:[0,2],chatForRoomThreadId:a[14],creationTime:a[15],groupRoomType:a[16],groupId:a[17],color:a[18],roomImageUrl:a[19],notificationMutedUntilMs:a[20]}):0})},function(a){return b.resolve(c)}])}e.exports=a}),null);