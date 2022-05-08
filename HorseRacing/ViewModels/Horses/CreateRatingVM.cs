using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HorseRacing.ViewModels.Horses
{
    public class CreateRatingVM
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Please select a horse name.")]
        public double Name { get; set; }

        [Required(ErrorMessage = "Please enter a date.")]
        public DateTime RatingDate { get; set; }

        [Required(ErrorMessage = "Please select a contact name.")]
        public int ContactId { get; set; }
        public int HorseId { get; set; }
        public string Note { get; set; }
    }
}