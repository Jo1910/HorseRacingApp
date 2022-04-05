using HorseRacing.Models;
using HorseRacing.ViewModels.Horses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HorseRacing.Controllers
{
    //[RoutePrefix("api/horses")]
    public class HorseController : ApiController
    {
        private readonly ApplicationContext db = new ApplicationContext();
        // GET api/<controller>
        [Route("~/api/GetAll")]
        [HttpGet]
        public IHttpActionResult GetAll(int ? pageNumber = 0)
        {
            var query = db.Horses
                .Include("Country")
                .OrderBy(x => x.Name)
                .Skip(10 * pageNumber ?? 0)
                .Take(10)
                .Select(x => new HorseListVM
                {
                    Id = x.Id,
                    Name = x.Name,
                    CountryName = x.Country.Name
                })
                .ToList();
           
            return Ok(query);
        }

        // GET api/<controller>/5
        [Route("~/api/Get/id")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            var query = db.Horses
                .Include("Country")
                .Where(x => x.Id == id)
                .Select(x => new HorseListVM
                {
                    Id = x.Id,
                    Name = x.Name,
                    CountryName = x.Country.Name
                }).FirstOrDefault();

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