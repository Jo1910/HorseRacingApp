using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace HorseRacing.Models
{
    [Table("Rating")]
    public class Rating
    {
        [Key]
        public int Id { get; set; }
        public double Name { get; set; }
        public System.DateTime RatingDate { get; set; }
        public string Note { get; set; }
        public int ContactId { get; set; }
        public int HorseId { get; set; }

        [ForeignKey("ContactId")]
        public Contact Contact { get; set; }

        [ForeignKey("HorseId")]
        public Horse Horse { get; set; }
    }
}