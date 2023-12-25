namespace Mvc;
using Microsoft.AspNetCore.Mvc;


public class Home : Controller
{
    public IActionResult Index() 
    {
        ViewBag.Message = "test";
        return View();
    }
    [HttpPost]
    public IActionResult Index(string val) 
    {
        ViewBag.Message = val;
        return View();
    }
}