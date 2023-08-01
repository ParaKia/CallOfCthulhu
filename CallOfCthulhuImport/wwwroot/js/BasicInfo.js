var Survey = 0;//调查
var Knowledge = 0;//学问
var Negotiate = 0;//交涉
var Battle = 0;//战斗
var Stunt = 0;//特技
var Support = 0;//支援

//存储layer供给全局使用
window.MyLayer = layer;
//初始化点数
var previousValueInt = parseInt(document.getElementById("IntShow").innerHTML);//智力

var previousValueStr = parseInt(document.getElementById("StrShow").innerHTML);//力量
var previousValueEdu = parseInt(document.getElementById("EduShow").innerHTML);//教育
var previousValueDex = parseInt(document.getElementById("DexShow").innerHTML);//敏捷
var previousValueApp = parseInt(document.getElementById("AppShow").innerHTML);//外貌
var previousValuePow = parseInt(document.getElementById("PowShow").innerHTML);//意志
var previousValuePow = parseInt(document.getElementById("ConShow").innerHTML);//体质
var previousValuePow = parseInt(document.getElementById("SizeShow").innerHTML);//体型

//职业属性（在选择职业后，自动赋值）
var Sta = "";
//存储总兴趣点
var Interest = 0;
//存储总职业点
var Prof = 0;

$(document).ready(function () {
    // 先将透明度逐渐设置为 1，然后执行向下滑动动画
    $('.reveal-content').animate({ opacity: 1 }, 800, function () {
        // 向下滑动 50px
        $(".reveal-content").css('transform', 'translateY(50px)');
    });

    $('.sidebar').animate({ opacity: 1 }, 800, function () {
        // 向下滑动 50px
        $(".sidebar").css('transform', 'translateY(220px)');
    });
});
//实时更新人物数据
$(function () {
    let isExceeded = false;

    //加载曾经人物卡到select中
    loadCharacterList();
    //初始化Echarts图
    document.getElementById('Propoties').click();
    document.getElementById('Skills').click();

    setInterval(function () {
        $("#StrShow").text($("#StrRange").val()),
            $("#ConShow").text($("#ConRange").val()),
            $("#SizeShow").text($("#SizeRange").val()),
            $("#AppShow").text($("#AppRange").val()),
            $("#DexShow").text($("#DexRange").val()),
            $("#IntShow").text($("#IntRange").val()),
            $("#PowShow").text($("#PowRange").val()),
            $("#EduShow").text($("#EduRange").val());
    }, 0.01);

    setInterval(function () {
        var total = parseInt($("#StrShow")[0].innerHTML) +
            parseInt($("#ConShow")[0].innerHTML) +
            parseInt($("#SizeShow")[0].innerHTML) +
            parseInt($("#AppShow")[0].innerHTML) +
            parseInt($("#DexShow")[0].innerHTML) +
            parseInt($("#IntShow")[0].innerHTML) +
            parseInt($("#PowShow")[0].innerHTML) +
            parseInt($("#EduShow")[0].innerHTML);
        if (total > $("#SumPoint")[0].value && !isExceeded) {
            isExceeded = true;
            layer.msg("角色分配总点数超过购点");
        } else if (total <= $("#SumPoint")[0].value && isExceeded) {
            isExceeded = false;
        }
        //兴趣点数计算
        previousValueInt = parseInt(document.getElementById("IntShow").innerHTML);//智力
        Interest = previousValueInt * 2;
        $("#INTEREST")[0].innerHTML = Interest;

        //职业点数计算
        previousValueStr = parseInt(document.getElementById("StrShow").innerHTML);//力量
        previousValueEdu = parseInt(document.getElementById("EduShow").innerHTML);//教育
        previousValueDex = parseInt(document.getElementById("DexShow").innerHTML);//敏捷
        previousValueApp = parseInt(document.getElementById("AppShow").innerHTML);//外貌
        previousValuePow = parseInt(document.getElementById("PowShow").innerHTML);//意志
        previousValueCon = parseInt(document.getElementById("ConShow").innerHTML);//体质
        previousValueSize = parseInt(document.getElementById("SizeShow").innerHTML);//体型


        $("#UsedPoint")[0].innerHTML = previousValueInt + previousValueStr + previousValueEdu + previousValueDex +
            previousValueApp + previousValuePow + previousValueCon + previousValueSize;
        $("#LifePoint")[0].innerHTML = Math.floor((previousValueCon + previousValueSize) / 10) + '/' + Math.floor((previousValueCon + previousValueSize) / 10);
        $("#MagicPoint")[0].innerHTML = Math.floor((previousValuePow + previousValuePow) / 10) + '/' + Math.floor((previousValuePow + previousValuePow) / 10);
        $("#SanPoint")[0].innerHTML = previousValuePow;
        if (2 <= (previousValueStr + previousValueSize) && (previousValueStr + previousValueSize) <= 64) {
            $("#DamagePoint")[0].innerHTML = -2;
        }
        else if (65 <= (previousValueStr + previousValueSize) && (previousValueStr + previousValueSize) <= 84) {
            $("#DamagePoint")[0].innerHTML = -1;
        }
        else if (85 <= (previousValueStr + previousValueSize) && (previousValueStr + previousValueSize) <= 124) {
            $("#DamagePoint")[0].innerHTML = 0;
        }
        else if (125 <= (previousValueStr + previousValueSize) && (previousValueStr + previousValueSize) <= 164) {
            $("#DamagePoint")[0].innerHTML = "1D4";
        }
        else if (165 <= (previousValueStr + previousValueSize) && (previousValueStr + previousValueSize) <= 204) {
            $("#DamagePoint")[0].innerHTML = "1D6";
        }
        else if (205 <= (previousValueStr + previousValueSize) && (previousValueStr + previousValueSize) <= 284) {
            $("#DamagePoint")[0].innerHTML = "2D6";
        }

        try {
            if (!Sta.includes("＋")) {
                var result = Sta.split("×");
                Prof = previousValueEdu * result[1];
                $("#PROF")[0].innerHTML = Prof;
            }
            else {
                var result = Sta.split("＋");
                if (!result[1].includes("或")) {
                    var ex = result[1].split("×");
                    if (ex[0] == "力量") {
                        Prof = previousValueEdu * 2 + previousValueStr * 2;
                        $("#PROF")[0].innerHTML = Prof;
                    }
                    else if (ex[0] == "敏捷") {
                        Prof = previousValueEdu * 2 + previousValueDex * 2;
                        $("#PROF")[0].innerHTML = Prof;
                    }
                    else if (ex[0] == "外貌") {
                        Prof = previousValueEdu * 2 + previousValueApp * 2;
                        $("#PROF")[0].innerHTML = Prof;
                    }
                    else if (ex[0] == "意志") {
                        Prof = previousValueEdu * 2 + previousValuePow * 2;
                        $("#PROF")[0].innerHTML = Prof;
                    }
                }
                else if (result[1].includes("或") && result[1].split("或").length < 3) {
                    var ex = result[1].split("或");
                    var exor = ex[1].split("×");
                    if (ex[0] == "外貌" && exor[0] == "敏捷") {
                        if (previousValueApp > previousValueDex) {
                            Prof = previousValueEdu * 2 + previousValueApp * 2;
                            $("#PROF")[0].innerHTML = Prof;
                        }
                        else {
                            Prof = previousValueEdu * 2 + previousValueDex * 2;
                            $("#PROF")[0].innerHTML = Prof;
                        }
                    }
                    else if (ex[0] == "外貌" && exor[0] == "意志") {
                        if (previousValueApp > previousValuePow) {
                            Prof = previousValueEdu * 2 + previousValueApp * 2;
                            $("#PROF")[0].innerHTML = Prof;
                        }
                        else {
                            Prof = previousValueEdu * 2 + previousValuePow * 2;
                            $("#PROF")[0].innerHTML = Prof;
                        }
                    }
                    else if (ex[0] == "力量" && exor[0] == "敏捷") {
                        if (previousValueStr > previousValueDex) {
                            Prof = previousValueEdu * 2 + previousValueStr * 2;
                            $("#PROF")[0].innerHTML = Prof;
                        }
                        else {
                            Prof = previousValueEdu * 2 + previousValueDex * 2;
                            $("#PROF")[0].innerHTML = Prof;
                        }
                    }
                    else if (ex[0] == "敏捷" && exor[0] == "意志") {
                        if (previousValueStr > previousValueDex) {
                            Prof = previousValueEdu * 2 + previousValueDex * 2;
                            $("#PROF")[0].innerHTML = Prof;
                        }
                        else {
                            Prof = previousValueEdu * 2 + previousValuePow * 2;
                            $("#PROF")[0].innerHTML = Prof;
                        }
                    }
                }
                else {
                    var Max = Math.max(previousValueApp, previousValueDex, previousValueStr);
                    switch (Max) {
                        case previousValueApp:
                            Prof = previousValueEdu * 2 + previousValueApp * 2;
                            $("#PROF")[0].innerHTML = Prof;
                            break;
                        case previousValueDex:
                            Prof = previousValueEdu * 2 + previousValueDex * 2;
                            $("#PROF")[0].innerHTML = Prof;
                            break;
                        case previousValueStr:
                            Prof = previousValueEdu * 2 + previousValueStr * 2;
                            $("#PROF")[0].innerHTML = Prof;
                            break;
                    }
                }
            }
        }
        catch {
            $("#PROF")[0].innerHTML = 0;
        }
    }, 10);

});

