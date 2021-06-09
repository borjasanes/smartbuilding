using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SmartBuilding.Infrastructure.Migrations
{
    public partial class PeriodLimits : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MaintenancePeriodDays",
                table: "Hvac",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProjectedLifePeriodYears",
                table: "Hvac",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MaintenancePeriodDays",
                table: "Hvac");

            migrationBuilder.DropColumn(
                name: "ProjectedLifePeriodYears",
                table: "Hvac");
        }
    }
}
