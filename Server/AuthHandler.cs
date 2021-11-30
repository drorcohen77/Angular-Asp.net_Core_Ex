using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Server
{
    public class BasicAuthenticationOptions : AuthenticationSchemeOptions {}
    public class AuthHandler : AuthenticationHandler<BasicAuthenticationOptions>
    {
        private readonly IAuthManager authManager;

        public AuthHandler(
            IOptionsMonitor<BasicAuthenticationOptions> options, 
            ILoggerFactory logger, 
            UrlEncoder encoder, 
            ISystemClock clock,
            IAuthManager authManager
            ) : base(options, logger, encoder, clock)
        {
            this.authManager = authManager;
        }

        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            if(!Request.Headers.ContainsKey("Authorization"))
                return AuthenticateResult.Fail("Unauthorized");

            string authorizationHeader = Request.Headers["Authorization"];
            if(string.IsNullOrEmpty(authorizationHeader))
                return AuthenticateResult.Fail("Unauthorized");

            string token = authorizationHeader;

            if(string.IsNullOrEmpty(token))
                return AuthenticateResult.Fail("Unauthorized");

            try
            {
                return ValidateToken(token);
            }
            catch(Exception ex)
            {
                return AuthenticateResult.Fail(ex.Message);
            }
        }

        private AuthenticateResult ValidateToken(string token)
        {
            var validateToken = authManager.Tokens.FirstOrDefault(t => t.Key == token);
            if(validateToken.Key == null)
            {
                return AuthenticateResult.Fail("Unauthorized");
            }

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name,validateToken.Value)
            }; 

            var identity = new ClaimsIdentity(claims, Scheme.Name);
            var principal = new GenericPrincipal(identity, null);
            var ticket = new AuthenticationTicket(principal, Scheme.Name);
            return AuthenticateResult.Success(ticket);
        }
        
    }
}