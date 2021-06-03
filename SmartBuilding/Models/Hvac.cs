using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartBuilding.Models
{
    public class Hvac
    {
        public Guid Id { get; set; }
        public DateTime DateTime { get; set; } = DateTime.UtcNow;
        public int NextMaintenanceDays { get; set; }
        public int ProjectedLifeYears { get; set; }
    }
}