//幸运值在15-90间波动
function RandomLuck() {
    var result = Math.random() * (90 + 1 - 15) + 15;
    while (result > 90) {
        result = Math.random() * (90 + 1 - 15) + 15;
    }
    result = parseInt(result);
    $("#Luck")[0].value = result;
}

function ProfessionList() {
    //iframe层-父子操作
    MyLayer.open({
        type: 2,
        area: ["1200px", "650px"],
        fixed: false, //不固定
        maxmin: true,
        content: "/Create/PrefList",
        success: function (layero, index) {
            //保存打开iframe界面的index，方便其他js使用close时快速找到index
            window.Index = index;
            $(document).keydown(function (e) {
                if (e.keyCode === 27) {
                    MyLayer.close(index); // 关闭当前窗口
                }
            });
        }
    });
}

// 监听目录链接的点击事件
var links = document.querySelectorAll('.sidebar a');
links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // 阻止默认的跳转行为
        var targetId = this.getAttribute('href').slice(1); // 获取目标区域的ID
        var targetElement = document.getElementById(targetId); // 获取目标区域的元素
        var targetTop = targetElement.offsetTop; // 目标区域相对于文档顶部的偏移量
        if (targetId == "section1") {
            targetTop = 0;
        }
        else {
            targetTop -= 130;
        }
        window.scrollTo({
            top: targetTop,
            behavior: 'smooth' // 平滑滚动
        });
    });
});

//武器表列头
var columns = [
    {
        checkbox: true,
        visible: false
    },
    {
        field: "Id",
        title: "序号",
        align: "center",
        formatter: function (value, row, index) {
            return index + 1;
        }
    },
    {
        field: "WeaponType",
        title: "武器",
        align: "center",
    },
    {
        field: "Skill",
        title: "需求技能",
        align: "center",
    },
    {
        field: "Damage",
        title: "伤害",
        width: 200,
        align: "center",
    },
    {
        field: "Range",
        title: "射程",
        align: "center",
    },
    {
        field: "Penetrate",
        title: "贯穿",
        align: "center",
    },
    {
        field: "Round",
        title: "每轮",
        align: "center",
    },
    {
        field: "AmmoNum",
        title: "载弹量",
        align: "center",
    },
    {
        field: "BreakDown",
        title: "故障值",
        align: "center",
    },
    {
        field: "Age",
        title: "年代",
        align: "center",
    },
    {
        field: "Price",
        title: "价格（1920s/现代）",
        align: "center",
    },
    {
        field: "InventionTime",
        title: "发明时间",
        align: "center",
    },
    {
        title: "操作",
        align: "center",
        width: 65,
        formatter: function (value, row, index) {
            return [
                '<button class="btn btn-primary remove" style="width:65px;cursor:pointer" onclick="Remove(' + index + ')">删除</button>'
            ]
        }
    }
];

//随身携带物表头
var columnsCarryon = [
    {
        field: "Id",
        title: "序号",
        align: "center",
        formatter: function (value, row, index) {
            return index + 1;
        }
    },
    {
        field: "Status",
        title: "状态",
        align: "center",
        width: 115,
        formatter: function (value, row, index) {
            return '<select id="Status' + index + '" class="form-select uniqueselect" value="' + value + '" onchange="StatusChange(' + index + ')"><option selected>显露</option><option>隐藏</option></select>'
        }
    },
    {
        field: "Position",
        title: "部位",
        align: "center",
        width: 120,
        formatter: function (value, row, index) {
            return '<select id="Position' + index + '" class="form-select uniqueselect" value="' + value + '" onchange="PositionChange(' + index + ')"><option disabled>颅-----------</option><option selected> 头部</option ><option>头发</option><option>耳朵</option><option>面</option><option> 颈</option ><option>其他（头）</option><option disabled>躯-------------</option><option>肩</option><option>胸前</option><option>背后</option><option>肋</option><option>裆</option><option>腰</option><option>胯</option><option>其他（躯）</option><option disabled>服-------------</option><option>衣兜</option><option>内衬</option><option>衣服内</option><option>裤兜</option><option>其他（服）</option><option disabled>上肢-------------</option><option>左手</option><option>右手</option><option>双手</option><option>左臂</option><option>右臂</option><option>双臂</option><option>肘部</option><option>其他（上肢）</option><option disabled>下肢-----------</option><option>左腿</option><option>右腿</option><option>双腿</option><option>左脚</option><option>右脚</option><option>双脚</option><option>膝部</option><option>其他（下肢）</option><option>其他</option></select>'
        }
    },
    {
        field: "ObjectName",
        title: "物品名称",
        width: 500,
        align: "center",
        formatter: function (value, row, index) {
            return '<input id="ObjectName' + index + '" type="text" class="form-control" value="' + value + '" onchange="NameChange(' + index + ')">'
        }
    },
    {
        field: "Bagage",
        title: "背包格",
        align: "center",
        formatter: function (value, row, index) {
            return '<input id="Bagage' + index + '" type="text" class="form-control" value="' + value + '" onchange="BagageChange(' + index + ')">'
        }
    },
    {
        title: "操作",
        align: "center",
        width: 65,
        formatter: function (value, row, index) {
            return [
                '<button class="btn btn-primary removeCarryon" style="width:65px;cursor:pointer" onclick="RemoveCarryon(' + index + ')">删除</button>'
            ]
        }
    }
];

//为随身携带物初始化2行数据
var rows = [
    { Id: 1, Status: "显露", Position: "头部", ObjectName: "", Bagage: "" },
    { Id: 2, Status: "显露", Position: "头部", ObjectName: "", Bagage: "" },
];



$("#Carryon").bootstrapTable({
    columns: columnsCarryon,
    data: rows,
});

$("#Weapon").bootstrapTable({
    columns: columns,
});

function WeaponChoose() {
    //iframe层-父子操作
    MyLayer.open({
        type: 2,
        area: ["1300px", "850px"],
        fixed: false, //不固定
        maxmin: true,
        content: "/Create/WeaponList",
        success: function (layero, index) {
            //保存打开iframe界面的index，方便其他js使用close时快速找到index
            window.Index = index;
            $(document).keydown(function (e) {
                if (e.keyCode === 27) {
                    MyLayer.close(index); // 关闭当前窗口
                }
            });
        }
    });
}


function Remove(index) {
    // 通过索引找到对应的行
    var row = $('#Weapon').bootstrapTable('getData')[index];

    //执行删除操作
    $('#Weapon').bootstrapTable('remove', {
        field: 'WeaponType',
        values: [row.WeaponType]
    });

    //从localStorage中获取原本数据
    var selects = document.querySelectorAll("select");
    for (var i = 2; i < selects.length; i++) {
        var select = selects[i];
        var selectedValue = localStorage.getItem("select_" + i);
        if (selectedValue) {
            select.value = selectedValue;
        }
    }
}

