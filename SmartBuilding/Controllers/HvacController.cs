using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Linq;
using System.Threading.Tasks;
using SmartBuilding.Infrastructure;
using SmartBuilding.Models;
using Microsoft.EntityFrameworkCore;

namespace SmartBuilding.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HvacController : ControllerBase
    {
        private readonly ILogger<HvacController> _logger;
        private readonly SmartBuildingDataContext _dataContext;

        public HvacController(ILogger<HvacController> logger, SmartBuildingDataContext dataContext)
        {
            _logger = logger;
            _dataContext = dataContext;
        }

        [HttpGet]
        public async Task<Hvac> Get()
        {
            return await _dataContext.Hvac.OrderBy(x => x.DateTime).LastOrDefaultAsync();
        }
    }
}
