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
            var query = db.Genders
                        .Include("Sex")
                        .OrderBy(x => x.Name)
                        .Skip(10 * pageNumber ?? 0)
                        .Take(10)
                        .Select(x => new ShowGendersVM
                        {
                            Id = x.Id,
                            GenderName = x.Name,
                            SexName = x.Sex.Name
                        }).ToList();
            return Ok(query);
        }

        [HttpGet]
        public IHttpActionResult GetGender(int? id)
        {
            var query = db.Genders
                .Include("Sex")
                .Select(x => new ShowGendersVM
                {
                    Id = x.Id,
                    GenderName = x.Name,
                    SexName = x.Sex.Name
                }).FirstOrDefault(x => x.Id == id);
            if(query == null)
            {
                return NotFound();
            }

            return Ok(query);
        }

        
        // POST api/<controller>
        public void Post([FromBody] CreateGenderVM gender)
        {
            var newGender = new Gender()
            {
                Id = gender.Id,
                Name = gender.Name,
                SexId = gender.SexId
            };
            db.Genders.Add(newGender);
            try
            {
                db.SaveChanges();
            }
            catch(Exception ex)
            {
                throw ex;
            }
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