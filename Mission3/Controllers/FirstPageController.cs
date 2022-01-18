using Microsoft.AspNetCore.Mvc;
using Mission3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3.Controllers
{
    public class FirstPageController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("Calculator")]
        public IActionResult Calculator()
        {
            return View();
        }

        [HttpPost("Calculator")]
        public IActionResult Calculator(CalculatorModel model)
        {
            return View();
        }

    }

}
