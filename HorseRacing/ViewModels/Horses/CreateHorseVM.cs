using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using HorseRacing.Helpers;

namespace HorseRacing.ViewModels
{
    public class CreateHorseVM
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Please enter a name.")]
        [MinLength(2)]
        [MaxLength(50)]
        public string Name { get; set; }

        
        [Required(ErrorMessage = "Please enter a date of birth.")]
        [DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        [MinimumAge(2, ErrorMessage = "Minimum age is 2.")]
        [MaximumAge(10, ErrorMessage = "Maximum age is 10")]
        public DateTime DateOfBirth { get; set; }

        public Nullable<int> DamId { get; set; }

        public Nullable<int> SireId { get; set; }

        [Display(Name = "Colour")]
        [Required(ErrorMessage = "Please select a colour.")]
        public int ColourId { get; set; }

        [Required(ErrorMessage = "Please select a category.")]
        public int CategoryId { get; set; }

        public Nullable<int> CountryId { get; set; }


        [Required(ErrorMessage = "Please select a gender.")]
        public int GenderId { get; set; }

        public Nullable<int> AcquisitionId { get; set; }
    }
}