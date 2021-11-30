using System.Collections.Generic;

namespace Server
{
    public interface IAuthManager
    {
         string Authenticate(string company);
         IDictionary<string,string> Tokens { get; }
    }
}