namespace HorseRacing.Models
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
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

        public int ColourId { get; set; }
        public int CategoryId { get; set; }
        public int GenderId { get; set; }
        public Nullable<int> CountryId { get; set; }
        public Nullable<int> AcquisitionId { get; set; }

        public int SexId { get; set; }

        [ForeignKey("DamId")]
        public Horse Dam { get;set; }


        [ForeignKey("SireId")]
        public Horse Sire { get; set; }


        [ForeignKey("ColourId")]
        public Colour Colour { get; set; }

        [ForeignKey("CategoryId")]
        public Category Category { get; set; }

        [ForeignKey("GenderId")]
        public Gender Gender { get; set; }

        [ForeignKey("CountryId")]
        public Country Country { get; set; }

        [ForeignKey("AcquisitionId")]
        public Acquisition Acquisition { get; set; }

        [ForeignKey("SexId")]
        public Sex Sex { get; set; }
    
    }
}
