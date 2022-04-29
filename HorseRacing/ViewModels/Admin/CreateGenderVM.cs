using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HorseRacing.ViewModels.Admin
{
    public class CreateGenderVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int SexId { get; set; }
    }
}