function RemoveCarryon(index) {
    var Storage_i = 0;
    // 获取 "characters" 键名的值
    const charactersData = localStorage.getItem('characters');

    // 清除所有数据
    localStorage.clear();

    // 重新设置 "characters" 键名的值
    localStorage.setItem('characters', charactersData);
    var selects = document.querySelectorAll("select");
    //i从2开始是因为在该select前有2条select，后续修改可以添加clss名后，只获取class名而不是querySelector找所有select来进行计算
    for (var i = 2; i < selects.length; i++) {
        //如果删除的数为第一条或者是被两条数据夹在中间的一条，则i+=2因为一个index有两条数据，所以要+=2
        if ((index == 0 || index == (i - 2) / 2 || index == (i - 3) / 2 && index != selects.length / 2 - 1)) {
            //变化前的i存储起来
            Storage_i = i;
            i += 2;
        }
        var select = selects[i];
        var selectedValue = select.value;
        //存储添加前的数据到localStorage中
        if (selectedValue == "option1") {
            break;
        }
        //存储起来的i来判断是否+=2，如若是则需要还原，保证select_i的顺序正确
        if ((index == 0 || index == (Storage_i - 2) / 2 || index == (Storage_i - 3) / 2) && index != selects.length / 2 - 1) {
            i -= 2;
        }
        localStorage.setItem("select_" + i, selectedValue);
        //在保存到网页缓存后，再将i加回去保证运行时直接跳过该index行
        if ((index == 0 || index == (Storage_i - 2) / 2 || index == (Storage_i - 3) / 2) && index != selects.length / 2 - 1) {
            i += 2;
        }
    }
    // 通过索引找到对应的行
    var row = $('#Carryon').bootstrapTable('getData')[index];

    //执行删除操作
    $('#Carryon').bootstrapTable('remove', {
        field: 'Id',
        values: [row.Id]
    });


    //从localStorage中获取原本数据
    var selects = document.querySelectorAll("select");
    for (var i = 0; i < selects.length; i++) {
        var select = selects[i];
        var selectedValue = localStorage.getItem("select_" + i);
        if (selectedValue) {
            select.value = selectedValue;
        }
    }
}

function AddNewRow() {
    // 获取 "characters" 键名的值
    const charactersData = localStorage.getItem('characters');

    // 清除所有数据
    localStorage.clear();

    // 重新设置 "characters" 键名的值
    localStorage.setItem('characters', charactersData);
    var selects = document.querySelectorAll("select");
    for (var i = 2; i < selects.length; i++) {
        var select = selects[i];
        var selectedValue = select.value;
        //存储添加前的数据到localStorage中
        if (selectedValue == "option1") {
            break;
        }
        localStorage.setItem("select_" + i, selectedValue);
    }

    var tableData = $("#Carryon").bootstrapTable("getData");

    //用于添加一行新数据
    var newRow = {
        Id: getLastId() + 1,
        Status: "显露",
        Position: "头部",
        ObjectName: "",
        Bagage: ""
    };

    tableData.push(newRow);
    $("#Carryon").bootstrapTable("load", tableData);

    //从localStorage中获取原本数据
    var selects = document.querySelectorAll("select");
    for (var i = 2; i < selects.length; i++) {
        var select = selects[i];
        var selectedValue = localStorage.getItem("select_" + i);
        if (selectedValue) {
            select.value = selectedValue;
        }
    }

    function getLastId() {
        // 获取最后一行数据的Id
        if (tableData.length > 0) {
            var lastRow = tableData[tableData.length - 1];
            return lastRow.Id;
        } else {
            return 0; // 如果表格中没有数据，则将初始值设为0
        }
    }
}


/*------以下四个function可以合并到一起------*/

//状态改变时赋值给Status列头数据
function StatusChange(index) {
    var row = $("#Carryon").bootstrapTable("getData")[index];
    row.Status = $("#Status" + index).val();
}

//部位改变时赋值给Position列头数据
function PositionChange(index) {
    var row = $("#Carryon").bootstrapTable("getData")[index];
    row.Position = $("#Position" + index).val();
}

//物品名称改变时赋值给Name列头数据
function NameChange(index) {
    var row = $("#Carryon").bootstrapTable("getData")[index];
    row.ObjectName = $("#ObjectName" + index).val();
}

//背包格改变时赋值给Bagage列头数据
function BagageChange(index) {
    var row = $("#Carryon").bootstrapTable("getData")[index];
    row.Bagage = $("#Bagage" + index).val();
}

/*------以上四个function可以合并到一起------*/

var columnsSkill = [
    {
        field:"Successsign",
        title: "成功标记",
        align: "center",
        //formatter: function (value, row, index) {
        //    return '<input type="checkbox" class="checkbox" />';
        //}
        checkbox:true,
    },
    {
        field: "Duty",
        title: "本职",
        align: "center",
    },
    {
        field: "SkillName",
        title: "技能名称",
        align: "center",
        width: 120
    },
    {
        field: "Inception",
        title: "初始",
        align: "center",
    },
    {
        field: "Growup",
        title: "成长",
        align: "center",
        formatter: function (value, row, index) {
            return [
                '<input type="text" id="Grow' + index + '" class="form-control" onchange="ChangeGrowup(' + index + ')"/>'
            ]
        }
    },
    {
        field: "Profession",
        title: "职业",
        align: "center",
        formatter: function (value, row, index) {
            return [
                '<input type="text" id="Prof' + index + '" class="form-control" onchange="ChangeProf(' + index + ')"/>'
            ]
        }
    },
    {
        field: "Interest",
        title: "兴趣",
        align: "center",
        formatter: function (value, row, index) {
            return [
                '<input type="text" id="Interest' + index + '" class="form-control" onchange="ChangeInterest(' + index + ')"/>'
            ]
        }
    },
    {
        field: "Normal",
        title: "普通",
        align: "center",
        formatter: function (value, row, index) {
            var inceptionValue = row.Inception;
            var growupValue = row.Growup;
            var professionValue = row.Profession;
            var interestValue = row.Interest;
            if (inceptionValue == "")
                inceptionValue = 0
            if (growupValue == "")
                growupValue = 0
            if (professionValue == "")
                professionValue = 0
            if (interestValue == "")
                interestValue = 0
            var result = parseInt(inceptionValue) + parseInt(growupValue) + parseInt(professionValue) + parseInt(interestValue);
            if (isNaN(result)) {
                result = ""
            }
            row.Normal = result;
            return result;
        }
    },
    {
        field: "Hard",
        title: "困难",
        align: "center",
        formatter: function (value, row, index) {
            var inceptionValue = row.Inception;
            var growupValue = row.Growup;
            var professionValue = row.Profession;
            var interestValue = row.Interest;
            if (inceptionValue == "")
                inceptionValue = 0
            if (growupValue == "")
                growupValue = 0
            if (professionValue == "")
                professionValue = 0
            if (interestValue == "")
                interestValue = 0
            var result = Math.floor((parseInt(inceptionValue) + parseInt(growupValue) + parseInt(professionValue) + parseInt(interestValue)) / 2);
            if (isNaN(result)) {
                result = ""
            }
            row.Hard = result;
            return result;
        }
    },
    {
        field: "Exdifficult",
        title: "极难",
        align: "center",
        formatter: function (value, row, index) {
            var inceptionValue = row.Inception;
            var growupValue = row.Growup;
            var professionValue = row.Profession;
            var interestValue = row.Interest;
            if (inceptionValue == "")
                inceptionValue = 0
            if (growupValue == "")
                growupValue = 0
            if (professionValue == "")
                professionValue = 0
            if (interestValue == "")
                interestValue = 0
            var result = Math.floor((parseInt(inceptionValue) + parseInt(growupValue) + parseInt(professionValue) + parseInt(interestValue)) / 4);
            if (isNaN(result)) {
                result = ""
            }
            row.Exdifficult = result;
            return result;
        }
    }
];

