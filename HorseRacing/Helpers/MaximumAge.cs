using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HorseRacing.Helpers
{
    public class MaximumAge : ValidationAttribute
    {
        int _maxAge;

        public MaximumAge(int maxAge)
        {
            _maxAge = maxAge;
        }

        public override bool IsValid(object value)
        {
            DateTime date;
            if (DateTime.TryParse(value.ToString(), out date))
            {
                return date.AddYears(_maxAge) > DateTime.Now;
            }
            return false;
        }

    }
}