namespace HorseRacing.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Horse")]
    public class Horse
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public System.DateTime DateOfBirth { get; set; }
        public Nullable<int> DamId { get; set; }
        public Nullable<int> SireId { get; set; }
        public Nullable<int> ColourId { get; set; }
        public int CategoryId { get; set; }
        public int GenderId { get; set; }
        public int CountryId { get; set; }
        public Nullable<int> AcqusitionId { get; set; }

        [ForeignKey("CountryId")]
        public Country Country { get; set; }

        [ForeignKey("GenderId")]
        public Gender Gender { get; set; }
    }
}
