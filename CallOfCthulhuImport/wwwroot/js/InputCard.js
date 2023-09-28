
var OneMsg = document.getElementById("One");
var TwoMsg = document.getElementById("Two");
var ThreeMsg = document.getElementById("Three");
var FourMsg = document.getElementById("Four");
var FinalInnerHTML3 = "";


const savedCharacters = JSON.parse(localStorage.getItem('skillSelect')) || {};
const selectedCharacterData = savedCharacters[parent.window.CharaName];

OneMsg.innerHTML = `.st 力量${parent.window.Str}str${parent.window.Str}敏捷${parent.window.Dex}dex${parent.window.Dex}意志${parent.window.Pow}pow${parent.window.Pow}
体质${parent.window.Con}con${parent.window.Con}外貌${parent.window.App}app${parent.window.App}教育${parent.window.Edu}edu${parent.window.Edu}体型${parent.window.Size}
siz${parent.window.Size}智力${parent.window.Int}灵感${parent.window.Int}int${parent.window.Int}sansan值理智理智值幸运${parent.window.Lucky}运气${parent.window.Lucky}
mp魔法hp体力会计${parent.window.TableSkill1[0].Normal}人类学${parent.window.TableSkill1[1].Normal}估价${parent.window.TableSkill1[2].Normal}考古学${parent.window.TableSkill1[3].Normal}
取悦${parent.window.TableSkill1[7].Normal}魅惑${parent.window.TableSkill1[7].Normal}攀爬${parent.window.TableSkill1[8].Normal}计算机${parent.window.TableSkill1[9].Normal}
计算机使用${parent.window.TableSkill1[9].Normal}电脑${parent.window.TableSkill1[9].Normal}信用${parent.window.TableSkill1[10].Normal}信誉${parent.window.TableSkill1[10].Normal}
信用评级${parent.window.TableSkill1[10].Normal}克苏鲁${parent.window.TableSkill1[11].Normal}克苏鲁神话${parent.window.TableSkill1[11].Normal}cm${parent.window.TableSkill1[11].Normal}
乔装${parent.window.TableSkill1[12].Normal}闪避${parent.window.TableSkill1[13].Normal}汽车${parent.window.TableSkill1[14].Normal}驾驶${parent.window.TableSkill1[14].Normal}
汽车驾驶${parent.window.TableSkill1[14].Normal}电气维修${parent.window.TableSkill1[15].Normal}电子学${parent.window.TableSkill1[16].Normal}话术${parent.window.TableSkill1[17].Normal}
斗殴${parent.window.TableSkill1[18].Normal}手枪${parent.window.TableSkill1[22].Normal}急救${parent.window.TableSkill1[26].Normal}历史${parent.window.TableSkill1[27].Normal}
恐吓${parent.window.TableSkill1[28].Normal}跳跃${parent.window.TableSkill1[29].Normal}母语50法律${parent.window.TableSkill2[0].Normal}图书馆${parent.window.TableSkill2[1].Normal}
图书馆使用${parent.window.TableSkill2[1].Normal}聆听${parent.window.TableSkill2[2].Normal}开锁${parent.window.TableSkill2[3].Normal}撬锁${parent.window.TableSkill2[3].Normal}
锁匠${parent.window.TableSkill2[3].Normal}机械维修${parent.window.TableSkill2[4].Normal}医学${parent.window.TableSkill2[5].Normal}博物学${parent.window.TableSkill2[6].Normal}
自然学${parent.window.TableSkill2[6].Normal}领航${parent.window.TableSkill2[7].Normal}导航${parent.window.TableSkill2[7].Normal}神秘学${parent.window.TableSkill2[8].Normal}
重型操作${parent.window.TableSkill2[9].Normal}重型机械${parent.window.TableSkill2[9].Normal}操作重型机械${parent.window.TableSkill2[9].Normal}重型${parent.window.TableSkill2[9].Normal}
说服${parent.window.TableSkill2[10].Normal}精神分析${parent.window.TableSkill2[12].Normal}心理学${parent.window.TableSkill2[13].Normal}骑术${parent.window.TableSkill2[14].Normal}
妙手${parent.window.TableSkill2[18].Normal}侦查${parent.window.TableSkill2[19].Normal}潜行${parent.window.TableSkill2[20].Normal}生存${parent.window.TableSkill2[21].Normal}
游泳${parent.window.TableSkill2[22].Normal}投掷${parent.window.TableSkill2[23].Normal}追踪${parent.window.TableSkill2[24].Normal}驯兽${parent.window.TableSkill2[25].Normal}
潜水${parent.window.TableSkill2[26].Normal}爆破${parent.window.TableSkill2[27].Normal}读唇${parent.window.TableSkill2[28].Normal}催眠${parent.window.TableSkill2[29].Normal}
炮术${parent.window.TableSkill2[30].Normal}`;

