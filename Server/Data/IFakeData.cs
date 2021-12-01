using System.Collections.Generic;
using System.Threading.Tasks;
using Server.Models;

namespace Server.Data
{
    public interface IFakeData
    {
         IList<string> CompanyValidation { get; }
         Task<List<CompanyData>> fetchCompAData();
         Task<List<CompanyData>> fetchCompBData();
         Task<List<CompanyData>> fetchCompCData();
    }
}