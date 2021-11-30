using System.Collections.Generic;
using Server.Models;

namespace Server.Controllers
{
    public class FakeData
    {
        public FakeData()
        {
            
        }
        //company A:
        public readonly List<CompanyData> fakeData_A = new List<CompanyData>()
        {
            new CompanyData() {month = "January",employees_number = 350},
            new CompanyData() {month = "February",employees_number = 450},
            new CompanyData() {month = "March",employees_number = 550},
            new CompanyData() {month = "April",employees_number = 650},
            new CompanyData() {month = "May",employees_number = 800},
        };
    
        //company B:
        public readonly List<CompanyData> fakeData_B = new List<CompanyData>()
        {
            new CompanyData() {month = "January",employees_number = 400},
            new CompanyData() {month = "February",employees_number = 420},
            new CompanyData() {month = "March",employees_number = 600},
            new CompanyData() {month = "April",employees_number = 590},
            new CompanyData() {month = "May",employees_number = 660},
        };

        //company C:
        public readonly List<CompanyData> fakData = new List<CompanyData>()
        {
            new CompanyData() {month = "January",employees_number = 400},
            new CompanyData() {month = "February",employees_number = 270},
            new CompanyData() {month = "March",employees_number = 620},
            new CompanyData() {month = "April",employees_number = 600},
            new CompanyData() {month = "May",employees_number = 820},
        };

    }
}