TwoMsg.innerHTML = `.st -力量${parent.window.Str}str${parent.window.Str}敏捷${parent.window.Dex}dex${parent.window.Dex}意志${parent.window.Pow}pow${parent.window.Pow}
体质${parent.window.Con}con${parent.window.Con}外貌${parent.window.App}app${parent.window.App}教育${parent.window.Edu}edu${parent.window.Edu}体型${parent.window.Size}
siz${parent.window.Size}智力${parent.window.Int}灵感${parent.window.Int}int${parent.window.Int}sansan值理智理智值幸运${parent.window.Lucky}运气${parent.window.Lucky}
mp魔法hp体力会计${parent.window.TableSkill1[0].Normal}人类学${parent.window.TableSkill1[1].Normal}估价${parent.window.TableSkill1[2].Normal}考古学${parent.window.TableSkill1[3].Normal}
取悦${parent.window.TableSkill1[7].Normal}魅惑${parent.window.TableSkill1[7].Normal}攀爬${parent.window.TableSkill1[8].Normal}计算机${parent.window.TableSkill1[9].Normal}
计算机使用${parent.window.TableSkill1[9].Normal}电脑${parent.window.TableSkill1[9].Normal}信用${parent.window.TableSkill1[10].Normal}信誉${parent.window.TableSkill1[10].Normal}
信用评级${parent.window.TableSkill1[10].Normal}克苏鲁${parent.window.TableSkill1[11].Normal}克苏鲁神话${parent.window.TableSkill1[11].Normal}cm${parent.window.TableSkill1[11].Normal}
乔装${parent.window.TableSkill1[12].Normal}闪避${parent.window.TableSkill1[13].Normal}汽车${parent.window.TableSkill1[14].Normal}驾驶${parent.window.TableSkill1[14].Normal}
汽车驾驶${parent.window.TableSkill1[14].Normal}电气维修${parent.window.TableSkill1[15].Normal}电子学${parent.window.TableSkill1[16].Normal}话术${parent.window.TableSkill1[17].Normal}
斗殴${parent.window.TableSkill1[18].Normal}手枪${parent.window.TableSkill1[22].Normal}急救${parent.window.TableSkill1[26].Normal}历史${parent.window.TableSkill1[27].Normal}
恐吓${parent.window.TableSkill1[28].Normal}跳跃${parent.window.TableSkill1[29].Normal}母语50法律${parent.window.TableSkill2[0].Normal}图书馆${parent.window.TableSkill2[1].Normal}
图书馆使用${parent.window.TableSkill2[1].Normal}聆听${parent.window.TableSkill2[2].Normal}开锁${parent.window.TableSkill2[3].Normal}撬锁${parent.window.TableSkill2[3].Normal}
锁匠${parent.window.TableSkill2[3].Normal}机械维修${parent.window.TableSkill2[4].Normal}医学${parent.window.TableSkill2[5].Normal}博物学${parent.window.TableSkill2[6].Normal}
自然学${parent.window.TableSkill2[6].Normal}领航${parent.window.TableSkill2[7].Normal}导航${parent.window.TableSkill2[7].Normal}神秘学${parent.window.TableSkill2[8].Normal}
重型操作${parent.window.TableSkill2[9].Normal}重型机械${parent.window.TableSkill2[9].Normal}操作重型机械${parent.window.TableSkill2[9].Normal}重型${parent.window.TableSkill2[9].Normal}
说服${parent.window.TableSkill2[10].Normal}精神分析${parent.window.TableSkill2[12].Normal}心理学${parent.window.TableSkill2[13].Normal}骑术${parent.window.TableSkill2[14].Normal}
妙手${parent.window.TableSkill2[18].Normal}侦查${parent.window.TableSkill2[19].Normal}潜行${parent.window.TableSkill2[20].Normal}生存${parent.window.TableSkill2[21].Normal}
游泳${parent.window.TableSkill2[22].Normal}投掷${parent.window.TableSkill2[23].Normal}追踪${parent.window.TableSkill2[24].Normal}驯兽${parent.window.TableSkill2[25].Normal}
潜水${parent.window.TableSkill2[26].Normal}爆破${parent.window.TableSkill2[27].Normal}读唇${parent.window.TableSkill2[28].Normal}催眠${parent.window.TableSkill2[29].Normal}
炮术${parent.window.TableSkill2[30].Normal}`;

