var columnsWeapon = [
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
    }
];

//随身携带物表头
var columnsCarryon = [
    {
        field: "Id",
        title: "序号",
        align: "center",
        visible: false,
        formatter: function (value, row, index) {
            return index + 1;
        }
    },
    {
        field: "Status",
        title: "状态",
        align: "center",
        width: 115
    },
    {
        field: "Position",
        title: "部位",
        align: "center",
        width: 120
    },
    {
        field: "ObjectName",
        title: "物品名称",
        width: 500,
        align: "center"
    },
    //{
    //    field: "Bagage",
    //    title: "背包格",
    //    align: "center"
    //}
];

const characterSelect = parent.document.getElementById('characterSelect');
const selectedCharacter = characterSelect.value;

// 从localStorage中获取选中角色的页面数据
const savedCharacters = JSON.parse(localStorage.getItem('characters')) || {};
const selectedCharacterData = savedCharacters[selectedCharacter];

document.getElementById("Name").innerHTML = selectedCharacterData.Name;
document.getElementById("Player").innerHTML = selectedCharacterData.Player;
document.getElementById("Century").innerHTML = selectedCharacterData.Century;
document.getElementById("pref").innerHTML = selectedCharacterData.Pref;
document.getElementById("prefid").innerHTML = selectedCharacterData.Prefid;
document.getElementById("Age").innerHTML = selectedCharacterData.Age;
document.getElementById("Sex").innerHTML = selectedCharacterData.Sex;
document.getElementById("Addr").innerHTML = selectedCharacterData.Addr;
document.getElementById("Hometown").innerHTML = selectedCharacterData.Hometown;
document.getElementById("Luck").innerHTML = selectedCharacterData.Luck;
document.getElementById("StrRange").innerHTML = selectedCharacterData.StrRange;
document.getElementById("ConRange").innerHTML = selectedCharacterData.ConRange;
document.getElementById("SizeRange").innerHTML = selectedCharacterData.SizeRange;
document.getElementById("DexRange").innerHTML = selectedCharacterData.DexRange;
document.getElementById("AppRange").innerHTML = selectedCharacterData.AppRange;
document.getElementById("IntRange").innerHTML = selectedCharacterData.IntRange;
document.getElementById("PowRange").innerHTML = selectedCharacterData.PowRange;
document.getElementById("EduRange").innerHTML = selectedCharacterData.EduRange;
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
//document.getElementById("Transportation").value = selectedCharacterData.Transportation;
//document.getElementById("Domicile").value = selectedCharacterData.Domicile;
//document.getElementById("Luxury").value = selectedCharacterData.Luxury;
//document.getElementById("Stock").value = selectedCharacterData.Stock;
document.getElementById("Other").value = selectedCharacterData.Other;

document.getElementById("PreviewLifePoint").innerHTML = parent.document.getElementById("LifePoint").innerHTML
document.getElementById("PreviewMagicPoint").innerHTML = parent.document.getElementById("MagicPoint").innerHTML
document.getElementById("PreviewSanPoint").innerHTML = parent.document.getElementById("SanPoint").innerHTML
document.getElementById("PreviewDamagePoint").innerHTML = parent.document.getElementById("DamagePoint").innerHTML

$("#PreviewCarryon").bootstrapTable({
    columns: columnsCarryon,
    data: selectedCharacterData.Carryon
});

$("#PreviewWeapon").bootstrapTable({
    columns: columnsWeapon,
    data: selectedCharacterData.Weapon
});



//属性雷达图
var previousValueInt2;//智力

var previousValueStr2 = 0;//力量
var previousValueEdu2 = 0;//教育
var previousValueDex2 = 0;//敏捷
var previousValueApp2 = 0;//外貌
var previousValuePow2 = 0;//意志
var previousValuePow2 = 0;//体质
var previousValuePow2 = 0;//体型
var previousValueLuck = 0;//幸运

previousValueInt2 = parseInt(document.getElementById("IntRange").innerHTML);//智力
previousValueStr2 = parseInt(document.getElementById("StrRange").innerHTML);//力量
previousValueEdu2 = parseInt(document.getElementById("EduRange").innerHTML);//教育
previousValueDex2 = parseInt(document.getElementById("DexRange").innerHTML);//敏捷
previousValueApp2 = parseInt(document.getElementById("AppRange").innerHTML);//外貌
previousValuePow2 = parseInt(document.getElementById("PowRange").innerHTML);//意志
previousValueCon2 = parseInt(document.getElementById("ConRange").innerHTML);//体质
previousValueSize2 = parseInt(document.getElementById("SizeRange").innerHTML);//体型
previousValueLuck = parseInt($("#Luck")[0].innerHTML);//幸运

// 基于准备好的dom，初始化ECharts实例
var myChart = echarts.init(document.getElementById('PreviewradarChart'));

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
        position: 'bottom',
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

var columnsSkill1 = [
    {
        field: "Successsign",
        title: "成功标记",
        align: "center",
        checkbox: true,
    },
    //{
    //    field: "Duty",
    //    title: "本职",
    //    align: "center",
    //},
    {
        field: "SkillName",
        title: "技能名称",
        align: "center",
        width: 150
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
    },
    {
        field: "Profession",
        title: "职业",
        align: "center",
    },
    {
        field: "Interest",
        title: "兴趣",
        align: "center",
    },
    {
        field: "Normal",
        title: "普通",
        align: "center",
    },
    {
        field: "Hard",
        title: "困难",
        align: "center",
    },
    {
        field: "Exdifficult",
        title: "极难",
        align: "center",
    }
];

