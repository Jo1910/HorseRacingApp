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
    [DisableCors]
    public class DropDownController : ApiController
    {
        private readonly ApplicationContext db = new ApplicationContext();

        //// GET api/<controller>
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
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
        public IHttpActionResult GetAcqusitions()
        {
            var query = db.Acqusitions
                .Select(x => new DropDownDataVM
                {
                    Id = x.Id,
                    Name = x.Name
                }).ToList();
            return Ok(query);
        }

        // Get countries dropdown
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

        // POST api/<controller>
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}