ThreeMsg.innerHTML = `".st 力量${parent.window.Str}str${parent.window.Str}敏捷${parent.window.Dex}dex${parent.window.Dex}意志${parent.window.Pow}pow${parent.window.Pow}
体质${parent.window.Con}con${parent.window.Con}外貌${parent.window.App}app${parent.window.App}教育${parent.window.Edu}edu${parent.window.Edu}体型${parent.window.Size}
siz${parent.window.Size}智力${parent.window.Int}灵感${parent.window.Int}int${parent.window.Int}sansan值理智理智值幸运${parent.window.Lucky}运气${parent.window.Lucky}
mp魔法hp体力会计${parent.window.TableSkill1[0].Normal}人类学${parent.window.TableSkill1[1].Normal}估价${parent.window.TableSkill1[2].Normal}考古学${parent.window.TableSkill1[3].Normal}
取悦${parent.window.TableSkill1[7].Normal}魅惑${parent.window.TableSkill1[7].Normal}攀爬${parent.window.TableSkill1[8].Normal}计算机${parent.window.TableSkill1[9].Normal}
计算机使用${parent.window.TableSkill1[9].Normal}电脑${parent.window.TableSkill1[9].Normal}信用${parent.window.TableSkill1[10].Normal}信誉${parent.window.TableSkill1[10].Normal}
信用评级${parent.window.TableSkill1[10].Normal}克苏鲁${parent.window.TableSkill1[11].Normal}克苏鲁神话${parent.window.TableSkill1[11].Normal}cm${parent.window.TableSkill1[11].Normal}
乔装${parent.window.TableSkill1[12].Normal}闪避${parent.window.TableSkill1[13].Normal}汽车${parent.window.TableSkill1[14].Normal}驾驶${parent.window.TableSkill1[14].Normal}
汽车驾驶${parent.window.TableSkill1[14].Normal}电气维修${parent.window.TableSkill1[15].Normal}电子学${parent.window.TableSkill1[16].Normal}话术${parent.window.TableSkill1[17].Normal}
斗殴${parent.window.TableSkill1[18].Normal}手枪${parent.window.TableSkill1[22].Normal}急救${parent.window.TableSkill1[26].Normal}历史${parent.window.TableSkill1[27].Normal}
恐吓${parent.window.TableSkill1[28].Normal}跳跃${parent.window.TableSkill1[29].Normal}母语50法律${parent.window.TableSkill2[0].Normal}图书馆${parent.window.TableSkill2[1].Normal}
图书馆使用${parent.window.TableSkill2[1].Normal}聆听${parent.window.TableSkill2[2].Normal}开锁${parent.window.TableSkill2[3].Normal}撬锁${parent.window.TableSkill2[3].Normal}
锁匠${parent.window.TableSkill2[3].Normal}机械维修${parent.window.TableSkill2[4].Normal}医学${parent.window.TableSkill2[5].Normal}博物学${parent.window.TableSkill2[6].Normal}
自然学${parent.window.TableSkill2[6].Normal}领航${parent.window.TableSkill2[7].Normal}导航${parent.window.TableSkill2[7].Normal}神秘学${parent.window.TableSkill2[8].Normal}
重型操作${parent.window.TableSkill2[9].Normal}重型机械${parent.window.TableSkill2[9].Normal}操作重型机械${parent.window.TableSkill2[9].Normal}重型${parent.window.TableSkill2[9].Normal}
说服${parent.window.TableSkill2[10].Normal}精神分析${parent.window.TableSkill2[12].Normal}心理学${parent.window.TableSkill2[13].Normal}骑术${parent.window.TableSkill2[14].Normal}
妙手${parent.window.TableSkill2[18].Normal}侦查${parent.window.TableSkill2[19].Normal}潜行${parent.window.TableSkill2[20].Normal}生存${parent.window.TableSkill2[21].Normal}
游泳${parent.window.TableSkill2[22].Normal}投掷${parent.window.TableSkill2[23].Normal}追踪${parent.window.TableSkill2[24].Normal}驯兽${parent.window.TableSkill2[25].Normal}
潜水${parent.window.TableSkill2[26].Normal}爆破${parent.window.TableSkill2[27].Normal}读唇${parent.window.TableSkill2[28].Normal}催眠${parent.window.TableSkill2[29].Normal}
炮术${parent.window.TableSkill2[30].Normal} 身体状态:健康	 精神状态:清醒	&DB=${parent.window.DB} 体格:${parent.window.Phy} 闪避:${parent.window.TableSkill1[13].Normal} 护甲:0`


