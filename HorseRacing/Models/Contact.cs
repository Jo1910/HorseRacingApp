using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace HorseRacing.Models
{
    [Table("Contact")]
    public class Contact
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int ContactTypeId { get; set; }

        [ForeignKey("ContactTypeId")]
        public ContactType ContactType { get; set; }
    }
}