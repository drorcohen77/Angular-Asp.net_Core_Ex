using System.Collections.Generic;
using System.Threading.Tasks;
using Server.Data;
using Server.Models;

namespace Server.Controllers
{
    public class FakeData : IFakeData
    {
        public FakeData(){}

        private readonly IList<string> companyValidation = 
            new List<string> {"companyA","companyB","companyC"};
        
        public IList<string> CompanyValidation => companyValidation;

        //company A:
        public Task<List<CompanyData>> fetchCompAData() {

            List<CompanyData> fakeData_A = new List<CompanyData>()
            {
                new CompanyData() {month = "January",employees_number = 150},
                new CompanyData() {month = "February",employees_number = 250},
                new CompanyData() {month = "March",employees_number = 450},
                new CompanyData() {month = "April",employees_number = 350},
                new CompanyData() {month = "May",employees_number = 400},
                new CompanyData() {month = "June",employees_number = 490},
                new CompanyData() {month = "July",employees_number = 450},
                new CompanyData() {month = "August",employees_number = 550},
                new CompanyData() {month = "September",employees_number = 650},
                new CompanyData() {month = "October",employees_number = 800},
                new CompanyData() {month = "November",employees_number = 700},
                new CompanyData() {month = "December",employees_number = 550}
            };
            return Task.FromResult<List<CompanyData>>(fakeData_A);
        }
        
        //company B:
        public Task<List<CompanyData>> fetchCompBData() {

            List<CompanyData> fakeData_B = new List<CompanyData>()
            {
                new CompanyData() {month = "January",employees_number = 400},
                new CompanyData() {month = "February",employees_number = 420},
                new CompanyData() {month = "March",employees_number = 600},
                new CompanyData() {month = "April",employees_number = 590},
                new CompanyData() {month = "May",employees_number = 660},
                new CompanyData() {month = "June",employees_number = 400},
                new CompanyData() {month = "July",employees_number = 420},
                new CompanyData() {month = "August",employees_number = 600},
                new CompanyData() {month = "September",employees_number = 590},
                new CompanyData() {month = "October",employees_number = 660},
                new CompanyData() {month = "November",employees_number = 590},
                new CompanyData() {month = "December",employees_number = 660}
            };    
            return Task.FromResult<List<CompanyData>>(fakeData_B);
        }

        //company C:
        public Task<List<CompanyData>> fetchCompCData() {

            List<CompanyData> fakeData_C = new List<CompanyData>()
            {
                new CompanyData() {month = "January",employees_number = 400},
                new CompanyData() {month = "February",employees_number = 270},
                new CompanyData() {month = "March",employees_number = 620},
                new CompanyData() {month = "April",employees_number = 600},
                new CompanyData() {month = "May",employees_number = 820},
                new CompanyData() {month = "June",employees_number = 400},
                new CompanyData() {month = "July",employees_number = 270},
                new CompanyData() {month = "August",employees_number = 620},
                new CompanyData() {month = "September",employees_number = 600},
                new CompanyData() {month = "October",employees_number = 820},
                new CompanyData() {month = "November",employees_number = 600},
                new CompanyData() {month = "December",employees_number = 820}
            };
            return Task.FromResult<List<CompanyData>>(fakeData_C);
        }
    }
}