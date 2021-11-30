using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Server.Models;

namespace Server.Controllers
{
    [Route("api")]
    [ApiController]
    [AllowAnonymous]
    public class Company_AController : ControllerBase
    {
        private readonly FakeData _DB;
        private readonly IAuthManager AuthenicationManager;

        public Company_AController(FakeData DB, IAuthManager AuthManager)
        {
            this._DB = DB;
            this.AuthenicationManager = AuthManager;
        }

        [HttpPost("company_a")]
        public async Task<IActionResult> FetchCompanyA_Data(authReqForData reqData)
        {
            string company_name = reqData.company_name;

            var compAData = new ResForData();
            compAData.CompanyData = this._DB.fetchCompAData();
            compAData.Token = AuthenticateReq(company_name);

            return Ok(compAData);
        }

        [HttpPost("company_b")]
        public async Task<IActionResult> FetchCompanyB_Data(authReqForData reqData)
        {
            string company_name = reqData.company_name;

            var compAData = new ResForData();
            compAData.CompanyData = await this._DB.fetchCompBData();
            compAData.Token = AuthenticateReq(company_name);

            return Ok(compAData);
        }

        [HttpPost("company_c")]
        public async Task<IActionResult> FetchCompanyC_Data(authReqForData reqData)
        {
            string company_name = reqData.company_name;

            var compAData = new ResForData();
            compAData.CompanyData = this._DB.fetchCompCData();
            compAData.Token = AuthenticateReq(company_name);

            return Ok(compAData);
        }

        public string AuthenticateReq(string company_name)
        {
            var token = this.AuthenicationManager.Authenticate(company_name);

            if(token == null)
                return "Unauthorized";

            return token;
        }
    }
}
