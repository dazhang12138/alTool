import {HighLighter} from "../HighLighterCode";
import React from "react";


export const columns = [
    {
        title: '语言',
        dataIndex: 'language',
    },
    {
        title: '代码',
        dataIndex: 'code',
        render: (text:any,record: any) => {
            return(
                <HighLighter lang={record.lcode}>{text}</HighLighter>
            );
        }
    },
];

export const data = [
    {
        language:'Swift',
        code:'NSDate().timeIntervalSince1970',
        lcode:'swift'
    }, {
        language:'Go',
        code:`import ("time") 
int64(time.Now().Unix())`,
        lcode:'go'
    }, {
        language:'Java',
        code:[`// pure java
System.currentTimeMillis() / 1000`,`// joda java
DateTime.now().getMillis() / 1000`],
        lcode:'java'
    },{
        language:'JavaScript',
        code:`Math.round(new Date() / 1000)`,
        lcode:'javascript'
    },{
        language:'Objective-C',
        code:`[[NSDate date] timeIntervalSince1970]`,
        lcode:'objectivec'
    },{
        language:'MySQL',
        code:`SELECT unix_timestamp(now())`,
        lcode:'sql'
    },{
        language:'SQLite',
        code:`SELECT strftime('%s', 'now')`,
        lcode:'sql'
    },{
        language:'Erlang',
        code:`calendar:datetime_to_gregorian_seconds(calendar:universal_time())-719528*24*3600.`,
        lcode:'erlang'
    },{
        language:'PHP',
        code:[`<?php
// pure php
time();`,`<?php
// carbon php
use Carbon\\Carbon;
Carbon::now()->timestamp;`],
        lcode:'php'
    },{
        language:'Python',
        code:[`import time
time.time()`,`import arrow
arrow.utcnow().timestamp`],
        lcode:'python'
    },{
        language:'Ruby',
        code:`Time.now.to_i`,
        lcode:'ruby'
    },{
        language:'Shell',
        code:`date +%s`,
        lcode:'powershell'
    },{
        language:'Groovy',
        code:`(new Date().time / 1000).longValue()`,
        lcode:'groovy'
    },{
        language:'Lua',
        code:`os.time()`,
        lcode:'lua'
    },{
        language:'.NET/C#',
        code:`(DateTime.Now.ToUniversalTime().Ticks - 621355968000000000) / 10000000`,
        lcode:'c'
    },{
        language:'Dart',
        code:`(new DateTime.now().millisecondsSinceEpoch / 1000).truncate()`,
        lcode:'dart'
    }
]