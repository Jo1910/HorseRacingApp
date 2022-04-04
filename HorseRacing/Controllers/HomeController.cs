using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HorseRacing.Controllers
{
    public class HomeController : Controller
    {
        HorseRacingAppDBEntities db = new HorseRacingAppDBEntities();
        public ActionResult Index()
        {
            return View();
        }

        // Create a horse - get data
        public ActionResult CreateHorse()
        {
            Horse horse = new Horse();
            return View();
        }

        // Create a horse - post data
        [HttpPost]
        public ActionResult CreateHorse(Horse h)
        {
            Horse horse = new Horse();
            horse.Name = h.Name;
            horse.DateOfBirth = h.DateOfBirth;
            horse.DamId = h.DamId;
            horse.SireId = h.SireId;
            horse.ColourId = h.ColourId;
            horse.CategoryId = h.CategoryId;
            horse.GenderId = h.GenderId;
            horse.CountryId = h.CountryId;
            horse.AcqusitionId = h.AcqusitionId;
            db.Horses.Add(horse);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}