var columnsSkill2 = [
    {
        field: "Successsign",
        title: "成功标记",
        align: "center",
        //formatter: function (value, row, index) {
        //    return '<input type="checkbox" class="checkbox" />';
        //}
        checkbox: true,
    },
    {
        field: "Duty",
        title: "本职",
        align: "center",
    },
    {
        field: "SkillName",
        title: "技能名称",
        align: "center",
        width: 120
    },
    {
        field: "Inception",
        title: "初始",
        align: "center",
    },
    {
        field: "Growup",
        title: "成长",
        align: "center",
        formatter: function (value, row, index) {
            return [
                '<input type="text" id="Grows' + index + '" class="form-control" onchange="ChangeGrowup2(' + index + ')"/>'
            ]
        }
    },
    {
        field: "Profession",
        title: "职业",
        align: "center",
        formatter: function (value, row, index) {
            return [
                '<input type="text" id="Profs' + index + '" class="form-control" onchange="ChangeProf2(' + index + ')"/>'
            ]
        }
    },
    {
        field: "Interest",
        title: "兴趣",
        align: "center",
        formatter: function (value, row, index) {
            return [
                '<input type="text" id="Interests' + index + '" class="form-control" onchange="ChangeInterest2(' + index + ')"/>'
            ]
        }
    },
    {
        field: "Normal",
        title: "普通",
        align: "center",
        formatter: function (value, row, index) {
            var inceptionValue = row.Inception;
            var growupValue = row.Growup;
            var professionValue = row.Profession;
            var interestValue = row.Interest;
            if (inceptionValue == "")
                inceptionValue = 0
            if (growupValue == "")
                growupValue = 0
            if (professionValue == "")
                professionValue = 0
            if (interestValue == "")
                interestValue = 0
            var result = parseInt(inceptionValue) + parseInt(growupValue) + parseInt(professionValue) + parseInt(interestValue);
            if (isNaN(result)) {
                result = ""
            }
            row.Normal = result;
            return result;
        }
    },
    {
        field: "Hard",
        title: "困难",
        align: "center",
        formatter: function (value, row, index) {
            var inceptionValue = row.Inception;
            var growupValue = row.Growup;
            var professionValue = row.Profession;
            var interestValue = row.Interest;
            if (inceptionValue == "")
                inceptionValue = 0
            if (growupValue == "")
                growupValue = 0
            if (professionValue == "")
                professionValue = 0
            if (interestValue == "")
                interestValue = 0
            var result = Math.floor((parseInt(inceptionValue) + parseInt(growupValue) + parseInt(professionValue) + parseInt(interestValue)) / 2);
            if (isNaN(result)) {
                result = ""
            }
            row.Hard = result;
            return result;
        }
    },
    {
        field: "Exdifficult",
        title: "极难",
        align: "center",
        formatter: function (value, row, index) {
            var inceptionValue = row.Inception;
            var growupValue = row.Growup;
            var professionValue = row.Profession;
            var interestValue = row.Interest;
            if (inceptionValue == "")
                inceptionValue = 0
            if (growupValue == "")
                growupValue = 0
            if (professionValue == "")
                professionValue = 0
            if (interestValue == "")
                interestValue = 0
            var result = Math.floor((parseInt(inceptionValue) + parseInt(growupValue) + parseInt(professionValue) + parseInt(interestValue)) / 4);
            if (isNaN(result)) {
                result = ""
            }
            row.Exdifficult = result;
            return result;
        }
    }
];


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
    { SkillName: "生存: <input class='form-control' type='text' id='Survive'/>", Inception: "10", Normal: "", Hard: "", Exdifficult: "", Profession: "", Interest: "", Growup: "", Duty: "" },
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

$("#Skill1").bootstrapTable({
    columns: columnsSkill,
    data: rowsSkill
});

$("#Skill2").bootstrapTable({
    columns: columnsSkill2,
    data: rowsSkill2
});


function ChangeProf(index) {
    var row = $("#Skill1").bootstrapTable("getData")[index];
    var SumPoint = 0;
    var InterestPoint = 0;

    row.Profession = $("#Prof" + index).val();
    // 更新表格中的数据
    $("#Skill1").bootstrapTable("updateRow", {
        index: index,
        row: row
    });

    var rows = $("#Skill1").bootstrapTable("getData")
    rows[13].Inception = Math.floor(previousValueDex / 2);
    // 更新表格中的数据
    $("#Skill1").bootstrapTable("updateRow", {
        index: 13,
        row: rows[13]
    });
    for (var i = 0; i < rows.length; i++) {
        $("#Grow" + i)[0].value = rows[i].Growup;
        $("#Prof" + i)[0].value = rows[i].Profession;
        $("#Interest" + i)[0].value = rows[i].Interest;

        if (!isNaN(parseInt($("#Prof" + i)[0].value))) {
            SumPoint += parseInt($("#Prof" + i)[0].value)
            $("#EXPROF")[0].innerHTML = SumPoint;
        }
        if (!isNaN(parseInt($("#Interest" + i)[0].value))) {
            InterestPoint += parseInt($("#Interest" + i)[0].value);
            $("#EXINTEREST")[0].innerHTML = Interest;
        }


    }

    var rows2 = $("#Skill2").bootstrapTable("getData")
    for (var i = 0; i < rows2.length; i++) {
        $("#Grows" + i)[0].value = rows2[i].Growup;
        $("#Profs" + i)[0].value = rows2[i].Profession;
        $("#Interests" + i)[0].value = rows2[i].Interest;

        if (!isNaN(parseInt($("#Profs" + i)[0].value))) {
            SumPoint += parseInt($("#Profs" + i)[0].value)
            $("#EXPROF")[0].innerHTML = SumPoint;
        }
        if (!isNaN(parseInt($("#Interests" + i)[0].value))) {
            InterestPoint += parseInt($("#Interests" + i)[0].value);
            $("#EXINTEREST")[0].innerHTML = Interest;
        }

    }

    if (InterestPoint > Interest) {
        layer.msg("分配的兴趣点数超出了兴趣购点总数");
    }
    if (SumPoint > Prof) {
        layer.msg("分配的职业点数超出了职业购点总数");
    }
}

function ChangeGrowup(index) {
    var row = $("#Skill1").bootstrapTable("getData")[index];
    var SumPoint = 0;
    var InterestPoint = 0;

    row.Growup = $("#Grow" + index).val();
    // 更新表格中的数据
    $("#Skill1").bootstrapTable("updateRow", {
        index: index,
        row: row
    });

    var rows = $("#Skill1").bootstrapTable("getData")
    rows[13].Inception = Math.floor(previousValueDex / 2);
    // 更新表格中的数据
    $("#Skill1").bootstrapTable("updateRow", {
        index: 13,
        row: rows[13]
    });
    for (var i = 0; i < rows.length; i++) {
        $("#Grow" + i)[0].value = rows[i].Growup;
        $("#Prof" + i)[0].value = rows[i].Profession;
        $("#Interest" + i)[0].value = rows[i].Interest;

        if (!isNaN(parseInt($("#Prof" + i)[0].value))) {
            SumPoint += parseInt($("#Prof" + i)[0].value)
            $("#EXPROF")[0].innerHTML = SumPoint;
        }
        if (!isNaN(parseInt($("#Interest" + i)[0].value))) {
            InterestPoint += parseInt($("#Interest" + i)[0].value);
            $("#EXINTEREST")[0].innerHTML = Interest;
        }


    }

    var rows2 = $("#Skill2").bootstrapTable("getData")
    for (var i = 0; i < rows2.length; i++) {
        $("#Grows" + i)[0].value = rows2[i].Growup;
        $("#Profs" + i)[0].value = rows2[i].Profession;
        $("#Interests" + i)[0].value = rows2[i].Interest;

        if (!isNaN(parseInt($("#Profs" + i)[0].value))) {
            SumPoint += parseInt($("#Profs" + i)[0].value)
            $("#EXPROF")[0].innerHTML = SumPoint;
        }
        if (!isNaN(parseInt($("#Interests" + i)[0].value))) {
            InterestPoint += parseInt($("#Interests" + i)[0].value);
            $("#EXINTEREST")[0].innerHTML = Interest;
        }

    }
    if (InterestPoint > Interest) {
        layer.msg("分配的兴趣点数超出了兴趣购点总数");
    }
    if (SumPoint > Prof) {
        layer.msg("分配的职业点数超出了职业购点总数");
    }
}

function ChangeInterest(index) {
    var row = $("#Skill1").bootstrapTable("getData")[index];
    var SumPoint = 0;
    var InterestPoint = 0;

    row.Interest = $("#Interest" + index).val();
    // 更新表格中的数据
    $("#Skill1").bootstrapTable("updateRow", {
        index: index,
        row: row
    });

    var rows = $("#Skill1").bootstrapTable("getData")
    rows[13].Inception = Math.floor(previousValueDex / 2);
    // 更新表格中的数据
    $("#Skill1").bootstrapTable("updateRow", {
        index: 13,
        row: rows[13]
    });
    for (var i = 0; i < rows.length; i++) {
        $("#Grow" + i)[0].value = rows[i].Growup;
        $("#Prof" + i)[0].value = rows[i].Profession;
        $("#Interest" + i)[0].value = rows[i].Interest;

        if (!isNaN(parseInt($("#Prof" + i)[0].value))) {
            SumPoint += parseInt($("#Prof" + i)[0].value)
            $("#EXPROF")[0].innerHTML = SumPoint;
        }
        if (!isNaN(parseInt($("#Interest" + i)[0].value))) {
            InterestPoint += parseInt($("#Interest" + i)[0].value);
            $("#EXINTEREST")[0].innerHTML = InterestPoint;
        }

    }

    var rows2 = $("#Skill2").bootstrapTable("getData")
    for (var i = 0; i < rows2.length; i++) {
        $("#Grows" + i)[0].value = rows2[i].Growup;
        $("#Profs" + i)[0].value = rows2[i].Profession;
        $("#Interests" + i)[0].value = rows2[i].Interest;

        if (!isNaN(parseInt($("#Profs" + i)[0].value))) {
            SumPoint += parseInt($("#Profs" + i)[0].value)
            $("#EXPROF")[0].innerHTML = SumPoint;
        }
        if (!isNaN(parseInt($("#Interests" + i)[0].value))) {
            InterestPoint += parseInt($("#Interests" + i)[0].value);
            $("#EXINTEREST")[0].innerHTML = InterestPoint;
        }

    }
    if (InterestPoint > Interest) {
        layer.msg("分配的兴趣点数超出了兴趣购点总数");
    }
    if (SumPoint > Prof) {
        layer.msg("分配的职业点数超出了职业购点总数");
    }
}

