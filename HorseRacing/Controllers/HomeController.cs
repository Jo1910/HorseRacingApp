using HorseRacing.Models;
using HorseRacing.ViewModels.Horses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EntityFramework.Extensions;

namespace HorseRacing.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationContext db = new ApplicationContext();
        public ActionResult Index()
        {

            var r = db.Horses
                .Include("Country")
                .Take(20)
                .ToList();

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
             return View(h);
                   
        }

        // Read data
        public ActionResult ShowHorse(int? pageNumber = 0)
        {
            
             
            var query = db.Horses
                .Include("Country")
                .Include("Gender")
                .OrderBy(m => m.Name)
                .Skip((10 * pageNumber??0))
                .Take(10)
                .Select(m => new HorseListVM
                {
                    Id = m.Id,
                    Name = m.Name,
                    CountryName = m.Country.Name,
                    GenderName = m.Gender.Name
                })
                .ToList();

            return View(query);
        }


        public ActionResult ShowOneHorse(int id)
        {
            var query = db.Horses
                .Include("Country")
                .Include("Gender")
                .Where(m => m.Id == id)
                .Select(m => new HorseListVM
                {
                    Id = m.Id,
                    Name = m.Name,
                    CountryName = m.Country.Name,
                    GenderName = m.Gender.Name
                }).FirstOrDefault();

            return View(query);
                
        }

        // Update data - horse table

        [HttpGet]
        public ActionResult EditHorse(int id)
        {
            //var query = db.Horses.Where(c => c.Id == id)

            //                       .Select(c => new HorseListVM()
            //                       {
            //                           Id = c.Id,
            //                           Name = c.Name,
            //                           CountryName= c.Country.Name,
            //                           GenderName= c.Gender.Name

            //                       }).SingleOrDefault();



            //return View(query);
            return View();
        }

        [HttpPost]
        public ActionResult EditHorse(Horse hrs)
        {

            ////valid
            //Horse horse = (from h in db.Horses
            //               where h.Id == hrs.Id
            //               select h).FirstOrDefault();
            //horse.Id = hrs.Id;
            //horse.Name = hrs.Name;
            //horse.DateOfBirth = hrs.DateOfBirth;
            //horse.DamId = hrs.DamId;
            //horse.SireId = hrs.SireId;
            //horse.ColourId = hrs.ColourId;
            //horse.CategoryId = hrs.CategoryId;
            //horse.GenderId = hrs.GenderId;
            //horse.CountryId = hrs.CountryId;
            //horse.AcqusitionId = hrs.AcqusitionId;
            //db.SaveChanges();

            //return RedirectToAction("ShowHorse");
            ////end valid

            return View();
         }

            // Delete a row - horse table

        [HttpGet]
        public ActionResult DeleteHorse(int? id)
        {
            Horse horse = db.Horses.Find(id);
            return View(horse);
                
        }

        [HttpPost]
        public ActionResult DeleteHorse(int id)
        {
            Horse horse = db.Horses.Find(id);
            db.Horses.Remove(horse);
            db.SaveChanges();
            return RedirectToAction("ShowHorse");
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