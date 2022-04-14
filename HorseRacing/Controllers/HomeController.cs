using HorseRacing.Models;
using HorseRacing.ViewModels.Horses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EntityFramework.Extensions;
using System.Data.Entity;

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
        public ActionResult CreateHorse(int id)
        {
            //Horse horse;
            //if (id > 0)
            //{
            //    var horses = db.Horses.Find();
            //    horse = horses.FirstOrDefault(h => h.Id == id);
            //}
            //else
            //{
            //    db.Horses.Create();
            //}
            return View();
            //Horse horse = new Horse();
            //return View();
        }

        // Create a horse - post data
        [HttpPost]
        public ActionResult CreateHorse(Horse h)
        {
            //var query = db.Horses
            //    .Include("Colour")
            //    .Include("Category")
            //    .Include("Gender")
            //    .Include("Country")
            //    .Include("Acqusition")
            //    .Select(x => new HorseListVM
            //    {
            //        Name = x.Name,
            //        DateOfBirth = x.DateOfBirth,
            //        ColourName = x.Colour.Name,
            //        CategoryName = x.Category.Name,
            //        GenderName = x.Gender.Name,
            //        CountryName = x.Country.Name,
            //        AcqusitionName = x.Acqusition.Name,
            //    }).FirstOrDefault();
            //db.SaveChanges();

            return RedirectToAction("Index");

            //db.Horses.Add(h);
            //db



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

            HorseListVM vm = db.Horses
                 .Where(x => x.Id == id)
                 .Select(x => new HorseListVM()
                 {
                     Id = x.Id,
                     Name = x.Name,
                     DateOfBirth = x.DateOfBirth,
                     ColourName = x.Colour.Name,
                     CategoryName = x.Category.Name,
                     GenderName = x.Gender.Name,
                     CountryName = x.Country.Name,
                     AcqusitionName = x.Acqusition.Name
                 }).SingleOrDefault();
            return View(vm);
            //var query = db.Horses.Where(c => c.Id == id)

            //                       .Select(c => new HorseListVM()
            //                       {
            //                           Id = c.Id,
            //                           Name = c.Name,
            //                           ColourName = c.Colour.Name,
            //                           CategoryName = c.Category.Name,
            //                           GenderName = c.Gender.Name,
            //                           CountryName = c.Country.Name,
            //                           AcqusitionName = c.Acqusition.Name,


            //                       }).SingleOrDefault();



            //return View(query);
            //return View();
        }

        [HttpPost]
        public ActionResult EditHorse(Horse hrs)
        {

            //HorseListVM vm = db.Horses
            //     .Where(c => c.Id == hrs.Id)
            //     .Include("Colour")
            //     .Include("Category")
            //     .Include("Gender")
            //     .Include("Country")
            //     .Include("Acqusition")
                 
            //     .Single();

            //vm.Id = hrs.Id;
            //vm.Name = hrs.Name;
            //vm.DateOfBirth = hrs.DateOfBirth;
            //vm.ColourName = hrs.Colour.Name;
            //vm.CategoryName = hrs.Category.Name;
            //vm.GenderName = hrs.Gender.Name;
            //vm.CountryName = hrs.Country.Name;
            //vm.AcqusitionName = hrs.Acqusition.Name;
            //db.SaveChanges();
            //return RedirectToAction("Index");

            //var query = db.Horses
            //     .Include("Colour")
            //     .Include("Category")
            //     .Include("Gender")
            //     .Include("Country")
            //     .Include("Acqusition")
            //    .Where(m => m.Id == hrs.Id)
            //    .Select(m => new HorseListVM
            //    {
            //        Id = m.Id,
            //        Name = m.Name,
            //        DateOfBirth = m.DateOfBirth,
            //        ColourName = m.Colour.Name,
            //        CategoryName = m.Category.Name, 
            //        GenderName = m.Gender.Name,
            //        CountryName = m.Country.Name,
            //        AcqusitionName = m.Acqusition.Name
            //    }).Single();

            var newhorse = new Horse()
            {
                Id = hrs.Id,
                
            };

            db.Horses.Add(newhorse);
            try
            {
                db.SaveChanges();
            }
            catch (Exception ex) 
            {
                throw (ex);
            }

            return RedirectToAction("Index");
            //return View(query);




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
            //db.Horses.Remove(id);
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