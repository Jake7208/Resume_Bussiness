namespace ResumeBackend
{
    public class SessionVariables
    {
        public const string SessionKeyUser = "SessionKeyUser";
        public const string SessionKeySessionId = "SessionKeySessionId";
    }

    public enum SessionKeyEnum
    {
        SessionKeyUser = 0,
        SessionKeySessionId = 1,
    }
}
