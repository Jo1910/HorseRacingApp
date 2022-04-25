
namespace HorseRacing.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Gender")]
    public partial class Gender
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Please select a gender")]
        public string Name { get; set; }
    }
}
