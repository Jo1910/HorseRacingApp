using HorseRacing.Models;
using HorseRacing.ViewModels.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HorseRacing.Controllers
{
    public class AdminController : ApiController
    {

        private readonly ApplicationContext db = new ApplicationContext();
        // GET api/<controller>

        [HttpGet]
        public IHttpActionResult ShowGenders(int? pageNumber = 0)
        {
            var query = db.Horses
                        .Include("Gender")
                        .OrderBy(x => x.Name)
                        .Skip(10 * pageNumber ?? 0)
                        .Take(10)
                        .Select(x => new ShowGendersVM
                        {
                            GenderId = x.Gender.Id,
                            GenderName = x.Gender.Name,
                            Name = x.Name
                        }).ToList();
            return Ok(query);
        }
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
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