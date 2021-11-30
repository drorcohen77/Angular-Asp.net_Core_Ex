using System.Collections.Generic;

namespace Server
{
    public class AuthManager : IAuthManager
    {
        private readonly List<string> _company = new List<string> 
        {"companyA","companyB","companyC"};

        private readonly IDictionary<string,string> tokens = new Dictionary<string,string>();
        
        public IDictionary<string,string> Tokens => tokens;
        public string Authenticate(string company)
        {
           foreach(string item in _company)
           {
               if(item != company)
                    return null;
           } 

            string Token = "1234";

            tokens.Add(Token, company);

            return Token;
        }
    }
}