function ChangeProf2(index) {
    var row = $("#Skill2").bootstrapTable("getData")[index];
    var SumPoint = 0;
    var InterestPoint = 0;


    row.Profession = $("#Profs" + index).val();
    // 更新表格中的数据
    $("#Skill2").bootstrapTable("updateRow", {
        index: index,
        row: row
    });

    var rows = $("#Skill1").bootstrapTable("getData")
    rows[13].Inception = Math.floor(previousValueDex / 2);
    // 更新表格中的数据
    $("#Skill1").bootstrapTable("updateRow", {
        index: 13,
        row: rows[13]
    });
    for (var i = 0; i < rows.length; i++) {
        $("#Grow" + i)[0].value = rows[i].Growup;
        $("#Prof" + i)[0].value = rows[i].Profession;
        $("#Interest" + i)[0].value = rows[i].Interest;

        if (!isNaN(parseInt($("#Prof" + i)[0].value))) {
            SumPoint += parseInt($("#Prof" + i)[0].value)
            $("#EXPROF")[0].innerHTML = SumPoint;
        }
        if (!isNaN(parseInt($("#Interest" + i)[0].value))) {
            InterestPoint += parseInt($("#Interest" + i)[0].value);
            $("#EXINTEREST")[0].innerHTML = InterestPoint;
        }

    }

    var rows = $("#Skill2").bootstrapTable("getData")
    for (var i = 0; i < rows.length; i++) {
        $("#Grows" + i)[0].value = rows[i].Growup;
        $("#Profs" + i)[0].value = rows[i].Profession;
        $("#Interests" + i)[0].value = rows[i].Interest;

        if (!isNaN(parseInt($("#Profs" + i)[0].value))) {
            SumPoint += parseInt($("#Profs" + i)[0].value)
            $("#EXPROF")[0].innerHTML = SumPoint;
        }
        if (!isNaN(parseInt($("#Interests" + i)[0].value))) {
            InterestPoint += parseInt($("#Interests" + i)[0].value);
            $("#EXINTEREST")[0].innerHTML = InterestPoint;
        }

    }
    if (InterestPoint > Interest) {
        layer.msg("分配的兴趣点数超出了兴趣购点总数");
    }
    if (SumPoint > Prof) {
        layer.msg("分配的职业点数超出了职业购点总数");
    }
}

function ChangeGrowup2(index) {
    var row = $("#Skill2").bootstrapTable("getData")[index];
    var SumPoint = 0;
    var InterestPoint = 0;

    row.Growup = $("#Grows" + index).val();
    // 更新表格中的数据
    $("#Skill2").bootstrapTable("updateRow", {
        index: index,
        row: row
    });

    var rows = $("#Skill1").bootstrapTable("getData")
    rows[13].Inception = Math.floor(previousValueDex / 2);
    // 更新表格中的数据
    $("#Skill1").bootstrapTable("updateRow", {
        index: 13,
        row: rows[13]
    });
    for (var i = 0; i < rows.length; i++) {
        $("#Grow" + i)[0].value = rows[i].Growup;
        $("#Prof" + i)[0].value = rows[i].Profession;
        $("#Interest" + i)[0].value = rows[i].Interest;

        if (!isNaN(parseInt($("#Prof" + i)[0].value))) {
            SumPoint += parseInt($("#Prof" + i)[0].value)
            $("#EXPROF")[0].innerHTML = SumPoint;
        }
        if (!isNaN(parseInt($("#Interest" + i)[0].value))) {
            InterestPoint += parseInt($("#Interest" + i)[0].value);
            $("#EXINTEREST")[0].innerHTML = InterestPoint;
        }

    }

    var rows = $("#Skill2").bootstrapTable("getData")
    for (var i = 0; i < rows.length; i++) {
        $("#Grows" + i)[0].value = rows[i].Growup;
        $("#Profs" + i)[0].value = rows[i].Profession;
        $("#Interests" + i)[0].value = rows[i].Interest;

        if (!isNaN(parseInt($("#Profs" + i)[0].value))) {
            SumPoint += parseInt($("#Profs" + i)[0].value)
            $("#EXPROF")[0].innerHTML = SumPoint;
        }
        if (!isNaN(parseInt($("#Interests" + i)[0].value))) {
            InterestPoint += parseInt($("#Interests" + i)[0].value);
            $("#EXINTEREST")[0].innerHTML = InterestPoint;
        }


    }
    if (InterestPoint > Interest) {
        layer.msg("分配的兴趣点数超出了兴趣购点总数");
    }
    if (SumPoint > Prof) {
        layer.msg("分配的职业点数超出了职业购点总数");
    }
}

function ChangeInterest2(index) {
    var row = $("#Skill2").bootstrapTable("getData")[index];
    var SumPoint = 0;
    var InterestPoint = 0;

    row.Interest = $("#Interests" + index).val();
    // 更新表格中的数据
    $("#Skill2").bootstrapTable("updateRow", {
        index: index,
        row: row
    });

    var rows = $("#Skill1").bootstrapTable("getData")
    //闪避刷新
    rows[13].Inception = Math.floor(previousValueDex / 2);
    // 更新表格中的数据
    $("#Skill1").bootstrapTable("updateRow", {
        index: 13,
        row: rows[13]
    });
    for (var i = 0; i < rows.length; i++) {
        $("#Grow" + i)[0].value = rows[i].Growup;
        $("#Prof" + i)[0].value = rows[i].Profession;
        $("#Interest" + i)[0].value = rows[i].Interest;

        if (!isNaN(parseInt($("#Prof" + i)[0].value))) {
            SumPoint += parseInt($("#Prof" + i)[0].value)
            $("#EXPROF")[0].innerHTML = SumPoint;
        }
        if (!isNaN(parseInt($("#Interest" + i)[0].value))) {
            InterestPoint += parseInt($("#Interest" + i)[0].value);
            $("#EXINTEREST")[0].innerHTML = InterestPoint;
        }

    }

    var rows = $("#Skill2").bootstrapTable("getData")
    for (var i = 0; i < rows.length; i++) {
        $("#Grows" + i)[0].value = rows[i].Growup;
        $("#Profs" + i)[0].value = rows[i].Profession;
        $("#Interests" + i)[0].value = rows[i].Interest;

        if (!isNaN(parseInt($("#Profs" + i)[0].value))) {
            SumPoint += parseInt($("#Profs" + i)[0].value)
            $("#EXPROF")[0].innerHTML = SumPoint;
        }
        if (!isNaN(parseInt($("#Interests" + i)[0].value))) {
            InterestPoint += parseInt($("#Interests" + i)[0].value);
            $("#EXINTEREST")[0].innerHTML = InterestPoint;
        }

    }
    if (InterestPoint > Interest) {
        layer.msg("分配的兴趣点数超出了兴趣购点总数");
    }
    if (SumPoint > Prof) {
        layer.msg("分配的职业点数超出了职业购点总数");
    }
}

//function MainTips() {
//    //tips层
//    layer.tips('关键链接 <br> 在背景故事中，选出你认为最重要的一个描述作为关键连接。<br> 关键连接不会被KP更改和设计、在你面对关键连接的危机时如果没有掷骰子的机会，那他就不能被KP摧毁、杀害、移除。玩家必须至少有一次掷骰子的机会来拯救该关键连接<br> ·关键连接可以帮助调查员恢复san值，但是如果失去关键连接则会进行一个1/1D6的SC', '#tipsMain');
//}

