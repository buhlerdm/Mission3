using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3.Models
{
    public class CalculatorModel
    {
        // get and set variables of form
        [Required]
        [Range(0,100, ErrorMessage= "Please use values between 0 to 100")]
        public int Assignments { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Please use values between 0 to 100")]
        public int Group { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Please use values between 0 to 100")]
        public int Quizzes { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please use values between 0 to 100")]
        public int Exams { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please use values between 0 to 100")]
        public int INTEX { get; set; }
    }
}
