using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace HorseRacing.ViewModels.Horses
{
    public class EditHorseVM
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Please enter a name.")]
        public string Name { get; set; }

        [DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        [Required(ErrorMessage = "Please select a date of birth.")]
        public DateTime DateOfBirth { get; set; }

        public Nullable<int> DamId { get; set; }

        public Nullable<int> SireId { get; set; }

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