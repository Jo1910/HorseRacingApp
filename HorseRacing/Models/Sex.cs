using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace HorseRacing.Models
{
    [Table("Sex")]
    public class Sex
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}