FourMsg.innerHTML = `.st ？力量${parent.window.Str}str${parent.window.Str}敏捷${parent.window.Dex}dex${parent.window.Dex}意志${parent.window.Pow}pow${parent.window.Pow}
体质${parent.window.Con}con${parent.window.Con}外貌${parent.window.App}app${parent.window.App}教育${parent.window.Edu}edu${parent.window.Edu}体型${parent.window.Size}
siz${parent.window.Size}智力${parent.window.Int}灵感${parent.window.Int}int${parent.window.Int}sansan值理智理智值幸运${parent.window.Lucky}运气${parent.window.Lucky}
mp魔法hp体力会计${parent.window.TableSkill1[0].Normal}人类学${parent.window.TableSkill1[1].Normal}估价${parent.window.TableSkill1[2].Normal}考古学${parent.window.TableSkill1[3].Normal}
取悦${parent.window.TableSkill1[7].Normal}魅惑${parent.window.TableSkill1[7].Normal}攀爬${parent.window.TableSkill1[8].Normal}计算机${parent.window.TableSkill1[9].Normal}
计算机使用${parent.window.TableSkill1[9].Normal}电脑${parent.window.TableSkill1[9].Normal}信用${parent.window.TableSkill1[10].Normal}信誉${parent.window.TableSkill1[10].Normal}
信用评级${parent.window.TableSkill1[10].Normal}克苏鲁${parent.window.TableSkill1[11].Normal}克苏鲁神话${parent.window.TableSkill1[11].Normal}cm${parent.window.TableSkill1[11].Normal}
乔装${parent.window.TableSkill1[12].Normal}闪避${parent.window.TableSkill1[13].Normal}汽车${parent.window.TableSkill1[14].Normal}驾驶${parent.window.TableSkill1[14].Normal}
汽车驾驶${parent.window.TableSkill1[14].Normal}电气维修${parent.window.TableSkill1[15].Normal}电子学${parent.window.TableSkill1[16].Normal}话术${parent.window.TableSkill1[17].Normal}
斗殴${parent.window.TableSkill1[18].Normal}手枪${parent.window.TableSkill1[22].Normal}急救${parent.window.TableSkill1[26].Normal}历史${parent.window.TableSkill1[27].Normal}
恐吓${parent.window.TableSkill1[28].Normal}跳跃${parent.window.TableSkill1[29].Normal}母语50法律${parent.window.TableSkill2[0].Normal}图书馆${parent.window.TableSkill2[1].Normal}
图书馆使用${parent.window.TableSkill2[1].Normal}聆听${parent.window.TableSkill2[2].Normal}开锁${parent.window.TableSkill2[3].Normal}撬锁${parent.window.TableSkill2[3].Normal}
锁匠${parent.window.TableSkill2[3].Normal}机械维修${parent.window.TableSkill2[4].Normal}医学${parent.window.TableSkill2[5].Normal}博物学${parent.window.TableSkill2[6].Normal}
自然学${parent.window.TableSkill2[6].Normal}领航${parent.window.TableSkill2[7].Normal}导航${parent.window.TableSkill2[7].Normal}神秘学${parent.window.TableSkill2[8].Normal}
重型操作${parent.window.TableSkill2[9].Normal}重型机械${parent.window.TableSkill2[9].Normal}操作重型机械${parent.window.TableSkill2[9].Normal}重型${parent.window.TableSkill2[9].Normal}
说服${parent.window.TableSkill2[10].Normal}精神分析${parent.window.TableSkill2[12].Normal}心理学${parent.window.TableSkill2[13].Normal}骑术${parent.window.TableSkill2[14].Normal}
妙手${parent.window.TableSkill2[18].Normal}侦查${parent.window.TableSkill2[19].Normal}潜行${parent.window.TableSkill2[20].Normal}生存${parent.window.TableSkill2[21].Normal}
游泳${parent.window.TableSkill2[22].Normal}投掷${parent.window.TableSkill2[23].Normal}追踪${parent.window.TableSkill2[24].Normal}驯兽${parent.window.TableSkill2[25].Normal}
潜水${parent.window.TableSkill2[26].Normal}爆破${parent.window.TableSkill2[27].Normal}读唇${parent.window.TableSkill2[28].Normal}催眠${parent.window.TableSkill2[29].Normal}
炮术${parent.window.TableSkill2[30].Normal}`