var columnsSkill2 = [
    {
        field: "Successsign",
        title: "成功标记",
        align: "center",
        checkbox: true,
    },
    //{
    //    field: "Duty",
    //    title: "本职",
    //    align: "center",
    //},
    {
        field: "SkillName",
        title: "技能名称",
        align: "center",
        width: 150
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
    },
    {
        field: "Profession",
        title: "职业",
        align: "center",
    },
    {
        field: "Interest",
        title: "兴趣",
        align: "center",
    },
    {
        field: "Normal",
        title: "普通",
        align: "center",
    },
    {
        field: "Hard",
        title: "困难",
        align: "center",
    },
    {
        field: "Exdifficult",
        title: "极难",
        align: "center",
    }
];

selectedCharacterData.Skill1[4].SkillName = /*"技艺：" + */selectedCharacterData.Art[0];
selectedCharacterData.Skill1[5].SkillName = /*"技艺：" + */selectedCharacterData.Art[1];
selectedCharacterData.Skill1[6].SkillName = /*"技艺：" + */selectedCharacterData.Art[2];

selectedCharacterData.Skill1[19].SkillName = /*"格斗：" + */selectedCharacterData.Fight[0];
selectedCharacterData.Skill1[20].SkillName = /*"格斗：" + */selectedCharacterData.Fight[1];
selectedCharacterData.Skill1[21].SkillName = /*"格斗：" + */selectedCharacterData.Fight[2];

selectedCharacterData.Skill1[23].SkillName = /*"射击：" + */selectedCharacterData.Shoot[0];
selectedCharacterData.Skill1[24].SkillName = /*"射击：" + */selectedCharacterData.Shoot[1];
selectedCharacterData.Skill1[25].SkillName = /*"射击：" + */selectedCharacterData.Shoot[2];

selectedCharacterData.Skill1[30].SkillName = /*"外语：" + */selectedCharacterData.Language[0];
selectedCharacterData.Skill1[31].SkillName = /*"外语：" + */selectedCharacterData.Language[1];
selectedCharacterData.Skill1[32].SkillName = /*"外语：" + */selectedCharacterData.Language[2];


selectedCharacterData.Skill2[11].SkillName = "驾驶：" + selectedCharacterData.Drive[0];

selectedCharacterData.Skill2[15].SkillName = /*"科学：" + */selectedCharacterData.Tech[0];
selectedCharacterData.Skill2[16].SkillName = /*"科学：" + */selectedCharacterData.Tech[1];
selectedCharacterData.Skill2[17].SkillName = /*"科学：" + */selectedCharacterData.Tech[2];

selectedCharacterData.Skill2[21].SkillName = /*"生存：" + */selectedCharacterData.Survive;



$("#PreviewSkill1").bootstrapTable({
    columns: columnsSkill1,
    data: selectedCharacterData.Skill1,
    height:1350
});

$("#PreviewSkill2").bootstrapTable({
    columns: columnsSkill2,
    data: selectedCharacterData.Skill2,
    height: 1350
});

var dataSkill1 = $("#PreviewSkill1").bootstrapTable("getData");
var dataSkill2 = $("#PreviewSkill2").bootstrapTable("getData");

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
var myChart2 = echarts.init(document.getElementById('PreviewradarChart2'));

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
        position: 'bottom',
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

var tableRowCount = $('#PreviewSkill2').bootstrapTable('getData').length; // 获取表格的行数
var newRowData = {}; // 创建一个空对象，表示空数据

// 使用 bootstrapTable 提供的方法在表格末尾添加新行数据
$('#PreviewSkill2').bootstrapTable('insertRow', {
    index: tableRowCount, // 在末尾插入
    row: newRowData // 空数据对象
});

//打印
function PrintThisPage() {
    window.print();
}

//关键链接
const Keys = $(".KeyConnection");
for (var i = 0; i < Keys.length; i++) {
    Keys[i].checked = selectedCharacterData.KeyConnection[i];
}


//获取需要克隆的元素（第三类接触）
const ExtraContent = parent.document.getElementById("ExtraContent");
// 克隆 ExtraContent 元素（包括子节点）
const clonedExtraContent = ExtraContent.cloneNode(true);
//clonedExtraContent.className = "target";
//创建标题
const experienceContent = document.getElementById("ExperienceContent");
// 创建新的内容元素
const newContent = document.createElement("div");
//newContent.className = "target";
newContent.style = "display:flex;"
newContent.innerHTML = `
                <div style="width:28%;display:flex;" class="card-header">
                    <div class="Thirdtitle"></div>经历
                </div>
                <div style="width:28%;margin-left: 10px;display:flex;" class="card-header">
                    <div class="Thirdtitle"></div>神话（第三类接触）
                </div>
                <div style="width:40%;margin-left: 10px;display:flex;" class="card-header">
                    <div class="Thirdtitle"></div>法术
                </div>
    `;
//将克隆元素赋予需求页面
const MainContent = document.getElementById("MainContent");
const MainContentTarget = document.createElement("div");
MainContentTarget.className = "target";
MainContent.appendChild(MainContentTarget);
MainContentTarget.appendChild(newContent);
MainContentTarget.appendChild(clonedExtraContent);

const avatarImage = document.getElementById('avatar-image');
const avaterText = document.getElementById('avatar-text');
avatarImage.src = parent.window.cropperResult;
avaterText.style.display = "none";