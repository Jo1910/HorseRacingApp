using HorseRacing.Models;
using HorseRacing.ViewModels.Horses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace HorseRacing.Controllers
{
    //[RoutePrefix("api/Horse")]

    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    [DisableCors]
    public class HorseController : ApiController
    {
        private readonly ApplicationContext db = new ApplicationContext();
        // GET api/<controller>
        [HttpGet]
        public IHttpActionResult GetAll(int ? pageNumber = 0)
        {
            var query = db.Horses
                .Include("Colour")
                .Include("Category")
                .Include("Gender")
                .Include("Country")
                .Include("Acquisition")
                .OrderBy(x => x.Name)
                .Skip(10 * pageNumber ?? 0)
                .Take(10)
                .Select(x => new HorseListVM
                {
                    Id = x.Id,
                    Name = x.Name,
                    DateOfBirth = x.DateOfBirth,
                    DamName = x.Name,
                    SireName = x.Name,
                    ColourName = x.Colour.Name,
                    CategoryName = x.Category.Name,
                    CountryName = x.Country.Name,
                    GenderName = x.Gender.Name,
                    AcqusitionName = x.Acqusition.Name,
                })
                .ToList();
           
            return Ok(query);
        }

        // GET api/<controller>/5
        [HttpGet]
        public IHttpActionResult Get(int? id)
        {
            var query = db.Horses
                .Include("Colour")
                .Include("Category")
                .Include("Gender")
                .Include("Country")
                .Include("Acquisition")
                .Where(x => x.Id == id)
                .Select(x => new HorseListVM
                {
                    Id = x.Id,
                    Name = x.Name,
                    DateOfBirth = x.DateOfBirth,
                    DamName = x.Name,
                    SireName = x.Name,
                    ColourName = x.Colour.Name,
                    CategoryName = x.Category.Name,
                    CountryName = x.Country.Name,
                    GenderName = x.Gender.Name,
                    AcqusitionName = x.Acqusition.Name,
                }).FirstOrDefault();

            return Ok(query);
        }


        

        // POST api/<controller>
        public void Post([FromBody] Horse horse)
        {
            db.Horses.Add(horse);
            db.SaveChanges();
        }

        [HttpPut]
        public void Put(int id, [FromBody] Horse horse)
        {
            var query = db.Horses.FirstOrDefault(x => x.Id == id);

            query.Id = id;
            query.Name = horse.Name;
            query.DateOfBirth = horse.DateOfBirth;
            query.DamId = horse.DamId;
            query.SireId = horse.SireId;
            query.ColourId = horse.ColourId;
            query.CategoryId = horse.CategoryId;
            query.CountryId = horse.CountryId;  
            query.GenderId = horse.GenderId;
            query.AcqusitionId = horse.AcqusitionId;

            db.SaveChanges();
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}