document.getElementById("tipsMain").addEventListener("click", function () {
    // 弹出提示框
    var tipsContent = '关键链接<br>在背景故事中，选出你认为最重要的一个描述作为关键连接。' +
        '<br> 关键连接不会被KP更改和设计、在你面对关键连接的危机时如果没有掷骰子的机会，那他就不能被KP摧毁、杀害、移除。' +
    '玩家必须至少有一次掷骰子的机会来拯救该关键连接 <br>★关键连接可以帮助调查员恢复san值，但是如果失去关键连接则会进行一个1 / 1D6的SC';
    var tipsIndex = layer.tips(tipsContent, '#tipsMain', {
        tips: [3, '#tipsMain'], // 方向: 1为向下，2为向上，3为向左，4为向右，还可以自定义坐标 ['100px', '100px']
        closeBtn: 1, // 显示关闭按钮
        time: 0, // 将time参数设置为0，阻止自动消失
    });

    // 监听整个文档的点击事件
    document.addEventListener("click", function (e) {
        var target = e.target;

        // 如果点击的目标不是按钮和提示框，则关闭提示框
        if (target !== document.getElementById("tipsMain")) {
            layer.close(tipsIndex);
        }
    });
});

/*----------------------------------------------------------技能表提示信息----------------------------------------------------------*/
document.getElementById("IconTips").addEventListener("mouseover", function () {
    // 鼠标移入时，弹出提示框
    var tipsContent = '⭐为本职技能<br>※根据职业描述单选一项或多选几项<br>☆则是二选一<br>' +
        '部分职业会出现两个及以上的二选一，此时需要对照职业表选择，而不是所有☆选一<br>ps：表头所有的选择框代表成长标记<br>' + 
        '如果是短团，技能成功后可以选择勾号标记，在结束时KP宣布幕间成长，则成功技能可进行成长鉴定;<br>' +
        '如果是长团，技能成功后可以选择勾号标记，在每一章结束时KP宣布幕间成长，则成功技能可进行成长鉴定。';
    this.tipsIndex = layer.tips(tipsContent, this, {
        tips: [1, '#IconTips'], // 方向：1为向下
        time: 0, // 设置为0，阻止自动消失
    });
});

document.getElementById("IconTips").addEventListener("mouseout", function () {
    // 鼠标移出时，取消提示框
    layer.close(this.tipsIndex);
});
/*----------------------------------------------------------技能表提示信息----------------------------------------------------------*/

/*----------------------------------------------------------年龄提示信息----------------------------------------------------------*/
document.getElementById("AgeTips").addEventListener("mouseover", function () {
    // 鼠标移入时，弹出提示框
    var tipsContent = '一般来说， 年龄应在15-90之间<br>15 - 19: STR,SIZ共-5，EDU-5,幸运骰2选高<br>' +
        '20 - 39: EDU进步检定 * 1 <br> 40+ : 进步检定 * 2, STR CON DEX共 - 5 APP - 5 <br> 50+ : 进步检定 * 3, STR CON DEX共 - 10 APP - 10' +
        '<br> 60+ : 进步检定 * 4, STR CON DEX共 - 20 APP - 15 <br> 70+ : 进步检定 * 4, STR CON DEX共 - 40 APP - 20 <br> 80+ : 进步检定 * 4, STR CON DEX共 - 80 APP - 25';
    this.tipsIndex = layer.tips(tipsContent, this, {
        tips: [2, '#AgeTips'], // 方向：1为向下
        time: 0 // 设置为0，阻止自动消失
    });
});

document.getElementById("AgeTips").addEventListener("mouseout", function () {
    // 鼠标移出时，取消提示框
    layer.close(this.tipsIndex);
});
/*----------------------------------------------------------年龄提示信息----------------------------------------------------------*/

/*----------------------------------------------------------角色属性确认按钮提示信息----------------------------------------------------------*/
document.getElementById("Propoties").addEventListener("mouseover", function () {
    // 鼠标移入时，弹出提示框
    var tipsContent = '确认后会将人物数据进行保存，在下方角色属性图中进行可视化';
    this.tipsIndex = layer.tips(tipsContent, this, {
        tips: [2, '#Propoties'], // 方向：1为向下
        time: 0 // 设置为0，阻止自动消失
    });
});

document.getElementById("Propoties").addEventListener("mouseout", function () {
    // 鼠标移出时，取消提示框
    layer.close(this.tipsIndex);
});
/*----------------------------------------------------------角色属性确认按钮提示信息----------------------------------------------------------*/

/*----------------------------------------------------------角色技能确认按钮提示信息----------------------------------------------------------*/
document.getElementById("Skills").addEventListener("mouseover", function () {
    // 鼠标移入时，弹出提示框
    var tipsContent = '确认后会将技能数据进行保存，在下方技能属性图中进行可视化';
    this.tipsIndex = layer.tips(tipsContent, this, {
        tips: [2, '#Skills'], // 方向：1为向下
        time: 0 // 设置为0，阻止自动消失
    });
});

document.getElementById("Skills").addEventListener("mouseout", function () {
    // 鼠标移出时，取消提示框
    layer.close(this.tipsIndex);
});
/*----------------------------------------------------------角色技能确认按钮提示信息----------------------------------------------------------*/


var previousValueInt2;//智力

var previousValueStr2 = 0;//力量
var previousValueEdu2 = 0;//教育
var previousValueDex2 = 0;//敏捷
var previousValueApp2 = 0;//外貌
var previousValuePow2 = 0;//意志
var previousValuePow2 = 0;//体质
var previousValuePow2 = 0;//体型
var previousValueLuck = 0;//幸运

