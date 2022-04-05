namespace HorseRacing.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Colour")]
    public partial class Colour
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
