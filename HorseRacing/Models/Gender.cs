
namespace HorseRacing.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Gender")]
    public partial class Gender
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public int SexId { get; set; }

        [ForeignKey("SexId")]
        public Sex Sex { get; set; }
    }
}

