using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HorseRacing.ViewModels.Horses
{
    public class GetRatingVM
    {
        public int Id { get; set; }
        public double Name { get; set; }
        public DateTime RatingDate { get; set; }
        public string ContactName { get; set; }

        public int HorseId { get; set; }
        public string Note { get; set; }
    }
}