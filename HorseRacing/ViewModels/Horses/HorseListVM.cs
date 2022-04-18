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
        public DateTime DateOfBirth { get; set; }
        public string DamName { get; set; }
        public string SireName { get; set; }
        public string ColourName { get; set; }
        public string CategoryName { get; set; }
        public string GenderName { get; set; }
        public string CountryName { get; set; }
        public string AcquisitionName { get; set; }
    }
}