using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Server.Models;

namespace Server.Controllers
{
    [Route("api")]
    [ApiController]
    public class Company_AController : ControllerBase
    {
        [HttpPost("company_a")]
        // public async Task<IActionResult> RegisterTrainer(authReqForData reqData)
        // {
        //     string user_name = authReqForData;
        //     var verifyTrainer = await this._trainerRepo.verifyTrainer(user_name);
            
        //     if(verifyTrainer == null )
        //     {
        //         var trainerModel = _mapper.Map<Trainer>(trainer);
        //         this._trainerRepo.registerTrainer(trainerModel);
        //         await this._trainerRepo.saveTrainerAsync();
        //         return StatusCode(201, "New Trainer has been created!" );
        //     }

        //     return BadRequest("There is already a Trainer exists with this user name");
        // }

        [HttpPost("company_a")]
        public async Task<IActionResult> FetchCompanyA_Data(authReqForData reqData)
        {
            string company_name = reqData.company_name;
            string Token = reqData.Token;

            var loginTrainer = Token;
            await this._trainerRepo.loginTrainer(user_name, password);
            
            // if(loginTrainer == null)
            // {
            //     return Unauthorized("Invalid User Name Or Password");
            // }

            // var loginRes = new TrainerLoginResDto();
            // loginRes.user_name = loginTrainer.user_name;
            // loginRes.Token = CreateJWT(loginTrainer);

            return Ok(reqData);
        }
    }
}


        //  public async Task<IActionResult> RegisterTrainer(TrainerRegisterDto trainer)
        // {
        //     string user_name = trainer.user_name;
        //     var verifyTrainer = await this._trainerRepo.verifyTrainer(user_name);
            
        //     if(verifyTrainer == null )
        //     {
        //         var trainerModel = _mapper.Map<Trainer>(trainer);
        //         this._trainerRepo.registerTrainer(trainerModel);
        //         await this._trainerRepo.saveTrainerAsync();
        //         return StatusCode(201, "New Trainer has been created!" );
        //     }

        //     return BadRequest("There is already a Trainer exists with this user name");
        // }

        // [HttpPost("login")]
        // public async Task<IActionResult> LoginTrainer(TrainerLoginReqDto trainerLogin)
        // {
        //     string user_name = trainerLogin.user_name;
        //     string password = trainerLogin.password;

        //     var loginTrainer = await this._trainerRepo.loginTrainer(user_name, password);
            
        //     if(loginTrainer == null)
        //     {
        //         return Unauthorized("Invalid User Name Or Password");
        //     }

        //     var loginRes = new TrainerLoginResDto();
        //     loginRes.user_name = loginTrainer.user_name;
        //     loginRes.Token = CreateJWT(loginTrainer);

        //     return Ok(_mapper.Map<TrainerLoginResDto>(loginRes));
        // }