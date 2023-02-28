using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Wallet.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Walletv2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FlowId",
                table: "Items",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Items_FlowId",
                table: "Items",
                column: "FlowId");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Flows_FlowId",
                table: "Items",
                column: "FlowId",
                principalTable: "Flows",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_Flows_FlowId",
                table: "Items");

            migrationBuilder.DropIndex(
                name: "IX_Items_FlowId",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "FlowId",
                table: "Items");
        }
    }
}
