namespace HorseRacing.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Country")]
    public partial class Country
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
