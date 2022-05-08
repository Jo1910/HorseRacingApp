using HorseRacing.Models;
using HorseRacing.ViewModels;
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
                    DamName = x.Dam.Name,
                    SireName = x.Sire.Name,
                    ColourName = x.Colour.Name,
                    CategoryName = x.Category.Name,
                    CountryName = x.Country.Name,
                    GenderName = x.Gender.Name,
                    AcquisitionName = x.Acquisition.Name
                })
                .ToList();
           
            return Ok(query);
        }

        
        // Get a horse by id
        [HttpGet]
        public IHttpActionResult Get(int? id)
        {
                 var query = db.Horses
                .Include("Colour")
                .Include("Category")
                .Include("Gender")
                .Include("Country")
                .Include("Acquisition")
                .Select(x => new HorseListVM
                {
                    Id = x.Id,
                    Name = x.Name,
                    DateOfBirth = x.DateOfBirth,
                    DamName = x.Dam.Name,
                    SireName = x.Sire.Name,
                    ColourName = x.Colour.Name,
                    CategoryName = x.Category.Name,
                    CountryName = x.Country.Name,
                    GenderName = x.Gender.Name,
                    AcquisitionName = x.Acquisition.Name
                }).FirstOrDefault(x => x.Id == id);
            if( query == null)
            {
                return NotFound();
            }

            return Ok(query);

        }

        //Get the last rating for a horse
        [HttpGet]
        public IHttpActionResult GetRatings(int? id)
        {
            var query = db.Ratings
                .Include("Contact")
                .Include("Horse")
                .Where(x => x.HorseId == id)
                .OrderByDescending(x => x.RatingDate)
                .Take(1)
                .Select(x => new GetRatingVM
                {
                    Name = x.Name,
                    ContactName = x.Contact.Name,
                    RatingDate = x.RatingDate,
                    HorseId = x.HorseId,
                    Note = x.Note,
                }).FirstOrDefault();
            return Ok(query);
        }

        // Get a horse to edit
        [HttpGet]
        public IHttpActionResult GetEdit(int? id)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var query = db.Horses
                .Include("Colour")
                .Include("Category")
                .Include("Gender")
                .Include("Country")
                .Include("Aquisition")
                .Select(x => new EditHorseVM
                {
                    Id = x.Id,
                    Name = x.Name,
                    DateOfBirth = x.DateOfBirth,
                    DamId = x.DamId,
                    SireId = x.SireId,
                    ColourId = x.ColourId,
                    CategoryId = x.CategoryId,
                    CountryId = x.CountryId,
                    GenderId = x.GenderId,
                    AcquisitionId = x.AcquisitionId
                }).FirstOrDefault(x => x.Id == id);

            return Ok(query);
        }

        
        // Create rating
        [HttpPost]
        public IHttpActionResult PostRating([FromBody] CreateRatingVM rating)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var newRating = new Rating()
            {
                Name = rating.Name,
                RatingDate = rating.RatingDate,
                ContactId = rating.ContactId,
                HorseId = rating.HorseId,
                Note = rating.Note
            };
            db.Ratings.Add(newRating);

            try
            {
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Created<Rating>(Request.RequestUri + newRating.Id.ToString(), newRating);
        }
        
        // Create a horse
        [HttpPost]
        public IHttpActionResult Post([FromBody] CreateHorseVM horse)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var horseToAdd = new Horse()
            {
                Name = horse.Name,
                DateOfBirth = horse.DateOfBirth,
                DamId = horse.DamId,
                SireId = horse.SireId,
                ColourId = horse.ColourId,
                CategoryId = horse.CategoryId,
                CountryId = horse.CountryId,
                GenderId = horse.GenderId,
                AcquisitionId = horse.AcquisitionId
            };
            db.Horses.Add(horseToAdd);

            try
            {
                var newHorse = db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return Created<Horse>(Request.RequestUri + horseToAdd.Id.ToString(), horseToAdd);

        }

        // Update horse
        [HttpPut] 
        public IHttpActionResult Put([FromBody] EditHorseVM horse)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var query = db.Horses.FirstOrDefault(x => x.Id == horse.Id);
            if (query == null)
            {
                throw new Exception("Horse does not exist.");
            }
            query.Id = horse.Id;
            query.Name = horse.Name;
            query.DateOfBirth = horse.DateOfBirth;
            query.DamId = horse.DamId;
            query.SireId = horse.SireId;
            query.ColourId = horse.ColourId;
            query.CategoryId = horse.CategoryId;
            query.CountryId = horse.CountryId;
            query.GenderId = horse.GenderId;
            query.AcquisitionId = horse.AcquisitionId;

            try
            {
                db.SaveChanges();

            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok();
        }


        // Delete horse
        public void Delete(int id)
        {
            Horse horse = db.Horses.Find(id);
            if(horse != null)
            {
                try
                {
                    db.Horses.Remove(horse);
                    db.SaveChanges();
                }
                catch (Exception ex)
                {
                    throw (ex);
                }
            }
        }
    }
}