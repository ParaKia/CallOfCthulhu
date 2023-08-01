using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using Newtonsoft.Json;

namespace CallOfCthulhuImport.Controllers
{
    public class CreateController : Controller
    {
        private readonly IWebHostEnvironment _hostingEnvironment;

        public CreateController(IWebHostEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }
        public IActionResult BasicInfo()
        {
            return View();
        }

        public IActionResult PrefList()
        {
            return View();
        }
        public IActionResult WeaponList()
        {
            return View();
        }

        public object PrefJson()
        {
            string jsonFilePath = Path.Combine(_hostingEnvironment.ContentRootPath, "Json", "Prefs.json");
            if (System.IO.File.Exists(jsonFilePath))
            {
                string jsonContent = System.IO.File.ReadAllText(jsonFilePath);
                // 在这里你可以对 jsonContent 进行处理或者返回给视图
                var jsonObject = JsonConvert.DeserializeObject(jsonContent);

                return jsonContent;
            }
            else
            {
                // 文件不存在的处理逻辑
                return NotFound();
            }
        }

        public object WeaponJson()
        {
            string jsonFilePath = Path.Combine(_hostingEnvironment.ContentRootPath, "Json", "Weapon.json");
            if (System.IO.File.Exists(jsonFilePath))
            {
                string jsonContent = System.IO.File.ReadAllText(jsonFilePath);
                // 在这里你可以对 jsonContent 进行处理或者返回给视图
                var jsonObject = JsonConvert.DeserializeObject(jsonContent);

                return jsonContent;
            }
            else
            {
                // 文件不存在的处理逻辑
                return NotFound();
            }
        }
    }
}