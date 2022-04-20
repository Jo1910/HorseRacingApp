using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace HorseRacing.ViewModels.Horses
{
    public class HorseListVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }

        [ForeignKey("DamId")]
        public string DamName { get; set; }

        [ForeignKey("SireId")]
        public string SireName { get; set; }

        [ForeignKey("ColourId")]
        public string ColourName { get; set; }

        [ForeignKey("CategoryId")]
        public string CategoryName { get; set; }

        [ForeignKey("GenderId")]
        public string GenderName { get; set; }

        [ForeignKey("CountryId")]
        public string CountryName { get; set; }

        [ForeignKey("AcquisitionId")]
        public string AcquisitionName { get; set; }
    }
}