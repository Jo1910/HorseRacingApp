
namespace HorseRacing.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Gender")]
    public partial class Gender
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
