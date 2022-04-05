namespace HorseRacing.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Acqusition")]
    public partial class Acqusition
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
