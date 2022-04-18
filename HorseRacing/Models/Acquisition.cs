namespace HorseRacing.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Acquisition")]
    public partial class Acquisition
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
