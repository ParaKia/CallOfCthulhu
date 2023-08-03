using Microsoft.AspNetCore.Mvc;

namespace CallOfCthulhuImport.Controllers
{
    public class PrintController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
