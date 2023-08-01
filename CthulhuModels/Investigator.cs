using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CthulhuModels
{
    internal class Investigator
    {
        /// <summary>
        /// 调查员姓名
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 玩家
        /// </summary>
        public string Player { get; set; }

        /// <summary>
        /// 时代
        /// </summary>
        public string Century { get; set; }

        /// <summary>
        /// 职业
        /// </summary>
        public string Career { get; set; }

        /// <summary>
        /// 职业序号
        /// </summary>
        public string CareerNo { get; set; }

        /// <summary>
        /// 年龄
        /// </summary>
        public string Age { get; set; }

        /// <summary>
        /// 性别
        /// </summary>
        public string Gender { get; set; }

        /// <summary>
        /// 住址
        /// </summary>
        public string Adress { get; set; }

        /// <summary>
        /// 故乡
        /// </summary>
        public string HomeTown { get; set; }

        /// <summary>
        /// 力量
        /// </summary>
        public int STR { get; set; }
        
        /// <summary>
        /// 体质
        /// </summary>
        public int CON { get; set; }

        /// <summary>
        /// 体型
        /// </summary>
        public int SIZE { get; set; }

        /// <summary>
        /// 敏捷
        /// </summary>
        public int DEX { get; set; }

        /// <summary>
        /// 外貌
        /// </summary>
        public int APP { get; set; }

        /// <summary>
        /// 智力/灵感
        /// </summary>
        public int Inteligence { get; set; }

        /// <summary>
        /// 意志
        /// </summary>
        public int POW { get; set; }

        /// <summary>
        /// 教育
        /// </summary>
        public int EDU { get; set; }

        /// <summary>
        /// 幸运
        /// </summary>
        public int LUK { get; set; }

        /// <summary>
        /// 肖像
        /// </summary>
        public string Protrait { get; set; }
    }
}
