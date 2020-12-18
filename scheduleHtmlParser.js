function scheduleHtmlParser(html) {
    let timesss =[
        {
            "section" : 1,
            "startTime" : "08:00",
            "endTime" : "08:45",
        },
        {
            "section" : 2,
            "startTime" : "08:50",
            "endTime" : "09:35",
        },
        {
            "section" : 3,
            "startTime" : "09:50",
            "endTime" : "10:35",
        },
        {
            "section" : 4,
            "startTime" : "10:40",
            "endTime" : "11:25",
        },
        {
            "section" : 5,
            "startTime" : "11:30",
            "endTime" : "12:15",
        },
        {
            "section" : 6,
            "startTime" : "13:30",
            "endTime" : "14:15",
        },
        {
            "section" : 7,
            "startTime" : "14:20",
            "endTime" : "15:05",
        },
        {
            "section" : 8,
            "startTime" : "15:20",
            "endTime" : "16:05",
        },
        {
            "section" : 9,
            "startTime" : "16:10",
            "endTime" : "16:55",
        },
        {
            "section" : 10,
            "startTime" : "18:30",
            "endTime" : "19:15",
        },
        {
            "section" : 11,
            "startTime" : "19:20",
            "endTime" : "20:05",
        },
        {
            "section" : 12,
            "startTime" : "20:10",
            "endTime" : "20:55",
        },
        {
            "section" : 13,
            "startTime" : "21:00",
            "endTime" : "21:45",
        }

    ]
    console.info(html)
    let result = [];
    //上课时间
    const regexT = /<td data-role="item" data-week="(.*?)" data-begin-unit="(.*?)" data-end-unit="(.*?)" rowspan="(.*?)">(.*?)<\/td>/gm;
    let timeFlag = 0;
    console.info(timesss)
    let mmm = { courseInfos: []}

    while ((t = regexT.exec(html)) !== null) {
        const kcmc = /<div class="mtt_item_kcmc" style="text-align:center">(.*?)<\/div>/gm;
        const name = /<div class="mtt_item_jxbmc">(.*?)<\/div>/gm;
        const time = /<div class="mtt_item_room">(.*?)<\/div>/gm;
        while (((mcs = kcmc.exec(t[5]))!==null) && ((names = name.exec(t[5]))!==null) && ((times = time.exec(t[5]))!==null)){
            let re = {sections: [], weeks: []}
            re.day = Number.parseInt(t[1])
            re.name = mcs[1]
            re.teacher = names[1]
            let a = times[1].split(",")
            let q = a[0].split(/-|周/)
            re.position = a[2]
            if (q[1]===""){
                re.weeks.push(Number.parseInt(q[0]))

            }else{
                for(let i=Number.parseInt(q[0]);i<=Number.parseInt(q[1]);i++){
                    console.info(re.name,q[0],q[1])
                    re.weeks.push(Number.parseInt(i))
                }
            }
            
            console.info(re.name,q,re.weeks)

            const s = /第(.*?)节/;

            let r = a[1].split("-")
            let o = s.exec(r[0])
            let p = s.exec(r[1])
            if (p[1]!==""){
                for(let i=Number.parseInt(o[1]);i<=Number.parseInt(p[1]);i++){
                    re.sections.push(timesss[i-1])
                }
            }else if(p[1]===""){
                    re.sections.push(timesss[o[1]-1])
            }

            result.push(re)

        }

    }

    console.info(result)

    return {courseInfos: result}
}