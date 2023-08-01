var Weapondata = [];//存储所有武器数据
var WeaponChoose = [];//存储每次check的数据

$(function () {
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            Finish()
        }
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
];

//武器表列头
var columns2 = [
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

$.ajax({
    url: "/Create/WeaponJson",
    dataType: "json",
    success: function (data) {
        // 处理文件内容
        Weapondata.push(data);
        //打开武器列表进行选择
        $("#Weapons").bootstrapTable({
            columns: columns,
            data: Weapondata[0],
            toolbar: "#buttons-toolbar",
            height: 780,
            search: true,
            onClickRow: function (row, $element) {
                //用于判断是否被选中
                var checkboxs = $element[0].className;
                //用于找到对应行的checkbox
                var checkbox = $element.find("input[type='checkbox']");

                if (checkboxs == 'selected') {
                    // 行已选中，取消选中并从WeaponChoose中移除
                    checkbox.prop("checked", false);
                    $element.removeClass("selected");

                    // 在WeaponChoose中查找并移除对应的数据
                    var index = WeaponChoose.findIndex(function (item) {
                        return item.WeaponType === row.WeaponType; // 使用唯一标识符进行匹配，你可以根据实际情况修改
                    });
                    if (index !== -1) {
                        WeaponChoose.splice(index, 1);
                    }
                } else {
                    // 行未选中，选中并添加到WeaponChoose
                    checkbox.prop("checked", true);
                    $element.addClass("selected");
                    WeaponChoose.push(row);
                }
            }
        });
    },
    error: function (xhr, status, error) {
        // 处理错误
        console.error(error);
    },
});


function Finish() {
    parent.MyLayer.close(parent.Index);
    if (WeaponChoose.length != 0) {
        parent.$("#Weapon").bootstrapTable("destroy");
        parent.$("#Weapon").bootstrapTable({
            columns: columns2,
            data: WeaponChoose
        });
    }
}