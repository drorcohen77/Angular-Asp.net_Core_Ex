using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Server.Data;
using Server.Models;

namespace Server.Controllers
{
    [Route("api")]
    [ApiController]
    [AllowAnonymous]
    public class CompanyDataController : ControllerBase
    {
        private readonly IFakeData _DB;
        private readonly IAuthManager AuthenicationManager;

        public CompanyDataController(IFakeData DB, IAuthManager AuthManager)
        {
            this._DB = DB;
            this.AuthenicationManager = AuthManager;
        }

        [HttpPost("company_a")]
        public async Task<IActionResult> FetchCompanyA_Data(authReqForData reqData)
        {
            string company_name = reqData.company_name;

            var compAData = new ResForData();
            compAData.Token = AuthenticateReq(company_name);

            if(compAData.Token == null)
                return Unauthorized();

            if(!this._DB.CompanyValidation.Contains(company_name))
                return BadRequest(company_name +" Not Found As Requested!");
                
            compAData.CompanyData = await this._DB.fetchCompAData();

            return Ok(compAData);
        }

        [HttpPost("company_b")]
        public async Task<IActionResult> FetchCompanyB_Data(authReqForData reqData)
        {
            string company_name = reqData.company_name;

            var compBData = new ResForData();
            compBData.Token = AuthenticateReq(company_name);

            if(compBData.Token == null)
                return Unauthorized();

            if(!this._DB.CompanyValidation.Contains(company_name))
                return BadRequest("Not Found Company As Requested!");

            compBData.CompanyData = await this._DB.fetchCompBData();

            return Ok(compBData);
        }

        [HttpPost("company_c")]
        public async Task<IActionResult> FetchCompanyC_Data(authReqForData reqData)
        {
            string company_name = reqData.company_name;

            var compCData = new ResForData();
            compCData.Token = AuthenticateReq(company_name);

            if(compCData.Token == null)
                return Unauthorized();

            if(!this._DB.CompanyValidation.Contains(company_name))
                return BadRequest("Not Found Company As Requested!" );

            compCData.CompanyData = await this._DB.fetchCompCData();


            return Ok(compCData);
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
