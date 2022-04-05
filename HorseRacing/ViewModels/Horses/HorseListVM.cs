using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HorseRacing.ViewModels.Horses
{
    public class HorseListVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CountryName { get; set; }

        public string GenderName { get; set; }
    }
}