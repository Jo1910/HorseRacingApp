using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace HorseRacing.App_Start
{
    public class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();

            var cors = new EnableCorsAttribute(
                "https://localhost:44391,https://localhost:44366",
                "Origin, X_Requested-With, Content-Type, Accept, Authorization, Cache-Control, If-Modified-Since, Pragma",
                "GET, PUT, POST, DELETE, OPTIONS"
                );


            config.EnableCors(cors);

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }


            );
        }
    }
}