selectedCharacterData.PreviewArt.forEach(function (data,index) {
    if (data != "") {
        NewInnerHTML = `${selectedCharacterData.PreviewArt[index]}${parent.window.TableSkill1[index + 4].Normal}`
        NewInnerHTML3 = `${selectedCharacterData.PreviewArt[index]}${parent.window.TableSkill1[index + 4].Normal}`
        OneMsg.innerHTML += NewInnerHTML;
        TwoMsg.innerHTML += NewInnerHTML;
        FinalInnerHTML3 += NewInnerHTML3;
        FourMsg.innerHTML += NewInnerHTML;
    }
});

selectedCharacterData.PreviewDrive.forEach(function (data, index) {
    if (data != "") {
        NewInnerHTML = `${selectedCharacterData.PreviewDrive[index]}${parent.window.TableSkill2[11].Normal}`
        NewInnerHTML3 = `${selectedCharacterData.PreviewDrive[index]}${parent.window.TableSkill2[11].Normal}`
        OneMsg.innerHTML += NewInnerHTML;
        TwoMsg.innerHTML += NewInnerHTML;
        FinalInnerHTML3 += NewInnerHTML3;
        FourMsg.innerHTML += NewInnerHTML;
    }
});

selectedCharacterData.PreviewFight.forEach(function (data, index) {
    if (data != "") {
        NewInnerHTML = `${selectedCharacterData.PreviewFight[index]}${parent.window.TableSkill1[index + 19].Normal}`
        NewInnerHTML3 = `${selectedCharacterData.PreviewFight[index]}${parent.window.TableSkill1[index + 19].Normal}`
        OneMsg.innerHTML += NewInnerHTML;
        TwoMsg.innerHTML += NewInnerHTML;
        FinalInnerHTML3 += NewInnerHTML3;
        FourMsg.innerHTML += NewInnerHTML;
    }
});

selectedCharacterData.PreviewLanguage.forEach(function (data, index) {
    if (data != "") {
        NewInnerHTML = `${selectedCharacterData.PreviewLanguage[index]}${parent.window.TableSkill1[index + 30].Normal}`
        NewInnerHTML3 = `${selectedCharacterData.PreviewLanguage[index]}${parent.window.TableSkill1[index + 30].Normal}`
        OneMsg.innerHTML += NewInnerHTML;
        TwoMsg.innerHTML += NewInnerHTML;
        FinalInnerHTML3 += NewInnerHTML3;
        FourMsg.innerHTML += NewInnerHTML;
    }
});

selectedCharacterData.PreviewShoot.forEach(function (data, index) {
    if (data != "") {
        NewInnerHTML = `${selectedCharacterData.PreviewShoot[index]}${parent.window.TableSkill1[index + 23].Normal}`
        NewInnerHTML3 = `${selectedCharacterData.PreviewShoot[index]}${parent.window.TableSkill1[index + 23].Normal}`
        OneMsg.innerHTML += NewInnerHTML;
        TwoMsg.innerHTML += NewInnerHTML;
        FinalInnerHTML3 += NewInnerHTML3;
        FourMsg.innerHTML += NewInnerHTML;
    }
});

selectedCharacterData.PreviewTech.forEach(function (data, index) {
    if (data != "") {
        NewInnerHTML = `${selectedCharacterData.PreviewTech[index]}${parent.window.TableSkill2[index + 15].Normal}`
        NewInnerHTML3 = `${selectedCharacterData.PreviewTech[index]}${parent.window.TableSkill2[index + 15].Normal}`
        OneMsg.innerHTML += NewInnerHTML;
        TwoMsg.innerHTML += NewInnerHTML;
        FinalInnerHTML3 += NewInnerHTML3;
        FourMsg.innerHTML += NewInnerHTML;
    }
});

ThreeMsg.innerHTML += `${FinalInnerHTML3}"`;