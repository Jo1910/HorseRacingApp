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

        // Get all genders
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

        // Get gender by id
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

        // Get gender to edit
        [HttpGet]
        public IHttpActionResult GetEdit(int? id)
        {
            var query = db.Genders 
                .Include("Sex")
                .Select(x => new CreateGenderVM
                {
                    Id = x.Id,
                    Name = x.Name,
                    SexId = x.Sex.Id
                }).FirstOrDefault(x => x.Id == id);
            if(query == null)
            {
                return NotFound();
            }
            return Ok(query);
        }

        
        // Create gender
        [HttpPost]
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

        // Update gender
        [HttpPut]
        public void Put(int id, [FromBody] CreateGenderVM gender)
        {
            var query = db.Genders.FirstOrDefault(x => x.Id == gender.Id);
            if(query == null)
            {
                throw new Exception("Gender does not exist.");
            }
            query.Id = gender.Id;
            query.Name = gender.Name;
            query.SexId = gender.SexId;

            try
            {
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete]
        public void Delete(int id)
        {
            Gender gender = db.Genders.Find(id);
            if(gender != null)
            {
                try
                {
                    db.Genders.Remove(gender);
                }
                catch (Exception ex)
                {
                    throw (ex);
                }
            }
        }
    }
}