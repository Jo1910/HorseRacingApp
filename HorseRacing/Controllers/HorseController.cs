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
    //[EnableCors(origins:"*", headers:"*", methods:"*")]
    [DisableCors]
    public class HorseController : ApiController
    {
        private readonly ApplicationContext db = new ApplicationContext();
        // GET api/<controller>
        [HttpGet]
        public IHttpActionResult GetAll(int ? pageNumber = 0)
        {
            var query = db.Horses
                .Include("Country")
                .Include("Gender")
                .OrderBy(x => x.Name)
                .Skip(10 * pageNumber ?? 0)
                .Take(10)
                .Select(x => new HorseListVM
                {
                    Id = x.Id,
                    Name = x.Name,
                    CountryName = x.Country.Name,
                    GenderName = x.Gender.Name
                })
                .ToList();
           
            return Ok(query);
        }

        // GET api/<controller>/5
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            var query = db.Horses
                .Include("Country")
                .Include("Gender")
                .Where(x => x.Id == id)
                .Select(x => new HorseListVM
                {
                    Id = x.Id,
                    Name = x.Name,
                    CountryName = x.Country.Name,
                    GenderName = x.Gender.Name
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