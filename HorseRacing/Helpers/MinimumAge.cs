using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HorseRacing.Helpers
{
    public class MinimumAge: ValidationAttribute
    {
        int _minAge;

        public MinimumAge(int minAge)
        {
            _minAge = minAge;
        }

        public override bool IsValid(object value)
        {
            DateTime date;
            if(DateTime.TryParse(value.ToString(), out date))
            {
                return date.AddYears(_minAge) < DateTime.Now;
            }
            return false;
        }
    }
    
}