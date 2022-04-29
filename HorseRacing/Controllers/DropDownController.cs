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
    //[DisableCors]
    [EnableCorsAttribute("*", "*", "*")]

    public class DropDownController : ApiController
    {
        private readonly ApplicationContext db = new ApplicationContext();


        // Get sires dropdown
        [HttpGet]
        public IHttpActionResult GetSires()
        {
            var query = db.Horses
                .Include("Gender")
                .Where(x => x.Gender.SexId == 1)
                .OrderBy(x => x.Name)
                .Select(x => new DropDownDataVM
                {
                    Id = x.Id,
                    Name = x.Name,
                }).ToList();
            return Ok(query);
        }


        // Get dames dropdown
        [HttpGet]
        public IHttpActionResult GetDams()
        {
            var query = db.Horses
                .Include("Gender")
                .Where(x => x.Gender.SexId == 2)
                .OrderBy(x => x.Name)
                .Select(x => new DropDownDataVM
                {
                    Id = x.Id,
                    Name = x.Name
                }).ToList();
            return Ok(query);
        }


        // Get colours dropdown
        [HttpGet]
        public IHttpActionResult GetColours()
        {
            var query = db.Colours
                .Select(x => new DropDownDataVM
                {
                    Id = x.Id,
                    Name = x.Name
                }).ToList();
            return Ok(query);
        }


        // Get categories dropdown
        [HttpGet]
        public IHttpActionResult GetCategories()
        {
            var query = db.Categories
                .Select(x => new DropDownDataVM
                {
                    Id = x.Id,
                    Name = x.Name
                }).ToList();
            return Ok(query);
        }


        // Get genders dropdown
        [HttpGet]
        public IHttpActionResult GetGenders()
        {
            var query = db.Genders
                .Select(x => new DropDownDataVM
                {
                    Id = x.Id,
                    Name = x.Name
                }).ToList();
            return Ok(query);
        }


        // Get acqusitions dropdown
        [HttpGet]
        public IHttpActionResult GetAcquisitions()
        {
            var query = db.Acquisitions
                .Select(x => new DropDownDataVM
                {
                    Id = x.Id,
                    Name = x.Name
                }).ToList();
            return Ok(query);
        }


        // Get countries dropdown
        [HttpGet]
        public IHttpActionResult GetCountries()
        {
            var query = db.Countries
                .Select(x => new DropDownDataVM
                {
                    Id = x.Id,
                    Name = x.Name
                }).ToList();
            return Ok(query);
        }


        [HttpGet]
        public IHttpActionResult GetSexes()
        {
            var query = db.Sexes
                .Select(x => new DropDownDataVM
                {
                    Id = x.Id,
                    Name = x.Name
                }).ToList();
            return Ok(query);
        }
    }
}