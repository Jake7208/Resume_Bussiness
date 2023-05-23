using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

namespace ResumeBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SessionController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<string> GetSessionInfo()
        {
            List<string> sessionInfo = new List<string>();

            if(string.IsNullOrWhiteSpace(HttpContext.Session.GetString(SessionVariables.SessionKeyUser)))
            {
                HttpContext.Session.SetString(SessionKeyEnum.SessionKeyUser.ToString(), "Current User");
                HttpContext.Session.SetString(SessionKeyEnum.SessionKeySessionId.ToString(), Guid.NewGuid().ToString());
            }

            var user = HttpContext.Session.GetString(SessionVariables.SessionKeyUser);
            var SessionId = HttpContext.Session.GetString (SessionVariables.SessionKeySessionId);

            sessionInfo.Add(user);
            sessionInfo.Add(SessionId);
            
            return sessionInfo;
        }
       

    }
}
