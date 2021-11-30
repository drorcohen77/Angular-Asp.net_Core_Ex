using System.Collections.Generic;
using System.Threading.Tasks;
using Server.Models;

namespace Server.Controllers
{
    public class FakeData
    {
        private readonly string company;

        public FakeData()
        {
            this.company = "";
        }

        //company A:
        public List<CompanyData> fetchCompAData() {
        
            List<CompanyData> fakeData_A = new List<CompanyData>()
            {
                new CompanyData() {month = "January",employees_number = 350},
                new CompanyData() {month = "February",employees_number = 450},
                new CompanyData() {month = "March",employees_number = 550},
                new CompanyData() {month = "April",employees_number = 650},
                new CompanyData() {month = "May",employees_number = 800}
            };
            return fakeData_A;
        }
        
        //company B:
        public List<CompanyData> fetchCompBData() {

            List<CompanyData> fakeData_B = new List<CompanyData>()
            {
                new CompanyData() {month = "January",employees_number = 400},
                new CompanyData() {month = "February",employees_number = 420},
                new CompanyData() {month = "March",employees_number = 600},
                new CompanyData() {month = "April",employees_number = 590},
                new CompanyData() {month = "May",employees_number = 660}
            };    
            return fakeData_B;
        }

        //company C:
        public List<CompanyData> fetchCompCData() {

            List<CompanyData> fakeData_C = new List<CompanyData>()
            {
                new CompanyData() {month = "January",employees_number = 400},
                new CompanyData() {month = "February",employees_number = 270},
                new CompanyData() {month = "March",employees_number = 620},
                new CompanyData() {month = "April",employees_number = 600},
                new CompanyData() {month = "May",employees_number = 820}
            };
            return fakeData_C;
        }

    }
}