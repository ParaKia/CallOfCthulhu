var Prefdata = [];
$(function () {
    var columns = [
        {
            field: "Id",
            title: "序号",
            width: 50,
            align: "center",
        },
        {
            field: "Proffession",
            title: "职业",
            width: 200,
            align: "center",
        },
        {
            field: "Credit",
            title: "信用评级",
            align: "center",
        },
        {
            field: "Stats",
            title: "属性",
            width: 200,
            align: "center",
        },
        {
            field: "Skill",
            title: "本职技能",
            align: "center",
        },
        {
            title: "操作",
            align: "center",
            width: 65,
            events: "operateEvents",
            formatter: function (value,row,index) {
                return [
                    '<button id="Chooseit" class="btn btn-primary" style="width:65px;cursor:pointer">选择</button>'
                ]
            }
        }
    ];

    $.ajax({
        url: "/Create/PrefJson",
        dataType: "json",
        success: function (data) {
            // 处理文件内容
            Prefdata.push(data);
            $("#Prefs").bootstrapTable({
                columns: columns,
                data: Prefdata[0],
                height: 600,
                search: true,
                searchAlign: "right", // 将搜索框靠右对齐
            });
        },
        error: function (xhr, status, error) {
            // 处理错误
            console.error(error);
        },
    });

    var rowsSkill = [
        { SkillName: "会计", Inception: "5", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "人类学", Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "估价", Inception: "5", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "考古学", Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        {
            SkillName: "技艺①" + '<select class="form-select Art" selectedIndex="-1">' +
                '<option value="option1"></option>' +
                '<option value="option1">美术</option>' +
                '<option value="option2">摄影</option>' +
                '<option value="option3">伪造</option>' +
                '<option value="option3">写作</option>' +
                '<option value="option3">书法</option>' +
                '<option value="option3">乐理</option>' +
                '<option value="option3">厨艺</option>' +
                '<option value="option3">理发</option>' +
                '<option value="option3">建筑</option>' +
                '<option value="option3">舞蹈</option>' +
                '<option value="option3">酿酒</option>' +
                '<option value="option3">捕鱼</option>' +
                '<option value="option3">歌唱</option>' +
                '<option value="option3">制陶</option>' +
                '<option value="option3">雕塑</option>' +
                '<option value="option3">杂技</option>' +
                '<option value="option3">风水</option>' +
                '<option value="option3">技术制图</option>' +
                '<option value="option3">耕作</option>' +
                '<option value="option3">打字</option>' +
                '<option value="option3">速记</option>' +
                '<option value="option3">木匠</option>' +
                '<option value="option3">莫里斯舞蹈</option>' +
                '<option value="option3">歌剧歌唱</option>' +
                '<option value="option3">粉刷匠与油漆工</option>' +
                '<option value="option3">吹真空管</option>' +
                '</select>'
            , Inception: "5", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: ""
        },
        {
            SkillName: "技艺②" + '<select class="form-select Art" selectedIndex="-1">' +
                '<option value="option1"></option>' +
                '<option value="option1">美术</option>' +
                '<option value="option2">摄影</option>' +
                '<option value="option3">伪造</option>' +
                '<option value="option3">写作</option>' +
                '<option value="option3">书法</option>' +
                '<option value="option3">乐理</option>' +
                '<option value="option3">厨艺</option>' +
                '<option value="option3">理发</option>' +
                '<option value="option3">建筑</option>' +
                '<option value="option3">舞蹈</option>' +
                '<option value="option3">酿酒</option>' +
                '<option value="option3">捕鱼</option>' +
                '<option value="option3">歌唱</option>' +
                '<option value="option3">制陶</option>' +
                '<option value="option3">雕塑</option>' +
                '<option value="option3">杂技</option>' +
                '<option value="option3">风水</option>' +
                '<option value="option3">技术制图</option>' +
                '<option value="option3">耕作</option>' +
                '<option value="option3">打字</option>' +
                '<option value="option3">速记</option>' +
                '<option value="option3">木匠</option>' +
                '<option value="option3">莫里斯舞蹈</option>' +
                '<option value="option3">歌剧歌唱</option>' +
                '<option value="option3">粉刷匠与油漆工</option>' +
                '<option value="option3">吹真空管</option>' +
                '</select>'
            , Inception: "5", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: ""
        },
        {
            SkillName: "技艺③" + '<select class="form-select Art" selectedIndex="-1">' +
                '<option value="option1"></option>' +
                '<option value="option1">美术</option>' +
                '<option value="option2">摄影</option>' +
                '<option value="option3">伪造</option>' +
                '<option value="option3">写作</option>' +
                '<option value="option3">书法</option>' +
                '<option value="option3">乐理</option>' +
                '<option value="option3">厨艺</option>' +
                '<option value="option3">理发</option>' +
                '<option value="option3">建筑</option>' +
                '<option value="option3">舞蹈</option>' +
                '<option value="option3">酿酒</option>' +
                '<option value="option3">捕鱼</option>' +
                '<option value="option3">歌唱</option>' +
                '<option value="option3">制陶</option>' +
                '<option value="option3">雕塑</option>' +
                '<option value="option3">杂技</option>' +
                '<option value="option3">风水</option>' +
                '<option value="option3">技术制图</option>' +
                '<option value="option3">耕作</option>' +
                '<option value="option3">打字</option>' +
                '<option value="option3">速记</option>' +
                '<option value="option3">木匠</option>' +
                '<option value="option3">莫里斯舞蹈</option>' +
                '<option value="option3">歌剧歌唱</option>' +
                '<option value="option3">粉刷匠与油漆工</option>' +
                '<option value="option3">吹真空管</option>' +
                '</select>'
            , Inception: "5", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: ""
        },
        { SkillName: "取悦", Inception: "15", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "攀爬", Inception: "20", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "计算机使用Ω", Inception: "5", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "信用评级", Inception: "0", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "克苏鲁神话", Inception: "0", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "乔装", Inception: "5", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "闪避", Inception: "0", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "汽车驾驶", Inception: "20", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "电气维修", Inception: "10", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "电子学Ω", Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "话术", Inception: "5", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "格斗：斗殴", Inception: "25", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        {
            SkillName: "格斗①" + '<select class="form-select Fight" selectedIndex="-1">' +
                '<option value="option1"></option>' +
                '<option value="option1">鞭子</option>' +
                '<option value="option2">电锯</option>' +
                '<option value="option3">链枷</option>' +
                '<option value="option3">绞具</option>' +
                '<option value="option3">斧</option>' +
                '<option value="option3">剑</option>' +
                '<option value="option3">矛</option>' +
                '</select>'
            , Inception: "20", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: ""
        },
        {
            SkillName: "格斗②" + '<select class="form-select Fight" selectedIndex="-1">' +
                '<option value="option1"></option>' +
                '<option value="option1">鞭子</option>' +
                '<option value="option2">电锯</option>' +
                '<option value="option3">链枷</option>' +
                '<option value="option3">绞具</option>' +
                '<option value="option3">斧</option>' +
                '<option value="option3">剑</option>' +
                '<option value="option3">矛</option>' +
                '</select>'
            , Inception: "0", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: ""
        },
        {
            SkillName: "格斗③" + '<select class="form-select Fight" selectedIndex="-1">' +
                '<option value="option1"></option>' +
                '<option value="option1">鞭子</option>' +
                '<option value="option2">电锯</option>' +
                '<option value="option3">链枷</option>' +
                '<option value="option3">绞具</option>' +
                '<option value="option3">斧</option>' +
                '<option value="option3">剑</option>' +
                '<option value="option3">矛</option>' +
                '</select>'
            , Inception: "0", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: ""
        },
        { SkillName: "射击：手枪", Inception: "20", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        {
            SkillName: "射击①" + '<select class="form-select Shoot" selectedIndex="-1">' +
                '<option value="option1"></option>' +
                '<option value="option1">步枪/霰弹枪</option>' +
                '<option value="option2">冲锋枪</option>' +
                '<option value="option3">弓术</option>' +
                '<option value="option3">喷射器</option>' +
                '<option value="option3">机枪</option>' +
                '<option value="option3">重武器</option>' +
                '</select>'
            , Inception: "0", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: ""
        },
        {
            SkillName: "射击②" + '<select class="form-select Shoot" selectedIndex="-1">' +
                '<option value="option1"></option>' +
                '<option value="option1">步枪/霰弹枪</option>' +
                '<option value="option2">冲锋枪</option>' +
                '<option value="option3">弓术</option>' +
                '<option value="option3">喷射器</option>' +
                '<option value="option3">机枪</option>' +
                '<option value="option3">重武器</option>' +
                '</select>'
            , Inception: "0", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: ""
        },
        {
            SkillName: "射击③" + '<select class="form-select Shoot" selectedIndex="-1">' +
                '<option value="option1"></option>' +
                '<option value="option1">步枪/霰弹枪</option>' +
                '<option value="option2">冲锋枪</option>' +
                '<option value="option3">弓术</option>' +
                '<option value="option3">喷射器</option>' +
                '<option value="option3">机枪</option>' +
                '<option value="option3">重武器</option>' +
                '</select>'
            , Inception: "0", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: ""
        },
        { SkillName: "急救", Inception: "30", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "历史", Inception: "5", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "恐吓", Inception: "15", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "跳跃", Inception: "20", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        {
            SkillName: "外语①" + '<input type="text" class="form-control Language"/>'
            , Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: ""
        },
        {
            SkillName: "外语②" + '<input type="text" class="form-control Language"/>'
            , Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: ""
        },
        {
            SkillName: "外语③" + '<input type="text" class="form-control Language"/>'
            , Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: ""
        },
        { SkillName: "母语", Inception: "0", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
    ];

    var rowsSkill2 = [
        { SkillName: "法律", Inception: "5", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "图书馆使用", Inception: "20", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "聆听", Inception: "20", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "锁匠", Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "机械维修", Inception: "10", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "医学", Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "博物学", Inception: "10", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "导航", Inception: "10", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "神秘学", Inception: "5", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "操作重型机械", Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "说服", Inception: "10", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        {
            SkillName: "驾驶" + '<select class="form-select Shoot" selectedIndex="-1">' +
                '<option value="option1"></option>' +
                '<option value="option1">飞行器</option>' +
                '<option value="option2">船</option>' +
                '</select>'
            , Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: ""
        },
        { SkillName: "精神分析", Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "心理学", Inception: "10", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "骑术", Inception: "5", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        {
            SkillName: "科学①" + '<select class="form-select Tech" selectedIndex="-1">' +
                '<option value="option1"></option>' +
                '<option value="option1">地质学</option>' +
                '<option value="option2">化学</option>' +
                '<option value="option3">生物学</option>' +
                '<option value="option3">数学</option>' +
                '<option value="option3">天文学</option>' +
                '<option value="option3">物理学</option>' +
                '<option value="option3">药学</option>' +
                '<option value="option3">植物学</option>' +
                '<option value="option3">动物学</option>' +
                '<option value="option3">密码学</option>' +
                '<option value="option3">工程学</option>' +
                '<option value="option3">气象学</option>' +
                '<option value="option3">司法科学</option>' +
                '</select>'
            , Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: ""
        },
        {
            SkillName: "科学②" + '<select class="form-select Tech" selectedIndex="-1">' +
                '<option value="option1"></option>' +
                '<option value="option1">地质学</option>' +
                '<option value="option2">化学</option>' +
                '<option value="option3">生物学</option>' +
                '<option value="option3">数学</option>' +
                '<option value="option3">天文学</option>' +
                '<option value="option3">物理学</option>' +
                '<option value="option3">药学</option>' +
                '<option value="option3">植物学</option>' +
                '<option value="option3">动物学</option>' +
                '<option value="option3">密码学</option>' +
                '<option value="option3">工程学</option>' +
                '<option value="option3">气象学</option>' +
                '<option value="option3">司法科学</option>' +
                '</select>'
            , Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: ""
        },
        {
            SkillName: "科学③" + '<select class="form-select Tech" selectedIndex="-1">' +
                '<option value="option1"></option>' +
                '<option value="option1">地质学</option>' +
                '<option value="option2">化学</option>' +
                '<option value="option3">生物学</option>' +
                '<option value="option3">数学</option>' +
                '<option value="option3">天文学</option>' +
                '<option value="option3">物理学</option>' +
                '<option value="option3">药学</option>' +
                '<option value="option3">植物学</option>' +
                '<option value="option3">动物学</option>' +
                '<option value="option3">密码学</option>' +
                '<option value="option3">工程学</option>' +
                '<option value="option3">气象学</option>' +
                '<option value="option3">司法科学</option>' +
                '</select>'
            , Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: ""
        },
        { SkillName: "妙手", Inception: "10", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "侦查", Inception: "25", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "潜行", Inception: "20", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "生存:<input class='form-control' type='text' id='Survive'/>", Inception: "10", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "游泳", Inception: "20", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "投掷", Inception: "20", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "追踪", Inception: "10", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "驯兽", Inception: "5", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "潜水", Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "爆破", Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "读唇", Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "催眠", Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "炮术", Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "学识", Inception: "1", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
        { SkillName: "自定义", Inception: "", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
    ];

    window.operateEvents = {
        "click #Chooseit": function (e, value, row, index) {

            const Profession = row.Proffession;
            const ProId = row.Id;
            const Description = row.Skill;
            const Credit = row.Credit;
            const Status = row.Stats;
            parent.document.getElementById("pref").value = Profession;
            parent.document.getElementById("prefid").value = ProId;
            parent.document.getElementById("description").value = Description;
            parent.document.getElementById("credit").value = Credit;
            parent.document.getElementById("status").value = Status;
            parent.Sta = Status;
            // 更新表格数据和渲染表格
            var newDescription = Description;

/*-----------------------------------------表1操作-----------------------------------------*/
            for (var i = 0; i < rowsSkill.length; i++) {
                rowsSkill[i].Duty = "";
            }
            var skills = newDescription.split("，");

            //按逗号分隔出来的技能能直接匹配的视为本职⭐（表1）
            for (var u = 0; u < skills.length; u++) {
                //分割出来的本职技能
                var skillName = skills[u];
                //表1的所有技能rowsSkill
                for (var e = 0; e < rowsSkill.length; e++) {
                    if (rowsSkill[e].SkillName === skillName) {
                        rowsSkill[e].Duty = "⭐";
                        break;
                    }
                    if (skillName.includes("汽车驾驶（") && rowsSkill[e].SkillName == "汽车驾驶") {
                        rowsSkill[e].Duty = "⭐";
                        break;
                    }
                }

                //可选社交技能☯（表1）
                if (skillName.includes("项社交技能")) {
                    var inputString = skillName.split("能")[1];
                    // 去除括号和空格，保留逗号分隔的内容
                    const contentString = inputString.replace(/[（）\s]/g, '');

                    // 将逗号分隔的内容拆分成数组元素
                    const resultArray = contentString.split('、');
                    for (var w = 0; w < resultArray.length; w++) {
                        for (var j = 0; j < rowsSkill.length; j++) {
                            if (rowsSkill[j].SkillName === resultArray[w]) {
                                rowsSkill[j].Duty = "☯";
                                break;
                            }
                        }
                    }
                    
                }

                //xx或xx时使用☆
                if (skillName.includes("或") && !skillName.includes("或者") && !skillName.includes("汽车驾驶或驾驶")) {
                    var inputString = skillName.split("或");
                    for (var q = 0; q < inputString.length; q++) {
                        for (var v = 0; v < rowsSkill.length; v++) {
                            if (rowsSkill[v].SkillName === inputString[q]) {
                                rowsSkill[v].Duty = "☆";
                                break;
                            }
                        }
                    }
                }

                if (skillName.includes("或") && !skillName.includes("或者") && skillName.includes("汽车驾驶或驾驶")) {
                    for (var v = 0; v < rowsSkill.length; v++) {
                        if (rowsSkill[v].SkillName === "汽车驾驶") {
                            rowsSkill[v].Duty = "⭐";
                            break;
                        }
                    }
                }

                if (skillName.includes("或") && !skillName.includes("或者") && skillName.includes("外语或生存")) {
                    for (var v = 0; v < rowsSkill.length; v++) {
                        if (rowsSkill[v].SkillName.includes("外语")) {
                            rowsSkill[v].Duty = "⭐";
                            break;
                        }
                    }
                }

                if (skillName.includes("或") && !skillName.includes("或者") && skillName.includes("格斗（斗殴）或射击（手枪）")) {
                    for (var v = 0; v < rowsSkill.length; v++) {
                        if (rowsSkill[v].SkillName.includes("斗殴")) {
                            rowsSkill[v].Duty = "⭐";
                            break;
                        }
                    }
                    for (var v = 0; v < rowsSkill.length; v++) {
                        if (rowsSkill[v].SkillName.includes("手枪")) {
                            rowsSkill[v].Duty = "⭐";
                            break;
                        }
                    }
                }

                if (skillName.includes("或") && !skillName.includes("或者") && skillName.includes("格斗或射击")) {
                    for (var v = 0; v < rowsSkill.length; v++) {
                        if (rowsSkill[v].SkillName.includes("斗殴")) {
                            rowsSkill[v].Duty = "☆";
                            rowsSkill[v + 1].Duty = "☆";
                            rowsSkill[v + 2].Duty = "☆";
                            rowsSkill[v + 3].Duty = "☆";
                            break;
                        }
                    }
                    for (var v = 0; v < rowsSkill.length; v++) {
                        if (rowsSkill[v].SkillName.includes("射击")) {
                            rowsSkill[v].Duty = "☆";
                            rowsSkill[v + 1].Duty = "☆";
                            rowsSkill[v + 2].Duty = "☆";
                            rowsSkill[v + 3].Duty = "☆";
                            break;
                        }
                    }
                }

                if (skillName.includes("或") && !skillName.includes("或者") && skillName.includes("格斗（矛）或射击（弓术）")) {
                    for (var v = 0; v < rowsSkill.length; v++) {
                        if (rowsSkill[v].SkillName.includes("格斗")) {
                            rowsSkill[v + 1].Duty = "矛";
                            break;
                        }
                    }
                    for (var v = 0; v < rowsSkill.length; v++) {
                        if (rowsSkill[v].SkillName.includes("射击")) {
                            rowsSkill[v + 1].Duty = "弓术";
                            break;
                        }
                    }
                }

                //技艺()、格斗()、射击()、外语()时
                if (skillName.includes("格斗") && !skillName.includes("格斗（") && !skillName.includes("格斗或")) {
                    for (var i = 0; i < rowsSkill.length; i++) {
                        if (rowsSkill[i].SkillName.includes("格斗")) {
                            rowsSkill[i].Duty = "⭐";
                            rowsSkill[i + 1].Duty = "⭐";
                            rowsSkill[i + 2].Duty = "⭐";
                            rowsSkill[i + 3].Duty = "⭐";
                            break;
                        }
                    }
                }

                if (skillName.includes("外语（")) {
                    var includesString = skillName.split("（")[0]
                    var resultString = skillName.split("（")[1];
                    let resultArray;
                    let contentString;
                    try {
                        // 去除括号和空格，保留逗号分隔的内容
                        contentString = resultString.replace(/[）\s]/g, '');
                        // 将逗号分隔的内容拆分成数组元素
                        resultArray = contentString.split('、');
                    }
                    catch {
                        resultArray = includesString;
                    }
                    for (var i = 0; i < rowsSkill.length; i++) {
                        if (rowsSkill[i].SkillName.includes(includesString) && resultArray[0].includes("任一")) {
                            rowsSkill[i].Duty = "⭐";
                            break;
                        }

                        if (rowsSkill[i].SkillName.includes(includesString) && resultArray[0].includes("拉丁文")) {
                            rowsSkill[i].Duty = "拉丁文";
                            break;
                        }

                        if (rowsSkill[i].SkillName.includes(includesString) && resultArray[0].includes("汉语")) {
                            rowsSkill[i].Duty = "汉语";
                            break;
                        }

                        if (rowsSkill[i].SkillName.includes(includesString) && resultArray[0].includes("希伯来语")) {
                            rowsSkill[i].Duty = "希伯来语";
                            break;
                        }

                        if (rowsSkill[i].SkillName.includes(includesString) && resultArray[0].includes("汉语或梵语")) {
                            rowsSkill[i].Duty = "汉语";
                            rowsSkill[i + 1].Duty = "梵语";
                            break;
                        }

                        if (rowsSkill[i].SkillName.includes(includesString) && resultArray[0].includes("英语或其他")) {
                            rowsSkill[i].Duty = "英语";
                            rowsSkill[i + 1].Duty = "⭐";
                            break;
                        }
                    }
                }

                if (skillName.includes("射击")) {
                    var includesString = skillName.split("（")[0]
                    var resultString = skillName.split("（")[1];
                    let resultArray;
                    let contentString;
                    try {
                        // 去除括号和空格，保留逗号分隔的内容
                        contentString = resultString.replace(/[）\s]/g, '');
                        // 将逗号分隔的内容拆分成数组元素
                        resultArray = contentString.split('、');
                    }
                    catch {
                        resultArray = includesString;
                    }
                    for (var i = 0; i < rowsSkill.length; i++) {
                        if (rowsSkill[i].SkillName.includes(includesString) && resultArray[0].includes("步枪或霰弹枪")) {
                            rowsSkill[i + 1].Duty = "步枪☆";
                            rowsSkill[i + 2].Duty = "霰弹枪☆";
                            break;
                        }

                        if (rowsSkill[i].SkillName.includes(includesString) && resultArray.length == 2) {
                            rowsSkill[i].Duty = "⭐";
                            rowsSkill[i + 1].Duty = "来复枪";
                            break;
                        }

                        if (rowsSkill[i].SkillName.includes(includesString) && resultArray[0].includes("手枪")) {
                            rowsSkill[i].Duty = "⭐";
                            break;
                        }

                        if (rowsSkill[i].SkillName.includes(includesString) && resultArray[0].includes("霰弹枪")) {
                            rowsSkill[i + 1].Duty = "霰弹枪";
                            break;
                        }

                        if (rowsSkill[i].SkillName.includes(includesString) && resultArray[0].includes("来复枪")) {
                            rowsSkill[i + 1].Duty = "来复枪";
                            break;
                        }

                        if (rowsSkill[i].SkillName.includes(includesString) && resultArray[0].includes("任一")) {
                            rowsSkill[i].Duty = "⭐";
                            break;
                        }
                    }

                }

                if (skillName.includes("下面")) {
                    var part = skillName.split("：")[1];
                    let resultArray;
                    if (part.includes("、")) {
                        resultArray = part.split("、");
                        for (var i = 0; i < resultArray.length; i++) {
                            for (var n = 0; n < rowsSkill.length; n++) {
                                if (rowsSkill[n].SkillName === resultArray[i]) {
                                    rowsSkill[n].Duty = "※";
                                }
                            }
                        }
                    }
                    if (part.includes("或")) {
                        resultArray = part.split("或");
                        for (var i = 0; i < resultArray.length; i++) {
                            for (var n = 0; n < rowsSkill.length; n++) {
                                if (rowsSkill[n].SkillName === resultArray[i]) {
                                    rowsSkill.Duty == "☆"
                                }
                            }
                        }
                    }
                }

                if (skillName.includes("技艺")) {
                    var includesString = skillName.split("（")[0]
                    var resultString = skillName.split("（")[1];
                    let resultArray;
                    let contentString;
                    try {
                        // 去除括号和空格，保留逗号分隔的内容
                        contentString = resultString.replace(/[）\s]/g, '');
                        // 将逗号分隔的内容拆分成数组元素
                        resultArray = contentString.split('、');
                    }
                    catch {
                        resultArray = includesString;
                    }
                    for (var n = 0; n < rowsSkill.length; n++) {
                        if (rowsSkill[n].SkillName.includes(includesString) && resultArray[0].includes("任一")) {
                            rowsSkill[n].Duty = "⭐";
                            break;
                        }
                        if (rowsSkill[n].SkillName.includes(includesString) && resultArray[0].includes("任二")) {
                            rowsSkill[n].Duty = "⭐";
                            rowsSkill[n + 1].Duty = "⭐";
                            break;
                        }
                        if (rowsSkill[n].SkillName.includes(includesString) && resultArray[0].includes("表演或乔装")) {
                            rowsSkill[n].Duty = "表演☆";
                            break;
                        }
                        if (rowsSkill[n].SkillName.includes(includesString) && resultArray[0].includes("艺术或摄影")) {
                            rowsSkill[n].Duty = "艺术☆";
                            rowsSkill[n + 1].Duty = "摄影☆";
                            break;
                        }
                        if (rowsSkill[n].SkillName.includes(includesString) && resultArray[0].includes("打字或速记")) {
                            rowsSkill[n].Duty = "打字☆";
                            rowsSkill[n + 1].Duty = "速记☆";
                            break;
                        }
                        if (rowsSkill[n].SkillName.includes(includesString) && resultArray.length == 1) {
                            if (rowsSkill[n].Duty == "") {
                                rowsSkill[n].Duty = resultArray[0];
                            }
                            else if (rowsSkill[n + 1].Duty == "") {
                                rowsSkill[n + 1].Duty = resultArray[0];
                            }
                            else {
                                rowsSkill[n + 2].Duty = resultArray[0];
                            }
                            break;
                        }
                        if (rowsSkill[n].SkillName.includes(includesString) && resultArray.length == 3 && resultArray[2].includes("等")) {
                            rowsSkill[n].Duty = "⭐";
                            rowsSkill[n + 1].Duty = "⭐";
                            rowsSkill[n + 2].Duty = "⭐";
                            break;
                        }
                        if (rowsSkill[n].SkillName.includes(includesString) && resultArray.length == 3 && !resultArray[2].includes("等")) {
                            rowsSkill[n].Duty = resultArray[0];
                            rowsSkill[n + 1].Duty = resultArray[1];
                            rowsSkill[n + 2].Duty = resultArray[2];
                            break;
                        }
                        if (rowsSkill[n].SkillName.includes(includesString) && resultArray[0].includes("表演类如")) {
                            rowsSkill[n].Duty = "⭐";
                            rowsSkill[n + 1].Duty = "⭐";
                            rowsSkill[n + 2].Duty = "⭐";
                            break;
                        }
                    }
                }
                
            }

/*-----------------------------------------表2操作-----------------------------------------*/
            for (var r = 0; r < rowsSkill2.length; r++) {
                rowsSkill2[r].Duty = "";
            }


            //按逗号分隔出来的技能能直接匹配的视为本职⭐（表2）
            for (var b = 0; b < skills.length; b++) {
                //分割出来的本职技能
                var skillName = skills[b];
                //表2的所有技能rowsSkill2
                for (var o = 0; o < rowsSkill2.length; o++) {
                    if (rowsSkill2[o].SkillName === skillName) {
                        rowsSkill2[o].Duty = "⭐";
                        break;
                    }
                }

                //可选社交技能☯（表2）
                if (skillName.includes("项社交技能")) {
                    var inputString = skillName.split("能")[1];
                    // 去除括号和空格，保留逗号分隔的内容
                    const contentString = inputString.replace(/[（）\s]/g, '');

                    // 将逗号分隔的内容拆分成数组元素
                    const resultArray = contentString.split('、');
                    for (var k = 0; k < resultArray.length; k++) {
                        for (var g = 0; g < rowsSkill2.length; g++) {
                            if (rowsSkill2[g].SkillName === resultArray[k]) {
                                rowsSkill2[g].Duty = "☯";
                                break;
                            }
                        }
                    }

                }

                //xx或xx时使用☆
                if (skillName.includes("或") && !skillName.includes("或者")) {
                    var inputString = skillName.split("或");
                    for (var x = 0; x < inputString.length; x++) {
                        for (var m = 0; m < rowsSkill2.length; m++) {
                            if (rowsSkill2[m].SkillName === inputString[x]) {
                                rowsSkill2[m].Duty = "☆";
                                break;
                            }
                        }
                    }
                }

                if (skillName.includes("或") && !skillName.includes("或者") && skillName.includes("汽车驾驶或驾驶")) {
                    for (var v = 0; v < rowsSkill2.length; v++) {
                        if (rowsSkill2[v].SkillName.includes("驾驶")) {
                            rowsSkill2[v].Duty = "⭐";
                            break;
                        }
                    }
                }

                if (skillName.includes("或") && !skillName.includes("或者") && skillName.includes("导航或科学")) {
                    for (var a = 0; a < rowsSkill2.length; a++) {
                        if (rowsSkill2[a].SkillName.includes("导航")) {
                            rowsSkill2[a].Duty = "⭐";
                            break;
                        }
                    }
                    for (var a = 0; a < rowsSkill2.length; a++) {
                        if (rowsSkill2[a].SkillName.includes("科学")) {
                            rowsSkill2[a].Duty = "⭐";
                            break;
                        }
                    }
                }

                if (skillName.includes("或") && !skillName.includes("或者") && skillName.includes("博物学或科学")) {
                    for (var a = 0; a < rowsSkill2.length; a++) {
                        if (rowsSkill2[a].SkillName.includes("博物学")) {
                            rowsSkill2[a].Duty = "⭐";
                            break;
                        }
                    }
                    for (var a = 0; a < rowsSkill2.length; a++) {
                        if (rowsSkill2[a].SkillName.includes("科学")) {
                            rowsSkill2[a].Duty = "生物学";
                            rowsSkill2[a+1].Duty = "植物学";
                            break;
                        }
                    }
                }

                if (skillName.includes("或") && !skillName.includes("或者") && skillName.includes("外语或生存")) {
                    for (var v = 0; v < rowsSkill2.length; v++) {
                        if (rowsSkill2[v].SkillName.includes("生存")) {
                            rowsSkill2[v].Duty = "⭐";
                            break;
                        }
                    }
                }


                //科学()、驾驶()、生存()、学识()时
                if (skillName.includes("学识（")) {
                    var includesString = skillName.split("（")[0]
                    var resultString = skillName.split("（")[1];
                    let resultArray;
                    let contentString;
                    try {
                        // 去除括号和空格，保留逗号分隔的内容
                        contentString = resultString.replace(/[）\s]/g, '');
                        // 将逗号分隔的内容拆分成数组元素
                        resultArray = contentString.split('、');
                    }
                    catch {
                        resultArray = includesString;
                    }
                    for (var i = 0; i < rowsSkill2.length; i++) {
                        if (rowsSkill2[i].SkillName.includes(includesString) && resultArray[0].includes("佛教或神道教")) {
                            rowsSkill2[i].Duty = "佛教或神道教";
                            break;
                        }

                        if (rowsSkill2[i].SkillName.includes(includesString) && resultArray[0].includes("佛教")) {
                            rowsSkill2[i].Duty = "佛教";
                            break;
                        }

                        if (rowsSkill2[i].SkillName.includes(includesString) && resultArray[0].includes("阴阳道")) {
                            rowsSkill2[i].Duty = "阴阳道";
                            break;
                        }

                        if (rowsSkill2[i].SkillName.includes(includesString) && resultArray[0].includes("神道教")) {
                            rowsSkill2[i].Duty = "神道教";
                            break;
                        }

                        if (rowsSkill2[i].SkillName.includes(includesString) && resultArray[0].includes("道教")) {
                            rowsSkill2[i].Duty = "道教";
                            break;
                        }
                    }
                }


                if (skillName.includes("生存")) {
                    for (var y = 0; y < rowsSkill2.length; y++) {
                        var resultString = skillName.split("（")[0]
                        if (rowsSkill2[y].SkillName.includes(resultString)) {
                            rowsSkill2[y].Duty = "⭐";
                            break;
                        }
                    }
                }

                if (skillName.includes("驾驶")) {
                    var includesString = skillName.split("（")[0];
                    var resultString = skillName.split("（")[1];
                    let resultArray = [];
                    try {
                        // 去除括号和空格，保留逗号分隔的内容
                        let contentString = resultString.replace(/[）\s]/g, '');
                        // 将逗号分隔的内容拆分成数组元素
                        resultArray = contentString.split('、');
                    }
                    catch {
                        resultArray = includesString;
                    }
                    for (var n = 0; n < rowsSkill2.length; n++) {
                        if (rowsSkill2[n].SkillName.includes(includesString) && resultArray.length == 1 && !resultArray[0].includes("任一")) {
                            rowsSkill2[n].Duty = resultArray[0];
                            break;
                        }
                        if (rowsSkill2[n].SkillName.includes(includesString) && resultArray[0].includes("任一")) {
                            rowsSkill2[n].Duty = "⭐";
                            break;
                        }
                        if (rowsSkill2[n].SkillName.includes(includesString) && resultArray.length > 2) {
                            rowsSkill2[n].Duty = "⭐";
                            break;
                        }
                        if (rowsSkill2[n].SkillName.includes(includesString) && resultArray.length == 2) {
                            rowsSkill2[n].Duty = resultArray[0];
                            rowsSkill2[n + 1].Duty = resultArray[1];
                            break;
                        }
                    }
                    

                }

                if (skillName.includes("科学")) {
                    var includesString = skillName.split("（")[0];
                    var resultString = skillName.split("（")[1];
                    let resultArray;
                    let contentString;
                    try {
                        // 去除括号和空格，保留逗号分隔的内容
                        contentString = resultString.replace(/[）\s]/g, '');
                        // 将逗号分隔的内容拆分成数组元素
                        resultArray = contentString.split('、');
                    }
                    catch {
                        resultArray = includesString;
                    }
                    for (var n = 0; n < rowsSkill2.length; n++) {
                        if (rowsSkill2[n].SkillName.includes(includesString) && resultArray.length == 1 && !resultArray[0].includes("任一") && !resultArray[0].includes("化学和任意")) {
                            rowsSkill2[n].Duty = resultArray[0];
                            break;
                        }
                        if (rowsSkill2[n].SkillName.includes(includesString) && resultArray[0].includes("任一")) {
                            rowsSkill2[n].Duty = "⭐";
                            break;
                        }
                        if (rowsSkill2[n].SkillName.includes(includesString) && resultArray.length == 2) {
                            rowsSkill2[n].Duty = resultArray[0];
                            rowsSkill2[n + 1].Duty = resultArray[1];
                            break;
                        }
                        if (rowsSkill2[n].SkillName.includes(includesString) && resultArray.length == 3) {
                            rowsSkill2[n].Duty = resultArray[0];
                            rowsSkill2[n + 1].Duty = resultArray[1];
                            rowsSkill2[n + 2].Duty = resultArray[2];
                            break;
                        }
                        if (rowsSkill2[n].SkillName.includes(includesString) && resultString.includes("化学和任意")) {
                            rowsSkill2[n].Duty = "化学";
                            rowsSkill2[n + 1].Duty = "⭐";
                            rowsSkill2[n + 2].Duty = "⭐";
                            break;
                        }
                    }
                }

                if (skillName.includes("下面")) {
                    var part = skillName.split("：")[1];
                    let resultArray;
                    if (part.includes("、")) {
                        resultArray = part.split("、");
                        for (var i = 0; i < resultArray.length; i++) {
                            for (var n = 0; n < rowsSkill2.length; n++) {
                                //if (rowsSkill2[n].SkillName === resultArray[i]) {
                                //    rowsSkill2[n].Duty = "※";
                                //}
                                if (rowsSkill2[n].SkillName.includes(resultArray[i])) {
                                    rowsSkill2[n].Duty = "※";
                                }
                            }
                        }
                    }
                    if (part.includes("或")) {
                        resultArray = part.split("或");
                        for (var i = 0; i < resultArray.length; i++) {
                            for (var n = 0; n < rowsSkill2.length; n++) {
                                if (rowsSkill2[n].SkillName === resultArray[i]) {
                                    rowsSkill2.Duty == "☆"
                                }
                            }
                        }
                    }
                }
            }

            parent.$('#Skill1').bootstrapTable('load', rowsSkill);
            parent.$('#Skill2').bootstrapTable('load', rowsSkill2);


            parent.MyLayer.close(parent.Index);
        },
    }
});