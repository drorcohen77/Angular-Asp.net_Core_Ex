using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class CompanyData
    {
        // [Key]
        // public string Guid { get; set; }
        [Required]
        public string month { get; set; }
        public int employees_number { get; set; }
    }
}