using System;
using Microsoft.EntityFrameworkCore;
using SmartBuilding.Models;

namespace SmartBuilding.Infrastructure
{
    public class SmartBuildingDataContext : DbContext
    {
        public SmartBuildingDataContext(DbContextOptions<SmartBuildingDataContext> options)
            : base(options)
        {
        }

        public DbSet<Hvac> Hvac { get; set; }
    }

}