$("#Propoties").on("click", function () {
    previousValueInt2 = parseInt(document.getElementById("IntShow").innerHTML);//智力
    previousValueStr2 = parseInt(document.getElementById("StrShow").innerHTML);//力量
    previousValueEdu2 = parseInt(document.getElementById("EduShow").innerHTML);//教育
    previousValueDex2 = parseInt(document.getElementById("DexShow").innerHTML);//敏捷
    previousValueApp2 = parseInt(document.getElementById("AppShow").innerHTML);//外貌
    previousValuePow2 = parseInt(document.getElementById("PowShow").innerHTML);//意志
    previousValueCon2 = parseInt(document.getElementById("ConShow").innerHTML);//体质
    previousValueSize2 = parseInt(document.getElementById("SizeShow").innerHTML);//体型
    previousValueLuck = parseInt($("#Luck")[0].value);//幸运

    // 基于准备好的dom，初始化ECharts实例
    var myChart = echarts.init(document.getElementById('radarChart'));

    // 雷达图的配置项
    var option = {
        radar: {
            indicator: [
                { name: '力量', max: 100 },
                { name: '体质', max: 100 },
                { name: '体型', max: 100 },
                { name: '敏捷', max: 100 },
                { name: '外貌', max: 100 },
                { name: '智力', max: 100 },
                { name: '意志', max: 100 },
                { name: '教育', max: 100 },
                { name: '幸运', max: 100 },
            ],
        },
        tooltip: {
            // 鼠标移动到数据点时显示 tooltip
            trigger: 'item',
        },
        series: [
            {
                type: 'radar',
                data: [
                    {
                        value: [previousValueStr2, previousValueCon2, previousValueSize2, previousValueDex2, previousValueApp2
                            , previousValueInt2, previousValuePow2, previousValueEdu2, previousValueLuck], // 填充数据
                        name: '属性',
                    },
                ],
            },
        ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});

$("#Skills").on("click", function () {
    var dataSkill1 = $("#Skill1").bootstrapTable("getData");
    var dataSkill2 = $("#Skill2").bootstrapTable("getData");

    Survey = dataSkill1[0].Hard + dataSkill1[1].Hard + dataSkill1[2].Hard + dataSkill1[9].Hard + dataSkill1[27].Hard
        + dataSkill1[30].Hard + dataSkill1[31].Hard + dataSkill1[32].Hard + dataSkill1[33].Hard + dataSkill2[1].Hard
        + dataSkill2[2].Hard + dataSkill2[6].Hard + dataSkill2[8].Hard + dataSkill2[12].Hard + dataSkill2[13].Hard
        + dataSkill2[15].Hard + dataSkill2[16].Hard + dataSkill2[17].Hard + dataSkill2[19].Hard + dataSkill2[24].Hard
        + dataSkill2[28].Hard + dataSkill2[31].Hard

    Knowledge = dataSkill1[0].Hard + dataSkill1[1].Hard + dataSkill1[9].Hard + dataSkill1[16].Hard + dataSkill1[27].Hard
        + dataSkill1[30].Hard + dataSkill1[31].Hard + dataSkill1[32].Hard + dataSkill2[0].Hard + dataSkill2[1].Hard
        + dataSkill2[5].Hard + dataSkill2[6].Hard + dataSkill2[12].Hard + dataSkill2[13].Hard + dataSkill2[15].Hard
        + dataSkill2[16].Hard + dataSkill2[17].Hard + dataSkill2[28].Hard + dataSkill2[31].Hard

    Negotiate = dataSkill1[1].Hard + dataSkill1[2].Hard + dataSkill1[7].Hard + dataSkill1[10].Hard + dataSkill1[12].Hard
        + dataSkill1[14].Hard + dataSkill1[17].Hard + dataSkill1[28].Hard + dataSkill1[31].Hard + dataSkill1[30].Hard + dataSkill1[32].Hard
        + dataSkill2[0].Hard + dataSkill2[10].Hard + dataSkill2[12].Hard + dataSkill2[13].Hard + dataSkill2[24].Hard
        + dataSkill2[28].Hard + dataSkill2[31].Hard

    Battle = dataSkill1[13].Hard + dataSkill1[18].Hard + dataSkill1[19].Hard + dataSkill1[20].Hard + dataSkill1[21].Hard
        + dataSkill1[22].Hard + dataSkill1[23].Hard + dataSkill1[24].Hard + dataSkill1[25].Hard + dataSkill1[28].Hard
        + dataSkill2[9].Hard + dataSkill2[14].Hard + dataSkill2[19].Hard + dataSkill2[20].Hard + dataSkill2[23].Hard
        + dataSkill2[25].Hard + dataSkill2[27].Hard + dataSkill2[29].Hard + dataSkill2[30].Hard

    Stunt = dataSkill1[3].Hard + dataSkill1[4].Hard + dataSkill1[8].Hard + dataSkill1[12].Hard + dataSkill1[14].Hard
        + dataSkill1[15].Hard + dataSkill1[29].Hard + dataSkill2[4].Hard + dataSkill2[3].Hard + dataSkill2[5].Hard
        + dataSkill2[7].Hard + dataSkill2[9].Hard + dataSkill2[11].Hard + dataSkill2[14].Hard + dataSkill2[18].Hard
        + dataSkill2[20].Hard + dataSkill2[21].Hard + dataSkill2[22].Hard + dataSkill2[23].Hard + dataSkill2[24].Hard
        + dataSkill2[25].Hard + dataSkill2[26].Hard + dataSkill2[27].Hard + dataSkill2[29].Hard + dataSkill2[30].Hard

    Support = dataSkill1[1].Hard + dataSkill1[14].Hard + dataSkill1[26].Hard + dataSkill2[5].Hard + dataSkill2[7].Hard
        + dataSkill2[11].Hard + dataSkill2[12].Hard + dataSkill2[25].Hard + dataSkill2[29].Hard + dataSkill2[30].Hard

    // 基于准备好的dom，初始化ECharts实例
    var myChart2 = echarts.init(document.getElementById('radarChart2'));

    // 雷达图的配置项
    var option2 = {
        radar: {
            indicator: [
                { name: '调查', max: 150 },
                { name: '学问', max: 150 },
                { name: '交涉', max: 150 },
                { name: '支援', max: 150 },
                { name: '战斗', max: 150 },
                { name: '特技', max: 150 },
            ],
        },
        tooltip: {
            // 鼠标移动到数据点时显示 tooltip
            trigger: 'item',
        },
        series: [
            {
                type: 'radar',
                data: [
                    {
                        value: [Survey, Knowledge, Negotiate, Support, Battle, Stunt], // 填充数据
                        name: '属性',
                    },
                ],
            },
        ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option2);
});

//表格展开收起动画
const toggleButton = document.getElementById('toggleButton');
const tableContainer = document.getElementById('section3');

let isTableVisible = false;

toggleButton.addEventListener('click', () => {
    if (isTableVisible) {
        // 如果表格可见，则收起动画
        tableContainer.style.maxHeight = '70' + 'px';
    } else {
        // 如果表格不可见，则展开动画
        tableContainer.style.maxHeight = tableContainer.scrollHeight + 'px';
    }
    isTableVisible = !isTableVisible;
});

//保存整个页面的数据
function savePageContent() {
    //角色名
    const characterName = document.getElementById('Name').value;
    // 获取整个页面的 HTML 内容
    const Name = document.getElementById("Name").value;
    const Player = document.getElementById("Player").value;
    const Century = document.getElementById("Century").value;
    const Pref = document.getElementById("pref").value;
    const Prefid = document.getElementById("prefid").value;
    const Description = document.getElementById("description").value;
    const Credit = document.getElementById("credit").value;
    const Status = document.getElementById("status").value;
    const Age = document.getElementById("Age").value;
    const Sex = document.getElementById("Sex").value;
    const Addr = document.getElementById("Addr").value;
    const Hometown = document.getElementById("Hometown").value;
    const Luck = document.getElementById("Luck").value;
    const LifePoint = document.getElementById("LifePoint").value;
    const MagicPoint = document.getElementById("MagicPoint").value;
    const SanPoint = document.getElementById("SanPoint").value;
    const DamagePoint = document.getElementById("DamagePoint").value;
    const SumPoint = document.getElementById("SumPoint").value;
    const UsedPoint = document.getElementById("UsedPoint").value;
    const StrRange = document.getElementById("StrRange").value;
    const ConRange = document.getElementById("ConRange").value;
    const SizeRange = document.getElementById("SizeRange").value;
    const DexRange = document.getElementById("DexRange").value;
    const AppRange = document.getElementById("AppRange").value;
    const IntRange = document.getElementById("IntRange").value;
    const PowRange = document.getElementById("PowRange").value;
    const EduRange = document.getElementById("EduRange").value;
    const Weapon = $("#Weapon").bootstrapTable("getData");
    const Carryon = $("#Carryon").bootstrapTable("getData");
    const Skill1 = $("#Skill1").bootstrapTable("getData");
    const Skill2 = $("#Skill2").bootstrapTable("getData");
    const AppDescription = document.getElementById("AppDescription").value;
    const Faith = document.getElementById("Faith").value;
    const Important = document.getElementById("Important").value;
    const ImportantPlace = document.getElementById("ImportantPlace").value;
    const Treasure = document.getElementById("Treasure").value;
    const Peculiarity = document.getElementById("Peculiarity").value;
    const HardTell = document.getElementById("HardTell").value;
    const Scar = document.getElementById("Scar").value;
    const Phobia = document.getElementById("Phobia").value;
    const BackgroundStory = document.getElementById("BackgroundStory").value;
    const Transportation = document.getElementById("Transportation").value;
    const Domicile = document.getElementById("Domicile").value;
    const Luxury = document.getElementById("Luxury").value;
    const Stock = document.getElementById("Stock").value;
    const Other = document.getElementById("Other").value;


    const pageContent = {
        Name: Name,
        Player: Player,
        Century: Century,
        Pref: Pref,
        Prefid: Prefid,
        Description: Description,
        Credit: Credit,
        Status: Status,
        Age: Age,
        Sex: Sex,
        Addr: Addr,
        Hometown: Hometown,
        Luck: Luck,
        LifePoint: LifePoint,
        MagicPoint: MagicPoint,
        SanPoint: SanPoint,
        DamagePoint: DamagePoint,
        SumPoint: SumPoint,
        UsedPoint: UsedPoint,
        StrRange: StrRange,
        ConRange: ConRange,
        SizeRange: SizeRange,
        DexRange: DexRange,
        AppRange: AppRange,
        IntRange: IntRange,
        PowRange: PowRange,
        EduRange: EduRange,
        Weapon: $("#Weapon").bootstrapTable("getData"),
        Carryon: $("#Carryon").bootstrapTable("getData"),
        Skill1: $("#Skill1").bootstrapTable("getData"),
        Skill2: $("#Skill2").bootstrapTable("getData"),
        AppDescription: AppDescription,
        Faith: Faith,
        Important: Important,
        ImportantPlace: ImportantPlace,
        Treasure: Treasure,
        Peculiarity: Peculiarity,
        HardTell: HardTell,
        Scar: Scar,
        Phobia: Phobia,
        BackgroundStory: BackgroundStory,
        Transportation: Transportation,
        Domicile: Domicile,
        Luxury: Luxury,
        Stock: Stock,
        Other: Other,
    }

    ////存储技能表成功标记checkbox
    //const allchecks = $(".checkbox");
    //const stateString = {};
    //for (var i = 0; i < allchecks.length; i++) {
    //    stateString[i] = allchecks[i].checked;
    //}
    //const savedChecks = JSON.parse(localStorage.getItem('checks')) || {};
    //savedChecks[characterName] = stateString;
    //localStorage.setItem('checks', JSON.stringify(savedChecks));

    // 从localStorage中获取之前保存的数据
    const savedCharacters = JSON.parse(localStorage.getItem('characters')) || {};

    // 将当前页面内容保存到localStorage中
    savedCharacters[characterName] = pageContent;
    localStorage.setItem('characters', JSON.stringify(savedCharacters));

    // 更新select选项
    loadCharacterList();
}

// 加载角色列表到select选项中
function loadCharacterList() {
    const characterSelect = document.getElementById('characterSelect');
    characterSelect.innerHTML = '<option disabled selected>------------</option>';

    // 从localStorage中获取保存的角色名字列表
    const savedCharacters = JSON.parse(localStorage.getItem('characters')) || {};

    // 将每个角色名字作为option添加到select中
    for (const characterName in savedCharacters) {
        const option = document.createElement('option');
        option.value = characterName;
        option.textContent = characterName;
        characterSelect.appendChild(option);
    }
}

// 切换选项时显示对应的网页数据
document.getElementById('characterSelect').addEventListener('change', function () {
    const characterSelect = document.getElementById('characterSelect');
    const selectedCharacter = characterSelect.value;

    // 从localStorage中获取选中角色的页面数据
    const savedCharacters = JSON.parse(localStorage.getItem('characters')) || {};
    const selectedCharacterData = savedCharacters[selectedCharacter];

    $("#delButton")[0].disabled = false;

    // 将页面数据设置为当前选中角色的数据
    document.getElementById("Name").value = selectedCharacterData.Name;
    document.getElementById("Player").value = selectedCharacterData.Player;
    document.getElementById("Century").value = selectedCharacterData.Century;
    document.getElementById("pref").value = selectedCharacterData.Pref;
    document.getElementById("prefid").value = selectedCharacterData.Prefid;
    document.getElementById("description").value = selectedCharacterData.Description;
    document.getElementById("credit").value = selectedCharacterData.Credit;
    document.getElementById("status").value = selectedCharacterData.Status;
    Sta = selectedCharacterData.Status;
    document.getElementById("Age").value = selectedCharacterData.Age;
    document.getElementById("Sex").value = selectedCharacterData.Sex;
    document.getElementById("Addr").value = selectedCharacterData.Addr;
    document.getElementById("Hometown").value = selectedCharacterData.Hometown;
    document.getElementById("Luck").value = selectedCharacterData.Luck;
    document.getElementById("LifePoint").value = selectedCharacterData.LifePoint;
    document.getElementById("MagicPoint").value = selectedCharacterData.MagicPoint;
    document.getElementById("SanPoint").value = selectedCharacterData.SanPoint;
    document.getElementById("DamagePoint").value = selectedCharacterData.DamagePoint;
    document.getElementById("SumPoint").value = selectedCharacterData.SumPoint;
    document.getElementById("UsedPoint").value = selectedCharacterData.UsedPoint;
    document.getElementById("StrRange").value = selectedCharacterData.StrRange;
    document.getElementById("ConRange").value = selectedCharacterData.ConRange;
    document.getElementById("SizeRange").value = selectedCharacterData.SizeRange;
    document.getElementById("DexRange").value = selectedCharacterData.DexRange;
    document.getElementById("AppRange").value = selectedCharacterData.AppRange;
    document.getElementById("IntRange").value = selectedCharacterData.IntRange;
    document.getElementById("PowRange").value = selectedCharacterData.PowRange;
    document.getElementById("EduRange").value = selectedCharacterData.EduRange;
    $("#Weapon").bootstrapTable("load", selectedCharacterData.Weapon);
    $("#Carryon").bootstrapTable("load", selectedCharacterData.Carryon);
    $("#Skill1").bootstrapTable("load", selectedCharacterData.Skill1);
    $("#Skill2").bootstrapTable("load", selectedCharacterData.Skill2);
    document.getElementById("AppDescription").value = selectedCharacterData.AppDescription;
    document.getElementById("Faith").value = selectedCharacterData.Faith;
    document.getElementById("Important").value = selectedCharacterData.Important;
    document.getElementById("ImportantPlace").value = selectedCharacterData.ImportantPlace;
    document.getElementById("Treasure").value = selectedCharacterData.Treasure;
    document.getElementById("Peculiarity").value = selectedCharacterData.Peculiarity;
    document.getElementById("HardTell").value = selectedCharacterData.HardTell;
    document.getElementById("Scar").value = selectedCharacterData.Scar;
    document.getElementById("Phobia").value = selectedCharacterData.Phobia;
    document.getElementById("BackgroundStory").value = selectedCharacterData.BackgroundStory;
    document.getElementById("Transportation").value = selectedCharacterData.Transportation;
    document.getElementById("Domicile").value = selectedCharacterData.Domicile;
    document.getElementById("Luxury").value = selectedCharacterData.Luxury;
    document.getElementById("Stock").value = selectedCharacterData.Stock;
    document.getElementById("Other").value = selectedCharacterData.Other;



    // 延迟一段时间后再生成图表，例如延迟 500 毫秒
    setTimeout(function () {
        document.getElementById('Propoties').click();
        document.getElementById('Skills').click();
    }, 500);

    //将表格信息填入select和input中
    var carryon = $("#Carryon").bootstrapTable("getData");
    for (var i = 0; i < carryon.length; i++) {
        $("#Status" + i)[0].value = carryon[i].Status;
        $("#Position" + i)[0].value = carryon[i].Position;
        $("#ObjectName" + i)[0].value = carryon[i].ObjectName;
        $("#Bagage" + i)[0].value = carryon[i].ObjectName;

    }

    var row = $("#Skill1").bootstrapTable("getData")
    row[13].Inception = Math.floor(previousValueDex / 2);
    // 更新表格中的数据
    $("#Skill1").bootstrapTable("updateRow", {
        index: 13,
        row: row[13]
    });
    var SumPoint = 0;
    var InterestPoint = 0;
    for (var i = 0; i < row.length; i++) {
        $("#Grow" + i)[0].value = row[i].Growup;
        $("#Prof" + i)[0].value = row[i].Profession;
        $("#Interest" + i)[0].value = row[i].Interest;

        if (!isNaN(parseInt($("#Prof" + i)[0].value))) {
            SumPoint += parseInt($("#Prof" + i)[0].value)
            $("#EXPROF")[0].innerHTML = SumPoint;
        }
        if (!isNaN(parseInt($("#Interest" + i)[0].value))) {
            InterestPoint += parseInt($("#Interest" + i)[0].value);
            $("#EXINTEREST")[0].innerHTML = InterestPoint;
        }

    }

    var rows = $("#Skill2").bootstrapTable("getData")
    for (var i = 0; i < rows.length; i++) {
        $("#Grows" + i)[0].value = rows[i].Growup;
        $("#Profs" + i)[0].value = rows[i].Profession;
        $("#Interests" + i)[0].value = rows[i].Interest;

        if (!isNaN(parseInt($("#Profs" + i)[0].value))) {
            SumPoint += parseInt($("#Profs" + i)[0].value)
            $("#EXPROF")[0].innerHTML = SumPoint;
        }
        if (!isNaN(parseInt($("#Interests" + i)[0].value))) {
            InterestPoint += parseInt($("#Interests" + i)[0].value);
            $("#EXINTEREST")[0].innerHTML = InterestPoint;
        }

    }

    //// 从localStorage中获取选中角色的成长标记
    //const savedChecks = JSON.parse(localStorage.getItem('checks')) || {};
    //const selectedCheckData = savedChecks[selectedCharacter];
    //const allChecks = $(".checkbox");
    //// 确保 selectedCheckData 是对象
    //if (typeof selectedCheckData === 'object' && selectedCheckData !== null) {
    //    // 遍历所有复选框元素
    //    for (var i = 0; i < allChecks.length; i++) {
    //        // 设置复选框的checked属性为 selectedCheckData 对应的值
    //        allChecks[i].checked = selectedCheckData[i];
    //    }
    //}
});

//删除当前选择的角色
function DeltheCharactor() {
    layer.confirm('您确定要删除该角色吗？', {
        btn: ['是', '否'], //按钮
        shade: false //不显示遮罩
    }, function () {
        const characterSelect = document.getElementById('characterSelect');
        const selectedCharacter = characterSelect.value;

        // 从localStorage中获取选中角色的页面数据
        const savedCharacters = JSON.parse(localStorage.getItem('characters')) || {};
        const selectedCharacterData = savedCharacters[selectedCharacter];
        // 获取到相应的数据后，检查 selectedCharacterData 是否有值
        if (selectedCharacterData) {
            // 删除这条数据
            delete savedCharacters[selectedCharacter];
            // 将更新后的数据重新保存到 localStorage 中
            localStorage.setItem('characters', JSON.stringify(savedCharacters));
            loadCharacterList();
        }
        layer.msg('删除成功', { icon: 1 });
    }, function () {
        
    });
}